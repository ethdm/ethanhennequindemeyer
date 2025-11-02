/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select196455508",
    "maxSelect": 1,
    "name": "desc",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Gallerie",
      "Régis et gestion de salle",
      "Étude des publics"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // remove field
  collection.fields.removeById("select196455508")

  return app.save(collection)
})
