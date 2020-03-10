const initialState = {
    loading: true,
    people: [],
    errorMessage: ''
}

const starwars = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PEOPLE_ERROR':
            return {
                loading: false,
                people: [],
                errorMessage: action.payload.message
            }
        case 'EDIT_PERSON':
            return {
                ...state,
                people: state.people.map(x => {
                    if (action.payload.id === x.id) {
                        return {
                            ...x,
                            name: action.payload.name,
                            height: action.payload.height
                        }
                    } return x
                })
            }
        case 'FETCH_PEOPLE':
            return {
                ...state,
                loading: false,
                // people: state.people.concat(action.payload)
                people: action.payload
            }
        case 'DELETE_PERSON':
            return {
                ...state,
                loading: false,
                people: state.people.filter(x => x.id !== action.payload)
            }
        case 'ADD_PERSON':
            const newId = state.people[state.people.length - 1].id + 1
            const newPerson = [{
                ...action.payload,
                id: newId
            }]
            // action.payload = {...action.payload,id:}
            return {
                ...state,
                loading: false,
                people: state.people.concat(newPerson)
            }
        default:
            return state
    }
}

export default starwars