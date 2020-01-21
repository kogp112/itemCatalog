import axios from 'axios'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_SKIRT = 'SHOW_SKIRT'
export const SHOW_PANTS = 'SHOW_PANTS'
export const SHOW_SHIRT = 'SHOW_SHIRT'
export const SHOW_RED = 'SHOW_RED'
export const SHOW_YELLOW = 'SHOW_YELLOW'
export const SHOW_BLUE = 'SHOW_BLUE'
export const SHOW_GREEN = 'SHOW_GREEN'
export const NOT_SHOW = 'NOT_SHOW'

const getPostsSuccess = (type, genre, color, json) => ({
    type: type,
    items: json,
    genre: genre,
    color: color
})

let type = ''
let color = ''
let genre = ''
let api = ''

export const showItem = (props) => {
    console.log('props is', props)
    if ( props.genre !== undefined ) {
        api = "http://localhost:3000/data?genre=" + props.genre
        if (props.genre === 'skirt') {
            type = SHOW_SKIRT
            genre = props.genre
        } else if (props.genre === 'pants') {
            type = SHOW_PANTS
            genre = props.genre
        } else if (props.genre === 'shirt') {
            type = SHOW_SHIRT
            genre = props.genre
        }
    } else if ( props.color !== undefined ) {
        api = "http://localhost:3000/data?color=" + props.color
        if (props.color === 'red') {
            type = SHOW_RED
            color = props.color
        } else if (props.color === 'yellow') {
            type = SHOW_YELLOW
            color = props.color
        } else if (props.color === 'blue') {
            type = SHOW_BLUE
            color = props.color
        } else if (props.color === 'green') {
            type = SHOW_GREEN
            color = props.color
        }
    } else {
        type = SHOW_ALL
        api = "http://localhost:3000/data"
    }
    return (dispatch) => {
        return axios.get(api)
          .then(res =>
            dispatch(getPostsSuccess(type, genre, color, res.data))
          ).catch(err => 
            console.log(err)
          )
      }
}

export const hideItem = () => {
    type = NOT_SHOW
    return (dispatch) => {
        dispatch(getPostsSuccess(type, genre, color, []))
    }
}
