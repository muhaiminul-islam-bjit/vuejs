export default {
    template: `
    <form @submit.prevent="add"> 
    <div class="border border-gray-600 text-black flex">
      <input placeholder="New assignment..." v-model="newAssignment" class="p-2" />
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
  </form>
    `,
    data() {
        return {
            newAssignment: ''
        };
    },
    props: {
        assignments: {
            type: Object
        }
    },
    methods: {
        add(e) {
            this.$emit('submitForm', this.newAssignment)

            this.newAssignment = ''
        }
    }
}