
<template>
   <div>
   <h1>jhjejeh</h1>
    <ListItem :items="listItems">
      <div slot-scope="row"
           class="list-item1">
         {{row.item.text}}
      </div>
    </ListItem>
    <table-slot/>
   </div>
  </template>

  <script>
  import ListItem from '../components/ListItem.vue'
import TableSlot from './tableSlot.vue'
  export default {
   name: 'app',
   components: {
      ListItem,
      TableSlot
   },
   data() {
      return {
          listItems: [
           {text: 'First item', icon: 'fa fa-user'},
           {text: 'Second item', icon: 'fa fa-copy'},
           {text: 'Third item', icon: 'fa fa-cut'}
           ]
      }
   }
  }
  </script>