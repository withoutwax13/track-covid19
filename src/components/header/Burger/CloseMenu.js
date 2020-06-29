import styled from 'styled-components'

const CloseMenu = styled.div`
	height: 30px;
	width: 30px;
	margin: 6px 6px 6px 0;
	transform: ${(props)=>props.status === true ? `rotate(0)` : `rotate(45deg)`};
	-moz-user-select: none;
   	-khtml-user-select: none;
   	-webkit-user-select: none;
   	-ms-user-select: none;
   	user-select: none;

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

export default CloseMenu