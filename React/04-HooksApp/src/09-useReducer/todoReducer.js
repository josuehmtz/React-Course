export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
            return initialState;
            throw new Error('Action.type = ABC no esta implementado')
    
        default:
            return initialState;
    }
}