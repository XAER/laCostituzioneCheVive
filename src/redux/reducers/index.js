import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    articlesReducer, userReducer, loadingReducer
})

export default rootReducer