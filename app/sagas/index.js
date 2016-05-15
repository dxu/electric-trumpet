import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { ARCHIVES_RECEIVED, ARCHIVES_REQUESTED, ARCHIVES_NOT_RECEIVED, ITEMS_RECEIVED, ITEMS_REQUESTED, ITEMS_NOT_RECEIVED  } from '../actions'

import db from '../db'

import 'babel-polyfill'

function getArchives() {
  return db.query('archive_index/by_type')
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
    console.log('archives',archives)
    yield put({ type: ARCHIVES_RECEIVED, archives })
  }  
  catch(error) {
    yield put({ARCHIVES_NOT_RECEIVED})
  }
}

export function* watchFetchItems() {
  yield* takeEvery(ITEMS_REQUESTED, fetchItems)
}

function* fetchItems() {
  try {
    const archives = yield call(getArchives)
    yield put({ type: ITEMS_RECEIVED, archives })
  }  
  catch(error) {
    yield put({ITEMS_NOT_RECEIVED})
  }
}
