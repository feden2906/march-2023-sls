const {connection} = require("../mongo-client");

const createTodo = async (event) => {
    const {todo} = JSON.parse(event.body);
    const date = new Date().toISOString();

    const entity = {
        todo,
        createdAt: date,
        updatedAt: date,
        completed: false
    }
    const result = await connection.collection('todos').insertOne(entity);

    return {
        statusCode: 201,
        body: JSON.stringify({...entity, _id: result.insertedId}),
    }
};

module.exports = {
    handler: createTodo
}
