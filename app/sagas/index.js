import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { ARCHIVE_ADDING, ARCHIVE_NOT_ADDED, ARCHIVE_ADDED, ARCHIVES_RECEIVED, ARCHIVES_REQUESTING, ARCHIVES_NOT_RECEIVED, ITEMS_RECEIVED, ITEMS_REQUESTING, ITEMS_NOT_RECEIVED  } from '../actions'


import db from '../db'
import * as ops from '../db/ops'

import 'babel-polyfill'

function dbGetArchives() {
  return ops.queryArchives()
}



function getItems() {
  return {}
}

function dbAddArchive(action) {
  console.log('adding')
  return ops.putArchive(action) 
}


/* fetching archives */
export function* watchFetchArchives() {
  yield* takeEvery(ARCHIVES_REQUESTING, fetchArchives)
}

function* fetchArchives() {
  try {
    let archives = yield call(dbGetArchives)
    archives = archives.rows.map((item) => {
      console.log('item', item)
      return {
        name: item.doc.name,
        _id: item.doc._id
      }
    })
    console.log('archives',archives)
    yield put({ type: ARCHIVES_RECEIVED, archives })
  }  
  catch(error) {
    yield put({type: ARCHIVES_NOT_RECEIVED, error})
  }
}

/* adding archives */
export function* watchAddArchive() {
  yield* takeEvery(ARCHIVE_ADDING, addArchive)
}

function* addArchive(action) {
  console.log('action', action)
  try {
    let archive = yield call(dbAddArchive, action)
    // archives = archives.rows.map((item) => {
    //   return {
    //     name: item.name,
    //     _id: item._id
    //   }
    // })
    console.log('archives')
    yield put({ type: ARCHIVE_ADDED, archive })
  }  
  catch(error) {
    yield put({type: ARCHIVE_NOT_ADDED, error})
  }
}


/* fetching items*/
export function* watchFetchItems() {
  yield* takeEvery(ITEMS_REQUESTING, fetchItems)
}

function* fetchItems() {
  try {
    const archives = yield call(dbGetArchives)
    yield put({ type: ITEMS_RECEIVED, archives })
  }  
  catch(error) {
    yield put({ITEMS_NOT_RECEIVED})
  }
}
