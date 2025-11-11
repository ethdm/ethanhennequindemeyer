/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2629951473",
    "hidden": false,
    "id": "relation1916173262",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "page_photo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // remove field
  collection.fields.removeById("relation1916173262")

  return app.save(collection)
})
