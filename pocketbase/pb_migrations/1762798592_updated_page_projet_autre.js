/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // update collection data
  unmarshal({
    "name": "page_projet_classique"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2978356433")

  // update collection data
  unmarshal({
    "name": "page_projet_autre"
  }, collection)

  return app.save(collection)
})
