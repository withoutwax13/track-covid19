import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	font-family: courier new;
	font-size: 2.0em;
	font-weight: bold;
`

const ProductLogo = ({children}) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}

export default ProductLogo