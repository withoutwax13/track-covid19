import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
	font-family: courier new;
	font-size: 2.0em;
	font-weight: bold;
	text-decoration: none;
	color: black;
`

const ProductLogo = ({children, onClick}) => {
	return (
		<Wrapper href='' onClick={()=>onClick()}>
			{children}
		</Wrapper>
	)
}

export default ProductLogo