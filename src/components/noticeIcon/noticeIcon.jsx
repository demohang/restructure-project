import React, { Component } from 'react'
import './noticeIcon.css'

/**
 * 通知菜单
 * @param count 图标上的消息总数
 */
class NoticeIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isPopoverShow: false,
      data: [
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: '你收到了 14 份新周报',
          datetime: '2017-08-09',
          type: '通知',
        }, {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: '你推荐的 曲妮妮 已通过第三轮面试',
          datetime: '2017-08-08',
          type: '通知',
        }
      ]
    }
  }

  componentDidMount() {

  }

  hidePopBox = () => {
    document.removeEventListener('click', this.hidePopBox);
    this.setState({
      isPopoverShow: false
    })
  }

  _showNum = () => {
    return this.state.num.map((value, key) => {
      return (
        <p key={key}>{value}</p>
      );
    });
  }

  onShowPopover = (e) => {
    document.addEventListener('click', this.hidePopBox);
    this.setState({
      isPopoverShow: true
    });
  }

  _showData = () => {
    return this.state.data.map((value, index) => {
      return (
        <div className="popover-list-item" key={index}>
          <div className="popover-list-item-meta">
            <span className="popover-list-item-img">
              <img src={value.avatar} alt=""/>
            </span>
            {value.title}
          </div>
        </div>
      );
    });
  }

  render() {
    const { count } = this.props;
    let styles = {
      number_scroll: {
        transform: 'translateY(-' + (count < 10 ? count : Math.floor(count / 10)) + '00%)'
      },
      number2_scroll: {
        transform: 'translateY(-' + count % 10 + '00%)'
      },
      popover: {
        left: '986.578px',
        top: '30px',
        transformOrigin: '316px 16px 0px'
      }
    }
    return (
      <span className="action-base" onClick={this.onShowPopover}>
        <span className="action-news">
          <i className="action-news-icon iconfont icon-xiaoxizhongxin-"></i>
          <sup className="action-news-number">
            <span className="action-news-number-only" style={styles.number_scroll}>
              {this._showNum()}
            </span>
            {
              count > 10 ?
                <span className="action-news-number-only" style={styles.number2_scroll}>
                  {this._showNum()}
                </span>
                :
                null
            }
          </sup>
        </span>
        <div className={this.state.isPopoverShow ? "popover-box" : "popover-hide"} style={styles.popover} onClick={e => e.nativeEvent.stopImmediatePropagation()}>
          <div className="popover-arrow"></div>
          <div className="popover-container clearfix">
            <div className="popover-tabs-nav">
              <div className="popover-tabs-tab">通知</div>
            </div>
            <div className="popover-tabs-container">
              <div className="popover-tabs-list">
                {this._showData()}
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default NoticeIcon