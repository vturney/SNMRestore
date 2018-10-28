import { Bike } from "./bike";
import { RestorePart } from "./restore-parts/restore-part";

export class Restoration {
    id: number;
    jobId: number;
    customer : string;
    notes: string;
    bike: Bike;
    state : number;
    parts : RestorePart[];
  }