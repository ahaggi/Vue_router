<template>
  <div class="us">
    <h2>Home Component</h2>

    <UserSettingsNav />
    <div class="us__content">
      
      <p>will always show ComponentNavBar,</p>
      <ul>
        AND Either
        <li>Nothing: when navigating to / , OR</li>
        <li>Component1: when navigating to home/Component1, OR</li>
        <li>Component2 AND component3: when navigating to home/foo </li> 
        Notice that component3 is 'Named View'  
      </ul>


      <router-view />
      <router-view name="helper" class="us__content--helper" />
    </div>
  </div>
</template>

<script>
import UserSettingsNav from "./UserSettingsNav.vue";
export default {
  components: { UserSettingsNav },
};
</script>

<style scoped>
.us {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "nav content"
    "nav helper";
  background-color: burlywood;
}

h2 {
  grid-area: header;
}
.us__content {
  grid-area: content;
}
.us__content--helper {
  grid-area: helper;
}
</style>