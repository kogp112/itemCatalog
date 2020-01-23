import React from 'react'
import styled from 'styled-components'

const ItemDetail = ({ item_info }) => (
    <UlGenre>
        <LiGenre><img src={require(`../../assets/img/item_image/${item_info.name}.png`)} height="200px" width="200px"/></LiGenre>
        <LiGenre><p>Item Name: {item_info.name}</p></LiGenre>
        <LiGenre><p>Item Genre: {item_info.genre}</p></LiGenre>
        <LiGenre><p>Item Color: {item_info.color}</p></LiGenre>
        <LiGenre><p>Item Description: {item_info.description}</p></LiGenre>
    </UlGenre>
)

const UlGenre = styled.ul`
    width: 500px;
    margin: 0 40% 0 0;
    float: right;
`;

const LiGenre = styled.li`
    list-style: none;
`;

export default ItemDetail