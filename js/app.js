    'use strict';
    //------------------------
    //---------CTAPT----------
    //------------------------
    (function() {
        //---------------------------
        //--------- 1-st ------------
        //---------------------------
        createForm();
        //------------------------
        // Creating checkboxes
        //------------------------
        function createForm() {
            //create field
            var form = document.createElement('form');
            var container = document.getElementById('newForm');
            container.appendChild(form);
            for (var i = 0; i < 2; i++) {
                var input = document.createElement('input');
                form.appendChild(input);
            }
            document.getElementsByTagName('input')[0].type = 'text';
            document.getElementsByTagName('input')[0].name = 'count';
            document.getElementsByTagName('input')[1].type = 'button';
            document.getElementsByTagName('input')[1].name = 'button';
            document.getElementsByTagName('input')[1].value = 'Create!';
            //---------------------------
            //---- onsubmit function ----
            //---------------------------
            document.getElementsByTagName('input')[1].onclick = function createCheckbox() {
                //------------------------
                var sum = 0;
                var totalSum = 0;
                var value = document.getElementsByTagName('input')[0].value;
                var section = document.createElement('section');
                var textElement = document.createElement('p');
                var totalSumElement = document.createElement('p');
                textElement.textContent = 'Sum : ' + sum;
                totalSumElement.textContent = 'total sum ' + totalSum;
                //------------------------------
                container.appendChild(section);
                container.appendChild(textElement);
                container.appendChild(totalSumElement);
                //------------------------------
                for (var i = 0; i < value; i++) {
                    var checkbox = document.createElement('input');
                    section.appendChild(checkbox);
                    checkbox.type = 'checkbox';
                    checkbox.name = 'checkbox';
                    checkbox.onclick = function calculateCheckboxes() {
                        if (this.checked) {
                            sum = sum + 1;
                            totalSum = totalSum + 1;
                            textElement.textContent = 'Sum : ' + sum;
                            totalSumElement.textContent = 'total sum ' + totalSum;
                        } else {
                            sum = sum - 1;
                            textElement.textContent = 'Sum : ' + sum;
                        }
                    };
                }
            };
        }
        //-----------------------------------
        //---------- 2-nd and 3-rd-----------
        //-----------------------------------
        var page = {
            'div': {
                '@class': 'red',
                'h3': 'welcome',
                'b': 'bold text'
            },
            'b': 'one more bold text',
            'div2': {
                '@class': 'red',
                '@value': 'one more bold text'
            },
            'h3': 'hello, this is a title',
            'section': {
                '@class': 'red',
                'i': 'text',
                'div': {
                    '@class': 'blue',
                    'i': 'test'
                }
            }
        };
        var br;
        var divPage = document.getElementById('page');
        //---------------------------------
        document.getElementsByTagName('button')[0].onclick = function() {
            createDom(page, divPage);
        };
        //---------------------------------
        function createDom(obj, elem) {
            //-----------------------------
            var arr = Object.keys(obj);
            arr.forEach(function(item) {
                if (item === '@class') {
                    obj.className = obj[item];
                } else if (item === '@value') {
                    obj.value = obj[item];
                } else if (typeof obj[item] === 'object') {
                    var div = document.createElement('div');
                    elem.appendChild(div);
                    createDom(obj[item], div);
                } else {
                    var element = document.createElement(item);
                    elem.appendChild(element);
                    br = document.createElement('br');
                    elem.appendChild(br);
                    element.textContent = obj[item];
                }
            });
            //-----------------------------------
        }
        //-----------------------------------
    })();