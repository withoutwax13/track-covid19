import React from 'react'
import { connect } from 'react-redux'

import { toggleMenu } from '../../../redux/actions'

import Burger from './Burger'
import Patty from './Patty'
import CloseMenu from './CloseMenu'

const BurgerMenu = ({status, toggleMenu}) => {

	const burgerStatus = () => {
		return (
			<Burger>
				<Patty/>
				<Patty/>
				<Patty/>
			</Burger>
		)
	}

	const openStatus = () => {
		return (
			<React.Fragment>
				<CloseMenu>
					<h3 style={{margin: '0', fontSize: '2.0em', fontWeight: 'bold'}} status={status}>+</h3>
				</CloseMenu>
			</React.Fragment>
		)
	}

	return (
		<div onClick={()=>toggleMenu(!status)}>
			{status ? openStatus() : burgerStatus()}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		status: state.menuStatus
	}
}

export default connect(mapStateToProps, { toggleMenu })(BurgerMenu)