const express = require('express')
const fs = require('fs');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;


var db;
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
    if (err) throw err;
    db = client.db('snmrestoration');
    console.log('connected to db: ' + db.databaseName);
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST,DELETE');
    next();
});

app.listen(port, () => console.log(`SNM Restoration API listening on port ${port}!`))

//Route path: /processLogs/:jobId/
//Request URL: http://localhost:3000/api/v1/processLogs/25622
//req.params: { "jobId": "25622"}
app.get('/api/v1/processLogs/:jobId', (req, res) => {
    try {
        var jobId = Number(req.params.jobId);
        console.log('GET processLogs, jobID:' + jobId);
        _getRestorationProcessLog(jobId, function (data) {
            //console.log('get restoration complete');
            if (data) {
                console.log(data);
                var processLogItems = data.items;
                response = _wrapDBJson(processLogItems, "processLog");
                res.send(response)
            }
            else {
                response = _wrapDBJson([], "processLog");
                res.send(response)
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(404);
        res.send('Proccess Log Not Found');
    }
});

//Route path: /orderedParts/:jobId/
//Request URL: http://localhost:3000/api/v1/orderedParts/25622
//req.params: { "jobId": "25622"}
app.get('/api/v1/orderedParts/:jobId', (req, res) => {
    try {
        var jobId = Number(req.params.jobId);
        console.log('GET orderedParts, jobID:' + jobId);
        _getRestorationOrderedParts(jobId, function (data) {
            //console.log('get ordered parts complete');
            if (data) {
                console.log(data);
                var processLogItems = data.items;
                response = _wrapDBJson(processLogItems, "orderedParts");
                res.send(response)
            }
            else {
                response = _wrapDBJson([], "orderedParts");
                res.send(response)
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(404);
        res.send('Ordered Parts Log Not Found');
    }
});

//Route path: /restorations/:jobId/
//Request URL: http://localhost:3000/api/v1/restorations/25622
//req.params: { "restorationId": "2"}
app.get('/api/v1/restorations/:jobId', (req, res) => {
    try {
        var jobId = Number(req.params.jobId);
        console.log('GET restorations, jobID:' + jobId);
        _getRestorationData(jobId, function (data) {
            //console.log('get restoration complete');
            if (data) {
                // console.log(data);
                var restorationResponse = _createRestoreResponseFromRestoreData(data);
                res.send(restorationResponse)
            }
            else {
                res.status(404);
                res.send('Restoration Not Found');
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(404);
        res.send('Restoration Not Found');
    }
});

//Route path: /restorations/:jobId/
//Request URL: POST http://localhost:3000/api/v1/restorations
//req.params: 
app.post('/api/v1/restorations', function (req, res) {
    var restoration = req.body;
    console.log('POST restoration');
    console.log(restoration);
    try {
        _addRestoration(restoration, function (partAdded) {
            if (partAdded) {
                console.log('post restoration, response:ADDED');
                res.json({ result: "ADDED" });
            }
            else {
                console.log('post restoration, response:UPDATED');
                res.json({ result: "UPDATED" });
            }
        });
    }
    catch (err) {
        console.log(err);
        console.log('post restoration, response:ERROR');
        res.status(400);
        res.json({ result: "ERROR" });
    }
});


//Route path: /restorations/:jobId/parts/
//Request URL: POST http://localhost:3000/api/v1/restorations/25266/parts
//req.params: 
app.post('/api/v1/restorations/:jobId/parts', function (req, res) {
    var part = req.body;
    var jobId = Number(req.params.jobId);
    console.log('POST restorations/part, jobId: ' + jobId);
    console.log(part);
    try {
        part.part = part.part.toLowerCase();
        part.component = part.component.toLowerCase();
        part.description = part.description.toLowerCase();
        part.colour = part.colour.toLowerCase();
        _updateIfExistsPartForRestoration(jobId, part, function (partUpdated) {
            if (partUpdated) {
                console.log('post parts, response: UPDATED');
                res.json({ result: "UPDATED" });
            } else {
                // add part
                _addPartForRestoration(jobId, part, function (partAdded) {
                    if (partAdded) {
                        _addPartIfNotExist(part);
                        console.log('post parts, response:ADDED');
                        res.json({ result: "ADDED" });
                    } else {
                        res.json({ result: "UKNOWN" });
                    }
                });
            }
        });
    }
    catch (err) {
        console.log(err);
        console.log('post parts, response:ERROR');
        res.status(400);
        res.json({ result: "ERROR" });
    }
});

//Route path: /processLogs/25266/logItem
//Request URL: POST http://localhost:3000/api/v1/processLogs/25266/logItem
//req.params: 
app.post('/api/v1/processLogs/:jobId/logItem', function (req, res) {
    var log = req.body;
    var jobId = Number(req.params.jobId);
    console.log('POST processLogs/logItem, jobId: ' + jobId);
    //console.log(log);
    try {
        _addProcessLogItemForRestoration(jobId, log, function (logAdded) {
            if (logAdded) {
                //console.log('post processLog, response: ADDED');
                res.json({ result: "ADDED" });
            } else {
                res.json({ result: "UKNOWN" });
            }
        });
    }
    catch (err) {
        console.log(err);
        console.log('post process log, response:ERROR');
        res.status(400);
        res.json({ result: "ERROR" });
    }
});

//Route path: /orderedParts/25266/orderedPart
//Request URL: POST http://localhost:3000/api/v1/orderedParts/25266/orderedPart
//req.params: 
app.post('/api/v1/orderedParts/:jobId/orderedPart', function (req, res) {
    var orderedPart = req.body;
    var jobId = Number(req.params.jobId);
    console.log('POST orderedParts/orderedPart, jobId: ' + jobId);
    //console.log(log);
    try {
        _addOrderedPartForRestoration(jobId, orderedPart.log, function (logAdded) {
            if (logAdded) {
                //console.log('post orderedPart, response: ADDED');
                res.json({ result: "ADDED" });
            } else {
                res.json({ result: "UKNOWN" });
            }
        });
    }
    catch (err) {
        console.log(err);
        console.log('post ordered part, response:ERROR');
        res.status(400);
        res.json({ result: "ERROR" });
    }
});

//Route path: /orderedParts/25266/orderedPart
//Request URL: PATCH http://localhost:3000/api/v1/orderedParts/25266/orderedPart
//req.params: 
app.patch('/api/v1/orderedParts/:jobId/orderedPart', function (req, res) {
    var log = req.body;
    var jobId = Number(req.params.jobId);   
    var patch = req.body;
    var orderedPartId = patch.id;
    var state = Number(patch.state);
    console.log('PATCH orderedParts/orderedPart, jobId: ' + jobId+', partId:' +orderedPartId+', state:' +state);
    //console.log(log);
    try {
        _updateOrderedPartForRestoration(jobId, orderedPartId, state, function (orderedPartUpdated) {
            if (orderedPartUpdated) {
                res.json({ result: "UPDATED" });
            } else {
                res.json({ result: "UKNOWN" });
            }
        });
    }
    catch (err) {
        console.log(err);
        console.log('patch ordered part, response:ERROR');
        res.status(400);
        res.json({ result: "ERROR" });
    }
});

app.get('/api/v1/restorationDetails', (req, res) => {
    console.log('GET restorationDetails');
    _getRestorationDetails(function (data) {
        //console.log('get restoration complete');
        if (data) {
            //console.log(data);
            var details = data.map(r => _createRestoreDetailFromRestore(r));
            var response = _wrapDBJson(details, 'restorations');
            res.send(response);
        }
    });
});

app.get('/api/v1/components', (req, res) => {
    console.log('GET components');
    _getComponents(function (data) {
        var response = _wrapDBJson(data, 'components');
        res.send(response);
    });
});

app.get('/api/v1/parts', (req, res) => {
    console.log('GET parts');
    _getParts(function (data) {
        var response = _wrapDBJson(data, 'parts');
        res.send(response);
    });
});

app.get('/api/v1/colours', (req, res) => {
    console.log('GET colours');
    _getColours(function (data) {
        var response = _wrapDBJson(data, 'colours');
        res.send(response);
    });
});

app.get('/api/v1/partDescriptions', (req, res) => {
    _getPartDescriptions(function (data) {
        console.log('GET partDescriptions');
        var response = _wrapDBJson(data, 'descriptions');
        res.send(response);
    });
});

// ---------------------------------------------------------------------

function _createRestoreResponseFromRestoreData(dataR) {
    //console.log(dataR);
    var restoration = _createRestoreDetailFromRestore(dataR);
    restoration.parts = dataR.parts;
    response = _wrapDBJson(restoration, "restoration");
    //console.log(response);
    return response;
}

function _createRestoreDetailFromRestore(dataR) {
    //console.log(dataR);
    return {
        id: dataR._id, jobId: dataR.jobid, customer: dataR.customer, notes: dataR.notes, state: dataR.state,
        bike: dataR.bike
    };

}

function _getRestorationData(jobId, onComplete) {
    // console.log(jobId);
    // console.log(typeof jobId);
    db.collection('restorations').findOne({ jobid: jobId }, function (err, result) {
        if (err) console.log(err);
        // console.log(result);
        onComplete(result);
    })
}

function _getRestorationProcessLog(jobId, onComplete) {
    db.collection('processlogs').findOne({ jobid: jobId }, function (err, result) {
        if (err) console.log(err);
        onComplete(result);
    })
}

function _getRestorationOrderedParts(jobId, onComplete) {
    db.collection('orderedparts').findOne({ jobid: jobId }, function (err, result) {
        if (err) console.log(err);
        onComplete(result);
    })
}

function _addPartIfNotExist(part) {
    // add part / component / desc / colour if don't already exist.
    _addByNameAndTypeIfNotExist('components', part.component, part.type);
    _addByNameIfNotExist('parts', part.part);
    _addByNameIfNotExist('colours', part.colour);
    _addByNameIfNotExist('partdescriptions', part.description);
}

function _addByNameIfNotExist(collection, nameToFind) {
    db.collection(collection).findOneAndUpdate(
        { "name": nameToFind }, // filter  
        { $set: { "name": nameToFind } }, // update
        { upsert: true }, // options
        function (err, result) {
            //console.log(result);
            var added = !result.lastErrorObject.updatedExisting;
            console.log('added new, ' + collection + ' with name: ' + nameToFind + ': ' + added);
            if (err) {
                console.log(err);
            }
        });
}

function _addByNameAndTypeIfNotExist(collection, nameToFind, componentType) {
    db.collection(collection).findOneAndUpdate(
        { "name": nameToFind }, // filter  
        { $set: { "name": nameToFind, "type": componentType } }, // update
        { upsert: true }, // options
        function (err, result) {
            //console.log(result);
            var added = !result.lastErrorObject.updatedExisting;
            console.log('added new, ' + collection + ' with name: ' + nameToFind + ', with type: ' + componentType + ': ' + added);
            if (err) {
                console.log(err);
            }
        });
}

function _addRestoration(restoration, onComplete) {
    // add restoration
    //console.log('in add restoration');
    //console.log(restoration);
    db.collection('restorations').replaceOne(
        { "jobid": restoration.jobId }, // filter  
        {
            "jobid": restoration.jobId,
            "customer": restoration.customer,
            "notes": restoration.notes,
            "bike": {
                "make": restoration.bike.make,
                "model": restoration.bike.model,
                "year": restoration.bike.year,
                "image": restoration.bike.image,
            },
            "parts": [],
            "state": 0
        }, // update
        { upsert: true }, // options
        function (err, result) {
            // console.log('db result');
            // console.log(result);
            var added = false;
            if (result.upsertedCount === 1) {
                added = true;
            }
            console.log('add restoration:' + added);
            onComplete(added);
        }
    );
}

function _addPartForRestoration(jobId, part, onComplete) {
    // add part to restoration
    //console.log('in add part for restoration');
    //console.log(part);
    part._id = new ObjectID();
    db.collection('restorations').
        updateOne(
            { "jobid": jobId },
            { $push: { "parts": part } },
            function (err, result) {
                //console.log('db result');
                // console.log(result);
                var added = false;
                if (result.modifiedCount == 1) {
                    added = true;
                }
                console.log('add part to restoration:' + added);
                onComplete(added);
            }
        );
}

function _addProcessLogItemForRestoration(jobId, logItem, onComplete) {
    var logItem = { date: Date.now(), log: logItem.log };

    db.collection('processlogs').updateOne(
        { "jobid": jobId },
        { $push: { "items": logItem } },
        { upsert: true },
        function (err, result) {
            //console.log(result);
            var added = false;
            if (result.modifiedCount === 1 || result.upsertedCount === 1) {
                added = true;
            }
            //console.log('added log Item to restoration:' + added);
            onComplete(added);
        }
    );
}

function _addOrderedPartForRestoration(jobId, desc, onComplete) {
    var item = { id: new ObjectID(), date: Date.now(), log: desc, state: 1 };

    db.collection('orderedparts').updateOne(
        { "jobid": jobId },
        { $push: { "items": item } },
        { upsert: true },
        function (err, result) {
            //console.log(result);
            var added = false;
            if (result.modifiedCount === 1 || result.upsertedCount === 1) {
                added = true;
            }
            //console.log('added Missing Item to restoration:' + added);
            onComplete(added);
        }
    );
}

function _updateOrderedPartForRestoration(jobId,  orderedPartId, state, onComplete) {
    db.collection('orderedparts').
    findOneAndUpdate(
        {
            "jobid": jobId,
            "items": {
                $elemMatch: {
                    "id": ObjectID(orderedPartId)
                }
            }
        },
        {    // Update
            $set: { "items.$.state": state, "items.$.date": Date.now() }
        },
        {
            projection: { "jobid": 1, "items.$": 1 }
        }
        , function (err, result) {
            //
            //console.log('db result');
            // console.log(result);
            // if result.value has something - it found matching record
            // if lasteErrorObject.updatedExisting : true - it updated the record
            // if result.ok : 1 = no error.
            var updated = false;
            if (result.ok === 1 && result.lastErrorObject.updatedExisting && result.value) {
                updated = true;
            }
            console.log('found and updated:' + updated);
            onComplete(updated);
        });
}

function _updateIfExistsPartForRestoration(jobId, part, onComplete) {
    //console.log('in get part id for restoratin part');
    //console.log(jobId);
    //console.log(part);
    db.collection('restorations').
        findOneAndUpdate(
            {
                "jobid": jobId,
                "parts": {
                    $elemMatch: {
                        "component": part.component,
                        "part": part.part,
                        "type": part.type,
                        "description": part.description,
                        "colour": part.colour,
                        "sent": part.sent
                    }
                }
            },
            {    // Update
                $inc: { "parts.$.quantity": part.quantity }
            },
            {
                projection: { "jobid": 1, "parts.$": 1 }
            }
            , function (err, result) {
                //
                //console.log('db result');
                // console.log(result);
                // if result.value has something - it found matching record
                // if lasteErrorObject.updatedExisting : true - it updated the record
                // if result.ok : 1 = no error.
                var updated = false;
                if (result.ok === 1 && result.lastErrorObject.updatedExisting && result.value) {
                    updated = true;
                }
                console.log('found and updated:' + updated);
                onComplete(updated);
            });
}


function _getComponents(onComplete) {
    db.collection('components').find().toArray(function (err, result) {
        if (err) console.log(err);
        onComplete(result);
    })
    // fs.readFile('./data/components_data.json', function (err, data) {
    //     onComplete(JSON.parse(data));
    // });
    //return db.components.find( {} );
}

function _getParts(onComplete) {
    db.collection('parts').find().toArray(function (err, result) {
        if (err) console.log(err);
        onComplete(result);
    })
    // fs.readFile('./data/parts_data.json', function (err, data) {
    //     onComplete(JSON.parse(data));
    // });

    //return db.parts.find( {} );

}

function _getColours(onComplete) {
    db.collection('colours').find().toArray(function (err, result) {
        if (err) console.log(err);
        onComplete(result);
    })

    // fs.readFile('./data/colours_data.json', function (err, data) {
    //     coloursCallback( JSON.parse(data));
    // });
}

function _getPartDescriptions(onComplete) {
    db.collection('partdescriptions').find().toArray(function (err, result) {
        if (err) console.log(err);
        onComplete(result);
    })
}

function _getRestorationDetails(onComplete) {
    db.collection('restorations').find(
        {}, // find all
        { projection: { parts: 0 } }) // without parts
        .toArray(
            function (err, result) {
                if (err) console.log(err);
                onComplete(result);
            })
}


function _wrapDBJson(data, wrapper) {
    var json = JSON.stringify(data);
    var wrapped = '{"' + wrapper + '":' + json + '}';
    //console.log(wrapped);
    return wrapped;
}