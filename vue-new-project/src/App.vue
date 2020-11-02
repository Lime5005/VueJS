<template>
<section>
  <header><h1>My Friends</h1></header>
  <!--这里把信息传递给子方，通过命名的暗号，父方用kebab-case，子方用camelCase-->
  <!--use v-bind to be more dynamic-->
  <new-friend @add-contact="addContact"></new-friend>
  <ul>
    <friend-contact v-for="friend in friends" 
    :key="friend.id" 
    :id="friend.id" 
    :name="friend.name" 
    :phone-number="friend.phone"
    :email-address="friend.email" 
    :is-favorite="friend.isFavorite"
    @delete-friend="deleteFriend"
    @toggle-favorite="toggleFavoriteStatus"></friend-contact>
  </ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        { 
          id: '1',
          name: 'lily',
          phone: '222',
          email: 'lily@localhost.com',
          isFavorite: true
        },
        { 
          id: '2',
          name: 'David',
          phone: '111',
          email: 'david@localhost.com',
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      // find( the first value that meets the requirement) is a build-in function in array
      // 听到指令，改变游戏规则
      //alert('ok');
       const foundFriend = this.friends.find(friend => friend.id === friendId);
       //console.log(foundFriend.isFavorite);
       foundFriend.isFavorite = !foundFriend.isFavorite;
       //console.log(foundFriend.isFavorite);
       // 子emit信息给父，父接收信息，改变游戏规则，再传给子，然后子再将改变的信息显示到页面
    },
    addContact(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriend);
    },
    deleteFriend(id) {
      // array.find() 找到第一个符合条件的元素， array.filter()新出一个符合条件的array, 排除不符合条件的元素
      this.friends = this.friends.filter(friend => friend.id !== id);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

</style>

