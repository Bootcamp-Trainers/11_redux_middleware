import React from 'react'
import { connect } from 'react-redux'
import {
    add_todo as addTodo
} from '../../actions'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: "",
            isCompleted: false
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    add = () => {
        const { data, add_todo } = this.props
        const { id, name, isCompleted } = this.state
        const nextId = data[data.length - 1].id + 1
        add_todo(
            {
                id: nextId,
                name,
                isCompleted
            }
        )
        this.setState(
            state => ({
                name: ''
            })

            // () => {
            //     this.setState({
            //         name: ''
            //     })
            // }
        )
    }

    render() {
        const { name } = this.state
        // const { data, add_todo } = this.props
        return (
            <>
                <div>
                    <label htmlFor="name">name : </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        placeholder="Insert To Do"
                    /> Current value : {name}
                    <br />
                    <button onClick={() => this.add()}>
                        Add+
                    </button>
                </div>
            </>
        )
    }
}


// const Input = ({ data, add_todo }) => {
//     return (
//         <div>
//             <label htmlFor="name">name : </label>
//             <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 placeholder="Insert To Do"
//             />
//             <button onClick={() => add_todo({
//                 id: data[data.length - 1].id + 1,
//                 name: "Coding",
//                 isCompleted: false
//             })}>
//                 Add+
//             </button>
//         </div>
//     )
// }

const mapStateToProps = (state) => ({
    data: state.todo
})
const mapDispatchToProps = (dispatch) => ({
    add_todo: payload => dispatch(addTodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Input)