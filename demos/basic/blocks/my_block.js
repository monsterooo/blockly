Blockly.Blocks['my_block'] = {
  init: function() {
    this.jsonInit({
      "message0": 'value of %1',
      "args0": [
        /*
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
        {
          "type": 'field_input',
          "name": "TEST_NAME",
          "text": ""
        },
        {
          "type": "field_dropdown",
          "name": "city",
          "options": [
            ["cheng du", 'chengdu'],
            ['bei jing', 'beijing']
          ]
        }
       {
         type: 'field_checkbox',
         name: 'TEST_CHECKBOX',
         checked: false
       }
       {
         type: 'field_number',
         name: "TEST_NUMBER",
         min: 0,
         max: 100,
         precision: 0.01
       }
       {
         type: 'field_label',
         text: ''
       }
       {
         type: 'field_image',
         src: 'https://www.gstatic.com/codesite/ph/images/star_on.gif',
         width: 30,
         height: 30,
         alt: '*'
       }
        */
       {
         type: 'input_value',
         name: "VALUE",
         check: "String"
       }
      ],
      "output": "Number",
      "colour": 160,
      "tooltip": "Returns number of letters in the provided text.",
      "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  }
};

Blockly.JavaScript['my_block'] = function(block) {
  // String or array length.
  debugger;
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
};
