migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shaxreved1ly8hd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdfim5qh",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shaxreved1ly8hd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdfim5qh",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
