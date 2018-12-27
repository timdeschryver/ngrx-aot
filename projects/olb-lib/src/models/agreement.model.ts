import { AgreementAccount } from "./agreement.account.model";

export interface Agreement {
    agreementId: string,
    agreementNumber: string,
    agreementUserId: string,
    description: string,
    currentStatus: string,
    linkedAccounts:  Array<AgreementAccount>;
}
