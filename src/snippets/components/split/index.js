

module.exports = {
  'y-split': {
    //组件属性
    'props': [ 'border', 'borderRadius', 'icon', 'iconSize','iconHide','iconPosition','size','split','value','v-model','accordion','simple','destroyInactivePanel','maxHeight','animationTime'],
    //组件事件
    'events': ['moveStart','moving','moveEnd'],
    //默认显示事件
    'defaultEvents': [],
    //子标签
    // 'subTags':[],
    // 组件片段默认显示的属性
    'defaultProps': ['type','v-model'],
    //显示的代码片段
		'body':`<template #left></template>
            <template #right></template>`,
    // 组件说明
    'description': '最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。',
    // 属性说明
    'prop': {
      'v-model': {
        'optionType': 'number|string',
        'defaultValue':'activeValue',
        'description':'面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定'
      },
      'value': {
        'optionType': 'number|string',
        'defaultValue':'',
        'description':'面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定'
      },
      'border': {
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'是否显示边框'
      },
      'borderRadius': {
        'optionType': 'number',
        'defaultValue':0,
        'description':'边框圆角'
      },
      'type': {
        options:['horizontal','vertical'],
        'optionType': 'string',
        'defaultValue':'horizontal',
        'description':'类型，可选值为 horizontal 或 vertical'
      },
      'min': {
        // 'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
        //   'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'number|string',
        'defaultValue':40,
        'description':'最小阈值，距离最左边或最上边的距离'
      },
      max: {
        // 'options':['left','right'],
        'optionType': 'number|string',
        'defaultValue':40,
        'description':'最大阈值，距离最右边或最下边的距离'
      },
      moveStart: {
        'description':'拖拽开始'
      },
      moveing: {
        'description':'拖拽中'
      },
      moveEnd: {
        'description':'拖拽结束'
      },
    }
  }
}