import React from 'react';
import { connect } from 'react-redux';
import './scss/TodoList.scss';
import { deleteTodo, actionTodo } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos, dispatch }) => {
    let date = new Date();
    return (
        <div className="container">
            {todos && todos.map((todo, index) => (
                todo.show &&
                <div key={index} className="d-flex justify-content-between align-items-center mb-2 box-todo">
                    <div className="ml-2">{todo.text}</div>
                    <button
                        type="submit"
                        className="btn"
                        onClick={e => {
                            e.preventDefault();
                            dispatch(deleteTodo(todo.id));
                            dispatch(actionTodo(date, 'Remove', todo.text));
                        }}>
                        <FontAwesomeIcon icon={faTrashAlt} color="red" />
                    </button>
                </div>
            )
            )}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos || []
    }
}

export default connect(mapStateToProps)(TodoList);