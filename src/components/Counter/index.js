import React from 'react'
import { connect } from 'react-redux'
import { increment as incrementAction, decrement as decrementAction } from '../../actions'

const Counter = ({counter, increment, decrement}) => (
    <div>
        <button onClick={() => decrement(1)}>-</button>
        {counter}
        <button onClick={() => increment(1)}>+</button>
    </div>
)

const mapStateToProps = (state) => ({
    counter: state.counter
})
const mapDispatchToProps = (dispatch) => ({
    increment: payload => dispatch(incrementAction(payload)),
    decrement: payload => dispatch(decrementAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

