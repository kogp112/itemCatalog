import React from 'react'

const ItemDetail = ({ item_info }) => (
    <div>
        <img src={require(`../../assets/img/item_image/${item_info.name}.png`)} height="200px" width="200px"/>
        <p>{item_info.name}</p>
        <p>{item_info.genre}</p>
        <p>{item_info.color}</p>
        <p>{item_info.description}</p>
    </div>
)

export default ItemDetail