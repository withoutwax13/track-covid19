import styled from 'styled-components'

const Burger = styled.div`
	height: 30px;
	width: 30px;
	margin: 3px 1px;

	/* 
	  ##Device = Desktops
	  ##Screen = 1281px to higher resolution desktops
	*/

	@media (min-width: 1281px) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Laptops, Desktops
	  ##Screen = B/w 1025px to 1280px
	*/

	@media (min-width: 1025px) and (max-width: 1280px) {
	  
	  display: none;
	  
	}

`

export default Burger