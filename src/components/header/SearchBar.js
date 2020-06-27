import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setGlobeFocus } from '../../redux/actions'

const StyledInput = styled.input`
	height: 25px;
	width: 300px;
	border-radius: 10px;
	border: 1px solid silver;
	margin-top: 2px;

	outline: none;
	&:hover {
		transform: scale(1.005, 1);
	};

	/* 
	  ##Device = Tablets, Ipads (landscape)
	  ##Screen = B/w 768px to 1024px
	*/

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Low Resolution Tablets, Mobiles (Landscape)
	  ##Screen = B/w 481px to 767px
	*/

	@media (min-width: 481px) and (max-width: 767px) {
	  
	  display: none;
	  
	}

	/* 
	  ##Device = Most of the Smartphones Mobiles (Portrait)
	  ##Screen = B/w 320px to 479px
	*/

	@media (min-width: 320px) and (max-width: 480px) {
	  
	  display: none;
	  
	}	
`

const SearchBar = ({children, setGlobeFocus}) => {

	const [ searchInput, setSearchInput ] = React.useState('')

	return (
		<form 
			onSubmit={e=>{
				e.preventDefault()
				setGlobeFocus(searchInput)
				setSearchInput('')
			}}
		>
			<StyledInput 
					type='text' 
					placeholder={children} 
					onChange={e=>setSearchInput(e.target.value)} 
					value={searchInput}
			/>
		</form>
	)
}

export default connect(null, { setGlobeFocus })(SearchBar)