# 本示例研究如何定义一个block

通过阅读Add Custome Blocks[添加自定义块](https://developers.google.com/blockly/guides/configure/web/custom-blocks)得知，一共有两种方式创建自定义块：JSON和JavasScript。


大多数情况下我使用JSON方式进行测试，下面给出上面文档中通过JSON方式自定义Block的代码

```javascript
Blockly.Blocks['string_length'] = {
  init: function() {
    this.jsonInit({
      "message0": 'length of %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        }
      ],
      "output": "Number",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};
```

上面的初始化代码分析：

1. `Blockly` 全局对象，用于访问Blockly
2. `Blockly.Blocks` `Blocks`是`Blockly`的一个静态属性，它用于映射block类型名称和实际的定义
3. 当这个block被实例化(Blockly.Block)时会调用`init`方法，`init`方法里面的`this`指向`Blockly.BlockSvg`对象实例
4. `this.jsonInit`调用`Blockly.Block.prototype.jsonInit`。然后根据传入的参数初始化这个块

JSON格式分析：

1. `message0`和`args0` 两个字段必须匹配切后面的数字也必须匹配，如果需要定义多个只需要后面的数字递增即可。
2. `output` 绑定一个输出的渲染，block和屏幕之间的rendered连接
3. `colour` block的颜色，具体可[查看文档](https://developers.google.com/blockly/guides/create-custom-blocks/block-colour)
4. `tooltip` 鼠标移动到block上面的提示，具体可[查看文档](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#tooltips)
5. `helpUrl` 设置右键点击block弹出菜单Help的连接

`message0`中 `%1`、`%2`插值：

`%1`这样的插值会将对应`argsN`中数组对应索引的字段或输入。根据不同的语言习惯插值`%1`和`%2`的位置可以任意调换

`argsN`内的参数分析：

每个args都有一个`type`键，其余的键取决于`type`所给定的类型。[`type`可取值列表](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#inputs_and_fields_in_json)

`type`的类型分为两种：

1. [Fields](https://developers.google.com/blockly/guides/create-custom-blocks/fields/overview)

field_input         // 由用户在输入框输入值
field_dropdown      // 创建一些列下拉数据
field_checkbox      // 创建一个复选框
field_colour        // 创建一个颜色选择组件
field_number        // 创建一个数字输入，可设置min、max、precision限定
field_angle         // 创建一个角度选择组件
field_date          // 创建一个日期选择组件
field_label         // 创建一个标签文本
field_image         // 创建一个图片组件

2. Inputs

input_value         // 可以接收一些列表达式的值，比如：logic_compare text
input_statement     // 输入一个控制块
input_dummy         // 我理解是占位标签