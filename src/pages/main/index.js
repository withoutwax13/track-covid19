import React from 'react'

import Wrapper from './Wrapper'
import SummaryWrapper from './SummaryWrapper'
import SearchBar from './SearchBar'
import GlobeVisual from '../../components/globe/Globe'
import SummaryBox from '../../components/summary'

const Home = () => {
	return (
		<Wrapper>
			<SearchBar>Search a country</SearchBar>
			<GlobeVisual/>
			<SummaryWrapper>
				<SummaryBox type='global'/>
				<SummaryBox type='local'/>
			</SummaryWrapper>
		</Wrapper>
	)
}

export default Home