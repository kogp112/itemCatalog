import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
            <div>
                <UlList>
                    {this.props.items.map(item => (
                        <List>
                            <Link to={{ pathname: '/detail/' + item.name, query: { item } }} onClick={this.handleToDetailPage}>
                                <img src={require(`../../assets/img/item_image/${item.name}.png`)} height="200px" width="200px"/>
                                {item.name}
                            </Link>
                        </List>
                    ))}
                </UlList>
            </div>
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
    margin: 0 40% 0 0;
    float: right;
`;


export default ItemList