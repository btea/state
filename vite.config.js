import { createVuePlugin } from 'vite-plugin-vue2';
import ScriptSetup from 'vue2-script-setup-transform/vite-plugin';

export default {
	server: {
		host: true,
	},
	plugins: [createVuePlugin(), ScriptSetup()],
};
