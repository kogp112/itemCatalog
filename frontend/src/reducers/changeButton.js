const changeButton = (state = [], action) => {
    switch(action.type) {
        case 'SHOW_ALL':
            return {...state, items: action.items}
        case 'SHOW_COLOR':
            return {...state, items: action.items, color: action.color}
        case 'SHOW_GENRE':
            return {...state, items: action.items, genre: action.genre}
        case 'NOT_SHOW':
            return {...state, items: []}
        default:
            return state
    }
}

export default changeButton