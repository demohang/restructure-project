import React, { Component } from 'react'
import './menuComp.css'
import NoticeIcon from '../noticeIcon/noticeIcon.jsx'

class MenuComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thisNum: 2,
      data: [
        {
          c_date: 1515411858000,
          id: 23193,
          message: "您有一个已回答的提问",
          mtype: 0,
          url: "/searchMain",
          state: 0,
          u_date: 1515411858000,
          user_id: 182
        }, {
          c_date: 1515411854000,
          id: 23192,
          message: "您有一个已回答的提问",
          mtype: 0,
          url: "/searchMain",
          state: 0,
          u_date: 1515411854000,
          user_id: 182
        }
      ]
    }
  }

  componentDidMount() {
    // let _this = this;
    // setInterval(function () {
    //   _this.setState({
    //     thisNum: ++_this.state.thisNum
    //   });
    // },1000)
  }

  render() {
    return (
      <div className="menu-ln-container">
        <div className="menu-ln-right">
          <NoticeIcon 
            count={this.state.thisNum}
            data={this.state.data}
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

export default MenuComp