const {MongoClient} = require('mongodb')

const {MONGO_URL} = require('./configs/configs')

const client = new MongoClient(MONGO_URL);

module.exports = {
    client,
    connection: client.db(),
}
