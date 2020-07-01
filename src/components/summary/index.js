import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Loading from '../loading'

import LocalSummaryData from './LocalSummaryData'
import GlobalSummaryData from './GlobalSummaryData'

class SummaryBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			loadingGlobal: true,
			loadingLocal: true,
			shouldFocusLocal: false
		}
	}

	componentDidMount(){
		if(this.props.summary){
			this.setState({ loadingGlobal: false })
		}
	}

	componentDidUpdate(prevProps){
		if(this.props.summary !== prevProps.summary){
			this.setState({ loadingGlobal: false })
		}
		if(this.props.focus !== prevProps.focus){
			this.setState({ loadingLocal: false, shouldFocusLocal: true })
		}
	}

	Loading = () => {
		return (
			<Loading />
		)
	}

	render(){
		const { loadingGlobal, loadingLocal, shouldFocusLocal } = this.state
		const { type, summary, focus } = this.props
		if (loadingGlobal && type==='global'){
			return this.Loading()
		}else{
			if (type === 'global'){
				return <GlobalSummaryData summary={summary}/>
			}
			else if (type === 'local'){
				return <LocalSummaryData summary={summary} focus={focus} loadingLocal={loadingLocal} shouldFocus={shouldFocusLocal}/>
			}
			else return <GlobalSummaryData summary={summary}/>
		}
	}
}

const mapStateToProps = (state) => {
	return {
		summary: state.dataSummary,
		focus: state.globeFocus
	}
}

SummaryBox.propTypes = {
	summary: PropTypes.object,
	focus: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(SummaryBox)