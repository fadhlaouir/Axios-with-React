import React, {
    Component
} from 'react'
import axios from 'axios'



export default class PersonInput extends Component {
    state = {
        id: 0,
        name: '',
    }
    handleChange = e => { this.setState({ name: e.target.value }) }
    handleDelete = e => { this.setState({ id: e.target.value }) }
    handleSubmit = e => {
        e.preventDefault();
        const user = {
            name: this.state.name
        }
        //INSERT
        axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data)
            })

        //UPDATE
        // axios
        //     .put(`https://jsonplaceholder.typicode.com/users`, { user })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data)
        //     })

        //DELETE
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data)
            })

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Person Name:
                     <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">ADD</button>
                </div>
                <div>
                    <label>Person ID:
                     <input type="number" name="id" onChange={this.handleDelete} />
                    </label>
                    <button type="submit">DELETE</button>
                </div>
            </form>
        )
    }
}