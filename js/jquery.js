    (function() {
        'use strict';
        createForm();
        setInterval(1000);

        function createForm() {
            var formElements = [{
                type: 'text',
                name: 'name',
                label: 'Name:'
            }, {
                type: 'text',
                name: 'email',
                label: 'email:'
            }, {
                type: 'text',
                name: 'date',
                label: 'Date:'
            }, {
                type: 'text',
                name: 'ip',
                label: 'ip:'
            }, {
                type: 'submit',
                name: 'submit',
                value: 'Send'
            }];
            var body;
            var form = $('<form></form>');
            $('body').append(form);
            formElements.forEach(function(item) {
                var input = $('<input>');
                var label = $('<label>');
                label.text(item.label);
                var br = $('<br/>');
                $(input).attr({
                    'type': item.type,
                    'label': item.label,
                    'name': item.name,
                    'value': item.value
                });
                form.append(label);
                form.append(input);
                form.append(br);
            });
        }
        $('form').on('submit', validateForm);

        function validateForm(event) {
            event.preventDefault();
            var name = $('input[name=name]').val();
            var email = $('input[name=email]').val();
            var date = $('input[name=date]').val();
            var ip = $('input[name=ip]').val();
            var nameExp = new RegExp('^[A-z0-9_-]{5,30}$');
            var emailExp = new RegExp('^[A-z0-9._%+-]+@[A-z0-9.-]+.[A-z]{2,4}$');
            var dateExp = new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
            var ipExp = new RegExp(/^\d+\.\d+\.\d+\.\d+$/);
            if (!nameExp.test(name)) {
                alert('Bad name');
            } else if (!emailExp.test(email)) {
                alert('Bad email');
            } else if (!dateExp.test(date)) {
                alert('Bad date format');
            } else if (!ipExp.test(ip)) {
                alert('Bad ip');
            } else {
                alert('Your data is good!');
            }
        }
    })();