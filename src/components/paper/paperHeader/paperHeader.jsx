import React, { Component } from 'react'
import './paperHeader.css'

class PaperHeader extends Component {
  constructor(props) {
    super(props);
  }

  onCloseClick() {
    if (this.props.onCloseClick) {
      this.props.onCloseClick();
    }
  }

  render() {
    const { name, time, paperName, score } = this.props;
    return (
      <div className="paperHeader-container clearfix">
        <div className="paperHeader-fixed">
          <div className="paperHeader-wrap">
            <div className="paperHeader-title">
              <span className="paperHeader-title-createName iconfont icon-yonghuming-">{name}</span>
              <p className="paperHeader-title-paperName">{paperName}</p>
            </div>
            <div className="paperHeader-createTime">开启时间 : {time}</div>
            <div className="paperHeader-view">
              <span className="paperHeader-view-close iconfont icon-guanbi" onClick={this.onCloseClick.bind(this)}></span>
              <span className="paperHeader-view-screen">成绩<i>{score}</i>分</span>
              <span className="paperHeader-view-number">已完成10/10</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaperHeader