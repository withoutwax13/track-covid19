import React from 'react'

import HeaderWrapper from './HeaderWrapper'
import ProductLogo from './ProductLogo'
import SearchBar from './SearchBar'
import { StyledNavLinkHeading, StyledNavHeading } from './Heading'
import BurgerMenu from './Burger'

import history from '../../pages/history'

const Header = () => {
	return (
		<HeaderWrapper>
			<ProductLogo onClick={()=>history.push('/')}>COVID-19 TRACKER</ProductLogo>
			<SearchBar>Search</SearchBar>
			<StyledNavHeading href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen' color='red'>COVID-19</StyledNavHeading>
			<StyledNavLinkHeading to='/dashboard'>DASHBOARD</StyledNavLinkHeading>
			<StyledNavLinkHeading to='/about'>ABOUT</StyledNavLinkHeading>
			<BurgerMenu/>
		</HeaderWrapper>
	)
}

export default Header