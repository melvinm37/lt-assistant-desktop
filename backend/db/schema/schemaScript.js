db.createCollection("comments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "comments",
      required: ["_id", "movie_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "email": { bsonType: "string" },
        "movie_id": { bsonType: "objectId" },
        "text": { bsonType: "string" },
        "date": { bsonType: "date" },
      },
    },
  },
});

db.createCollection("theaters", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "theaters",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "teatherId": { bsonType: "int" },
        "location": { bsonType: "object", title: "location", properties: { "address": { bsonType: "object", title: "address", properties: { "street1": { bsonType: "string" }, "city": { bsonType: "string" }, "state": { bsonType: "string" }, "zipcode": { bsonType: "string" }, }, }, "geo": { bsonType: "array", items: { bsonType: "long" } }, }, },
      },
    },
  },
});

db.createCollection("sessions", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sessions",
      required: ["_id", "user_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "user_id": { bsonType: "objectId" },
        "jwt": { bsonType: "string" },
      },
    },
  },
});

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "users",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "email": { bsonType: "string" },
        "password": { bsonType: "string" },
      },
    },
  },
});

db.createCollection("embedded_movies", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "embedded_movies",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "plot": { bsonType: "string" },
        "genres": { bsonType: "array", items: { bsonType: "string" } },
        "runtime": { bsonType: "int" },
        "cast": { bsonType: "array", items: { bsonType: "string" } },
        "num_mflix_comments": { bsonType: "int" },
        "poster": { bsonType: "string" },
        "title": { bsonType: "string" },
        "lastUpdated": { bsonType: "date" },
        "languages": { bsonType: "array", items: { bsonType: "string" } },
        "released": { bsonType: "date" },
        "directors": { bsonType: "array", items: { bsonType: "string" } },
        "writers": { bsonType: "array", items: { bsonType: "string" } },
        "awards": { bsonType: "object", title: "awards", properties: { "wins": { bsonType: "int" }, "nominations": { bsonType: "int" }, "text": { bsonType: "string" }, }, },
        "year": { bsonType: "int" },
        "imdb": { bsonType: "object", title: "imdb", properties: { "rating": { bsonType: "double" }, "votes": { bsonType: "int" }, "id": { bsonType: "int" }, }, },
        "countries": { bsonType: "array", items: { bsonType: "string" } },
        "type": { bsonType: "string" },
        "tomatoes": { bsonType: "object", title: "tomatoes", properties: { "viewer": { bsonType: "object", title: "viewer", properties: { "rating": { bsonType: "double" }, "numReviews": { bsonType: "int" }, "meter": { bsonType: "int" }, }, }, "dvd": { bsonType: "date" }, "critic": { bsonType: "object", title: "critic", properties: { "rating": { bsonType: "double" }, "numReviews": { bsonType: "int" }, "meter": { bsonType: "int" }, "production": { bsonType: "string" }, "fresh": { bsonType: "int" }, }, }, }, },
        "plot_embedding": { bsonType: "array", items: { bsonType: "double" } },
      },
    },
  },
});

db.createCollection("movies", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "movies",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "title": { bsonType: "string" },
        "year": { bsonType: "int" },
        "released": { bsonType: "date" },
        "poster": { bsonType: "string" },
        "plot": { bsonType: "string" },
        "fullplot": { bsonType: "string" },
        "lastupdated": { bsonType: "date" },
        "type": { bsonType: "string" },
        "directors": { bsonType: "array", items: { bsonType: "string" } },
        "imdb": { bsonType: "object", title: "imdb", properties: { "rating": { bsonType: "double" }, "votes": { bsonType: "int" }, "id": { bsonType: "int" }, }, },
        "cast": { bsonType: "array", items: { bsonType: "string" } },
        "countries": { bsonType: "array", items: { bsonType: "string" } },
        "genres": { bsonType: "array", items: { bsonType: "string" } },
        "tomatoes": { bsonType: "object", title: "tomatoes", properties: { "viewer": { bsonType: "object", title: "viewer", properties: { "rating": { bsonType: "double" }, "numReviews": { bsonType: "int" }, }, }, "lastUpdated": { bsonType: "date" }, }, },
        "num_mflix_comments": { bsonType: "int" },
      },
    },
  },
});