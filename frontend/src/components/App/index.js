import React from 'react'
import Genre from '../../containers/Genre'
import Color from '../../containers/Color'
import List from '../../containers/List'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    
    render() {
        return (
            <Router>
                <Route exact path={'/'} component={List}/>
                <Genre />
                <Color />
            </Router>
        )
    }
}

export default App;
