import React, { Component } from 'react'
import './noticeIcon.css'

/**
 * 通知菜单
 * @param count 图标上的消息总数
 */
class NoticeIcon extends Component {
  constructor() {
    super();
    this.hidePopBox = this.hidePopBox.bind(this);
    this.state = {
      num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      isPopoverShow: false,
      data: [{
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
    // 如果父组件不传数据，则不往state中添加
    if (this.props.data) {
      this.setState({
        data: this.props.data
      });
    }
  }

  hidePopBox() {
    document.removeEventListener('click', this.hidePopBox);
    this.setState({
      isPopoverShow: false
    })
  }

  _showNum() {
    return this.state.num.map((value, key) => {
      return (
        <p key={key}>{value}</p>
      );
    });
  }

  onShowPopover(e) {
    document.addEventListener('click', this.hidePopBox);
    this.setState({
      isPopoverShow: true
    });
  }

  /**
   * 通知菜单消息跳转回调
   * @param {*} item 条数据
   * @function onItemClick 点击列表项的回调
   */
  onItemClick(item) {
    if (this.props.onItemClick) {
      this.props.onItemClick(item)
    }
  }

  /**
   * 查看全部回调
   * @function onClickAll 点击查看全部的回调
   */
  onClickAll() {
    if (this.props.onClickAll) {
      this.props.onClickAll()
    }
  }

  _showData() {
    return this.state.data.map((value, index) => {
      return (
        <div className="popover-list-item" key={index} onClick={this.onItemClick.bind(this, value)}>
          <div className="popover-list-item-meta">
            {value.message}
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
        left: '-292px',
        top: '30px',
        transformOrigin: '316px 16px 0px'
      }
    }
    return (
      <span className="action-base" onClick={this.onShowPopover.bind(this)}>
        <span className="action-news">
          <i className="action-news-icon iconfont icon-xiaoxizhongxin-"></i>
          <sup className="action-news-number">
            <span className="action-news-number-only" style={styles.number_scroll}>
              {this._showNum()}
            </span>
            {
              count >= 10 ?
                <span className="action-news-number-only" style={styles.number2_scroll}>
                  {this._showNum()}
                </span>
                :
                null
            }
          </sup>
        </span>
        <div className={this.state.isPopoverShow ? "popover-box zoom-big-enter zoom-big-enter-active" : "popover-hide"} style={styles.popover} onClick={e => e.nativeEvent.stopImmediatePropagation()}>
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
            <div className="popover-tabs-all" onClick={this.onClickAll.bind(this)}>查看全部</div>
          </div>
        </div>
      </span>
    );
  }
}

export default NoticeIcon