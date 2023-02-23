<template>
    <div class="hello">
        <h1>{{msg}}</h1> 
        <router-view class="aaa"></router-view>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';

export default{
    name:'introAll',
    setup(){
        const obj=reactive({
            msg:'This is our hospital.'
        })
    const Refobj=toRefs(obj)
    return{
        ...Refobj
    }
    },
}
</script>
<style scoped>
</style>