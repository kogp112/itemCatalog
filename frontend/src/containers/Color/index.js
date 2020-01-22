import React from 'react'
import { connect } from 'react-redux'
import ColorButton from '../../components/ColorButton'
import { showItem } from '../../actions'
import styled from 'styled-components'

class Color extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(color) {
        const button_color = { color: color}
        this.props.dispatch(showItem(button_color))
    }
    
    render() {
        return (
            <>
                <UlColor>
                    <LiColor><ColorButton color='red' onClick={() => this.handleClick('red')} /></LiColor>
                    <LiColor><ColorButton color='blue' onClick={() => this.handleClick('blue')} /></LiColor>
                    <LiColor><ColorButton color='green' onClick={() => this.handleClick('green')} /></LiColor>
                    <LiColor><ColorButton color='yellow' onClick={() => this.handleClick('yellow')} /></LiColor>
                </UlColor>
            </>
        )
    }
}

const UlColor = styled.ul`
    width: 170px;
    list-style: none outside;
`;

const LiColor = styled.li`
    padding: 0;
    margin: 5px;
    float: left;
    width: 75px;
`;

export default connect()(Color)
