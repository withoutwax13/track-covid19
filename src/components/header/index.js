import React from 'react'

import HeaderWrapper from './HeaderWrapper'
import ProductLogo from './ProductLogo'
import SearchBar from './SearchBar'
import LogoLink from './LogoLink'
import { StyledNavLinkHeading, StyledNavHeading } from './Heading'
import BurgerMenu from './Burger'

import githubLogo from '../../assets/github-logo.png'

const Header = () => {
	return (
		<HeaderWrapper>
			<ProductLogo to='/'>COVID-19 TRACKER</ProductLogo>
			<SearchBar>Search</SearchBar>
			<StyledNavHeading href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen' color='red'>COVID-19</StyledNavHeading>
			<StyledNavLinkHeading to='/dashboard'>DASHBOARD</StyledNavLinkHeading>
			<LogoLink src={githubLogo} href='https://github.com/withoutwax13/track-covid19'/>
			<BurgerMenu/>
		</HeaderWrapper>
	)
}

export default Header