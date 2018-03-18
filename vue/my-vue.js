// Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello World!'
    },
    created() {
        console.log('fetching');
        fetch('//api.myjson.com/bins/p3xcd')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.message = json.foo
        })
    }
});

