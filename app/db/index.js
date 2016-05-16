import PouchDB from 'pouchdb'
const db = new PouchDB('electric-trumpet')

import { DEFAULT_ARCHIVE_ID, DEFAULT_ARCHIVE_NAME } from '../util/constants'

/*
{
  _id: uuid, (required)
  type: 0, 1 for archive or list item, (required)


}
*/

var archiveIndexDD = {
  _id: '_design/type_index',
  views: {
    by_type: {
      map: function(doc) {
        emit(doc.type)
      }.toString()
    }
  }
}


// save it
db.put(archiveIndexDD).then(function () {
  console.log('successfully indexed')
}).catch(function (err) {
  if (err.status === 409) {
    console.error('index already exists', err)
  } else {
    console.error('error indexed', err)
  }
});


// put the uncategorized row
db.put({
  _id: DEFAULT_ARCHIVE_ID,
  name: DEFAULT_ARCHIVE_NAME,
  type: 0
}).then(function () {
  console.log('successfully indexed')
}).catch(function (err) {
  if (err.status === 409) {
    console.error('index already exists', err)
  } else {
    console.error('error indexed', err)
  }
});

window.db = db;

export default db
