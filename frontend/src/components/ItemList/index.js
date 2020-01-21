import React from 'react'
import styled from 'styled-components'
import Detail from '../../containers/Detail'

import {
    BrowserRouter as Router,
    Link,
    Route
  } from "react-router-dom"
  

class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.handleToDetailPage = this.handleToDetailPage.bind(this)
    }
    componentDidMount() {
        this.props.showItemList('')
    }
    
    handleToDetailPage() {
        this.props.hideItemList('')
    }
    
    render() {
        const items = this.props.items
        if(items === undefined) {
            return null
        }
        return (
            <Router>
                <div>
                    <UlList>
                        {this.props.items.map(item => (
                            <List>
                                    <Link to={{pathname: "/detail", query: {item}}} onClick={this.handleToDetailPage}>
                                    <img src={require(`../../assets/img/item_image/${item.name}.png`)} height="200px" width="200px"/>
                                    {item.name}
                                    </Link>
                            </List>
                        ))}
                    </UlList>
                </div>
                <Route path="/detail" component={Detail} />
            </Router>
        )
    }
}

const List = styled.li`
    width: 200px;
    float: left;
    margin: 0px 40px 0 0;
    list-style: none;
`;

const UlList = styled.ul`
    width: 500px;
    margin: 0;
`;


export default ItemList