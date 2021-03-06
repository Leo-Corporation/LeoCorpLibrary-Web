module.exports = {
    title: "LeoCorpLibrary",
    description: "A C# library with useful features for .NET Applications.",
    base: "/",
    head: [
        ['link', { rel: 'icon', href: 'favicon.ico' }]
    ],
    themeConfig: {
        sidebar: 'auto',
        sidebarDepth: 3,
        searchPlaceholder: 'Search...',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Installation', link: '/Install-LeoCorpLibrary' },
            { text: 'Reference', link: '/Reference' }
        ],
        smoothScroll: true,
        displayAllHeaders: true,
        repo: 'Leo-Corporation/LeoCorpLibrary',
        docsRepo: 'Leo-Corporation/LeoCorpLibrary-Web',
        docsDir: 'documentation',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    }
}