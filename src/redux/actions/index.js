import { TOGGLE_MENU, DATA_SUMMARY, SET_GLOBE_FOCUS, CONFIRMED_CASES } from '../actionTypes'
import { countriesData as countries } from '../../api/countries'
import api from '../../api/api'

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

export const fetchConfirmedRecords = (countrySlug, startDate, endDate) => async dispatch => {
	await api
		.get(`country/${countrySlug}/status/confirmed/live?from=${startDate.year}-${startDate.month}-${startDate.day}T00:00:00Z&to=${endDate.year}-${endDate.month}-${endDate.day}T00:00:00Z`)
		.then((response)=>{
			console.log(response.data)
			dispatch({type: CONFIRMED_CASES, payload: response.data})
		})
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