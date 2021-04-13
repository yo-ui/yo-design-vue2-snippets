module.exports = {
  "y-vue-base-js": {
    "body": [
      "<template>",
      "\t<div>",
      "\t</div>",
      "</template>",
      "\r<script>",
      "\texport default {",
      "\t\tdata() {",
      "\t\t\treturn {};",
      "\t\t},",
      "\t\tmounted() {",
      "\t\t}",
      "\t}",
      "</script>",
      "\r<style lang=\"less\">",
      "</style>"
    ],
    "description": "YOUI Vue2.x 页面模板js-less"
  },
  "y-vue-base-ts": {
    "body": [
      "<template>",
      "\t<div>",
      "\t</div>",
      "</template>",
      "\r<script lang=\"ts\">",
      "import { Component, Vue, Prop } from 'vue-property-decorator';",
      "import { Row, Col } from 'yo-design-vue';",
      "@Component({",
      "\t name: '${1}',",
      "\t components: {",
      "\t\t [Row.name]: Row,",
      "\t\t [Col.name]: Col,",
      "\t }",
      "})",
      "export default class ${1} extends Vue {",
      "\t created() {",
      "",
      "\t }",
      "}",
      "</script>",
      "\r<style lang=\"less\">",
      "</style>"
    ],
    "description": "YOUIVue2.x 页面模板 typescript-less"
  }
}