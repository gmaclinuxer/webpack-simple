var app = new Vue({
    el: "#app",
    data: {
        message: "hello vue"
    }
})

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "页面加载于 " + new Date()  
    }
})


var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            {text: 'item1'},
            {text: 'item2'},
            {text: 'item3'},
            {text: 'item4'},
        ]
    }
})

setTimeout(function(){
    app4.todos.push({text: 'item5'});
}, 2000)

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: 'abcdef12345'
    },
    methods: {
        reverseIt: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
})


var app6 = new Vue({
    el: "#app-6",
    data: {
        message: 'abcdef12345'
    }
})


// 定义名为todo-item的组件
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app7 = new Vue({
    el: "#app-7",
    data: {
        todos: [
            {text: 'text1'},
            {text: 'text2'},
            {text: 'text3'},
            {text: 'text4'},
        ]
    }
})
