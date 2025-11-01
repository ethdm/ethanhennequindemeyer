/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_823787363")

  // update collection data
  unmarshal({
    "listRule": "(1 = 1)",
    "viewRule": "(1 = 1)"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_823787363")

  // update collection data
  unmarshal({
    "listRule": "@request.method != \"\"",
    "viewRule": "@request.method != \"\""
  }, collection)

  return app.save(collection)
})
