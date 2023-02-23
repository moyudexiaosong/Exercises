<template>
    <h1>{{result}}</h1>
</template>
<script lang="ts">
  /* eslint-disable */
import { defineComponent } from "vue";
export default defineComponent({
setup() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve({result: "YST"});
    }, 2000);
    });
},
});
</script>