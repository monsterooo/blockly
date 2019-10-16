# 本文研究如何生成代码和自定义代码

## 收集参数：

### Block.getFieldValue(name) returns any type
函数从给定名称的`field`返回值
* 对于`text filed`此函数单纯返回其值
* 对于`dropdown`此函数返回选中项的值
* 对于`variable dropdown`，此函数返回变量下拉列表面向用户的名称
* 

### Generator.valueToCode(block, name, outerOrder) returns string
查找block所连接的name，然后生成该block的代码，然后将代码作为字符串返回。在未连接input的情况下返回null。outerOrder指定嵌入操作信息的顺序，每个语言生成器都有一个优先顺序列表。outerOrder就是指定代码的[优先级](https://developers.google.com/blockly/guides/create-custom-blocks/operator-precedence)。


### statementToCode(block, name) returns string
查找指定语句的嵌套blocks堆栈

[操作优先级](https://developers.google.com/blockly/guides/create-custom-blocks/operator-precedence)

## 集合代码

