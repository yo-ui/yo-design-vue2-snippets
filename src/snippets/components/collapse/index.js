

module.exports = {
  'y-collapse': {
    //组件属性
    'props': [ 'border', 'borderRadius', 'icon', 'iconSize','iconHide','iconPosition','size','split','value','v-model','accordion','simple','destroyInactivePanel','maxHeight','animationTime'],
    //组件事件
    'events': ['change'],
    //默认显示事件
    'defaultEvents': ['change'],
    //子标签
    'subTags':['y-collapse-item','y-collapse-item'],
    // 组件片段默认显示的属性
    'defaultProps': ['v-model'],
    //显示的代码片段
		'body':'',
    // 组件说明
    'description': '最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。',
    // 属性说明
    'prop': {
      'v-model': {
        'optionType': 'string',
        'defaultValue':'',
        'description':'当前激活的面板的 name，可以使用 v-model 双向绑定'
      },
      'value': {
        'optionType': 'string',
        'defaultValue':'',
        'description':'当前激活的面板的 name，可以使用 v-model 双向绑定'
      },
      'border': {
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'是否显示边框'
      },
      'split': {
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'是否显示分割线'
      },
      'borderRadius': {
        'optionType': 'number',
        'defaultValue':0,
        'description':'边框圆角'
      },
      'accordion': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'是否开启手风琴模式，开启后每次至多展开一个面板'
      },
      'simple': {
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'是否开启简洁模式'
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
        'defaultValue':12,
        'description':'折叠面板头内容'
      },
      iconPosition: {
        'options':['left','right'],
        'optionType': 'string',
        'defaultValue':'left',
        'description':'设置图标位置： left, right'
      },
      icon: {
        'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
          'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'自定义切换图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀'
      },
      'size': {
        'options':['xxxl','xxl','xl','l','m','s','xs'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'折叠面板尺寸，可选值有xxl、xl、l、m、s、xs,不填则为默认大小'
      },
      'destroyInactivePanel': {
        // 'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
        //   'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'销毁折叠隐藏的面板'
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
    }
  }
}