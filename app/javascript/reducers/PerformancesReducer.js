function PerformancesReducer(state = [], action) {
    switch (action.type) {
        case 'add_performance':
            return [...state, action.payload]
        default:
            return state
    }
}

export default PerformancesReducer