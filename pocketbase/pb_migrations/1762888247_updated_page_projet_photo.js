/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file3973830782",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "fondcoll1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file619605801",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "seriecoll1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3025248612",
    "max": 0,
    "min": 0,
    "name": "titlecoll1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1222713734",
    "max": 0,
    "min": 0,
    "name": "desccoll1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // remove field
  collection.fields.removeById("file3973830782")

  // remove field
  collection.fields.removeById("file619605801")

  // remove field
  collection.fields.removeById("text3025248612")

  // remove field
  collection.fields.removeById("text1222713734")

  return app.save(collection)
})
