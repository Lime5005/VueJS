const app = Vue.createApp({
    data() {
        return {
            showDetail: false,
            friends: [{
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ]
        }
    },

});
//component is like another app in the main app, and can be re-used: you can have multiple the same 'friend-contact' component used everywhere inside the main app.
app.component('friend-contact', {
    template: `
    <li>
      <h2>{{ friend.name}}</h2>
      <button @click="toggleDetail">Show Details</button>
      <ul v-if="showDetail">
          <li><strong>Phone:</strong> {{ friend.phone }}</li>
          <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
    `,
    data() {
        return {
            showDetail: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetail() {
            this.showDetail = !this.showDetail;
        }
    }
})

app.mount('#app');