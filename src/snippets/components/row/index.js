

module.exports = {
  'y-row': {
    //组件属性
    'props': ['gutter', 'gutterX', 'gutterY', 'type', 'align', 'direction', 'justify', 'tag'],
    //组件事件
    // 'events': ['click'],
    // 'defaultEvents': ['click'],
    // 组件片段默认显示的属性
    // 'defaultProps': ['type'],
    //子标签
    'subTags':['y-col','y-col'],
    // 'body': ['<y-row>',
    //   '<y-col span="12">y-col-12</y-col>',
    //   '<y-col span="12">y-col-12</y-col>',
    // '</y-row>',],
    'description':'基础组件，栅格行',
    'prop': {
      'gutter': {
        //选项列表
        // 'options': ['primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'],
        'optionType': 'number',
        'defaultValue':'0',
        'description':'栅格间距，单位 px，上下左右平分'
      },
      'gutterX': {
        //选项列表
        // 'options': ['primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'],
        'optionType': 'number',
        'defaultValue':'0',
        'description':'栅格间距，单位 px，左右平分'
      },
      'gutterY': {
        //选项列表
        // 'options': ['primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'],
        'optionType': 'number',
        'defaultValue':'0',
        'description':'栅格间距，单位 px，上下平分'
      },
      'type': {
        //选项列表
        'options': ['flex'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'布局模式，可选值为flex或不选，在 现代浏览器 下有效'
      },
      'align': {
        //选项列表
        'options': ['flex-start','flex-end','center','baseline','stretch','initial','inherit'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'flex 布局下的垂直对齐方式,可选值为flex-start、flex-end、center、baseline、stretch、initial、inherit(可参照css align-item属性)'
      },
      'direction': {
        //选项列表
        'options': ['row','row-reverse','column','column-reverse','initial','inherit'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'flex 布局下的区块方向方式，可选值为row、row-reverse、column、column-reverse、initial、inherit(可参照css flex-direction属性)'
      },
      'justify': {
        //选项列表
        'options': ['flex-start','flex-end','center','space-between','space-around','initial','inherit'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'flex 布局下的区块方向方式，可选值为flex-start、flex-end、center、space-between、space-around、initial、inherit(可参照css justify-content属性)'
      },
      'tag': {
        //选项列表
        'options': ['div','p','ul','li','ol','span'],
        'optionType': 'string',
        'defaultValue':'div',
        'description':'自定义元素标签'
      },
    }
  }
}