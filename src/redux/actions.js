let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
});

export const actionTodo = (date, status, text) => ({
    type: 'ACTION_TODO',
    date,
    status,
    text
});

export function searchTodo(value) {
    return { type: 'SEARCH_TODO', value };
}

export function clearHistory() {
    return { type: 'CLEAR_HISTORY' };
}