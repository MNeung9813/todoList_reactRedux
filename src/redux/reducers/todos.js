const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    show: action.show || true
                }
            ];
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'SEARCH_TODO': {
            return state.map(item => {
                if (item.text.search(action.value) !== -1) {
                    return {
                        id: item.id,
                        text: item.text,
                        show: true
                    }
                } else {
                    return {
                        id: item.id,
                        text: item.text,
                        show: false
                    }
                }
            });
        }
        default:
            return state;
    }
}

export default todos;