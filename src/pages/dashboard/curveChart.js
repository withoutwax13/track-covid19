import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

import { fetchConfirmedRecords } from '../../redux/actions'
import { FilterWrapper, ChartWrapper, Heading } from './style'
import Filter from './filter'
import { getStartEndDates, processData } from './methods'
import PropTypes from 'prop-types'

const CurveChart = ({fetchConfirmedRecords, summary, focus, confirmedCases}) => {

	const [ dataFilter, setDataFilter ] = React.useState('')
	const [ countryName, setCountryName ] = React.useState('')

	let chartData = processData(confirmedCases)

	React.useEffect(()=>{
		if(focus) { setCountryName(focus.name.split('').map(char => char === '-' ? ' ' : char).join('').toUpperCase()) }
		if(dataFilter && focus && summary){
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
			<LineChart width={1150} height={400} data={chartData}
			  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			  <CartesianGrid strokeDasharray="3 3" />
			  <XAxis dataKey="Date" />
			  <YAxis type='number' scale='log' domain={[1, 50000]}/>
			  <Legend />
			  <Tooltip/>
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

CurveChart.propTypes = {
	fetchConfirmedRecords: PropTypes.func.isRequired,
	summary: PropTypes.object,
	focus: PropTypes.object,
	confirmedCases: PropTypes.array
}

export default connect(mapStateToProps, { fetchConfirmedRecords })(CurveChart)