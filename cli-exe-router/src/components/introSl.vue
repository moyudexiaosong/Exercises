<template>
    
    <div class="hello">
       <h1>{{msg}}</h1> 
       <div>你好</div>
    </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';


export default{
    name:'intro',
    setup(){
        const obj=reactive({
            msg:'This is my father.'
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