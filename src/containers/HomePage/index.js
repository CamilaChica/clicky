import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component
{
    authenticate=()=>{
        this.props.onLogIn();
    }
    render()
    {
        return <div>
            <h1 className="col-7 offset-3 Homph1">Welcome to 'Tasty Ice Cream'</h1>
            <h4 className="col-6 offset-3">This is a Clicky Game.</h4>
            {!this.props.authenticated&&
    <div className="row">
        <div className="col-4 offset-4">
            <div className="input-group">
                <input type="text" name="email" placeholder="Enter your E-Mail" className="form-control"/>
            </div>
            <div className="input-group">
                <input type="password" name="password" placeholder="Enter your Password" className="form-control"/>
            </div>
            <p></p>
            <button onClick={this.authenticate} className="btn btn-primary">Log In</button>
        </div>
    </div>}
    {this.props.authenticated&&
    <div className="row">
        <div className="col-6 offset-3">
            <h2><b>Let's play the game!</b></h2>
            <Link to="/game" className="btn btn-primary">Start the GAME</Link>
        </div>
    </div>
    }
                </div>
    }
}
export default HomePage;