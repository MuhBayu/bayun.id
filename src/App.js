import React from 'react';
import Nav from './components/nav'
import './App.css';
import './App.dark.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <main className="wrapper">
        <Nav/>

        <div className="content">
            <section className="container centered">
                <div className="about">
                    <div className="avatar"><img src="https://avatars3.githubusercontent.com/u/12170893" alt="avatar" /></div>

                    <h1>Mochammad Bayu Nugraha</h1>
                    <h2>Back-End Engineer</h2>

                    <ul>
                        <li>
                            <a href="https://github.com/MuhBayu/" aria-label="Github">
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/bayun_12/" aria-label="Twitter">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/bayunugraha/" aria-label="LinkedIn">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@bayun.id" aria-label="LinkedIn">
                                <i className="fa fa-envelope-square" aria-hidden="true"></i>
                            </a>
                        </li>

                    </ul>

                </div>
            </section>

        </div>

        <footer className="footer">
            <section className="container">

                <p>Hire me.</p>

            </section>
        </footer>

    	</main>
    </div>
  );
}

export default App;
