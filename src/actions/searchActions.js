import { SEARCH } from './types'

export const search = text => dispatch => {
    dispatch({
        type: SEARCH,
        payload: text
    })
}