const {connection} = require("../mongo-client");
const {ObjectId} = require("mongodb");

const getTodo = async (event) => {
    const {todoId} = event.pathParameters
    const todo = await connection.collection('todos').findOne({_id: new ObjectId(todoId)});

    return {
        statusCode: 200,
        body: JSON.stringify(todo),
    }
};

module.exports = {
    handler: getTodo
}
