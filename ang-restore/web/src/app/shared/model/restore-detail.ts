import { Bike } from "./bike";

export class RestorationDetail {
    id: number;
    jobId: number;
    customer : string;
    notes: string;
    bike: Bike;
    state : number;
  }