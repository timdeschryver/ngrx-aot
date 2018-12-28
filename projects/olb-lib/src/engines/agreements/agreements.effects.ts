import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import {
  AgreementsActionTypes,
  GetAgreementsSuccessAction,
  AgreementsActionsUnion,
  GetAgreementsFailureAction,
} from "./agreements.actions";
import { AgreementsService } from "./agreements.service";

@Injectable()
export class AgreementsEffects {
  constructor(private actions$: Actions, private agreementService: AgreementsService) {}

  @Effect()
  getAgreements$: Observable<AgreementsActionsUnion> = this.actions$.pipe(
    ofType(AgreementsActionTypes.GET_AGREEMENTS),
    switchMap(() =>
      this.agreementService
        .getAgreements().pipe(
          map(response => new GetAgreementsSuccessAction(response.data)),
          catchError((error: HttpErrorResponse) => of(new GetAgreementsFailureAction(error)))
        ),
    ),
  );
}
