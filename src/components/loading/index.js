import React from 'react'

import { Wrapper, Battery, Charge, Label } from './style'

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