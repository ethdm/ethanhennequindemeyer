/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file3150104748",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img",
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
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Photographie",
      "Évènementiels",
      "Audiovisuel"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // remove field
  collection.fields.removeById("file3150104748")

  // remove field
  collection.fields.removeById("select1232983604")

  return app.save(collection)
})
