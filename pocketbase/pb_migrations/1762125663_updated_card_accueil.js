/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_823787363")

  // remove field
  collection.fields.removeById("select196455508")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_823787363")

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
      "Photographie",
      "Design UI/UX",
      "Audiovisuel",
      "Évènementiel"
    ]
  }))

  return app.save(collection)
})
