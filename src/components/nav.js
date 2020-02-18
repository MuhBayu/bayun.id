import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                    <section className="container">
                        <a className="navigation-title" href="#">Bayun.id</a>
                        <input type="checkbox" id="menu-toggle" />
                        <label className="menu-button float-right" for="menu-toggle"><i className="fas fa-bars"></i></label>
                        <ul className="navigation-list">
                            <li className="navigation-item">
                                <a className="navigation-link" href="#">About</a>
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