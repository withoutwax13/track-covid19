import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const StyledNavLinkHeading = styled(Link)`
	font-size: 1.0em;
	font-weight: bold;
	margin: 5px 0;
	text-decoration: none;
	color: ${(props)=>props.color ? props.color : `black`};


	  ##Device = Tablets, Ipads (portrait)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Tablets, Ipads (landscape)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Low Resolution Tablets, Mobiles (Landscape)
	  ##Screen = B/w 481px to 767px
	*/

	@media (min-width: 481px) and (max-width: 767px) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Most of the Smartphones Mobiles (Portrait)
	  ##Screen = B/w 320px to 479px
	*/

	@media (min-width: 320px) and (max-width: 480px) {
	  
	  display: none;
	  
	}
`

export const StyledNavHeading = styled.a`
	font-size: 1.0em;
	font-weight: bold;
	margin: 5px 0;
	text-decoration: none;
	color: ${(props)=>props.color ? props.color : `black`};


	  ##Device = Tablets, Ipads (portrait)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Tablets, Ipads (landscape)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Low Resolution Tablets, Mobiles (Landscape)
	  ##Screen = B/w 481px to 767px
	*/

	@media (min-width: 481px) and (max-width: 767px) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Most of the Smartphones Mobiles (Portrait)
	  ##Screen = B/w 320px to 479px
	*/

	@media (min-width: 320px) and (max-width: 480px) {
	  
	  display: none;
	  
	}
`