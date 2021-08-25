import { createVuePlugin } from 'vite-plugin-vue2'; // vite匹配vue2插件
import ScriptSetup from 'vue2-script-setup-transform/vite-plugin'; // vue2使用setup特性

export default {
	server: {
		host: true,
	},
	plugins: [createVuePlugin(), ScriptSetup()],
};
