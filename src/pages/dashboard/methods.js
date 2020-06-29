export const getStartEndDates = (dataFilter, summary) => {
	
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
	return { startDate, endDate }
}

export const processData = (confirmedCases) => {
	const processedData = []
	if (confirmedCases){
		const uniqueCases = confirmedCases.filter(item=>item.Province === '')
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