import React from 'react'
import Genre from '../../containers/Genre'
import Color from '../../containers/Color'
import List from '../../containers/List'
import Detail from '../../containers/Detail'

import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            genre: '',
            color: ''
        };
    }
    
    render() {
        return (
            <Router>
                <Route exact path={'/'}>
                    <List />
                </Route>
                <Route path={'/detail/:name'}
                    render={props => <Detail item={this.items} {...props} />}/>
                <Genre />
                <Color />
            </Router>
        )
    }
}

export default App;
