Vue.createApp({
    data() {
        return {
            persons: [
                {id: 1, name: 'Alex1'},
                {id: 2, name: 'Alex2'},
                {id: 3, name: 'Alex3'},
                {id: 4, name: 'Alex4'},
                {id: 5, name: 'Alex5'},
                {id: 6, name: 'Alex6'},
            ]
        }
    },
    methods: {
        removePerson(idx) {
            this.persons.splice(idx, 1);
        }
    }
}).mount('#app');