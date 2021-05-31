<template>
  <div >
    <router-link to="/home/component1">component1</router-link>
    <br />
    <router-link to="/home/foo">foo</router-link>
  </div>
</template>

<style scoped>
div {
  grid-area: nav;
  border: 5px solid;
  margin-right: 0.75rem;
  padding: 0.3rem;
  background-color: beige;
}
</style>