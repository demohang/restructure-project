import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findNoreadMessageCount } from '../../actions/actionTypes.js'
import './menuComp.css'
import NoticeIcon from '../noticeIcon/noticeIcon.jsx'

class MenuComp extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   // thisNum: 2,
    //   data: [
    //     {
    //       c_date: 1515411858000,
    //       id: 23193,
    //       message: "您有一个已回答的提问",
    //       mtype: 0,
    //       url: "/searchMain",
    //       state: 0,
    //       u_date: 1515411858000,
    //       user_id: 182
    //     }, {
    //       c_date: 1515411854000,
    //       id: 23192,
    //       message: "您有一个已回答的提问",
    //       mtype: 0,
    //       url: "/searchMain",
    //       state: 0,
    //       u_date: 1515411854000,
    //       user_id: 182
    //     }
    //   ]
    // }
  }

  componentDidMount() {
    // let _this = this;
    // setInterval(function () {
    //   _this.setState({
    //     thisNum: ++_this.state.thisNum
    //   });
    // },1000)
    const { dispatch } = this.props
    dispatch(findNoreadMessageCount())
  }

  render() {
    const { getNuewsNum } = this.props;
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
            尹航
          </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // 这里很重要，这里需要用到的状态都要返回，不然无法实现
  const { getNuewsNum } = state
  return {
    getNuewsNum
  }
}

export default connect(
  mapStateToProps
)(MenuComp)