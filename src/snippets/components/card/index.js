module.exports = {
	"y-card": {
		//组件属性
		props: [
			"hover",
			"borderRadius",
			"border",
			"size",
			"icon",
			"poster",
			"posterTitle",
			"title",
			"padding",
			"shadow",
			"to",
			"replace",
			"target",
			"append",
		],
		//组件事件
		// 'events': ['click'],
		//默认显示事件
		// 'defaultEvents': ['click'],
		//子标签
		subTags: ["y-card-meta"],
		// 组件片段默认显示的属性
		defaultProps: ["header", "footer", "loading"],
		//显示的代码片段
		// 'body':['<y-list type="$0" @click="${1:()=>{}}"></y-list>'],
		// 组件说明
		description:
			"最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。",
		// 属性说明
		prop: {
			hover: {
				optionType: "boolean",
				defaultValue: false,
				description: "鼠标悬停显示阴影",
			},
			borderRadius: {
				optionType: "number",
				defaultValue: 0,
				description: "边框圆角",
			},
			border: {
				optionType: "boolean",
				defaultValue: true,
				description: "是否显示边框，建议在灰色背景下使用",
			},
			size: {
				options: ["xxxl", "xxl", "xl", "l", "m", "s", "xs"],
				optionType: "string",
				defaultValue: "",
				description:
					"列表尺寸，可选值有xxl、xl、l、m、s、xs,不填则为默认大小",
			},
			icon: {
				options: [
					"y",
					"setting",
					"search",
					"star",
					"right",
					"plus",
					"minus",
					"more",
					"password",
					"mobile",
					"left",
					"eye",
					"eye-close",
					"location",
					"category",
					"cart",
					"user",
					"service",
					"image",
					"edit",
					"remove",
					"email",
					"refresh",
					"copy",
					"down",
					"up",
					"upload",
				],
				optionType: "string",
				defaultValue: "",
				description:
					"标题前的图标,可选值为对应的图标类，若为内部icon类，则可省略yo-icon-前缀",
			},
			poster: {
				optionType: "string",
				defaultValue: "",
				description: "卡片封面",
			},
			posterTitle: {
				optionType: "string",
				defaultValue: "",
				description: "卡片封面说明",
			},
			title: {
				// 'options':['loading','loading1','loading2','loading3','loading4',],
				optionType: "string",
				defaultValue: "",
				description: "卡片标题",
			},
			padding: {
				// 'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
				//   'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
				optionType: "number",
				defaultValue: 24,
				description: "split",
			},
			shadow: {
				// 'options': ['y', 'setting', 'search', 'star', 'right', 'plus', 'minus', 'more', 'password',
				//   'mobile', 'left', 'eye','eye-close', 'location', 'category', 'cart', 'user', 'service', 'image', 'edit', 'remove', 'email', 'refresh', 'copy', 'down', 'up','upload'],
				optionType: "boolean",
				defaultValue: false,
				description: "卡片阴影，建议在灰色背景下使用",
			},
			to: {
				optionType: "string|object",
				defaultValue: "",
				description: "跳转的链接，支持 vue-router 对象",
			},
			replace: {
				optionType: "boolean",
				defaultValue: false,
				description:
					"路由跳转时，开启 replace 将不会向 history 添加新记录",
			},
			append: {
				optionType: "boolean",
				defaultValue: false,
				description:
					"是否附加前缀路径，同 vue-router append",
			},
			target: {
				options: ["_self", "_blank", "_parent", "_top"],
				optionType: "string",
				defaultValue: "_self",
				description:
					"路由跳转时，相当于 a 链接的 target 属性,可选值请参考HTML标准,可选值有_self 、_blank、_parent、_top",
			},
		},
	},
};
