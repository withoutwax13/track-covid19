import React from 'react'
import Globe from 'react-globe.gl'
import { connect } from 'react-redux'

import { setGlobeFocus } from '../../redux/actions'

import { countriesData } from '../../api/countries'
import Wrapper from './Wrapper'

const GlobeVisual = ({focus, setGlobeFocus}) => {

	const globeRef = React.useRef()
	const dataPoints = countriesData

	React.useEffect(()=>{
		globeRef.current.pointOfView({lat: focus.coords.lat, lng: focus.coords.lng, altitude: 2.0})
	}, [focus])

	return (
		<Wrapper>
			<Globe
				ref={globeRef}
				height={400}
				width={400}
				globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
				bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
				backgroundColor='#ffffff'
				pointsData={dataPoints}
				pointLabel='name'
				pointColor={()=>'ff1111'}
				pointRadius={0.5}
				onPointClick={p=>setGlobeFocus(p.name)}
			/>
		</Wrapper>
	)
}

const mapStateToProps = (state) => {
	return {
		focus: state.globeFocus
	}
}

export default connect(mapStateToProps, { setGlobeFocus })(GlobeVisual)