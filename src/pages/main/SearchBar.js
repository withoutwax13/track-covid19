import styled from 'styled-components'
import React from 'react'

import { connect } from 'react-redux'

import { setGlobeFocus } from '../../redux/actions'
import SearchBarWrapper from './SearchBarWrapper.js'

const Input = styled.input`
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

	const [ searchInput, setSearchInput ] = React.useState('')

	return (
		<SearchBarWrapper>
			<form 
				onSubmit={e=>{
					e.preventDefault()
					setGlobeFocus(searchInput)
					setSearchInput('')
				}}
				style={{margin: '2px auto 2px auto'}}
			>
				<Input 
						type='text' 
						placeholder={children} 
						onChange={e=>setSearchInput(e.target.value)} 
						value={searchInput}
				/>
			</form>
		</SearchBarWrapper>
	)
}

export default connect(null, { setGlobeFocus })(SearchBar)