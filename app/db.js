import PouchDB from 'pouchdb'
const db = new PouchDB('electric-trumpet')


/*
{
  id: uuid, (required)
  type: 0, 1 for archive or list item, (required)


}
*/

var ddoc = {
  _id: '_design/archive_index',
  views: {
    by_type: {
      map: function(doc) {
        emit(doc.type)
      }.toString()
    }
  }
}

// save it
db.put(ddoc).then(function () {
  console.log('successfully indexed')
}).catch(function (err) {
  if (err.status === 409) {
    console.error('index already exists', err)
  } else {
    console.error('error indexed', err)
  }
});

export default db
