/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "file762157922",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "minia",
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
  collection.fields.removeById("file762157922")

  return app.save(collection)
})
