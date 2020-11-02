import { createApp } from 'vue'
//当你在写import的时候，同时也在命名：
import App from './App.vue'
import friendContact from './components/friendContact.vue'
import newFriend from './components/newFriend.vue'

const app = createApp(App)

//这里先登记一下要用到的components，写component也是在给template命名：
app.component('friend-contact', friendContact)
app.component('new-friend', newFriend)
app.mount('#app')