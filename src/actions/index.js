function increment(payload) {
    return {
        type: 'INCREMENT',
        payload
    }
}
function decrement(payload) {
    return {
        type: 'DECREMENT',
        payload
    }
}

function add_todo(payload) {
    return {
        type: 'ADD_TODO',
        payload
    }
}

function delete_todo(payload) {
    return {
        type: 'DELETE_TODO',
        payload
    }
}
function update_complete(payload) {
    return {
        type: 'UPDATE_COMPLETE',
        payload
    }
}

export {
    increment,
    decrement,
    add_todo,
    delete_todo,
    update_complete
}