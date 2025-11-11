/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "file1976732100",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "fondcoll2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "file3186048659",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "seriecoll2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text760803550",
    "max": 0,
    "min": 0,
    "name": "titlecoll2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3521671228",
    "max": 0,
    "min": 0,
    "name": "desccoll2",
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
  collection.fields.removeById("file1976732100")

  // remove field
  collection.fields.removeById("file3186048659")

  // remove field
  collection.fields.removeById("text760803550")

  // remove field
  collection.fields.removeById("text3521671228")

  return app.save(collection)
})
