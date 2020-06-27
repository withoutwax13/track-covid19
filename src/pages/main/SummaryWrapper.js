import styled from 'styled-components'

const SummaryWrapper = styled.div`
    
      margin: 0 auto;

	@media (min-width: 1281px) {
    
    	display: flex;
    	flex-direction: column;
    
  	}

  	@media (min-width: 1025px) and (max-width: 1280px) {
    
    	display: flex;
    	flex-direction: column;
    
  	}

  	@media (min-width: 768px) and (max-width: 1024px) {
    
    	display: flex;
    	flex-direction: column;
    
  	}

  	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    
    	display: flex;
    	flex-direction: column;
    
  	}


  	@media (min-width: 481px) and (max-width: 767px) {
    
    	display: flex;
    	flex-direction: column;
    
  	}

  	@media (min-width: 320px) and (max-width: 480px) {
    
    	display: flex;
    	flex-direction: column;
    
  	}
`

export default SummaryWrapper