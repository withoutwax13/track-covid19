import styled from 'styled-components'
import React from 'react'

import { connect } from 'react-redux'

import { countriesData as countries } from '../../api/countries'
import { setGlobeFocus } from '../../redux/actions'
import SearchBarWrapper from './SearchBarWrapper.js'

const Select = styled.select`
	height: 25px;
	width: 400px;
	border-radius: 10px;
	border: 1px solid silver;

	outline: none;
	&:hover {
		transform: scale(1.005, 1);
	};
`

const SearchBar = ({children, setGlobeFocus}) => {

	const [ search, setSearch ] = React.useState('')
	React.useEffect(()=>{
		if(search){
			setGlobeFocus(search)
			setSearch('')
		}
	}, [search])

	return (
		<SearchBarWrapper>
			<Select 
					name='countries'
					id='country-select'
					onChange={e=>setSearch(e.target.value)} 
					value={search}
			>
				<option value=''>--Select a country--</option>
				{countries.map(country=><option value={country.name} key={country.country}>{country.name}</option>)}
			</Select>
		</SearchBarWrapper>
	)
}

export default connect(null, { setGlobeFocus })(SearchBar)