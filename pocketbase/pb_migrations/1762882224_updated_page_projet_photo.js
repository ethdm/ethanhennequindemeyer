/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // remove field
  collection.fields.removeById("file142008537")

  // remove field
  collection.fields.removeById("text2840502789")

  // remove field
  collection.fields.removeById("text1396809574")

  // remove field
  collection.fields.removeById("json3760176746")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file142008537",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photos",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2840502789",
    "max": 0,
    "min": 0,
    "name": "deschl",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1396809574",
    "max": 0,
    "min": 0,
    "name": "deschr",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "json3760176746",
    "maxSize": 0,
    "name": "images",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})
