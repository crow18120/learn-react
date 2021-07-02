import { count } from "./CountReducer.js"
import {combineReducers} from 'redux'

export default combineReducers({countState: count, })
