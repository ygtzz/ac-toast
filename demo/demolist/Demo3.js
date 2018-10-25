/**
 *
 * @title toast
 * @description toast图片示例
 *
 */

import React, { Component } from 'react';
import Toast from '../../src/index';

class Demo3 extends Component {
    componentDidMount(){
        
    }
    fPopToast(){
        Toast.info({
            msg: '迎客松',
            duration: 3000,
            mode: 'order',
            transition: 'fade',
            img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3189276298,1072963024&fm=58'
        });
    }
    render () {
        return (
            <div className="demoPadding">
                <button className="btn" onClick={this.fPopToast}>toast图片示例</button>
            </div>
        )
    }
}

export default Demo3;