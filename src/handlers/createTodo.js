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

    await connection.collection('todos').insertOne(entity)
};

module.exports = {
    handler: createTodo
}
