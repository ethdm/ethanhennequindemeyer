/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "file3186048659",
    "maxSelect": 99,
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // update field
  collection.fields.addAt(12, new Field({
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

  return app.save(collection)
})
