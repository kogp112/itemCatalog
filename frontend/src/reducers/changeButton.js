const changeButton = (state = [], action) => {
    switch(action.type) {
        case 'SHOW_ALL':
            return {...state, items: action.items}
        case 'SHOW_SKIRT':
            return {...state, items: action.items}
        case 'SHOW_PANTS':
            return {...state, items: action.items}
        case 'SHOW_SHIRT':
            return {...state, items: action.items}
        case 'SHOW_RED':
            return {...state, items: action.items}
        case 'SHOW_BLUE':
            return {...state, items: action.items}
        case 'SHOW_YELLOW':
            return {...state, items: action.items}
        case 'SHOW_GREEN':
            return {...state, items: action.items}
        case 'NOT_SHOW':
            return {...state, items: []}
        default:
            return state
    }
}

export default changeButton