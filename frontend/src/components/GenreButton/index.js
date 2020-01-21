import React from 'react'
import styled from 'styled-components'

const GenreButton = ({ onClick, genre }) => (
    <div>
        <Button onClick={onClick}>{genre}</Button>
    </div>
)

export default GenreButton

const Button = styled.button`
  width: 170px;
  height: 45px;
  padding: 0;
  overflow: visible;
  background-color: white;
`;