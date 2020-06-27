import React from 'react'
import { Wrapper, Label, Data, Button } from './style'

const GlobalSummaryData = ({summary}) => {
	return (
		<Wrapper>
			<h3 style={{margin: '0 auto'}}>GLOBAL</h3>
			<Label>New Confirmed</Label>
				<Data>{summary.Global.NewConfirmed}</Data>
			<Label>New Deaths</Label>
				<Data>{summary.Global.NewDeaths}</Data>
			<Label>New Recovered</Label>
				<Data>{summary.Global.NewRecovered}</Data>
			<Label>Total Confirmed</Label>
				<Data>{summary.Global.TotalConfirmed}</Data>
			<Label>Total Deaths</Label>
				<Data>{summary.Global.TotalDeaths}</Data>
			<Label>Total Recovered</Label>
				<Data>{summary.Global.TotalRecovered}</Data>

			<Button>Global Charts</Button>
		</Wrapper>
	)
}

export default GlobalSummaryData