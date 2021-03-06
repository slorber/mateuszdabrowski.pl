/* eslint-disable global-require */
module.exports = {
    title: 'Mateusz Dąbrowski',
    tagline: 'Automate Marketing Automation',
    url: 'https://mateuszdabrowski.pl',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'MateuszDabrowski',
    projectName: 'mateuszdabrowski.pl',
    customFields: {
        description: 'Automate marketing automation. let code = do("our job").',
        keywords: [
            'Mateusz',
            'Dąbrowski',
            'mateuszdabrowski',
            'Eloqua',
            'Oracle Eloqua',
            'Marketing Cloud',
            'Salesforce Marketing Cloud',
            'SFMC',
            'SSJS',
            'SQL',
            'JS',
            'JavaScript',
            'Developer',
        ],
    },
    themeConfig: {
        image: 'img/logotyp-og.png', // Default image for meta tag
        // announcementBar: {
        //     id: 'announcementBar',
        //     content:
        //         '🚧 Website under development. If you found any bug or have a feedback, please share <a href="https://github.com/MateuszDabrowski/mateuszdabrowski.pl/issues" title="Github Issues">here</a>. Thanks! 🚧',
        //     backgroundColor: '#F6B355',
        //     textColor: '#00001F',
        // },
        navbar: {
            title: 'Home',
            logo: {
                alt: 'Mateusz Dąbrowski Logo',
                src: 'img/logo-horizontal-light-2x.png',
                srcDark: 'img/logo-horizontal-dark-2x.png',
            },
            items: [
                {
                    label: 'Docs & Snippets',
                    to: 'docs',
                    activeBasePath: 'docs',
                    position: 'left',
                    items: [
                        {
                            label: 'SSJS',
                            to: 'docs/ssjs/ssjs-if-and-switch',
                        },
                        {
                            label: 'JS',
                            to: 'docs/js/js-if-and-switch',
                        },
                        {
                            label: 'SQL',
                            to: 'docs/sql/sfmc-sql-basics',
                        },
                    ],
                },
                {
                    label: 'Ideas',
                    to: 'ideas',
                    activeBasePath: 'ideas',
                    position: 'left',
                },
                {
                    label: 'Toolset',
                    to: 'sites/my-toolset',
                    activeBasePath: 'sites',
                    position: 'left',
                },
                {
                    href: 'https://www.linkedin.com/in/mateusz-dabrowski-marketing/',
                    position: 'right',
                    className: 'header-linkedin-link',
                    'aria-label': 'LinkedIn Profile',
                },
                {
                    href: 'https://github.com/MateuszDabrowski',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        prism: {
            defaultLanguage: 'javascript',
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/vsDark'),
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Read',
                    items: [
                        {
                            label: 'Docs & Snippets',
                            to: 'docs',
                        },
                        {
                            label: 'Ideas',
                            to: 'ideas',
                        },
                    ],
                },
                {
                    title: 'About',
                    items: [
                        {
                            label: 'Toolset',
                            to: 'sites/my-toolset',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'Licence & Attribution',
                            to: 'sites/licence',
                        },
                        {
                            label: 'Privacy',
                            to: 'sites/privacy',
                        },
                    ],
                },
            ],
        },
        googleAnalytics: {
            trackingID: 'UA-121919433-1',
            anonymizeIP: true,
        },
        // algolia: {
        //     apiKey: '',
        //     indexName: '',
        //     algoliaOptions: {},
        // },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'docs',
                    routeBasePath: 'docs',
                    homePageId: 'docs-and-snippets',
                    include: ['**/*.md', '**/*.mdx'],
                    sidebarPath: require.resolve('./docs/docsSidebar.js'),
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl: 'https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    cacheTime: 600 * 1000, // 600 sec - cache purge period
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'ideas',
                path: 'ideas',
                routeBasePath: 'ideas',
                homePageId: 'ideas',
                include: ['**/*.md', '**/*.mdx'],
                sidebarPath: require.resolve('./ideas/ideasSidebar.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                editUrl: 'https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'sites',
                path: 'sites',
                routeBasePath: 'sites',
                include: ['**/*.md', '**/*.mdx'],
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                editUrl: 'https://github.com/MateuszDabrowski/mateuszdabrowski.pl/edit/master/',
            },
        ],
        [
            '@docusaurus/plugin-client-redirects', // Works only on production
            {
                redirects: [
                    {
                        from: ['/docs/ideas'],
                        to: '/ideas/',
                    },
                    {
                        from: ['/docs/ideas/engage-with-countdown'],
                        to: '/ideas/engage-with-countdown',
                    },
                    {
                        from: ['/docs/ideas/tailor-with-data'],
                        to: '/ideas/tailor-with-data',
                    },
                ],
            },
        ],
    ],
};
