import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Agreement } from '../../models/agreement.model';

export enum AgreementsActionTypes {
  GET_AGREEMENTS = '[Agreements] Get Agreements',
  GET_AGREEMENTS_SUCCESS = '[Agreements] Get Agreements Success',
  GET_AGREEMENTS_FAILURE = '[Agreements] Get Agreements Failure',
}

export class GetAgreementsAction implements Action {
  readonly type = AgreementsActionTypes.GET_AGREEMENTS;
}

export class GetAgreementsSuccessAction implements Action {
  readonly type = AgreementsActionTypes.GET_AGREEMENTS_SUCCESS;

  constructor(public payload: Agreement[]) {}
}

export class GetAgreementsFailureAction implements Action {
  readonly type = AgreementsActionTypes.GET_AGREEMENTS_FAILURE;

  constructor(public payload: HttpErrorResponse) {}
}

export type AgreementsActionsUnion =
  | GetAgreementsAction
  | GetAgreementsFailureAction
  | GetAgreementsSuccessAction;
