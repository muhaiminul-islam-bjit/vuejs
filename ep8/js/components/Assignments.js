import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  template: `
<section class="space-y-6">
    <AssignmentList title="In Progress" :assignments="filters.inProgress" />
    <AssignmentList title="Completed" :assignments="filters.completed" />

  <AssignmentCreate :assignments="assignments" v-on:submitForm="add" />
  </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1, tag: 'math' },
        { name: "Read chapter 4 ", complete: false, id: 2, tag: 'science' },
        { name: "Turn in homework", complete: false, id: 3, tag: 'math' },
      ],
      newAssignment: ''
    };
  },

  components: {
    AssignmentList, AssignmentCreate
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1
      });

      this.newAssignment = ''
    }
  }
};
