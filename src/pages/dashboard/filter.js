import React from 'react'

import { FilterWrapper, FilterSelect } from './style'

const Filter = ({handleFilterChange}) => {
	const [ filter, setFilter ] = React.useState('')
	React.useEffect(()=>{
		if(filter){
			handleFilterChange(filter)
		}
	}, [filter])
	return (
		<FilterWrapper>
			<FilterSelect value={filter} onChange={e=>setFilter(e.target.value)}>
				<option value=''>--Select a filter--</option>
				<option value='thisMonth'>THIS MONTH</option>
				<option value='lastMonth'>LAST MONTH</option>
				<option value='lastThreeMonths'>LAST 3 MONTHS</option>
				<option value='lastFourMonths'>LAST 4 MONTHS</option>
				<option value='alltime'>ALL TIME</option>
			</FilterSelect>
		</FilterWrapper>
	)
}

export default Filter