
Vue.component('todo-item', {
    props: ['name', 'id'],
    template: '<li>{{ name }} {{ id }}</li>'
});

const Child = Vue.component('child', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<div>You clicked me {{ count }} times.</div>',

});

var app = new Vue({
    el: '#app',
    components: {
        Child
    },
    data: {
        count: 0,
        message: 'Hello World!',
        otherThing: 'frack-tastic',
        classes: [
            {name: 'FooClass', id: 4},
            {name: 'BarClass', id: 5},
            {name: 'BazClass', id: 6},
        ],
        items: [
            {name: 'foo', id: 1},
            {name: 'bar', id: 2},
            {name: 'baz', id: 3},
        ]
    },
    methods: {
        say (what) {
            console.log(what + ' ' + this.count);
        },
        updateComponentData(reference, both) {
            this.count++;
            console.log(reference);

            if (!both) {
                this.$refs[reference].count = this.count;
            } else {
                for (ref in this.$refs) {
                    this.$refs[ref].count = this.count;
                }
            }
        }
    }
});
