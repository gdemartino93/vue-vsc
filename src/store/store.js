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
            img : 'css-icon.svg',
            path : '/about'
        },
        {
            id : 3,
            name : 'Contacts',
            img : 'js-icon.svg',
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
            name : 'CV',
            img : 'json-icon.svg',
            path : '/cv'
        },

    ],
    skills : {
        skills: {
          frontEnd: [
            {
              name: 'Css',
              img: 'asdasd'
            },
            {
              name: 'Html',
              img: 'asdasdasd'
            }
          ],
          backEnd: [
            {
              name: 'php',
              img: 'php img'
            },
            {
              name: 'mySql',
              img: 'sqlimg'
            }
          ]
        }
      },
    scritturaTerminata : false
    
    

})