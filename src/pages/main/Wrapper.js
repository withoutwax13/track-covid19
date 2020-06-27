import styled from 'styled-components'

const Wrapper = styled.main`

	display: flex;
	
	/* 
	  ##Device = Desktops
	  ##Screen = 1281px to higher resolution desktops
	*/

	@media (min-width: 1281px) {
	  
	  flex-direction: row;
	  margin: 3% 5%;
	  
	}

	/* 
	  ##Device = Laptops, Desktops
	  ##Screen = B/w 1025px to 1280px
	*/

	@media (min-width: 1025px) and (max-width: 1280px) {
	  
	  flex-direction: row;
	  margin: 3% 5%;
	  
	}

	/* 
	  ##Device = Tablets, Ipads (portrait)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) {
	  
	  flex-direction: column;
	  margin: 5%;
	  
	}

	/* 
	  ##Device = Tablets, Ipads (landscape)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	  
	  flex-direction: column;
	  margin: 5%;
	  
	}

	/* 
	  ##Device = Low Resolution Tablets, Mobiles (Landscape)
	  ##Screen = B/w 481px to 767px
	*/

	@media (min-width: 481px) and (max-width: 767px) {
	  
	  flex-direction: column;
	  margin: 5%;
	  
	}

	/* 
	  ##Device = Most of the Smartphones Mobiles (Portrait)
	  ##Screen = B/w 320px to 479px
	*/

	@media (min-width: 320px) and (max-width: 480px) {
	  
	  flex-direction: column;
	  margin: 5%;
	  
	}
`

export default Wrapper