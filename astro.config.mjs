import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LearnGrove Support',
			logo: {
				src: './src/assets/LearnGroveLogo.svg'
			},
			social: {
				github: 'https://github.com/datagrove/learngrove-support'
			},
			customCss: ['./src/tailwind.css'],
			sidebar: [
				{
					label: 'Creators',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Creators',
							autogenerate: {
								directory: 'creators'
							}
						},
					]
				}, {
					label: 'Learners & Learning Facilitators',
					items: [
						{
							label: 'Learners & Learning Facilitators',
							autogenerate: {
								directory: 'learners'
							}
						}
					]
				},
				{
					label: 'leadingNavLinks',
					items: [
						{
							label: 'Creators',
							link: '/creators'
						},
						{
							label: 'Learning Facilitators',
							link: '/learners'
						}
					]
				},],
			plugins: [
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: "leadingNavLinks" }
					},
					multiSidebar: {
						switcherStyle: "hidden",
					},
				}),
			],
		}), tailwind({
			applyBaseStyles: false,
		})]
});