/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // add field
  collection.fields.addAt(1, new Field({
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // remove field
  collection.fields.removeById("file3441629366")

  return app.save(collection)
})
