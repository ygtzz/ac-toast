## bee-toast

### 1. 简介

一个基于react的提示组件，可以弹出文字，图片，图标，以及显示loading

### 2. 安装

### 3. 使用

```javascript
Toast.info({
    msg: '提交成功',
    duration: 3000,
    transition: 'fade',
    icon: 'success',
    className: 'submit-success'
});
```
更多用法可以参考[demo](./demo/demolist)文件夹中的示例

### 4. 参数

Parameter | Type |Default| Description
--------- | ---- | ------|-----------
id | `string` | a random string | the toast's id
msg | `string` |  | the message showed in toast
className | `string` | | a custom class for toast
horizontal | `string` | `center` | Position horizontal of toast. There are 3 pre-defined positions: `center`,`left`,`right`
vertical | `string` | `middle` | Position vertical of toast. There are 3 pre-defined positions: `middle`,`top`,`bottom`
duration | `number` | 2000 | how long time the toast show,unit is milliscond
mode | `string` | `override` | Built-in modes: `override`,`queue`. If `override`, the last toast will forcibly flush previous. If `queue`, toast will show after last hide
transition | `string` | `fade` | Built-in transitions: `fade`
zIndex | `number`  |  9999  |  toast container's z-index in css
onClose | `function` |  | the callback function after toast hide

### 5. 方法

Name | Parameter | return Value | Description
--------- | ---------- | -----------|-----------
info | above |  | pop up message with black background
success | above |  | pop up message with green background
warning | above | | pop up message with yelllow background
error | above |  | pop up message with red background
close | id：toast's id | | close specificed toast
closeAll |   |  | close all toast
