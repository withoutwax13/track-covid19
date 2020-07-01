import PropTypes from 'prop-types'

export const getStartEndDates = (dataFilter, summary) => {
	
	let startDate = {year: '', month: '', day: ''}
	let endDate = {year: '', month: '', day: ''}
	switch(dataFilter){
				case 'thisMonth':
					if (`${summary.Date[8]}${summary.Date[9]}` !== `01`){
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
					} else {
						endDate = {
							year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
							month: `${summary.Date[5]}${summary.Date[6]}`,
							day: `${summary.Date[8]}${summary.Date[9]}`
						}
						startDate = {
							year: `${summary.Date[0]}${summary.Date[1]}${summary.Date[2]}${summary.Date[3]}`,
							month: `${summary.Date[5]}${Number(`${summary.Date[6]}`) - 1}`,
							day: `01`
						}
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
						day: `01`
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
						day: `01`
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
						month: `01`,
						day: `01`
					}
					break
				default:
					break

			}
	return { startDate, endDate }
}

export const processData = (confirmedCases) => {
	const processedData = []
	if (confirmedCases){
		const uniqueCases = confirmedCases.filter(item=>item.Province === '')
		if (uniqueCases.length > 0){
			uniqueCases.forEach((currentValue, currentIndex)=>{
				if (currentIndex !== uniqueCases.length - 1){
					 processedData.push(
						{
							'Date': `${uniqueCases[currentIndex + 1].Date[5]}${uniqueCases[currentIndex + 1].Date[6]}${uniqueCases[currentIndex + 1].Date[7]}${uniqueCases[currentIndex + 1].Date[8]}${uniqueCases[currentIndex + 1].Date[9]}`,
							'Confirmed Cases': uniqueCases[currentIndex + 1].Cases - currentValue.Cases ? Math.abs(uniqueCases[currentIndex + 1].Cases - currentValue.Cases) : 1
						}
					)
				}
			})
		}else{
			let uniqueMonths = []
			let uniqueCases = []
			confirmedCases.forEach((currentValue)=>{
				let date = `${currentValue.Date[5]}${currentValue.Date[6]}${currentValue.Date[7]}${currentValue.Date[8]}${currentValue.Date[9]}`
				if(uniqueMonths.indexOf(date) === -1){
					uniqueCases.push({
						'Date': currentValue.Date,
						'Cases': currentValue.Cases
					})
					uniqueMonths.push(date)
				} else {
					uniqueCases.forEach(value=>{
						if(value.Date === currentValue.Date){
							value.Cases += currentValue.Cases
						}
					})
				}
			})
			uniqueCases.forEach((currentValue, currentIndex)=>{
				if (currentIndex !== uniqueCases.length - 1){
					 processedData.push(
						{
							'Date': `${uniqueCases[currentIndex + 1].Date[5]}${uniqueCases[currentIndex + 1].Date[6]}${uniqueCases[currentIndex + 1].Date[7]}${uniqueCases[currentIndex + 1].Date[8]}${uniqueCases[currentIndex + 1].Date[9]}`,
							'Confirmed Cases': uniqueCases[currentIndex + 1].Cases - currentValue.Cases ? Math.abs(uniqueCases[currentIndex + 1].Cases - currentValue.Cases) : 1
						}
					)
				}
			})
		}
	}
	return processedData
}

getStartEndDates.propTypes = {
	dataFilter: PropTypes.string,
	summary: PropTypes.object
}

processData.propTypes = {
	confirmedCases: PropTypes.array
}