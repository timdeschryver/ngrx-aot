import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Agreement } from '../../models/agreement.model';
import { AppState } from '../../app-state';

import { AgreementsState } from './agreements.reducer';

export const selectAgreementsState = createFeatureSelector<AppState, AgreementsState>(
  'agreements',
);

export const selectAgreements = createSelector(
  selectAgreementsState,
  (agreementsState: AgreementsState): Agreement[] => agreementsState.data,
)

export const selectAgreementsError = createSelector(
  selectAgreementsState,
  (agreementsState: AgreementsState): null | HttpErrorResponse => agreementsState.error,
)

export const selectAgreementsIsLoading = createSelector(
  selectAgreementsState,
  (agreementsState: AgreementsState): boolean => agreementsState.isLoading,
)
