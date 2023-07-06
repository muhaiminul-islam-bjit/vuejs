import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
  template: `
  <div class="grid gap-6">
    <Assignments />
    <Panel>
      <template v-slot:heading>
        Hi There
      </template>
      <template v-slot:default>
        This is default content
      </template>
    </Panel>
    <Panel>
      <template v-slot:default>
        This is default content
      </template>
    </Panel>
  </div>

    `,

  components: { Assignments, Panel },
};
