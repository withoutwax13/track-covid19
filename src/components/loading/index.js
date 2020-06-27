import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Battery = styled.div`
	height: 10px;
	width: 10px;
	border: 1px solid black;
	border-radius: 20px;
	margin: auto;
`

const Charge = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 18px;
	background-color: ${(props)=>props.trigger ? `black` : `white`};
`

const Label = styled.label`
	margin: auto;
`

const Loading = () => {

	const [ state, setState ] = React.useState(false)

	React.useEffect(()=>{window.setInterval(setState(!state), 500)}, [state])

	return (
		<Wrapper>
			<Battery>
				<Charge trigger={state}/>
			</Battery>
			<Label>Fetching Data</Label>
		</Wrapper>
	)
}

export default Loading