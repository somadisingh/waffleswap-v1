import React, { Component } from 'react'
import Identicon from 'identicon.js';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="https://youtu.be/d_XOWCoUAHY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WaffleSwap
                </a>
                <ul className='navbar-nav px-3'>
                    <li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
                        <small className='text-secondary'>
                            <small id="account">{this.props.account}</small>
                        </small>
                        {
                            this.props.account //if the account exists, show icon
                                ? <img
                                    className='ml-2'
                                    width='20'
                                    height='20'
                                    src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                                    alt=""
                                />
                                : <span></span>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
