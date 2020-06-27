import React from 'react'

import HeaderWrapper from './HeaderWrapper'
import ProductLogo from './ProductLogo'
import SearchBar from './SearchBar'
import Heading from './Heading'
import BurgerMenu from './Burger'

import history from '../../pages/history'

const Header = () => {
	return (
		<HeaderWrapper>
			<ProductLogo onClick={()=>history.push('/')}>COVID-19 TRACKER</ProductLogo>
			<SearchBar>Search</SearchBar>
			<Heading href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen' highlight>COVID-19</Heading>
			<Heading onClick={()=>history.push('/global-stats')}>GLOBAL STATISTICS</Heading>
			<Heading onClick={()=>history.push('/about')}>ABOUT	</Heading>
			<BurgerMenu/>
		</HeaderWrapper>
	)
}

export default Header