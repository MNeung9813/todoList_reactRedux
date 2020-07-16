import React from 'react';
import { connect } from 'react-redux';
import { searchTodo } from '../redux/actions';

const SearchTodo = ({ dispatch }) => {
    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder="Search todo"
                onChange={e => {
                    e.preventDefault();
                    if (!e.target.value.trim()) {
                        return;
                    }
                    dispatch(searchTodo(e.target.value));
                }}
            />
        </div>
    )
}

export default connect()(SearchTodo);