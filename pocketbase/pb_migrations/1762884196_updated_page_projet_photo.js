/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // remove field
  collection.fields.removeById("relation142008537")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2629951473")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1063624087",
    "hidden": false,
    "id": "relation142008537",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "lesphotos",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
