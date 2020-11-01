<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? 'Favorite' : ''}}</h2>
    <button @click="toggleDetail">{{ showDetail ? 'Hide' : 'Show'}}</button>
    <button @click="toggleFavorite">Favorite?</button>
    <ul v-if="showDetail">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  // What defined in props are like data, can be accessed everywhere in this file. We use props to pass data from parent to child. Remember: props can not be mutated in the child, but you can bypass this role by passing it into data property (of cause, change to another name first)
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite',
  ],
  data() {
    return {
      showDetail: false,
      friend: 
        {
          id: '1',
          name: 'lily',
          phone: '222',
          email: 'lily@localhost.com'
        },
      friendIsFavorite: this.isFavorite, 
    }
  },
  methods: {
      toggleDetail() {
        this.showDetail = !this.showDetail;
      },
      toggleFavorite() {
        if (this.friendIsFavorite === '1') {
          this.friendIsFavorite  = '0'
        } else {
          this.friendIsFavorite = '1'
        }
      }
  }
}
</script>