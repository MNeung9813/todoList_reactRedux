import React from 'react';
import { connect } from 'react-redux';
import { clearHistory } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ClearHistory = ({ dispatch }) => {
    return (
        <button
            type="submit"
            className="btn"
            onClick={e => {
                e.preventDefault();
                dispatch(clearHistory());
            }}>
            <FontAwesomeIcon icon={faTrashAlt} color="red" />
            <span className="ml-2">Clear</span>
        </button>
    )
}

export default connect()(ClearHistory);