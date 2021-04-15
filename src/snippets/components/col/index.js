

module.exports = {
  'y-col': {
    //组件属性
    'props': ['flex', 'offset', 'order', 'span', 'pull', 'push', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'tag'],
    //组件事件
    // 'events': ['click'],
    // 'defaultEvents': ['click'],
    // 组件片段默认显示的属性
    // 'defaultProps':['type'],
    // 'body':['<y-col span="$0"></y-col>'],
    'description':'基础组件，栅格列',
    'prop': {
      'flex': {
        //选项列表
        optionType: 'string|number',
        defaultValue:'',
        description:'flex 布局填充'
      },
      'offset': {
        //选项列表
        optionType: 'number',
        defaultValue:'0',
        description:'栅格左侧的间隔格数，间隔内不可以有栅格'
      },
      'order': {
        //选项列表
        optionType: 'number',
        defaultValue:'0',
        description:'栅格顺序，flex 布局模式下有效'
      },
      'span': {
        //选项列表
        optionType: 'number',
        defaultValue:'0',
        description:'栅格占位格数，为 0 时相当于 display: none'
      },
      'pull': {
        //选项列表
        optionType: 'number',
        defaultValue:'0',
        description:'栅格向左移动格数'
      },
      'push': {
        //选项列表
        optionType: 'number',
        defaultValue:'0',
        description:'栅格向右移动格数'
      },
      'xs': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'<576px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
      },
      'sm': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
      },
      'md': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
      },
      'lg': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
      },
      'xl': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
      },
      'xxl': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
      },
      'xxxl': {
        //选项列表
        optionType: 'number|object',
        defaultValue:'',
        description:'≥1920px 响应式栅格，可为栅格数或一个包含其他属性的对象,(例如：  {span: 4, offset: 4})'
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