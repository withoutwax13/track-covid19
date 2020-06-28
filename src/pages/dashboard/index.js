import React from 'react'

import SearchBar from '../main/SearchBar'
import { Wrapper } from './style'
import CurveChart from './curveChart'

const Dashboard = () => {
	return (
		<Wrapper>
			<SearchBar/>
			<CurveChart/>
		</Wrapper>
	)
}

export default Dashboard