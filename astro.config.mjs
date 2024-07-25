import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

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
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        slug: 'guides/example'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind({
	applyBaseStyles: false,
  })]
});