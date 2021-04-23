

module.exports = {
  'y-list': {
    //组件属性
    'props': [ 'border', 'header', 'borderRadius','footer', 'loading','size','split','reverse','vertical'],
    //组件事件
    // 'events': ['click'],
    //默认显示事件
    // 'defaultEvents': ['click'],
    //子标签
    'subTags':['y-list-item','y-list-item'],
    // 组件片段默认显示的属性
    'defaultProps': ['header','footer','loading'],
    //显示的代码片段
		'body':'<template v-slot:action></template><template v-slot:extra></template>',
    // 组件说明
    'description': '最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。',
    // 属性说明
    'prop': {
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
      'header': {
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表头部'
      },
      'loading': {
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'列表是否正在加载'
      },
      'footer': {
        // 'options':['loading','loading1','loading2','loading3','loading4',],
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表底部'
      },
      'size': {
        'options':['xxxl','xxl','xl','l','m','s','xs'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表尺寸，可选值有xxl、xl、l、m、s、xs,不填则为默认大小'
      },
      'split': {
        // 'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
        //   'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'是否显示分割线'
      },
      'reverse': {
        // 'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
        //   'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'内容反序排列'
      },
      'vertical': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'内容反序排列'
      },
    }
  }
}