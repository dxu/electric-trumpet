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

export function queryArchives() {
  return db.query('archive_index/by_type', {
    // for archives
    key: 0,
    include_docs: true
  })
}
