

module.exports = {
  'y-button': {
    //组件属性
    'props': ['type', 'ghost', 'disabled', 'circle', 'round', 'square', 'plain', 'border', 'block', 'loading', 'loadingName'],
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
        'default':'primary',
        'description':'设置按钮类型'
      }
    }
  }
}