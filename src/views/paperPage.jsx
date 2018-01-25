import React, { Component } from 'react'
import { connect } from 'react-redux'

class paperPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // question/byAllPageQuestionAdnAnswer
  }

  render() {

    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  // 这里很重要，这里需要用到的状态都要返回，不然无法实现
//   const { getNuewsNum, getUserMessage, getNoreadListsTop4, readNews } = state
  return {
    // getNuewsNum,
    // getUserMessage,
    // getNoreadListsTop4,
    // readNews
  }
}

export default connect(
  mapStateToProps,
)(paperPage)