<template>
  <li>
    <!-- <router-link to="/home">Home</router-link> -->
    <router-link :to="{ name: 'home' }">Home</router-link>
  </li>

  <li>
    <router-link :to="{ name: 'dynamicObjRcvr', params: dataToSend }">
      dynamicObjRcvr
    </router-link>
  </li>



  <router-view></router-view>
</template>




<script >

export default {
  setup(props, context) {
    const dataToSend = {
      fieldA: "test",
      filedB: true,
      filedC: 99,
      filedD: {
        name: "John Doe",
        age: 20,
      },
    };
    return {
      dataToSend,
    };
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
</style>
