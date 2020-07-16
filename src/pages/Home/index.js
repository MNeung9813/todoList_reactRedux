import React from 'react';

import SearchTodo from '../../features/SearchTodo';
import AddTodo from '../../features/AddTodo';
import TodoList from '../../features/TodoList';

export default () => {
    return (
        <div>
            <div className="mt-4">
                <SearchTodo />
            </div>
            <div className="mt-4">
                <AddTodo />
            </div>
            <div className="mt-4">
                <TodoList />
            </div>
        </div>
    );
}