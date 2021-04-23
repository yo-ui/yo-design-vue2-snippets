

module.exports = {
  'y-collapse-item': {
    //组件属性
    'props': ['icon', 'iconSize','iconHide','iconPosition','disabled','destroyInactivePanel','size','header','name','maxHeight','animationTime'],
    //组件事件
    'events': [],
    //默认显示事件
    'defaultEvents': [],
    //子标签
    'subTags':[],
    body:"<template v-slot:action></template><template v-slot:extra></template>",
    // 组件片段默认显示的属性
    'defaultProps': ['name','header'],
    // 组件说明
    'description': '折叠面板项组件',
    // 属性说明
    'prop': {
      disabled:{
        // 'options':['action','extra'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'禁用后的面板展开与否将无法通过用户交互改变'
      },
      destroyInactivePanel: {
        // 'options':['action','extra'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'被隐藏时是否渲染 DOM 结构'
      },
			size: {
				options: ["xxxl", "xxl", "xl", "l", "m", "s", "xs"],
				optionType: "string",
				defaultValue: "",
				description:
					"折叠面板尺寸，可选值有xxl、xl、l、m、s、xs,不填则为默认大小",
			},
      header: {
        // 'options':['action','extra'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'折叠面板头内容'
      },
      iconHide: {
        // 'options':['action','extra'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'折叠面板头内容'
      },
      iconSize: {
        // 'options':['action','extra'],
        'optionType': 'number',
        'defaultValue':'',
        'description':'折叠面板头内容'
      },
      iconPosition: {
        'options':['left','right'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'设置图标位置： left, right'
      },
      name: {
        // 'options':['left','right'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'当前面板的 name，与 Collapse的value对应，不填为索引'
      },
      maxHeight: {
        // 'options':['left','right'],
        'optionType': 'number',
        'defaultValue':500,
        'description':'面板内容区最大高度'
      },
      animationTime: {
        // 'options':['left','right'],
        'optionType': 'number',
        'defaultValue':200,
        'description':'面板内容展开的动画时长  单位为ms'
      },
      icon: {
        'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
          'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'自定义切换图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀'
      },
    },
    // slot:{
    //   name:{
    //     'options':['action','extra'],
    //     'optionType': 'string',
    //     'defaultValue':'',
    //     'description':'按钮大小，可选值有xxl,xl,l、m、s、xs,不填则为默认大小'
    //   }
    // }
  }
}