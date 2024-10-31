import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'LearnGrove Support',
		logo: {
			src: './src/assets/LearnGroveLogo.svg'
		},
		social: {
			github: 'https://github.com/datagrove/learngrove-support'
		},
		customCss: ['./src/tailwind.css'],
		sidebar: [{
			label: 'Creators',
			items: [
				// Each item here is one entry in the navigation menu.
				{
					label: 'Getting Started',
					autogenerate: {
						directory: 'creators-getting-started'
					}
				}, {
					label: 'Resources',
					autogenerate: {
						directory: 'creators-resources'
					}
				}, {
					label: 'Creator Fees',
					autogenerate: {
						directory: 'creators-fees'
					}
				}, {
					label: 'Payouts',
					autogenerate: {
						directory: 'creators-payouts'
					}
				}, {
					label: 'Taxes',
					autogenerate: {
						directory: 'creators-taxes'
					}
				}]
		}, {
			label: 'Learners & Learning Facilitators',
			items: [{
				label: 'Learners & Learning Facilitators',
				autogenerate: {
					directory: 'learners'
				}
			}]
		}, {
			label: 'FAQs',
			items: [{
				label: 'FAQs',
				autogenerate: {
					directory: 'frequently-asked'
				}
			}]
		}, {
			label: 'leadingNavLinks',
			items: [{
				label: 'Creators',
				link: '/creators-getting-started'
			}, {
				label: 'Learners & Facilitators',
				link: '/learners'
			}, {
				label: 'FAQs',
				link: '/frequently-asked'
			}]
		}],
		plugins: [starlightUtils({
			navLinks: {
				leading: {
					useSidebarLabelled: "leadingNavLinks"
				}
			},
			multiSidebar: {
				switcherStyle: "hidden"
			}
		})]
	}), tailwind({
		applyBaseStyles: false
	}), markdoc()]
});