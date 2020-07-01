import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IMG = styled.img`
	margin: 0;
	padding: 0;
`

const Link = styled.a`
	margin: 0;
	padding: 0;

    @media (min-width: 768px) and (max-width: 1024px) {
    
      display: none;
    
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
      display: none;
    
    }


    @media (min-width: 481px) and (max-width: 767px) {
    
      display: none;
    
    }

    @media (min-width: 320px) and (max-width: 480px) {
    
      display: none;
    
    }
`

IMG.propTypes = {
  src: PropTypes.node.isRequired
}

Link.propTypes = {
  href: PropTypes.string.isRequired
}

export default ({href, src}) => {
	return (
		<Link href={href}>
			<IMG src={src}/>
		</Link>
	)
}