const history = (state = [], action) => {
    switch (action.type) {
        case 'ACTION_TODO':
            return [
                ...state,
                {
                    date: action.date,
                    status: action.status,
                    text: action.text
                }
            ].sort((a, b) => { return b.date - a.date });
        case 'CLEAR_HISTORY':
            return [];
        default:
            return state.sort((a, b) => { return b.date - a.date });
    }
}

export default history;