import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import history from '../../pages/history'
import { toggleMenu } from '../../redux/actions'
import { StyledNavLinkHeading, StyledNavHeading } from './Heading'

const Wrapper = styled.div`
	position: fixed;
	z-index: 500;
	transform: ${(props)=>props.open === true ? `translateX(0)` : `translateX(100%)`};

	@media (min-width: 1281px) {
    
    	display: none;
	    
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
	    
		display: none;
	    
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	background-color: black;

	padding: 1.0em;

`


const Menu = ({status, toggleMenu}) => {
	return (
		<Wrapper open={status}>
			<Container>
				<StyledNavHeading href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen' color='red' onClick={()=>toggleMenu(!status)}>COVID-19</StyledNavHeading>
				<StyledNavLinkHeading to='/dashboard' color='white' onClick={()=>toggleMenu(!status)}>DASHBOARD</StyledNavLinkHeading>
				<StyledNavLinkHeading to='/about' color='white' onClick={()=>toggleMenu(!status)}>ABOUT</StyledNavLinkHeading>
			</Container>
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		status: state.menuStatus
	}
}

export default connect(mapStateToProps, { toggleMenu })(Menu)