import { ref } from 'vue'

export default {
  setup(){
      const count = ref(0)
      return { count }
  },
  template: `
      <p>
        Component-A:
      </p>
      
      <p>
        {
      </p>
      
      <button @click="count++">
          You clicked me {{ count }} times app-component.
      </button>
      
      <h1>A-Component--Title</h1>
      
      <button class="button-with-class-width">
        Button
      </button>
      
      <p>}</p>
      <p></p>
  `
}
