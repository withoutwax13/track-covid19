import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const StyledNavLinkHeading = styled(Link)`
	font-size: 1.0em;
	font-weight: bold;
	margin: 10px auto;
	text-decoration: none;
	color: ${(props)=>props.color ? props.color : `black`};


	@media (min-width: 1281px) {
    
      display: none;
    
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
    
      display: none;
    
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    
      
    
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
      
    
    }


    @media (min-width: 481px) and (max-width: 767px) {
    
     
    
    }

    @media (min-width: 320px) and (max-width: 480px) {
    
     
    
    }
`

export const StyledNavHeading = styled.a`
	font-size: 1.0em;
	font-weight: bold;
	margin: 10px auto;
	text-decoration: none;
	color: ${(props)=>props.color ? props.color : `black`};


	@media (min-width: 1281px) {
    
      display: none;
    
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
    
      display: none;
    
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    
      
    
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
      
    
    }


    @media (min-width: 481px) and (max-width: 767px) {
    
     
    
    }

    @media (min-width: 320px) and (max-width: 480px) {
    
     
    
    }
`