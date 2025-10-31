/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file3518340228",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img_illus",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file1372483206",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "hero",
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
  collection.fields.removeById("file3518340228")

  // remove field
  collection.fields.removeById("file1372483206")

  return app.save(collection)
})
