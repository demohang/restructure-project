import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findNoreadMessageCount, meansLuser } from '../../actions/actionTypes.js'
import './menuComp.css'
import NoticeIcon from '../noticeIcon/noticeIcon.jsx'

class MenuComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(findNoreadMessageCount())
    dispatch(meansLuser())
  }

  render() {
    const { getNuewsNum, getUserMessage } = this.props;
    return (
      <div className="menu-ln-container">
        <div className="menu-ln-right">
          <NoticeIcon 
            count={getNuewsNum}
          />
          <span className="action-base header-personal">
            <span className="header-personal-image header-personal-image-sm">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" />
            </span>
            {getUserMessage.name}
          </span>
        </div>
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
)(MenuComp)