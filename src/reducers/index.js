import { combineReducers } from 'redux'
import counter from './counter'
import todo from './todo'
import starwars from './starwars'

const reducer = combineReducers({
    starwars,
    counter,
    todo
})

export default reducer