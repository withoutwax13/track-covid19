import React from 'react'

import HeaderWrapper from './HeaderWrapper'
import ProductLogo from './ProductLogo'
import SearchBar from './SearchBar'
import Heading from './Heading'
import BurgerMenu from './Burger'

const Header = () => {
	return (
		<HeaderWrapper>
			<ProductLogo>COVID-19 TRACKER</ProductLogo>
			<SearchBar>Search</SearchBar>
			<Heading path='#' highlight>COVID-19</Heading>
			<Heading path='#'>GLOBAL STATISTICS</Heading>
			<Heading path='#'>ABOUT	</Heading>
			<BurgerMenu/>
		</HeaderWrapper>
	)
}

export default Header