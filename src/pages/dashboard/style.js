import styled from 'styled-components'

export const Wrapper = styled.main`

	display: flex;
	
	/* 
	  ##Device = Desktops
	  ##Screen = 1281px to higher resolution desktops
	*/

	@media (min-width: 1281px) {
	  
	  flex-direction: column;
	  margin: 3% 5%;
	  
	}

	/* 
	  ##Device = Laptops, Desktops
	  ##Screen = B/w 1025px to 1280px
	*/

	@media (min-width: 1025px) and (max-width: 1280px) {
	  
	  flex-direction: column;
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

export const ChartWrapper = styled.div`
	display: flex;
	
	/* 
	  ##Device = Desktops
	  ##Screen = 1281px to higher resolution desktops
	*/

	@media (min-width: 1281px) {
	  
	  flex-direction: column;
	  
	}

	/* 
	  ##Device = Laptops, Desktops
	  ##Screen = B/w 1025px to 1280px
	*/

	@media (min-width: 1025px) and (max-width: 1280px) {
	  
	  flex-direction: column;
	  
	}

	/* 
	  ##Device = Tablets, Ipads (portrait)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) {
	  
	  flex-direction: column;
	  
	}

	/* 
	  ##Device = Tablets, Ipads (landscape)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	  
	  flex-direction: column;
	  
	}

	/* 
	  ##Device = Low Resolution Tablets, Mobiles (Landscape)
	  ##Screen = B/w 481px to 767px
	*/

	@media (min-width: 481px) and (max-width: 767px) {
	  
	  flex-direction: column;
	  
	}

	/* 
	  ##Device = Most of the Smartphones Mobiles (Portrait)
	  ##Screen = B/w 320px to 479px
	*/

	@media (min-width: 320px) and (max-width: 480px) {
	  
	  flex-direction: column;
	  
	}
`

export const FilterWrapper = styled.div`
	margin: 20px 15px auto 15px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`

export const FilterSelect = styled.select`
	height: 25px;
	width: 150px;
	border: 1px solid gray;
`

export const Heading = styled.h3`
	margin: 20px 15px auto 15px;
`

