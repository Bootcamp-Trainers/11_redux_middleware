const initialState = [
    {
        id: 1,
        name: "Eat",
        isCompleted: false
    },
    {
        id: 2,
        name: "Sleep",
        isCompleted: true
    }
]

const todo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'DELETE_TODO':
            return state.filter(x => x.id !== action.payload.id)
        case 'UPDATE_COMPLETE': {
            const list = state.map((item) => {
                if (item.id === action.payload.id)
                    item.isCompleted = !item.isCompleted
                return item
            })
            return list
        }
        default:
            return state
    }
}

export default todo