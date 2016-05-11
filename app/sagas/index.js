import { call, put } from 'redux-saga'
import { ARCHIVES_RECEIVED, ARCHIVES_REQUESTED, ARCHIVES_NOT_RECEIVED, ITEMS_RECEIVED, ITEMS_REQUESTED, ITEMS_NOT_RECEIVED  } from '../actions'

function getArchives() {
  return {}
}

function getItems() {
  return {}
}

export function* watchFetchArchives() {
  yield* takeEvery(ARCHIVES_REQUESTED, fetchArchives)
}

function* fetchArchives() {
  try {
    const archives = yield call(getArchives)
    yield put({ type: ARCHIVES_RECEIVED, archives })
  }  
  catch(error) {
    yield put({ARCHIVES_NOT_RECEIVED})
  }
}

export function* watchItemArchives() {
  yield* takeEvery(ITEMS_REQUESTED, fetchArchives)
}
export function* fetchItems() {
  try {
    const archives = yield call(getArchives)
    yield put({ type: ITEMS_RECEIVED, archives })
  }  
  catch(error) {
    yield put({ITEMS_NOT_RECEIVED})
  }
}
