import styled from 'styled-components'

const Wrapper = styled.div`
	
	padding: 20px 0;

    @media (min-width: 1281px) {

    	margin: auto 40px;
    	height: 50vh;
    
    }

    @media (min-width: 1025px) and (max-width: 1280px) {

    	margin: auto 40px;
    	height: 50vh;  
    
    }

    @media (min-width: 768px) and (max-width: 1024px) {
    	
    	padding: 10px 0;
    	margin: 5% auto;
    	height: 65vh;
    
    }

    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
      	margin: 10% auto;
      	height: 65vh;
    
    }


    @media (min-width: 481px) and (max-width: 767px) {
    
     	margin: 10% auto;
     	height: 65vh;
    
    }

    @media (min-width: 320px) and (max-width: 480px) {
    
      	margin: 10% auto;
      	height: 65vh;
    
    }
`

export default Wrapper