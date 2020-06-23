import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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

const Heading = styled.a`
	text-decoration: none;
	color: ${(props)=>props.highlight ? `red` : `white`};
	font-size: 2.0em;
	margin: 20px auto;
`

const Menu = ({status}) => {
	return (
		<Wrapper open={status}>
			<Container>
				<Heading href='#' highlight>COVID-19</Heading>
				<Heading href='#'>GLOBAL STATISTICS</Heading>
				<Heading href='#'>ABOUT</Heading>
			</Container>
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		status: state.menuStatus
	}
}

export default connect(mapStateToProps)(Menu)