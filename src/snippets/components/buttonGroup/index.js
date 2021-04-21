

module.exports = {
  'y-group-button': {
    //组件属性
    'props': ['round', 'size', 'vertical', 'reverse'],
    //组件事件
    'events': [],
    // 默认事件
    'defaultEvents': [],
    // 组件片段默认显示的属性
    'defaultProps': [],
    //子标签
    'subTags':['y-button','y-button'],
    // 组件说明
    'description': '基础组件，将按钮作为一个组合使用',
    // 属性说明
    'prop': {
      'round': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'按钮是否圆角显示'
      },
      'size': {
        'options':['xxxl','xxl','xl','l','m','s','xs'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'按钮大小，可选值有xxl,xl,l、m、s、xs,不填则为默认大小'
      },
      'vertical': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'是否纵向排列按钮组'
      },
      'reverse': {
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'是否将按钮组反向'
      }
    }
  }
}