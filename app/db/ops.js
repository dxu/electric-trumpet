import db from './index'

export function putArchive(data) {
  console.log('get data', data)
  return db.put({
    _id: data._id,
    name: data.name,
    // indicates the type is an archive
    type: 0
  })
}

export function putItem(data) {
  console.log('get data', data)
  return db.put({
    _id: data._id,
    text: data.text,
    date: data.date,
    archive_id: data.archive_id,
    // indicates the type is an item
    type: 1
  })
}

export function queryArchives() {
  return db.query('type_index/by_type', {
    // for archives
    key: 0,
    include_docs: true
  })
}

export function queryItems() {
  return db.query('type_index/by_type', {
    // for archives
    key: 1,
    include_docs: true
  })
}
