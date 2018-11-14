import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';
import '../icon/iconfont.css';

//添加zIndex支持 TODO
const propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	msg: PropTypes.string,
	horizontal: PropTypes.oneOf(['left', 'center', 'right']),
	vertical: PropTypes.oneOf(['top', 'middle', 'bottom']),
	//slide-left滑动会抖动
	transition: PropTypes.oneOf(['fade','slide-left']),
	duration: PropTypes.number,
	mode: PropTypes.string,
	onClose: PropTypes.func,
	seq: PropTypes.number,
	//layout模式还会重叠
	mode: PropTypes.oneOf(['override','queue','layout']),
	autoClose: PropTypes.bool
}

const defaultPropTypes = {
	horizontal: 'center',
	vertical: 'middle',
	transition: 'fade',
	duration: 2000,
	num: 0,
	mode: 'override',
	autoClose: true
}

class ToastItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		}
		this.close = this.close.bind(this);
		this.fBuildIcon = this.fBuildIcon.bind(this);
	}
	componentDidMount(){
		const {duration,autoClose} = this.props;
		if(autoClose){
			const animateTime = 300 * 2;
			setTimeout(() => {
				this.close();
			}, duration + animateTime);
		}
	}
	fBuildIcon(icon){
		const innerIcons = ['info','success','warning','error','hourglass','loading'];
		if(innerIcons.indexOf(icon) > -1){
			return 'icon icon-' + icon;
		}
		return icon;
	}
	close(){
		const {removeToast,onClose,id} = this.props;
		removeToast(this.props);
		onClose && onClose();
	}
	render() {
		let {id, msg, horizontal, vertical, duration, className, seq, transition, mode, icon, img} = this.props;
		//toast容器样式
		let toastClass = classNames('t-con', 't-' + horizontal, 't-' + vertical);
		//排序模式样式
		let orderStyle = {};
		if(mode == 'layout'){
			let transform = 100 * seq + 50 + 1;
			orderStyle = {
				transform: 'translateY(-'+transform+'%)',
				webKitTransform: 'translateY(-'+transform+'%)'
			}
		}
		//图标样式
		icon = this.fBuildIcon(icon);
		//文字图标容器
		let textConClass = classNames(className,'t-content');
		//文字样式
		let textClass = classNames('t-text',{
			't-text-icon': !!icon || !!img
		});

		return (
			<div id={id} className={toastClass} style={orderStyle}>
				<div className={textConClass}>
					{img ? <img src={img}></img> : ''}
					{icon ? <i className={icon}></i> : ''}
					<div className={textClass}>{msg}</div>
				</div>
			</div>
		);
	}
}

ToastItem.propTypes = propTypes;
ToastItem.defaultProps = defaultPropTypes;

export default ToastItem;
