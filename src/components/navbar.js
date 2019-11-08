import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">Finance</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            
                        </ul>

                        <form className="form-inline my-2 my-md-0">
                            <input className="form-control" type="text" placeholder="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}