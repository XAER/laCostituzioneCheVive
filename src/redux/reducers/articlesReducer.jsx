import * as constants from '../constants'

const defaultArticlesState = []

const INITIAL_STATE = defaultArticlesState

export default function articlesReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case constants.GET_ARTICLES:
            return {...action.payload}
        default:
            return INITIAL_STATE 
    }
}