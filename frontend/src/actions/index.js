import axios from 'axios'

export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_GENRE = 'SHOW_GENRE'
export const SHOW_COLOR = 'SHOW_COLOR'
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
    if ( props.genre !== undefined ) {
        api = "http://localhost:3000/data?genre=" + props.genre
        type = SHOW_GENRE
        genre = props.genre
    } else if ( props.color !== undefined ) {
        api = "http://localhost:3000/data?color=" + props.color
        type = SHOW_COLOR
        color = props.color
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
