

module.exports = {
  'y-list-item-meta': {
    //组件属性
    'props': ['avatar', 'avatarTitle', 'desc', 'title'],    
    //组件事件
    // 'events': [],
    //默认显示事件
    // 'defaultEvents': [],
    //子标签
    // 'subTags':['y-list-item','y-list-item'],
    // 组件片段默认显示的属性
    'defaultProps': ['avatar','title'],
    //显示的代码片段
    // 组件说明
    'description': '列表元素元数据',
    // 属性说明
    'prop': {
      'avatar': {
        //选项列表
        // 'options': ['primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表元素的图标'
      },
      'avatarTitle': {
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表元素的图标说明'
      },
      'title': {
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表元素的标题'
      },
      'desc': {
        'optionType': 'string',
        'defaultValue':'',
        'description':'列表元素的标题'
      },
    }
  }
}