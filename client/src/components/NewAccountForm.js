import React, {Component} from 'react'
import './NewAccountForm.css'

class NewAccountForm extends Component {
    state = {
        user: {
            userName: '',
            password: '',
            email: '',
            image: 'https://imgur.com/SQwNGsa.jpg'
        }
    }

    handleInput = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUser = { ...this.state.user }
        newUser[attributeName] = attributeValue

        this.setState({ user: newUser }, function(){
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // createNewUser(this.state.user)
        this.props.handleNewUser(this.state.user)
    }

    render(){
        return(
        <div >
            <form>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" name="userName" placeholder="User Name" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="user@email.com" onChange={this.handleInput} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="password" onChange={this.handleInput} />
                </div>
                <input className="user-submit-button" type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
        </div> 
        )
    }
}

export default NewAccountForm;