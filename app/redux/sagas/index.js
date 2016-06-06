import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { ARCHIVE_ADDING, ARCHIVE_NOT_ADDED, ARCHIVE_ADDED, ARCHIVES_RECEIVED, ARCHIVES_REQUESTING, ARCHIVES_NOT_RECEIVED, ITEMS_RECEIVED, ITEMS_REQUESTING, ITEMS_NOT_RECEIVED, ITEM_ADDING, ITEM_ADDED, ITEM_NOT_ADDED } from '../actions'


import db from '../../db'
import * as ops from '../../db/ops'

import 'babel-polyfill'

function dbGetArchives() {
  return ops.queryArchives()
}

/* fetching archives */
export function* watchFetchArchives() {
  yield* takeEvery(ARCHIVES_REQUESTING, fetchArchives)
}

function* fetchArchives() {
  try {
    let archives = yield call(dbGetArchives)
    archives = archives.rows.map((item) => {
      return {
        name: item.doc.name,
        _id: item.doc._id
      }
    })
    yield put({ type: ARCHIVES_RECEIVED, archives })
  }  
  catch(error) {
    yield put({type: ARCHIVES_NOT_RECEIVED, error})
  }
}



function dbGetItems() {
  return ops.queryItems()
}

/* fetching archives */
export function* watchFetchItems() {
  yield* takeEvery(ITEMS_REQUESTING, fetchItems)
}

function* fetchItems() {
  try {
    let items = yield call(dbGetItems)
    items = items.rows.map((item) => {
      return {
        _id: item.doc._id,
        content: item.doc.content,
        title: item.doc.title,
        date: item.doc.date,
        archive_id: item.doc.archive_id
      }
    })
    yield put({ type: ITEMS_RECEIVED, items })
  }  
  catch(error) {
    yield put({type: ITEMS_NOT_RECEIVED, error})
  }
}

function dbAddArchive(action) {
  return ops.putArchive(action) 
}




/* adding archives */
export function* watchAddArchive() {
  yield* takeEvery(ARCHIVE_ADDING, addArchive)
}

function* addArchive(action) {
  try {
    let archive = yield call(dbAddArchive, action)
    // TODO: supposed to return archive as something with id, rev, and "ok: true"
    yield put({ 
      type: ARCHIVE_ADDED, 
      archive: {
        _id: action._id,
        name: action.name
      }
    })
  }  
  catch(error) {
    yield put({type: ARCHIVE_NOT_ADDED, error})
  }
}

function dbAddItem(action) {
  return ops.putItem(action)
}

/* adding archives */
export function* watchAddItem() {
  yield* takeEvery(ITEM_ADDING, addItem)
}

function* addItem(action) {
  try {
    let item = yield call(dbAddItem, action)
    // TODO: supposed to return archive as something with id, rev, and "ok: true"
    yield put({ 
      type: ITEM_ADDED, 
      item: {
        _id: action._id,
        content: action.content,
        title: action.title,
        date: action.date,
        archive_id: action.archive_id
      }
    })
  }  
  catch(error) {
    yield put({type: ITEM_NOT_ADDED, error})
  }
}


