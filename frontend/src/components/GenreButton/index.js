import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const GenreButton = ({ onClick, genre }) => (
  <Link to="/">
    <Button onClick={onClick}>{genre}</Button>
  </Link>
)

export default GenreButton

const Button = styled.button`
  width: 170px;
  height: 45px;
  padding: 0;
  overflow: visible;
  background-color: white;
`;