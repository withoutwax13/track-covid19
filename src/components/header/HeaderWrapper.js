import styled from 'styled-components'

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;

	justify-content: space-between;
	
	position: sticky;
	right: 0;
	z-index: 10;
	margin: 0 10px 0 0;
	padding: 1.0em;
	background-color: white;

	height: 5vh;

	/* 
	  ##Device = Desktops
	  ##Screen = 1281px to higher resolution desktops
	*/

	@media (min-width: 1281px) {
	  
	  //CSS
	  
	}

	/* 
	  ##Device = Laptops, Desktops
	  ##Screen = B/w 1025px to 1280px
	*/

	@media (min-width: 1025px) and (max-width: 1280px) {
	  
	  //CSS
	  
	}

	/* 
	  ##Device = Tablets, Ipads (portrait)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) {
	  
	  //CSS
	  
	}

	/* 
	  ##Device = Tablets, Ipads (landscape)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	  
	  //CSS
	  
	}

	/* 
	  ##Device = Low Resolution Tablets, Mobiles (Landscape)
	  ##Screen = B/w 481px to 767px
	*/

	@media (min-width: 481px) and (max-width: 767px) {
	  
	  //CSS
	  
	}

	/* 
	  ##Device = Most of the Smartphones Mobiles (Portrait)
	  ##Screen = B/w 320px to 479px
	*/

	@media (min-width: 320px) and (max-width: 480px) {
	  
	  //CSS
	  
	}

`

export default HeaderWrapper