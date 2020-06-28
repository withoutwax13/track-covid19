import React from 'react'
import ReactDOM from 'react-dom'
import { Wrapper, Label, Data, Button } from './style'

const LocalSummaryData = ({summary, focus, loadingLocal, shouldFocus}) => {

	if (!loadingLocal && focus.name){
		let localData = {};
		let selectedSlug = focus.name.split('').map(char => char === ' ' ? '-' : char).join('')
		summary.Countries.forEach(item=>{
			if (item.Slug === selectedSlug.toLowerCase()){
				localData = item;
			}
		})

		return (
			<Wrapper>
				<h3 style={{margin: '0 auto'}}>{focus.name.toUpperCase()}</h3>
				<Label>New Confirmed</Label>
					<Data>{localData.NewConfirmed && localData.NewConfirmed !== 0 ? localData.NewConfirmed : `N/A`}</Data>
				<Label>New Deaths</Label>
					<Data>{localData.NewDeaths && localData.NewDeaths !== 0 ? localData.NewDeaths : `N/A`}</Data>
				<Label>New Recovered</Label>
					<Data>{localData.NewRecovered && localData.NewRecovered !== 0 ? localData.NewRecovered : `N/A`}</Data>
				<Label>Total Confirmed</Label>
					<Data>{localData.TotalConfirmed && localData.TotalConfirmed !== 0 ? localData.TotalConfirmed : `N/A`}</Data>
				<Label>Total Deaths</Label>
					<Data>{localData.TotalDeaths && localData.TotalDeaths !== 0 ? localData.TotalDeaths : `N/A`}</Data>
				<Label>Total Recovered</Label>
					<Data>{localData.TotalRecovered && localData.TotalRecovered !== 0 ? localData.TotalRecovered : `N/A`}</Data>
			</Wrapper>
		)
	}else{
		return (
			<Wrapper inactive/>
		)
	}
}

export default LocalSummaryData