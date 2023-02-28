import { reactive } from "vue";
import router from "../router";

export const store = reactive({
  menuOptions: [
    {
      id: 1,
      name: "Edit",
      img: "html-icon.svg",
    },
    {
      id: 2,
      name: "Selection",
      img: "css-icon.svg",
    },
    {
      id: 3,
      name: "View",
      img: "js-icon.svg",
    },
    {
      id: 4,
      name: "Go",
      img: "js-icon.svg",
    },
    {
      id: 5,
      name: "Run",
      img: "json-icon.svg",
    },
    {
      id: 6,
      name: "Help",
      img: "vue-icon.svg",
    },

  ],
  pages: [
    // {
    //     id : 1,
    //     name : 'Home',
    //     img : 'html-icon.svg',
    //     path : '/'
    // },
    {
      id: 1,
      name: "About",
      img: "vue-icon.svg",
      path: "/about",
    },
    {
      id: 2,
      name: "Contacts",
      img: "sass-icon.svg",
      path: "/contacts",
    },
    {
      id: 3,
      name: "Projects",
      img: "js-icon.svg",
      path: "/projects",
    },
    {
      id: 4,
      name: "Cv",
      img: "json-icon.svg",
      path: "/cv",
    },
  ],
  skills: {
    skills: {
      frontEnd: [
        {
          id: 1,
          name: "Html",
          img: "html-icon.svg",
        },
        {
          id: 2,
          name: "CSS",
          img: "css-icon.svg",
        },
        {
          id: 3,
          name: "Javascript",
          img: "js-icon.svg",
        },
        {
          id: 4,
          name: "React.js",
          img: "react-icon.svg",
        },
        {
          id: 5,
          name: "Vue.js",
          img: "vue-icon.svg",
        },
        {
          id: 6,
          name: "Sass",
          img: "sass-icon.svg",
        },
        {
          id: 7,
          name: "Bootstrap",
          img: "bootstrap-icon.svg",
        },
      ],
      backEnd: [
        {
          id: 1,
          name: "php",
          img: "php-icon.svg",
        },
        {
          id: 2,
          name: "MySql",
          img: "mysql-icon.svg",
        },
        {
          id: 3,
          name: "Laravel",
          img: "laravel-icon.svg",
        },
        {
          id: 4,
          name: "Java",
          img: "java-icon.svg",
        },
      ],
      strumentiUtilizzati: [
        {
          id: 1,
          name: "Windows",
          img: "windows-icon.svg",
        },
        {
          id: 2,
          name: "Visual Studio Code",
          img: "vsc-icon.svg",
        },
        {
          id: 3,
          name: "Postman",
          img: "post-icon.svg",
        },
      ],
    },
  },
  projects: [
    {
      id: 1,
      nome: "Bank Card Interactive",
      descrizione:
        "Il sito utilizza HTML, CSS e JS Vanilla per rappresentare una carta di credito con autoriempimento tramite form. Le informazioni inserite dall'utente vengono verificate prima dell'invio. Il design è moderno e pulito.",
      img: "bankcard.png",
      linkRepo: "https://github.com/gdemartino93/interactive-card-bank",
      livePreview: "https://famous-churros-ba683e.netlify.app/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "Vue",
          img: "vue-icon.svg",
        },
      ],
    },
    {
      id: 2,
      nome: "Netflix",
      descrizione:
        "Progetto ispirato al famoso servizio di streaming Netflix. Per svilupparlo, ho utilizzato un API che mi ha permesso di avere un insieme di risultati congrui per la ricerca. All'hover sulla card appaiono le informazioni relative al film/serie TV quali: titolo, titolo originale, lignua, voto e overview. Inoltre è possibile effettuare una ricerca per nome."
        ,
      img: "netflix.png",
      linkRepo: "https://github.com/gdemartino93/vite-boolflix",
      livePreview: "",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
        {
          nome: "Boostrap",
          img: "bootstrap-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "Vue3.js",
          img: "vue-icon.svg",
        },
      ],
    },
    {
      id: 3,
      nome: "Darkmode React ",
      descrizione:
        "Questo sito è figlio delle mie esercitazioni con gli Hooks di React, infatti viene usato l'useEffect per cambiare la classe al tag html ogni volta che cambia il valore di 'theme'. Per cambiare l'icona all'interno del tasto mi servo dell'useState per tenere traccia di 'isDark' e cambiare l'icona tramite l'operatore ternario. Salvo anche lo stato del tema nello storage del browser per non perdere lo stato al refresh o al ritorno in pagina.",
      img: "darkmodereact.png",
      linkRepo: "https://github.com/gdemartino93/react-dark-mode",
      livePreview: "https://fascinating-kitsune-0f90e0.netlify.app/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
        {
          nome: "Boostrap",
          img: "bootstrap-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "React.js",
          img: "react-icon.svg",
        },
      ],
    },
    {
      id: 4,
      nome: "Rick And Morty ",
      descrizione:
        "Questo sito è stato creato per fare pratica con le chiamate API, infatti in base alla selezione fa una chiamata API differente.",
      img: "morty.png",
      linkRepo: "https://github.com/gdemartino93/vite-breaking-bad",
      livePreview: "https://tubular-gingersnap-cdea29.netlify.app/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
                {
          nome: "Bootstrap",
          img: "bootstrap-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "Vue3.js",
          img: "vue-icon.svg",
        },
      ],
    },
    {
      id: 5,
      nome: "Whatsapp Desktop ",
      descrizione:
        "Ho sviluppato una replica della famosa applicazione di messaggistica istantanea con alcune features in javascript. Infatti avremo la risposta random del computer(no AI), possibilità di filtrare i contatti nell'input cerca, cambio di stato con 'Sta Scrivendo...' e 'Online', possibilitò di pickare l'emoticon da una tabella di emoticon, possibilità di eliminare i messaggi ",
      img: "whatsapp.png",
      linkRepo: "https://github.com/gdemartino93/vue-boolzapp",
      livePreview: "https://gdemartino93.github.io/vue-boolzapp/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
        {
          nome: "Bootstrap",
          img: "bootstrap-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "Vue",
          img: "vue-icon.svg",
        },
        
      ],
    },
    {
      id: 6,
      nome: "Slider Città React ",
      descrizione:
        "Uno slider creato con React che consente di scorrere in loop le città disponibili. È stato incluso un loader stile Pacman, di una libreria, che viene caricato fino a quando la chiamata API non viene effettuata con successo.Se la chiamata API ritorna un errore viene mostrato un componente Error. Tutto viene gestito tramite gli hooks e vengono passati i dati alla singola città tramite props.",
      img: "slidercity.png",
      linkRepo: "https://github.com/gdemartino93/react-slider-city",
      livePreview: "https://courageous-seahorse-f51d1e.netlify.app/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
        {
          nome: "Bootstrap",
          img: "bootstrap-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "React",
          img: "react-icon.svg",
        },
        
      ],
    },
    {
      id: 7,
      nome: "Prossimi eventi React ",
      descrizione:
        "Un sito molto semplice creato con react che mostra i prossimi eventi in città e ti dà la possibilità di eliminare ed aggiornare la lista degli eventi.",
      img: "prossimieventi.png",
      linkRepo: "https://github.com/gdemartino93/react-prossimi-eventi",
      livePreview: "https://prossimieventi.netlify.app/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
        {
          nome: "Bootstrap",
          img: "bootstrap-icon.svg",
        },
        {
          nome: "Javascript",
          img: "js-icon.svg",
        },
        {
          nome: "React",
          img: "react-icon.svg",
        },
        
      ],
    },
    {
      id: 8,
      nome: "Discord ",
      descrizione:
        "Uno dei primissimi progetti realizzati ispirato a Discord, la famosa piattaforma statunitense di VoIP, messaggistica istantanea e distribuzione digitale",
      img: "discord.png",
      linkRepo: "https://github.com/gdemartino93/htmlcss-discord",
      livePreview: "https://gdemartino93.github.io/htmlcss-discord/",
      tecnologieUsate: [
        {
          nome: "Html",
          img: "html-icon.svg",
        },
        {
          nome: "CSS",
          img: "css-icon.svg",
        },
      ],
    },
  ],
  tabAperte: [
    // array che riempiremo con le tab aperte
  ],
  scritturaTerminata: false,
  cvCaricato: false,
  apriTab(id) {
    // prendiamo la tab cliccata
    let tabCliccata = this.pages.find((tab) => id === tab.id);
    // controlliamo che non sia presente prima di pushare
    if (!this.tabAperte.includes(tabCliccata)) {
      this.tabAperte.push(tabCliccata);
    }
  },
  async closeTab(id) {
    // trovare l'indice della tab cliccata nell'array delle tab aperte
    const index = this.tabAperte.findIndex((tab) => tab.id === id);
    // gestisci il push delle rotte quando chiudi il tab
    if (router.currentRoute.value.path === this.tabAperte[index]?.path) {
      await router.push(
        this.tabAperte[index + 1]?.path ||
          this.tabAperte[index - 1]?.path || { name: "home" }
      );
    }

    if (index !== -1) this.tabAperte.splice(index, 1);
    // eliminare la tab cliccata dall'array delle tab aperte
  },
});