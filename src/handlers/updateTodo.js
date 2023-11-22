const {connection} = require("../mongo-client");
const {ObjectId} = require("mongodb");

const updateTodo = async (event) => {
    const {todoId} = event.pathParameters;
    const {completed} = JSON.parse(event.body);

    const entity = await connection.collection('todos').findOne({_id: new ObjectId(todoId)});
    if (!entity) {
        throw new Error('Todo not found');
    }

    await connection.collection('todos').updateOne(
        {_id: entity._id},
        {
            $set: {
                updatedAt: new Date().toISOString(),
                completed
            }
        }
    )

    return {
        statusCode: 201,
        body: JSON.stringify({...entity, completed}),
    }
};

module.exports = {
    handler: updateTodo
}
