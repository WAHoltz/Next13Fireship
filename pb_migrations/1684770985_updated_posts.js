migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shaxreved1ly8hd")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shaxreved1ly8hd")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
