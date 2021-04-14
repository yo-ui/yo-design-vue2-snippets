

module.exports = {
  'y-icon': {
    //组件属性
    'props': ['type', 'ghost', 'disabled', 'circle', 'round', 'square', 'plain', 'border', 'block', 'loading', 'loadingName'],
    //组件事件
    'events': ['click'],
    'defaultEvents': ['click'],
    // 组件片段默认显示的属性
    'defaultProps':['type'],
    'body':['<y-icon type="$0" size="$1"/>'],
    'description':'基础组件，用于开始一个即时操作，触发业务逻辑时使用',
    'prop': {
      'type': {
        //选项列表
        'options': ['primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'],
        optionType: 'string',
        default:'primary',
        description:'设置按钮类型'
      }
    }
  }
}