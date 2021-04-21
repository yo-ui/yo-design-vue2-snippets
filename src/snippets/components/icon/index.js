

module.exports = {
  'y-icon': {
    //组件属性
    'props': ['type', 'size', 'color', 'rotate'],
    //组件事件列表
    'events': [],
    //默认事件
    'defaultEvents': [],
    // 组件片段默认显示的属性
    'defaultProps':['type','size'],
    // 组件描述
    'description':'基础组件，图标',
    'prop': {
      'type': {
        //选项列表
        'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
          'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
        optionType: 'string',
        defaultValue:'',
        description:'图标类型。遵循图标的命名规范'
      },
      'size': {
        //选项列表
        optionType: 'number',
        defaultValue:'12',
        description:'设置图标大小尺寸'
      },
      'color': {
        //选项列表
        options:['primary', 'info', 'success', 'warning', 'error','#0a9fad','#2db7f5','#19be6b','#ff9900','#ed4014','#515a6e'],
        optionType: 'string',
        defaultValue:'',
        description:'设置图标颜色'
      },
      'rotate': {
        //选项列表
        options:['0','45','90','135','180','225','270','315'],
        optionType: 'number',
        defaultValue:'0',
        description:'设置图标旋转角度'
      },
    }
  }
}