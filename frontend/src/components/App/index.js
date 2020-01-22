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
                <Lists>
                    <Route path="/" render={() => <List />} />
                </Lists>
                <Genre />
                <Color />
            </Router>
        )
    }
}

const Lists = styled.ul`
    width: 200px;
    margin: 0 68% 0 0;
    padding: 0px;
    float: right;
`;

export default App;
