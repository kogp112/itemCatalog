import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import redImage from '../../assets/img/color_button/red.png'
import blueImage from '../../assets/img/color_button/blue.png'
import greenImage from '../../assets/img/color_button/green.png'
import yellowImage from '../../assets/img/color_button/yellow.png'

class ColorButton extends React.Component {
  
  render() {
    let imgSrc = ''
    if (this.props.color === 'red') {
      imgSrc = redImage
    } else if (this.props.color === 'blue') {
      imgSrc = blueImage
    } else if (this.props.color === 'yellow') {
      imgSrc = yellowImage
    } else if (this.props.color === 'green') {
      imgSrc = greenImage
    }
    
    return (
      <div>
        <Link to="/">
          <Button onClick={this.props.onClick}>
            <Img src={imgSrc} />
          </Button>
        </Link>
      </div>
    )
  }
}

const Button = styled.button`
  width: 75px;
  padding: 0;
  margin: 0;
  background: none;
  border: 0;
  font-size: 0;
  line-height: 0;
  overflow: visible;
  cursor: pointer;
`;

const Img = styled.img`
  width: 75px;
  height: 75px;
`;

export default ColorButton