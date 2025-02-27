import { ref, createApp } from 'vue'

createApp({ 
    setup(){
        const count = ref(0)
        return { count }
    },
    template: `
        <button @click="count++">
            You clicked me {{ count }} times subScript-2.
        </button>
    `
}).mount('#app')