/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file3441629366",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "fond",
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
    "id": "file2378324609",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "imagef",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // remove field
  collection.fields.removeById("file3441629366")

  // remove field
  collection.fields.removeById("file2378324609")

  return app.save(collection)
})
