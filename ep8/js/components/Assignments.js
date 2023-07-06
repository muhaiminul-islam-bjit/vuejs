import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  template: `
<section class="flex gap-4">
    <AssignmentList title="In Progress" :assignments="filters.inProgress">
      <AssignmentCreate :assignments="assignments" v-on:submitForm="add" />
    </AssignmentList>
    <div v-if="showCompleted">
      <AssignmentList title="Completed" :assignments="filters.completed" canToggle @toggle="showCompleted = !showCompleted" />
    </div>
    

  
  </section>
    `,

  data() {
    return {
      assignments: [],
      newAssignment: "",
      showCompleted: true,
    };
  },

  components: {
    AssignmentList,
    AssignmentCreate,
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },

  created() {
    fetch("http://localhost:3001/assignments")
      .then((response) => response.json())
      .then((data) => {
        this.assignments = data;
      });
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = "";
    },
  },
};
