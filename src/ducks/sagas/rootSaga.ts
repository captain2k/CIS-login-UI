import rootFilters from '@/ducks/sagas/Filters';
import { watchDoReceptionReport } from '@/ducks/sagas/ReceptionReport/ReceptionReport.saga';
import watchDoSalesReport from '@/ducks/sagas/SalesReport';
import { all, fork } from 'redux-saga/effects';
import watchDoPharmacyReport from "./PharmacyReport";
import watchRisReport from './RisReport';
import { watchDoAuth } from './authSagas';
import watchDoLisReport from './LisReport';
import watchDoCommissionReport from './CommissionReport';

export default function* rootSaga() {
  yield all([
    fork(watchDoAuth),
    fork(rootFilters),
    fork(watchDoReceptionReport),
    fork(watchDoSalesReport),
    fork(watchRisReport),
    fork(watchDoLisReport),
    fork(watchDoPharmacyReport),
    fork(watchDoCommissionReport)
  ]);
}
