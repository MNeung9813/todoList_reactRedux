import React from 'react';
import { connect } from 'react-redux';
import { addTodo, actionTodo } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddTodo = ({ dispatch }) => {
    let input;
    let date = new Date();
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    dispatch(actionTodo(date, 'Add', input.value));
                    input.value = '';
                }}
            >
                <div className="row">
                    <div className="col-9 col-sm-10">
                        <input type="text" className="form-control" ref={node => input = node} placeholder="Add Todo" />
                    </div>
                    <div className="col-3 col-sm-2">
                        <button type="submit" className="btn btn-block btn-primary">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddTodo);