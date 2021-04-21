

module.exports = {
  'y-link': {
    //组件属性
    'props': ['type', 'disabled', 'iconSize', 'icon', 'rightIconSize', 'rightIcon', 'to', 'replace', 'underline', 'target', 'color','textColor'],
    //组件事件列表
    'events': [],
    //默认事件
    'defaultEvents': [],
    // 组件片段默认显示的属性
    'defaultProps':['type','to'],
    // 组件描述
    'description':'基础组件，用于开始一个即时操作，触发业务逻辑时使用',
    'prop': {
      'type': {
        //选项列表
        'options': ['primary', 'text', 'info', 'success', 'warning', 'error'],
        optionType: 'string',
        defaultValue:'primary',
        description:'设置链接类型'
      },
      
      'iconSize': {
        'optionType': 'number',
        'defaultValue':'12',
        'description':'左侧引用图标尺寸'
      },
      'rightIconSize': {
        'optionType': 'number',
        'defaultValue':'12',
        'description':'右侧引用图标尺寸'
      },
      'icon': {
        'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
          'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'左侧引用图标名称,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀'
      },
      'rightIcon': {
        'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
          'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'右侧引用图标名称,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀'
      },
      'to': {
        'optionType': 'string|object',
        'defaultValue':'',
        'description':'跳转的链接，支持 vue-router 对象'
      },
      'replace': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'路由跳转时，开启 replace 将不会向 history 添加新记录'
      },
      'underline': {
        'optionType': 'boolean',
        'defaultValue':true,
        'description':'链接是否带下划线'
      },
      'color': {
        //选项列表
        options:['#0a9fad','#2db7f5','#19be6b','#ff9900','#ed4014','#515a6e'],
        optionType: 'number',
        defaultValue:'',
        description:'设置链接背景颜色'
      },
      'textColor': {
        //选项列表
        options:['#0a9fad','#2db7f5','#19be6b','#ff9900','#ed4014','#515a6e'],
        optionType: 'number',
        defaultValue:'',
        description:'设置字体颜色'
      },
      'disabled': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'链接失效状态'
      },
      'target': {
        'options':['_self','_blank','_parent','_top'],
        'optionType': 'string',
        'defaultValue':'_self',
        'description':'路由跳转时，相当于 a 链接的 target 属性,可选值请参考HTML标准,可选值有_self 、_blank、_parent、_top'
      },
    }
  }
}