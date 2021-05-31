<template>
  <div>
    <h3>Dynamic Obj Rcvr</h3>

    <p>Passing objects to params was never supported in Vue-router</p>
    <p>https://stackoverflow.com/a/67180665</p>

    {{ JSON.stringify(d) }}
  </div>
</template>


<script>
import { useRouter, useRoute } from "vue-router";

export default {
  props: { data: Object },
  setup(props) {
    const route = useRoute();
    console.log(route.params);
    console.log(props.data);
    return {
      d: props.data,
    };
  },
};
</script>

<style scoped>
div {
  background-color: darkgray;
}
</style>
