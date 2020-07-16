import React from 'react';
import ClearHistory from '../../features/ClearHistory';
import HistoryTodo from '../../features/HistoryTodo';

export default () => {
    return (
        <div>
            <div className="d-flex flex-row justify-content-between my-flex-container">
                <div></div>
                <h1 className="text-center">History</h1>
                <ClearHistory />
            </div>
            <HistoryTodo />
        </div>
    );
}