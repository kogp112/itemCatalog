import React from 'react'
import { connect } from 'react-redux'
import GenreButton from '../../components/GenreButton'
import { showItem } from '../../actions'
import styled from 'styled-components'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(genre) {
        const button_genre = { genre: genre }
        this.props.dispatch(showItem(button_genre))
    }
    
    render() {
        return (
            <>
                <UlGenre>
                    <LiGenre><GenreButton genre='skirt' onClick={() => this.handleClick('skirt')} /></LiGenre>
                    <LiGenre><GenreButton genre='pants' onClick={() => this.handleClick('pants')} /></LiGenre>
                    <LiGenre><GenreButton genre='shirt' onClick={() => this.handleClick('shirt')} /></LiGenre>
                </UlGenre>
            </>
        )
    }
}

const UlGenre = styled.ul`
    width: 170px;
    margin: 50px 50px 0px 0px;
    list-style: none outside;
`;

const LiGenre = styled.li`
    list-style: none;
    margin: 5px 0px 0px 0px;
`;

export default connect()(Button)
