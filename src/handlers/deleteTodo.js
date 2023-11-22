const {connection} = require("../mongo-client");
const {ObjectId} = require("mongodb");

const deleteTodo = async (event) => {
    const {todoId} = event.pathParameters

    const entity = await connection.collection('todos').findOne({_id: new ObjectId(todoId)});
    if (!entity) {
        throw new Error('Todo not found');
    }
    await connection.collection('todos').deleteOne({_id: entity._id});

    return {
        statusCode: 204,
    }
};

module.exports = {
    handler: deleteTodo
}
