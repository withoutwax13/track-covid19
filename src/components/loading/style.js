import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const Battery = styled.div`
	height: 10px;
	width: 10px;
	border: 1px solid black;
	border-radius: 20px;
	margin: auto;
`

export const Charge = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 18px;
	background-color: ${(props)=>props.trigger ? `black` : `white`};
`

export const Label = styled.label`
	margin: auto;
`
