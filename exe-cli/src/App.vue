
<template>
  
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <h2>养生堂门诊</h2>
    <div>请选择科室进行挂号</div>
  </div>

  <div>
    <button v-for="(item,index) in subjects" 
    @click="selectFun(index)"  :key="index">
      {{item}}
    </button>
  </div>

  <div>
    您选择了【{{selectsub}}】
  </div>
  <!-- <teleport to="#myModel">
    <div id="center">
      <h2>YST</h2>
    </div>
  </teleport> -->
  <div>{{nowTime}}</div>
  <div>
    <Suspense>
      <template #default>
         <subShow />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
  <!-- <div>
    <Suspense>
      <template #default>
        <asyncShow />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div> -->
  <!-- <div v-if="loading">Loading.....</div>
  <img v-if="loaded" :src="result.message" /> -->
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent ,reactive,ref, toRefs, onMounted} from 'vue';
import { nowTime, getNowTime} from './hooks/useNowTime'
//import useUrlAxios from './hooks/useURLAxios'
import myModel from './components/myModel.vue'
import asyncShow from './components/AsyncShow.vue'
import subShow from './components/subShow.vue'
export default defineComponent({
  name: 'App',
  components:{myModel,asyncShow,subShow},
  setup() {
    const obj :ObjProps=reactive({
      subjects : ref(["内科", "外科", "心脑血管科"]),
      selectsub : ref(''),     
      selectFun : (index:number)=>{
        obj.selectsub = obj.subjects[index];},      
    });
    
    interface ObjProps{
      subjects : string[]
      selectsub :string
      selectFun :(index:number)=>void
    };
    // const { result, loading, loaded } = useUrlAxios(
    //   "https://dog.ceo/api/breeds/image/random"
    // );
    const refObj=toRefs(obj);
    onMounted(()=>{
      getNowTime();
    });
    return {
      ...refObj, nowTime, getNowTime
      // ,result, loading, loaded
    };
  },  
});
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
</style>
