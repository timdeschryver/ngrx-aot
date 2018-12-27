import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agreement } from "../../models/agreement.model";
import { Response } from "../../common";

@Injectable({
  providedIn: "root",
})
export class AgreementsService {
  constructor(private httpClient: HttpClient) {}

  public getAgreements() {
    return this.httpClient.get<Response<Agreement[]>>('/olb/api/v1/agreements');
  }
}
