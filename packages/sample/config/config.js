const site = {
    name: 'Next Docs',
    tagline: 'Simple yet customizable documentation sites fast',
    trademark: (<span>&#x24B8; 2018. CDK Open Source</span>),
    headerLinks: [{
            route: '/',
            label: 'Home'
        },
        {
            route: 'docs',
            params: {
                page: 'mydocs',
                section: 'overview',
                doc: 'getting-started'
            },
            label: 'Docs Next'
        }
    ],
    socialLinks: [{
        route: 'https://github.com/ossus',
        label: 'Github'
    }],
    footerLinks: [{
        title: 'Test Section',
        links: [{
            route: 'https://google.com',
            label: 'Test Link'
        }]
    }]
}

const theme = {
    size: {
        height: {
            headerMobile: 90
        }
    }
}

export default {
    site,
    theme
};