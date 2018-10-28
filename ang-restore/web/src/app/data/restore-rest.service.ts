import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, shareReplay, find, filter, flatMap } from 'rxjs/operators';
import { BikeComponent } from '../shared/model/restore-parts/bike-component';
import { PartColour } from '../shared/model/restore-parts/part-colour';
import { PartDescription } from '../shared/model/restore-parts/part-description';
import { Part } from '../shared/model/restore-parts/part';
import { RestorePart } from '../shared/model/restore-parts/restore-part';
import { Restoration } from '../shared/model/restoration';
import { RestorationDetail } from '../shared/model/restore-detail';
import { ProcessLogItem } from '../shared/model/restore-parts/process-log-item';

interface ComponentsResponse {
  components: BikeComponent[];
}

interface ColoursResponse {
  colours: PartColour[];
}

interface PartDescriptionsResponse {
  descriptions: PartDescription[];
}

interface PartsResponse {
  parts: Part[];
}

interface ProcessLogResponse {
  processLog: ProcessLogItem[];
}

interface RestorationResponse {
  restoration: Restoration;
}

interface RestorationsDetails {
  restorations: RestorationDetail[];
}

interface ResultResponse {
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestoreRestService {

  constructor(private http: HttpClient) { }

  getBikeComponents(): Observable<BikeComponent[]> {
    return this.http.get<ComponentsResponse>(endpoint + 'components').
      pipe(map((response: ComponentsResponse) => { return response.components; }));
  }

  getPartColours(): Observable<PartColour[]> {
    return this.http.get<ColoursResponse>(endpoint + 'colours').
      pipe(map((response: ColoursResponse) => { return response.colours; }));
  }

  getParts(): Observable<Part[]> {
    return this.http.get<PartsResponse>(endpoint + 'parts').
      pipe(map((response: PartsResponse) => { return response.parts; }));
  }

  getPartDescriptions(): Observable<PartDescription[]> {
    return this.http.get<PartDescriptionsResponse>(endpoint + 'partDescriptions').
      pipe(map((response: PartDescriptionsResponse) => { return response.descriptions; }));
  }

  getRestorations(): Observable<RestorationDetail[]> {
    return this.http.get<RestorationsDetails>(endpoint + 'restorationDetails').
    pipe(map((response: RestorationsDetails) => { return response.restorations; }));
  }

  getRestorationProcessLog(jobId : number):Observable<ProcessLogItem[]>{
    return this.http.get<ProcessLogResponse>(endpoint + 'processLogs/' + jobId).
      pipe(map((response: ProcessLogResponse) => {return response.processLog; }));
  }

  //  POST http://localhost:3000/api/v1/restorations/25622/parts
  saveRestorePart(jobId: number, part: RestorePart): Observable<ResultResponse> {
   // console.log('save Restore Part');
   // console.log(part);
    return this.http.post<ResultResponse>(endpoint + 'restorations/' + jobId + '/parts', part).
      pipe(map(r => {
        if (r.result === "UPDATED" || r.result === "ADDED") {
          // Restoration parts data has changed refresh the cache.
          this._updateCurrentRestorationCache(jobId);
        }
        return r;
      }));
  }

  saveRestoration(restoration:RestorationDetail): Observable<ResultResponse>{
    console.log('save Restoration');
    console.log(restoration);
    return this.http.post<ResultResponse>(endpoint + 'restorations/', restoration).
    pipe(map(r => { return r;}));
  }

  saveRestoreProcessLog(jobId: number,log:ProcessLogItem) : Observable<ResultResponse>{
    return this.http.post<ResultResponse>(endpoint + 'restorations/' + jobId + '/processLog', log).
    pipe(map(r => { return r;}));
  }

  private _getRestorationFromApi(jobId: number): Observable<Restoration> {
    console.log('calling restorations api');
    return this.http.get<RestorationResponse>(endpoint + 'restorations/' + jobId).
      pipe(map((response: RestorationResponse) => {
        return response.restoration;
      }));
  }

  // ^ HTTP Requests ---------------------------------------------------

  getRestorationDetail(jobId: number): Observable<RestorationDetail> {
    return this._getRestoration(jobId).
      pipe(map(r => {
        return { id: r.id, jobId: r.jobId, customer: r.customer, notes: r.notes, bike: r.bike, state: r.state };
      }));
  }

  public getRestorationParts(jobId: number, type: number): Observable<RestorePart[]> {
    //console.log('get restoration parts, id: ' + jobId + ', type: ' + type);
    return this._getRestoration(jobId).
      pipe(map(r => {
        //console.log(r); 
        return r.parts.filter(p => p.type.toString() === type.toString()); // toString as JSON.
      }));
  }

  private _restorationCache$: Observable<Restoration>;
  private _currentRestoreJob: number;

  private _updateCurrentRestorationCache(jobId: number) {
    this._currentRestoreJob = jobId;
    this._restorationCache$ = this._getRestorationFromApi(jobId).pipe(
      shareReplay(1)
    );
  }

  private _getRestoration(jobId: number) {
    if (!this._restorationCache$ || (this._currentRestoreJob !== jobId)) {
      this._updateCurrentRestorationCache(jobId);
    }
    return this._restorationCache$;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }




}

const endpoint = 'http://192.168.1.67:3000/api/v1/';
