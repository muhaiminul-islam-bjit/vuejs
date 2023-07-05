import AssignmentList from "./AssignmentList.js";

export default {
  template: `
<section class="space-y-6">
    <AssignmentList title="In Progress" :assignments="filters.inProgress" />
    <AssignmentList title="Completed" :assignments="filters.completed" />
  </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Finish project", complete: false, id: 1 },
        { name: "Read chapter 4 ", complete: false, id: 2 },
        { name: "Turn in homework", complete: false, id: 3 },
      ],
    };
  },

  components: {
    AssignmentList,
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },
};
