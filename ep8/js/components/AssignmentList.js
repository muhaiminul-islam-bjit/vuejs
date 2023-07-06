import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  template: `
    <section v-show="assignments.length" class="w-60">
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">{{title}}
        <span>({{ assignments.length }})</span>
      </h2>

      <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
    </div>
        

        <AssignmentTags :initialTags="assignments.map(a => a.tag)"  v-model="currentTag"  />

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <Assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment" />
        </ul>
        <slot></slot>
      </section>
    `,

  components: { Assignment, AssignmentTags },

  data() {
    return {
      currentTag: "all",
    };
  },

  props: {
    assignments: Array,
    title: String,
    canToggle: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
