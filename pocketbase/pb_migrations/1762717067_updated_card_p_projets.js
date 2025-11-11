/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2978356433",
    "hidden": false,
    "id": "relation725174455",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "page_autre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // remove field
  collection.fields.removeById("relation725174455")

  return app.save(collection)
})
