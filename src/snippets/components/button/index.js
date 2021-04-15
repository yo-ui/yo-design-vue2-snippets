

module.exports = {
  'y-button': {
    //组件属性
    'props': ['type', 'ghost', 'disabled', 'circle', 'round', 'square', 'plain', 'border', 'block', 'loading', 'loadingName','size','icon','rightIcon','to','replace','target','nativeType'],
    //组件事件
    'events': ['click'],
    'defaultEvents': ['click'],
    // 组件片段默认显示的属性
    'defaultProps': ['type'],
    //显示的代码片段
    'body':['<y-button type="$0" @click="${1:()=>{}}"></y-button>'],
    // 组件说明
    'description': '基础组件，用于开始一个即时操作，触发业务逻辑时使用',
    // 属性说明
    'prop': {
      'type': {
        //选项列表
        'options': ['primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'],
        'optionType': 'string',
        'defaultValue':'primary',
        'description':'设置按钮类型,可选值为primary,dashed,text,info,success,warning,error或者不设置'
      },
      'ghost': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'幽灵属性，使按钮背景透明'
      },
      'disabled': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'按钮失效状态'
      },
      'circle': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'按钮是否圆形或椭圆显示'
      },
      'round': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'按钮是否圆角显示'
      },
      'square': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'按钮是否方角显示'
      },
      'plain': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'按钮是否朴素显示'
      },
      'border': {
        'optionType': 'boolean',
        'defaultValue':'true',
        'description':'按钮是否显示边框'
      },
      'block': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'按钮是否占一行显示,开启后，按钮的长度为 100%'
      },
      'loading': {
        'optionType': 'boolean',
        'defaultValue':'false',
        'description':'是否加载中，将覆盖原有左侧引用的图标'
      },
      'loadingName': {
        'options':['loading','loading1','loading2','loading3','loading4',],
        'optionType': 'string',
        'defaultValue':'',
        'description':'是否加载中，内置loading样式,可选值为loading、loading1、loading2、loading3、loading4以及对应的loading图标类名'
      },
      'size': {
        'options':['xxl','xl','l','m','s','xs'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'按钮大小，可选值有xxl,xl,l、m、s、xs,不填则为默认大小'
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
        'defaultValue':'false',
        'description':'路由跳转时，开启 replace 将不会向 history 添加新记录'
      },
      'target': {
        'options':['_self','_blank','_parent','_top'],
        'optionType': 'string',
        'defaultValue':'_self',
        'description':'路由跳转时，相当于 a 链接的 target 属性,可选值请参考HTML标准,可选值有_self 、_blank、_parent、_top'
      },
      'nativeType': {
        'options':['button','reset','submit'],
        'optionType': 'string',
        'defaultValue':'button',
        'description':'设置 button 原生的 type 值，可选值请参考HTML标准,可选值有button 、submit、reset'
      },
      'click': {
        //
        'description':'点击事件,点击按钮时的回调'
      }
    }
  }
}