<script setup>
import {ref,reactive,computed} from 'vue';
 // binding objs
const isActive=ref(true);
const isImportant=ref(false);
const classobj=reactive({
    active:false,
    'f-bold':true,
iText:true,
});
//computed property
const mycls=computed(()=>({
active: isActive.value,
"f-bold": isImportant.value,
}));
//array binding
const currentTabBG = ref("bg-grn") ;
const errorClass = ref("text-red");

</script>

<template>
<h1 class="txt-red">kanyu</h1>
<h1 class="txt-red f-bold">kanyu</h1>

<!-- binding to obj  -->
<h1 v-bind:class="{'active':isActive}">kanyu</h1>
<!-- merge both class  -->
<h1 class="txt-red" :class="{'active':isActive}">kanyu</h1>
<h1 class="txt-red" :class="classobj">kanyu</h1>
<h1 class="txt-red" :class="mycls">kanyu</h1>
<!-- aaray binding  -->
<h1 class="txt-red" :class="[currentTabBG,errorClass]">kanyu</h1>
<h1 :class="[isImportant? currentTabBG : '' ,errorClass]">kanyu</h1>
<h1 :class="[isActive? currentTabBG : '' ,errorClass]">kanyu</h1>
<h1 :class="[{'bg-blk':isActive},errorClass]">kanyu</h1>

</template>

<style>
.bg-grn{
    background:green

}
.text-red{
    color:red
}
</style>