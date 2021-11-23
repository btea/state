import createVuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from "vite";
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	server: {
		host: true,
	},
	plugins: [createVuePlugin(), Components({ 
		dts: true,
		extensions: ['vue'],
		include: [/\.vue$/, /\.md$/],
		globalNamespaces: ['global'],
		resolvers: [
			(name) => {
				if (name === 'HelloWorld') {
					return './hellloWorld.vue'
				}
				console.log(name);
			}
		]
	})],
})
