import { TOGGLE_MENU, DATA_SUMMARY, SET_GLOBE_FOCUS } from '../actionTypes'
import { countriesData as countries } from '../../api/countries'

export const toggleMenu = (toOpen) => {
	return {
		type: TOGGLE_MENU,
		payload: toOpen
	}
}

export const fetchDataSummary = (summaryData) => {
	return {
		type: DATA_SUMMARY,
		payload: summaryData
	}
}

export const setGlobeFocus = (country) => {
	let payload = {
		name: '',
		coords: {
			lat: 0, 
			lng: 0
		}
	}

	countries.forEach(item=>{
		if (item.name.toLowerCase() === country.toLowerCase()){
			payload = {
				name: country,
				coords: {
					lat: item.lat, 
					lng: item.lng
				}
			}
		}
	})
	return {
		type: SET_GLOBE_FOCUS,
		payload: payload
	}
}