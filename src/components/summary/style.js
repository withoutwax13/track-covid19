import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: ${(props)=>props.inactive ? `none` : `1px solid silver`};
	border-radius: 10px;
	width: 200px;
	margin: 10px 10px;
	padding: 10px;

`

export const Label = styled.label`
	color: gray;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-left: 10px;
	font-size: 1.0rem;
`

export const Data = ({children}) => {
	const Wrapper = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin: 0 20px;
		padding: 0;
	`
	const Heading = styled.h3`
		letter-spacing: 2px;
		margin: 0;
		padding: 0;
	`
	return (
		<Wrapper>
			<Heading>
				{children}
			</Heading>
		</Wrapper>
	)
}

Wrapper.propTypes = {
	inactive: PropTypes.bool
}

Data.propTypes = {
	children: PropTypes.node.isRequired
}