
Vue.component('todo-item', {
    props: ['todo', 'thing'],
    template: '<li>{{ todo.name }} {{ thing }}</li>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        otherThing: 'frack-tastic',
        arr: [
            {name: 'foo', id: 1},
            {name: 'bar', id: 2},
            {name: 'baz', id: 3},
        ]
    },
    methods: {
        doIt: () => {
            alert(1);
        }
    }
});
