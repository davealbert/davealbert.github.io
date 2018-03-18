<template>
  <div calss="test">
      <input type="text" v-model="title"/>
      <h1>{{title}}</h1>
      <p v-if="showName">{{user.firstName}}</p>
      <p v-text="user.lastName" v-else></p>
      <ul>
          <li v-bind:key="item.key" v-for="item in items">{{item.title}}</li>
      </ul>
      <button v-on:click="greet('Hello yo')">Say Greeting</button>
      <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit" />
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
        title: 'Worked?',
        user: {
        firstName: 'John',
    lastName: 'Smith'
    },
    showName: false,
    newItem: '',
    items: [
        {id: 1, title: "Item 1"},
        {id: 2, title: "Item 2"},
        {id: 3, title: "Item 3"},
        {id: 4, title: "Item 4"},
    ]
    }
  },
  methods: {
      greet: (msg) => {
          alert(msg);
      },
      pressKey: (e) => {
          this.newItem += e.target
          console.log(e);

      },
      enterHit: () => {
          console.log('enterhit');
      }
  }

}
</script>

<style scoped>

</style>
