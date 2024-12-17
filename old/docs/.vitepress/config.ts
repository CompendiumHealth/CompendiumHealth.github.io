import {fileURLToPath, URL} from "node:url";
import path from "node:path";
import {defineConfig} from "vitepress";
import plot from "./markdown-it-plot.js";
import type { Plugin } from 'vite';

// https://github.com/vuejs/vitepress/issues/1040
const VPLinkPatch = (): Plugin => ({
  name: 'make-all-external',
  enforce: 'pre',
  transform: (code, id) => {
    if (id.endsWith('VPLink.vue')) {
      return code.replace('/^[a-z]+:/i', '/^([a-z]+:|\/demo)/i');
    }
  },
});

// https://vitepress.dev/reference/site-config
// prettier-ignore
export default defineConfig({
  title: "Compendium Health",
  description: "Shop, compare, and directly book diagnostic testing",
  // base: "/plot/",
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {find: "@observablehq/plot", replacement: path.resolve("./src/index.js")},
        {find: /^.*\/VPFooter\.vue$/, replacement: fileURLToPath(new URL("./theme/CustomFooter.vue", import.meta.url))}
      ]
    }
  },
  markdown: {
    config: (md) => {
      plot(md);
    }
  },
  head: [
    ["link", {rel: "apple-touch-icon", href: "https://github.com/zephyrhealthcare/zephyrhealthcare.github.io/blob/d07c3d63676c4b4f2661e0dea985296406809c4b/docs/public/zephyr_v3.png"}],
    ["link", {rel: "icon", type: "image/png", href: "https://github.com/zephyrhealthcare/zephyrhealthcare.github.io/blob/d07c3d63676c4b4f2661e0dea985296406809c4b/docs/public/zephyr_v3.png", sizes: "512x512"}],
    // ["script", {async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-9B88TP6PKQ"}],
    // ["script", {}, "window.dataLayer=window.dataLayer||[];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js',new Date());\ngtag('config','G-9B88TP6PKQ');"]
  ],
  // sitemap: {
  //   hostname: 'https://observablehq.com/plot/'
  // },
  themeConfig: {
    plugins: [VPLinkPatch()],
    // https://vitepress.dev/reference/default-theme-config
    // Theme related configurations.
    logo: {
      light: "/zephyr_v3.png",
      dark: "/zephyr_v3.png"
    },
    
    nav: [
      { text: 'What is Compendium Health?', link: '/what-is-zephyr/' },
      { text: 'Explore a demo!', link: "https://www.zephyr.health/demo"},
      {
        text: 'Dev Blog',
        items: [
          { text: 'Where do we get our data?', link: '/data-source/' },
          { text: 'How much do prices vary?', link: '/price-variance/' },
        ]
      },
      { text: 'Our Team', link: '/our-team/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'What is Compendium Health?',
          collapsed: true,
          items: [
            { text: 'What is Compendium Health?', link: '/what-is-zephyr/' },
            { text: 'How much does Compendium cost?', link: '/zephyr-money/' },
            // { text: 'Get Started', link: '/get-started/' }
          ]
        },
        {
          text: 'Dev Blog',
          collapsed: true,
          items: [
            { text: 'Where do we get our data?', link: '/data-source/' },
            { text: 'How much do prices vary?', link: '/price-variance/' },
          ]
        },
      ],
    },
    search: {
      provider: "local"
    },
    socialLinks: [
      {icon: "github", link: "https://github.com/zephyrhealthcare"},
      {icon: "x", link: "https://twitter.com/zephyrhealthcare/"},
      {icon: "linkedin", link: "https://www.linkedin.com/company/zephyrhealthcare"},
      {icon: "youtube", link: "https://www.youtube.com/c/zephyrhealthcare"}
    ],
    footer: {
      message: "Website based on ObservableHQ's plotting docs.",
      copyright: `Copyright 2020–${new Date().getUTCFullYear()} Zephyr Health`
    }
  }
});
