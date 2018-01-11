import React, { Component } from 'react'
import MenuComp from '../components/menuComp/menuComp.jsx'
import { connect } from 'react-redux'
import { findNoreadMessageCount, meansLuser, findNoReadListsTop4 } from '../actions/actionTypes.js'

class MyMajorPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(meansLuser())
    dispatch(findNoreadMessageCount())
    dispatch(findNoReadListsTop4())
  }

  aaa() {
    this.props.dispatch(meansLuser())
  }

  render() {
    const { getNuewsNum, getUserMessage, getNoreadListsTop4 } = this.props;
    return (
      <div>
        <MenuComp 
          getNuewsNum={ getNuewsNum }
          name={ getUserMessage.name }
          data={ getNoreadListsTop4 }
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // 这里很重要，这里需要用到的状态都要返回，不然无法实现
  const { getNuewsNum, getUserMessage, getNoreadListsTop4 } = state
  return {
    getNuewsNum,
    getUserMessage,
    getNoreadListsTop4
  }
}

export default connect(
  mapStateToProps,
)(MyMajorPage)