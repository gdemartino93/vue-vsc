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
            id : 2,
            nome : "Spotify",
            descrizione : "Questo sito web è stato creato con Vue3 e vengono importate le cover tramite chiamate API. E' stata aggiunta qualche feature per divertimento",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/spotify-Vue3js",
            livePreview : "https://jazzy-beijinho-d0844d.netlify.app/",
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
                {
                    nome : "Vue3.js",
                    img : "vue-icon.svg"
                },
            ]
        },
        {
            id : 3,
            nome : "Darkmode React ",
            descrizione : "Questo sito è figlio delle mie esercitazioni con gli Hooks di React, infatti viene usato l'useEffect per cambiare la classe al tag html ogni volta che cambia il valore di 'theme'. Per cambiare l'icona all'interno del tasto mi servo dell'useState per tenere traccia di 'isDark' e cambiare l'icona tramite l'operatore ternario. N.b.: Gli articoli e i titolo sono stati scritti da ChatGPT (Lorem Ipsum RIP.) ",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/react-dark-mode",
            livePreview : "https://fascinating-kitsune-0f90e0.netlify.app/",
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
                {
                    nome : "React.js",
                    img : "react-icon.svg"
                },
            ]
        },
        {
            id : 4,
            nome : "Rick And Morty ",
            descrizione : "Questo sito è stato creato per fare pratica con le chiamate API, infatti in base alla selezione fa una chiamata API differente.",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/vite-breaking-bad",
            livePreview : "https://tubular-gingersnap-cdea29.netlify.app/",
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
                {
                    nome : "Vue3.js",
                    img : "vue-icon.svg"
                },
            ]
        },
        {
            id : 5,
            nome : "Whatsapp Replica ",
            descrizione : "Ho sviluppato una replica della famosa applicazione di messaggistica istantanea con alcune features in javascript. Infatti avremo la risposta random del computer(no AI), possibilità di filtrare i contatti nell'input cerca, cambio di stato con 'Sta Scrivendo...' e 'Online', possibilitò di pickare l'emoticon da una tabella di emoticon, possibilità di eliminare i messaggi ",
            img : "bankcard.png",
            linkRepo : "https://github.com/gdemartino93/vue-boolzapp",
            livePreview : "https://gdemartino93.github.io/vue-boolzapp/",
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