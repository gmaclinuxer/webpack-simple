var app = new Vue({
    el: "#app",
    data: {
        message: 'hello world',
        onece_message: 'hello world',
        html_message: '<p>hello world</p>',
        dynId: '12345',
        btnDisabled: true,
        a: 10,
        b: 20,
        show: false,
        url: '###',
    },
    methods: {
        onClick: function() {
            alert(12345);
        }
    }
});


app.message = 'hello pitou';
// no use for v-once
app.once_message = 'hello pitou';
setTimeout(function() {
    app.show = true;
}, 2000);