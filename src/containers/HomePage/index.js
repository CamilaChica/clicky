import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password:"",

        }
    }

    authenticate=()=>{
        this.props.onLogIn(
            {email:this.state.email}
        );
    }
    handleInputChange=(e)=>this.setState({[e.target.name]:e.target.value});
    render()
    {
        return <div>
            <h1 className="col-7 offset-3 Homph1">Welcome to <b>Tasty Ice Cream</b></h1>
            <h4 className="col-6 offset-3"><b>This is a Clicky Game.</b></h4>
            {!this.props.authenticated&&
    <div className="row">
        <div className="col-4 offset-4 inputs">
            <div className="input-group">
                <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Enter your E-Mail" className="form-control"/>
            </div>
            <div className="input-group">
                <input name="password" value={this.state.password} onChange={this.handleInputChange}  type="text" name="password" placeholder="Enter your Password" className="form-control"/>
            </div>
            <p></p>
            <button onClick={this.authenticate} className="btn btn-primary">Log In</button>
        </div>
    </div>}
    {this.props.authenticated&&
    <div className="row">
        <div className="col-6 offset-5 lptg">
            <h4>Let's play the game!</h4>
            <div className="row">
            <Link to="/game" className="btn btn-primary">Start the GAME</Link>
            </div>
        </div>
    </div>
    }
                </div>
    }
}
export default HomePage;