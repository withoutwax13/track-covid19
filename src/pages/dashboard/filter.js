import React from 'react'
import PropTypes from 'prop-types'

import { FilterWrapper, FilterSelect } from './style'

const Filter = ({handleFilterChange}) => {

	const [ filter, setFilter ] = React.useState('thisMonth')
	
	React.useEffect(()=>{
		if(filter){
			handleFilterChange(filter)
		}
	}, [filter, handleFilterChange])

	return (
		<FilterWrapper>
			<FilterSelect value={filter} onChange={e=>setFilter(e.target.value)}>
				<option value='thisMonth'>THIS MONTH</option>
				<option value='lastMonth'>FROM LAST MONTH</option>
				<option value='lastThreeMonths'>FROM LAST 3 MONTHS</option>
				<option value='alltime'>FROM EARLIEST DATA</option>
			</FilterSelect>
		</FilterWrapper>
	)
}

Filter.propTypes = {
	handleFilterChange: PropTypes.func.isRequired
}

export default Filter