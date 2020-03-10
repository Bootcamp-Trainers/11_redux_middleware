import React from 'react'
import './Table.css'
import { connect } from 'react-redux'
import {
    addPerson,
    deletePerson,
    editPerson,
    fetchMorePeople
} from '../../actions/starwars'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            name: '',
            height: '',
            isEditing: {
                id: -1,
                name: '',
                height: -1
            }
        }
    }

    componentDidMount() {
        this.props.fetchMorePeople()
    }

    loadMore = () => {
        const { fetchMorePeople } = this.props
        this.setState(
            state => ({
                page: state.page + 1
            }),
            () => {
                fetchMorePeople(this.state.page)
            }
        )
    }

    next = () => {
        const { fetchMorePeople } = this.props
        this.setState(
            state => ({
                page: state.page + 1
            }),
            () => {
                fetchMorePeople(this.state.page)
            }
        )
    }
    previous = () => {
        const { fetchMorePeople } = this.props
        this.setState(
            state => ({
                page: state.page - 1
            }),
            () => {
                fetchMorePeople(this.state.page)
            }
        )
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    editOnChange = (e, id, key) => {
        // console.log(e, id, key)
        e.persist()
        this.setState(
            state => ({
                isEditing: { ...state.isEditing, id, [key]: e.target.value }
            })
        )
    }

    onClickEdit = () => {
        const { editPerson } = this.props
        editPerson(this.state.isEditing)
        this.setState({ isEditing: { id: -1, name: '', height: -1 } })
    }

    render() {
        const { people, loading, errorMessage, deletePerson, addPerson, editPerson } = this.props
        const { name, height, isEditing } = this.state

        if (errorMessage) {
            return <p> {errorMessage} </p>
        }

        return (
            <>
                {loading && <p>is Loading</p>}

                <div>
                    <label htmlFor="name">name : </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        placeholder="Insert To Do"
                    />
                    {/* Current value : {name} */}
                    <br />
                    <label htmlFor="height">height : </label>
                    <input
                        id="height"
                        type="text"
                        name="height"
                        value={height}
                        onChange={this.onChange}
                        placeholder="Insert To Do"
                    />
                    {/* Current value : {height} */}
                    <br />
                    <button onClick={() => addPerson({ name, height })}>
                        Add+
                    </button>
                </div>


                <div>
                    {/* <h1>Current Page : {this.state.page}</h1> */}
                    <table>
                        <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Action</th>
                        </tr>
                        {people.map((x, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td> {x.id}
                                </td>
                                <td>
                                    <p onClick={() => this.setState({ isEditing: { id: x.id, name: x.name, height: x.height } })}>
                                        {x.name}
                                        {isEditing.id === x.id &&
                                            <input
                                                type="text"
                                                value={isEditing.name}
                                                placeholder={isEditing.name}
                                                name="isEditing"
                                                onChange={e => this.editOnChange(e, x.id, 'name')}
                                            />
                                        }
                                    </p>
                                    <button onClick={this.onClickEdit}>Update</button>
                                </td>
                                <td>
                                    {x.height} cm
                                        {isEditing.id === x.id &&
                                        <input
                                            type="text"
                                            value={isEditing.height}
                                            placeholder={isEditing.height}
                                            name="isEditing"
                                            onChange={e => this.editOnChange(e, x.id, 'height')}
                                        />
                                    }
                                </td>
                                <td><button onClick={() => deletePerson(x.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </table>
                    <button onClick={this.previous}>Previos Page</button>
                    <h4>{this.state.page}</h4>
                    <button onClick={this.next}>Next Page</button>
                    <button onClick={this.loadMore}>Load More</button>
                </div >
            </>
        )
    }
}

const mapStateToProps = state => ({
    // data: state.starwars
    people: state.starwars.people,
    loading: state.starwars.loading,
    errorMessage: state.starwars.errorMessage
})
const mapDispatchToProps = dispatch => ({
    addPerson: payload => dispatch(addPerson(payload)),
    deletePerson: id => dispatch(deletePerson(id)),
    editPerson: id => dispatch(editPerson(id)),
    fetchMorePeople: page => dispatch(fetchMorePeople(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)