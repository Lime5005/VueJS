<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? 'Yes' : 'No' }}</h2>
    <button @click="toggleDetail">{{ showDetail ? 'Hide' : 'Show'}}</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="$emit('delete-friend', id)">Delete</button>
    <ul v-if="showDetail">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  // What defined in props are like data, can be accessed everywhere in this file. We use props to pass data from parent to child. Remember: props can not be mutated in the child, but you can bypass this role by passing it into data property (of cause, change to another name first)
  /*props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite',
  ],*/
  // More complex props: 适用于多人开发的大型项目
  // Props can be used as normal HTML elements to bind with other functions
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: true
      /*validator: function(value) {
        // Return either this or that, no other result will be accepted. // String: "1" or "0", Boolean: true or false
        return value === '1' || value === '0'
      }*/
    }
  },
  data() {
    return {
      showDetail: false
    }
  },
  methods: {
      toggleDetail() {
        this.showDetail = !this.showDetail;
      },
      toggleFavorite() {
        // $emit('event-name', data), eg: this.id would be the first argument for the method 'toggle-favorite' in the parent
        this.$emit('toggle-favorite', this.id);
      }
  }
}
</script>