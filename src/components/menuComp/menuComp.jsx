import React, { Component } from 'react'
import './menuComp.css'
import NoticeIcon from '../noticeIcon/noticeIcon.jsx'

class MenuComp extends Component {
  constructor(props) {
    super(props);
  }

  onItemClick(item) {
    console.log(item);
  }

  render() {
    return (
      <div className="menu-ln-container">
        <div className="menu-ln-right">
          <NoticeIcon
            count={this.props.getNuewsNum}
            data={this.props.data}
            onItemClick={this.onItemClick.bind(this)}
          />
          <span className="action-base header-personal">
            <span className="header-personal-image header-personal-image-sm">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" />
            </span>
            {this.props.name || '--'}
          </span>
        </div>
      </div>
    )
  }
}

export default MenuComp