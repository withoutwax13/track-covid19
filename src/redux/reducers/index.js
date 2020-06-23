import { combineReducers } from 'redux'

const menuReducer = (isOpen = false, action) => {
	switch(action.type){
		case 'TOGGLE_MENU':
			return action.payload
		default:
			return isOpen
	}
}

export default combineReducers({
	menuStatus: menuReducer
})