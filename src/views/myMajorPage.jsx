import React, { Component } from 'react'
import MenuComp from '../components/menuComp/menuComp.jsx'
import { connect } from 'react-redux'
import { findNoreadMessageCount, meansLuser } from '../actions/actionTypes.js'

class MyMajorPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(meansLuser())
    dispatch(findNoreadMessageCount())
  }

  aaa() {
    this.props.dispatch(meansLuser())
  }

  render() {
    const { getNuewsNum, getUserMessage } = this.props;
    return (
      <div>
        <MenuComp 
          getNuewsNum={ getNuewsNum }
          name={ getUserMessage.name }
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // 这里很重要，这里需要用到的状态都要返回，不然无法实现
  const { getNuewsNum, getUserMessage } = state
  return {
    getNuewsNum,
    getUserMessage
  }
}

export default connect(
  mapStateToProps,
)(MyMajorPage)