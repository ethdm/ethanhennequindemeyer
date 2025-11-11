/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1803029723",
    "max": 0,
    "min": 0,
    "name": "txt3",
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
    "id": "file1346310252",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "ill3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4112292216",
    "max": 0,
    "min": 0,
    "name": "txt4",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "file3462104527",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "ill4",
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
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // remove field
  collection.fields.removeById("text1803029723")

  // remove field
  collection.fields.removeById("file1346310252")

  // remove field
  collection.fields.removeById("text4112292216")

  // remove field
  collection.fields.removeById("file3462104527")

  // remove field
  collection.fields.removeById("file2378324609")

  return app.save(collection)
})
