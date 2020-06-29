import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setGlobeFocus } from '../../redux/actions'
import { countriesData as countries } from '../../api/countries'

const Select = styled.select`
	height: 25px;
	width: 400px;
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

	const [ search, setSearch ] = React.useState('')
	React.useEffect(()=>{
		if(search){
			setGlobeFocus(search)
			setSearch('')
		}
	}, [search, setGlobeFocus])

	return (
		<Select 
				name='countries'
				id='country-select'
				onChange={e=>setSearch(e.target.value)} 
				value={search}
		>
			<option value=''>--Select a country--</option>
			{countries.map(country=><option value={country.name} key={country.country}>{country.name}</option>)}
		</Select>
	)
}

export default connect(null, { setGlobeFocus })(SearchBar)