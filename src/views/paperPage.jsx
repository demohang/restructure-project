import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allPageQuestionAndAnswer } from '../actions/actionTypes.js'
import PaperHeader from '../components/paper/paperHeader/paperHeader.jsx'
import { dataTransformation } from '../utils/methods'

class paperPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(allPageQuestionAndAnswer(93, ''))
  }

  render() {
    const { getPaper } = this.props;
    return (
      <div>
        <PaperHeader
          name={getPaper.name}
          score={getPaper.score}
          paperName={getPaper.exam ? getPaper.exam.name : ''}
          time={getPaper.exam ? dataTransformation(getPaper.exam.s_date) : ''}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // 这里很重要，这里需要用到的状态都要返回，不然无法实现
  const { getPaper } = state
  return {
    getPaper
  }
}

export default connect(
  mapStateToProps,
)(paperPage)