import React from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

const HistoryTodo = ({ history }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                    <th scope="col">Text</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map((historyData, index) => (
                        <tr key={index}>
                            <td>{dateFormat(historyData.date, "dd/mm/yyyy HH:MM:ss")}</td>
                            <td>{historyData.status}</td>
                            <td>{historyData.text}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}


const mapStateToProps = (state) => {
    return {
        history: state.history || []
    }
}

export default connect(mapStateToProps)(HistoryTodo);