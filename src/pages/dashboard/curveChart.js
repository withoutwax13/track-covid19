import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Legend } from 'recharts'

import { fetchConfirmedRecords } from '../../redux/actions'
import { FilterWrapper, ChartWrapper, Heading } from './style'
import Filter from './filter'
import { getStartEndDates, processData } from './methods'

const CurveChart = ({fetchConfirmedRecords, summary, focus, confirmedCases}) => {

	const [ dataFilter, setDataFilter ] = React.useState('')
	const [ countryName, setCountryName ] = React.useState('')

	React.useEffect(()=>{
		if(focus) { setCountryName(focus.name.split('').map(char => char === '-' ? ' ' : char).join('').toUpperCase()) }
		if(dataFilter && focus){
			let slug = focus.name
			const { startDate, endDate } = getStartEndDates(dataFilter, summary)
			fetchConfirmedRecords(slug, startDate, endDate)
		}
	}, [dataFilter, focus, fetchConfirmedRecords, summary])


	const getFilter = (filter) => {
		setDataFilter(filter)
	}

	return (
		<ChartWrapper>
			<FilterWrapper>
				<Heading>{countryName}</Heading>
				<Filter handleFilterChange={getFilter}/>
			</FilterWrapper>
			<LineChart width={1150} height={400} data={processData(confirmedCases)}
			  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			  <CartesianGrid strokeDasharray="3 3" />
			  <XAxis dataKey="Date" />
			  <YAxis type='number' scale='log' domain={[1, 50000]}/>
			  <Legend />
			  <Line type="monotone" dataKey="Confirmed Cases" stroke="#8884d8" />
			</LineChart>
		</ChartWrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		summary: state.dataSummary,
		focus: state.globeFocus,
		confirmedCases: state.confirmedCases
	}
}

export default connect(mapStateToProps, { fetchConfirmedRecords })(CurveChart)