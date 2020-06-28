import React from 'react'
import { connect } from 'react-redux'
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Legend, Tooltip } from 'recharts'

import { fetchConfirmedRecords } from '../../redux/actions'
import { FilterWrapper, ChartWrapper, Heading } from './style'
import Filter from './filter'

const CurveChart = ({fetchConfirmedRecords, summary, focus, confirmedCases}) => {

	const [ dataFilter, setDataFilter ] = React.useState('')
	const [ countryName, setCountryName ] = React.useState('')

	React.useEffect(()=>{
		if(dataFilter && focus){
			
			let slug = focus.name
			setCountryName(focus.name.split('').map(char => char === '-' ? ' ' : char).join('').toUpperCase())
			let startDate = {year: '', month: '', day: ''}
			let endDate = {year: '', month: '', day: ''}

			switch(dataFilter){
				case 'thisMonth':
					endDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${summary.Date[6]}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					startDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${summary.Date[6]}`,
						day: `01`
					}
					break
				case 'lastMonth':
					endDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${summary.Date[6]}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					startDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${Number(`${summary.Date[6]}`) - 1}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					break
				case 'lastThreeMonths':
					endDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${summary.Date[6]}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					startDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${Number(`${summary.Date[6]}`) - 2}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					break
				case 'lastFourMonths':
					endDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${summary.Date[6]}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					startDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${Number(`${summary.Date[6]}`) - 3}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					break
				case 'alltime':
					endDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `${summary.Date[5]}${summary.Date[6]}`,
						day: `${summary.Date[8]}${summary.Date[9]}`
					}
					startDate = {
						year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
						month: `02`,
						day: `25`
					}
					break
				default:
					break

			}

			fetchConfirmedRecords(slug, startDate, endDate)

		}
	}, [dataFilter, focus])


	const getFilter = (filter) => {
		setDataFilter(filter)
	}

	const processData = () => {
		const processedData = []
		if (confirmedCases){
			const uniqueCases = confirmedCases.filter(item=>item.Province === '' && item.Date !== '2020-06-25T00:00:00Z')
			uniqueCases.forEach((currentValue, currentIndex)=>{
				 if (currentIndex !== uniqueCases.length - 1){
				 	processedData.push(
						{
							'Date': `${uniqueCases[currentIndex + 1].Date[5]}${uniqueCases[currentIndex + 1].Date[6]}${uniqueCases[currentIndex + 1].Date[7]}${uniqueCases[currentIndex + 1].Date[8]}${uniqueCases[currentIndex + 1].Date[9]}`,
							'Confirmed Cases': uniqueCases[currentIndex + 1].Cases - currentValue.Cases ? uniqueCases[currentIndex + 1].Cases - currentValue.Cases : 1
						}
					)
				}
			})
		}
		return processedData
	}

	const data = processData()

	return (
		<ChartWrapper>
			<FilterWrapper>
				<Heading>{countryName}</Heading>
				<Filter handleFilterChange={getFilter}/>
			</FilterWrapper>
			<LineChart width={1200} height={400} data={data}
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