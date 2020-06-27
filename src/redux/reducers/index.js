import { combineReducers } from 'redux'

import { TOGGLE_MENU, DATA_SUMMARY, SET_GLOBE_FOCUS } from '../actionTypes'
import { menuReducer_INITIAL, dataSummaryReducer_INITIAL, globeFocusReducer_INITIAL } from './INITIAL_STATE'

const menuReducer = (isOpen = menuReducer_INITIAL, action) => {
	switch(action.type){
		case TOGGLE_MENU:
			return action.payload
		default:
			return isOpen
	}
}

const dataSummaryReducer = (summary = dataSummaryReducer_INITIAL, action) => {
	switch(action.type){
		case DATA_SUMMARY:
			return action.payload
		default:
			return summary
	}
}

const globeFocusReducer = (focus = globeFocusReducer_INITIAL, action) => {
	switch(action.type){
		case SET_GLOBE_FOCUS:
			return action.payload
		default:
			return focus
	}
}

export default combineReducers({
	menuStatus: menuReducer,
	dataSummary: dataSummaryReducer,
	globeFocus: globeFocusReducer
})
