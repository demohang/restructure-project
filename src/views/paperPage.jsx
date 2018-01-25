import React, { Component } from 'react'
import { connect } from 'react-redux'
import { allPageQuestionAndAnswer } from '../actions/actionTypes.js'
import PaperHeader from '../components/paper/paperHeader/paperHeader.jsx'

class paperPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      const { dispatch } = this.props;
      dispatch(allPageQuestionAndAnswer(93,''))
    // question/byAllPageQuestionAdnAnswer
  }

  render() {
    const { getPaper } = this.props;
    console.log(getPaper);
    return (
      <div>
        <PaperHeader />
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