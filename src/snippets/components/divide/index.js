

module.exports = {
  'y-divide': {
    //组件属性
    'props': [ 'color','size','type','textAlign','dashed','dotted','plain'],
    //组件事件
    'events': [],
    //默认显示事件
    'defaultEvents': [],
    //子标签
    // 'subTags':[],
    // 组件片段默认显示的属性
    'defaultProps': ['type'],
    //显示的代码片段
		'body':``,
    // 组件说明
    'description': '区隔内容的分割线。',
    // 属性说明
    'prop': {
      'type': {
        options:['horizontal','vertical'],
        'optionType': 'string',
        'defaultValue':'horizontal',
        'description':'类型，可选值为 horizontal 或 vertical'
      },
      'color': {
        //选项列表
        options:['primary', 'info', 'success', 'warning', 'error','#0a9fad','#2db7f5','#19be6b','#ff9900','#ed4014','#515a6e'],
        optionType: 'string',
        defaultValue:'',
        'description':'分割线颜色'
      },
      'size': {
        'options':['xxxl','xxl','xl','l','m','s','xs'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'分割线尺寸，可选值有xxl、xl、l、m、s、xs,不填则为默认大小'
      },
      'textAlign': {
        'options':['left','center','right'],
        'optionType': 'string',
        'defaultValue':'',
        'description':'文字位置，修改分割线标题的位置。可选像素(30px),百分比(30%)，或者left、center、right枚举值'
      },
      dashed: {
        // 'options':['action','extra'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'是否虚线显示'
      },
      dotted: {
        // 'options':['action','extra'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'是否点线显示'
      },
      plain: {
        // 'options':['action','extra'],
        'optionType': 'boolean',
        'defaultValue':false,
        'description':'文字显示为正文样式'
      },
    }
  }
}