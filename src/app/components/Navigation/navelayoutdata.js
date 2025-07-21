

const navData = [
    {
        naveName: 'Home',
        navUrl: '/',
        submenu:null
    },
    {
        naveName: 'About',
        navUrl: '/AboutUs',
        submenu:null
    },
    {
        naveName: 'Service',
        navUrl: '/Services',
        submenu:null
    },
    {
        naveName: 'Blog',
        navUrl: null,
        submenu:[
            {
                subnemuName: 'Blog',
                subnemuUrl: '/Blog'
            },
            {
                subnemuName: 'Blog Servise',
                subnemuUrl: '/BlogServise'
            },
        ]
    },
    {
        naveName: 'Apply Form',
        navUrl: '#',
        submenu:null
    },
    {
        naveName: 'Contact',
        navUrl: '#',
        submenu:null
    },
] 

export default navData;