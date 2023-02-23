<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <h2>你好，{{$route.params.username}}--{{$route.params.id}}</h2> 
    </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
export default{
    name: "intro",
    setup() {
        const obj = reactive({
            msg: "This is my mother."
            
        });
        const Refobj = toRefs(obj);
        return {
            ...Refobj
        };
    },
}
</script>
<style scoped>
</style>