import { HttpErrorResponse } from '@angular/common/http';
import { Agreement } from '../../models/agreement.model';
import { AgreementsActionsUnion, AgreementsActionTypes } from './agreements.actions';

export interface AgreementsState {
  data: Agreement[];
  error: null | HttpErrorResponse;
  isLoading: boolean;
};

export const initialAgreementsState: AgreementsState = {
  data: [],
  error: null,
  isLoading: false,
};

export function agreementsReducer(
  state = initialAgreementsState,
  action: AgreementsActionsUnion
) {
  switch (action.type) {
    case AgreementsActionTypes.GET_AGREEMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case AgreementsActionTypes.GET_AGREEMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case AgreementsActionTypes.GET_AGREEMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
