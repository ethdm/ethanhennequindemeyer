/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select196455508",
    "maxSelect": 10,
    "name": "desc",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Étude des publics",
      "Accueil des publics",
      "Communication audiovisuelle",
      "Communication visuelle et textuelle",
      "Court métrage",
      "MAO",
      "Illustration",
      "Peinture",
      "Collection / Galerie photo",
      "Régis caméra sur un  évènement en salle",
      "Captation d'un concert & création d'un after movie",
      "Création d'une identité visuelle",
      "Branding",
      "Communication"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765943927")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select196455508",
    "maxSelect": 10,
    "name": "desc",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Étude des publics",
      "Accueil des publics",
      "Communication audiovisuelle",
      "Communication visuelle et textuelle",
      "Court métrage",
      "MAO",
      "Illustration",
      "Peinture",
      "Collection / Galerie photo",
      "Régis caméra sur un  évènement en salle",
      "Captation d'un concert & création d'un after movie",
      "Création d'une identité visuelle",
      "Branding"
    ]
  }))

  return app.save(collection)
})
