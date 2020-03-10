import axios from 'axios'
let id = 0

const fetchPeopleAsync = () => ({
    type: 'FETCH_PEOPLE_REQUEST'
})

const fetchPeopleError = payload => ({
    type: 'FETCH_PEOPLE_ERROR',
    payload
})

const fetchPeople = payload => ({
    type: 'FETCH_PEOPLE',
    payload
})

export const deletePerson = payload => ({
    type: 'DELETE_PERSON',
    payload
})

export const addPerson = payload => ({
    type: 'ADD_PERSON',
    payload
})

export const editPerson = payload => ({
    type: 'EDIT_PERSON',
    payload
})

//alternative
export const fetchMorePeople = (page = 1) => async dispatch => {
    if (page === 1) {
        dispatch(fetchPeopleAsync())
    }

    try {
        axios.get(`https://swapi.co/api/people/?page=${page}`)
            .then(response => {
                const addId = response.data.results.map(x => ({ id: id++, ...x }))
                dispatch(fetchPeople(addId))
            })
    } catch (error) {
        dispatch(fetchPeopleError(error))
    }
}

// const fetchPeopleSuccess = payload => ({
    //     type: 'FETCH_PEOPLE_SUCCESS',
    //     payload
    // })


// const fetchMorePeopleAsync = payload => ({
//     type: 'FETCH_MORE_PEOPLE',
//     payload
// })


// export const fetchPeople = () => dispatch => {
//     dispatch(fetchPeopleAsync())
//     try {
//         axios.get('https://swapi.co/api/people/')
//             .then(response => {
//                 const addId = response.data.results.map(x => ({ id: id++, ...x }))
//                 dispatch(fetchPeopleSuccess(addId))
//             })
//     } catch (error) {
//         dispatch(fetchPeopleError(error))
//     }
// }

// export const fetchMorePeople = (page = 2) => async dispatch => {
//     try {
//         const { data } = await axios.get(`https://swapi.co/api/people/?page=${page}`)
//             .then(response => {
//                 const addId = response.data.results.map(x => ({ id: id++, ...x }))
//                 dispatch(fetchPeopleSuccess(addId))
//             })
//     } catch (error) {
//         dispatch(fetchPeopleError(error))
//     }
// }
