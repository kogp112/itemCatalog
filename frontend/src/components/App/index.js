import React from 'react'
import Button from '../../containers/Button'
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
                <UlGenre>
                    <LiGenre>
                        <Button genre="skirt" />
                    </LiGenre>
                    <LiGenre>
                        <Button genre="pants" />
                    </LiGenre>
                    <LiGenre>
                        <Button genre="shirt" />
                    </LiGenre>
                </UlGenre>
                <UlColor>
                    <LiColor>
                        <Color color="red" />
                    </LiColor>
                    <LiColor>
                        <Color color="yellow" />
                    </LiColor>
                    <LiColor>
                        <Color color="blue" />
                    </LiColor>
                    <LiColor>
                        <Color color="green" />
                    </LiColor>
                </UlColor>
            </Router>
        )
    }
}

const UlColor = styled.ul`
    width: 170px;
    list-style: none outside;
`;

const UlGenre = styled.ul`
    width: 170px;
    margin: 50px 50px 0px 0px;
    list-style: none outside;
`;

const LiGenre = styled.li`
    list-style: none;
    margin: 5px 0px 0px 0px;
`;

const LiColor = styled.li`
    padding: 0;
    margin: 5px;
    float: left;
    width: 75px;
`;

const Lists = styled.ul`
    width: 200px;
    margin: 0 68% 0 0;
    padding: 0px;
    float: right;
`;

export default App;
