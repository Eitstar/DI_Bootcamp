import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: null,
        age: null,
        gender: null,
        destination: null,
        dietRestrictions: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
      };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" id="gender" onChange={this.handleChange}/>
                    <label htmlFor="destination">Destination:</label>
                    <input type="text" id="destination" onChange={this.handleChange}/>
                    <label htmlFor="dietRestrictions">Diet Restrictions:</label>
                    <input type="text" id="dietRestrictions" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;