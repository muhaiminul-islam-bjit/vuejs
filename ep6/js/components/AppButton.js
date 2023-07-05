export default {
  template: `
<button :class="{
                'bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2': true,
                'bg-blue-200 hover:bg-blue-400': type === 'primary',
                'bg-red-200 hover:bg-blue-400': type === 'muted',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary'
              }"><slot /></button>
            `,
  mounted() {
    alert("Hello world");
  },

  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
