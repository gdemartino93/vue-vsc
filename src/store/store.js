import { reactive } from "vue";

export const store = reactive({
    menuOptions : [
                {
                    id : 1,
                    name : "Edit",
                    img : "html-icon.svg"
                },
                {
                    id : 2,
                    name : "Selection",
                    img : "css-icon.svg"
                },
                {
                    id : 3,
                    name : "View",
                    img : "js-icon.svg"
                },
                {
                    id : 4,
                    name : "Go",
                    img : "js-icon.svg"
                },
                {
                    id : 5,
                    name : "Run",
                    img : "json-icon.svg"
                },
                {
                    id : 6,
                    name : "Terminal",
                    img : "vue-icon.svg"
                },
                {
                    id : 7,
                    name : "Help",
                    img : "vue-icon.svg"
                },
    ],
    pages : [
        {
            id : 1,
            name : 'Home',
            img : 'html-icon.svg',
            path : '/'
        },
        {
            id : 2,
            name : 'About',
            img : 'vue-icon.svg',
            path : '/about'
        },
        {
            id : 3,
            name : 'Contacts',
            img : 'sass-icon.svg',
            path : '/contacts'
        },
        {
            id : 4,
            name : 'Projects',
            img : 'js-icon.svg',
            path : '/projects'
        },
        {
            id : 5,
            name : 'Cv',
            img : 'json-icon.svg',
            path : '/cv'
        },

    ],
    skills : {
        skills: {
          frontEnd: [
            {
              id : 1,  
              name: 'Html',
              img: 'html-icon.svg'
            },
            {
                id : 2,            
                name: 'CSS',
                img: 'css-icon.svg'
            },
            {
                id : 3,
                name: 'Javascript',
                img: 'js-icon.svg'
              },
              {
                id : 4,
                name: 'React.js',
                img: 'react-icon.svg'
              },
              {
                id : 5,
                name: 'Vue.js',
                img: 'vue-icon.svg'
              },
              {
                id : 6,
                name: 'Sass',
                img: 'sass-icon.svg'
              },
              {
                id : 7,
                name: 'Bootstrap',
                img: 'bootstrap-icon.svg'
              },
          ],
          backEnd: [
            {
                id : 1,
                name: 'php',
                img: 'php-icon.svg'
            },
            {
                id : 2,
                name: 'MySql',
                img: 'mysql-icon.svg'
            },
            {
                id : 3,
                name: 'Laravel',
                img: 'laravel-icon.svg'
            },
            {
                id : 4,
                name: 'Java',
                img: 'java-icon.svg'
            },
          ],
          strumentiUtilizzati: [
            {
                id : 1,
                name : 'Windows',
                img : 'windows-icon.svg'
            },
            {
                id : 2,
                name : 'Visual Studio Code',
                img  : 'vsc-icon.svg'

            },
            {
                id : 3,
                name : 'Postman',
                img  : 'post-icon.svg'
            }

          ]
        }
      },
    projects : [
        {
            id : 1,
            nome : "Bank Card Interactive",
            descrizione : "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio e utilizzate per addebitare l'importo specificato. Il design è moderno e pulito.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/interactive-card-bank",
            livePreview : "https://famous-churros-ba683e.netlify.app/",
            tecnologieUsate : [
                {
                    nome : "Html",
                    img : "html-icon.svg"
                },
                {
                    nome : "CSS",
                    img : "css-icon.svg"
                },
                {
                    nome : "Javascript",
                    img : "js-icon.svg"
                },
            ]
        },
        {
            id : 1,
            nome : "Bank Card Interactive",
            descrizione : "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio e utilizzate per addebitare l'importo specificato. Il design è moderno e pulito.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/interactive-card-bank",
            livePreview : "https://famous-churros-ba683e.netlify.app/",
            tecnologieUsate : [
                {
                    nome : "Html",
                    img : "html-icon.svg"
                },
                {
                    nome : "CSS",
                    img : "css-icon.svg"
                },
                {
                    nome : "Javascript",
                    img : "js-icon.svg"
                },
            ]
        },
        {
            id : 1,
            nome : "Bank Card Interactive",
            descrizione : "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio e utilizzate per addebitare l'importo specificato. Il design è moderno e pulito.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/interactive-card-bank",
            livePreview : "https://famous-churros-ba683e.netlify.app/",
            tecnologieUsate : [
                {
                    nome : "Html",
                    img : "html-icon.svg"
                },
                {
                    nome : "CSS",
                    img : "css-icon.svg"
                },
                {
                    nome : "Javascript",
                    img : "js-icon.svg"
                },
            ]
        },
        {
            id : 1,
            nome : "Bank Card Interactive",
            descrizione : "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio e utilizzate per addebitare l'importo specificato. Il design è moderno e pulito.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/interactive-card-bank",
            livePreview : "https://famous-churros-ba683e.netlify.app/",
            tecnologieUsate : [
                {
                    nome : "Html",
                    img : "html-icon.svg"
                },
                {
                    nome : "CSS",
                    img : "css-icon.svg"
                },
                {
                    nome : "Javascript",
                    img : "js-icon.svg"
                },
            ]
        },
        {
            id : 1,
            nome : "Bank Card Interactive",
            descrizione : "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio e utilizzate per addebitare l'importo specificato. Il design è moderno e pulito.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/interactive-card-bank",
            livePreview : "https://famous-churros-ba683e.netlify.app/",
            tecnologieUsate : [
                {
                    nome : "Html",
                    img : "html-icon.svg"
                },
                {
                    nome : "CSS",
                    img : "css-icon.svg"
                },
                {
                    nome : "Javascript",
                    img : "js-icon.svg"
                },
            ]
        },
        {
            id : 1,
            nome : "Bank Card Interactive",
            descrizione : "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio e utilizzate per addebitare l'importo specificato. Il design è moderno e pulito.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/interactive-card-bank",
            livePreview : "https://famous-churros-ba683e.netlify.app/",
            tecnologieUsate : [
                {
                    nome : "Html",
                    img : "html-icon.svg"
                },
                {
                    nome : "CSS",
                    img : "css-icon.svg"
                },
                {
                    nome : "Javascript",
                    img : "js-icon.svg"
                },
            ]
        },
        

    ]
      ,
    scritturaTerminata : false,
    cvCaricato : false,
    
    

})