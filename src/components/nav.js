import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                    <section className="container">
                        <Link className="navigation-title" to="/">Bayun.id</Link>
                        <input type="checkbox" id="menu-toggle" />
                        <label className="menu-button float-right" for="menu-toggle"><i className="fa fa-bars"></i></label>
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <Link className="navigation-link" to="/about">About</Link>
                            </li>
    
                            <li className="navigation-item">
                                <a className="navigation-link" href="https://bayyu.net">Projects</a>
                            </li>
                            <li className="navigation-item">
                                <a className="navigation-link" href="mailto:m.bayuu.nugraha@gmail.com">Contact me</a>
                            </li>    
                        </ul>
                    </section>
                </nav>
            </div>
        );
    }
}
export default Nav;