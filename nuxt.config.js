export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Student Association for Ukraine',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Join us on a solidarity hike in Lugano on November 26th! All earnings will be given to charity purposes to feed children in need.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Londrina+Solid&display=swap'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gtag.js', mode: 'client' },
    '~/plugins/fontawesome.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: {
        en: {
          message: {
            find_out_more: '➕ Find out more',
            event_date: 'February 18th, 2023',
            event_time: '16:30h',
            copyright_notice: '© 2022. Association Student Association for Ukraine',
            charity_event: 'Charity event.',
            all_income_to_charity: 'All net earnings will be donated to the families affected by war in Ukraine to serve them meals, provide them with winter clothing and other stuff daily needs. This donation will not only help to serve the needy but will also provide strength and moral support to the Ukrainians by standing by them when they need the most.',
            home: 'Home',
            about: 'About',
            consent_form: 'Consent Form',
            sign_up: '🫶 Donate',
            about_intro: 'We are a group of USI students with the aim of raising funds for the families affected by war in Ukraine. For this purpose, we have created the Association: Student Association for Ukraine, to organise the charity hike.',
            members: 'Members',
            itinerary: 'Itinerary',
            departure: 'Departure',
            arrival: 'Arrival',
            marys_meals_intro: '',
            marys_meals_description: 'Mary\'s Meals is an NGO which provides school meals to children living in some of the world’s poorest countries. We will donate all of our earnings to them. Specifically, for every 20,40 CHF raised, they can feed a child for an entire school year, about 9 months.',
            project: 'Project',
            project_intro: 'We work to create better living conditions for children in need',
            project_description: 'On February 18th, we are organizing a walk on Monte Bar with the title "Towards Monte Bar." We would like to walk together with participants starting from Bogno, at the top of Val Colla, which climbs through woods and off-road tracks up to Alpe Cottino, well known because of its Scottish Highland cattle. After enjoying a little break, continue on to Capanna San Lucio, located at the foot of Mount Gazzirola, from where you can enjoy magnificent views beyond the Val Colla horizon and over Val Cavargna. This is the chance to sample the highly regarded local produce, quench your thirst and relax. The route, which is exposed to the sun throughout, carries on towards Alpe Pietrarossa, for another stop or perhaps to buy a little of the delicious local cheese. Once reinvigorated, carry on, crossing Piandanazzo, to Capanna Monte Bar: the mountain hut is located within the stunning setting of the commanding North-East pre-alpine chain which, from Monte Bre, extends to Monte Boglia, Denti della Vecchia, Paiolo, Passo del San Lucio until Monte Gazzirola. South there\'s Lake Ceresio and the entire city of Lugano in all its majesty. Westwards, you can admire Monte Rosa and, when the air is clear, the Bernese Alps range. The excursion ends downwards, crossing Alpe Musgatina, towards Corticiasca.',
            general_conditions_participation: 'General conditions of participation',
            data_protection: 'Data protection',
            content_only_in_italian: 'This content is only available in italian.',
            comment_departure_bus_stop: 'Tesserete Paese',
            departure_place: 'Lugano(Stazione Nord)',
            arrival_place: 'Corticiasca',
            got_it: '✅ Got it',
            information: 'Information',
            warning_redirect_marysmeals: 'On the next website, please choose to go to the Spanish website.',
            warning: 'Warning!',
            price: 'Price',
            free: 'Free',
            donate_as_much_as_you_want: 'You can donate as much as you want, but it is optional!',
            contact: '💬 Contact',
            reach_out_to_us: 'Reach out to us by any of the following channels',
            join_whatsapp_group: 'To get real-time information about the event, contact Manuel +41 76 334 28 50!',
            join: 'Join us!',
            event_finished: 'The event is now finished.',
            thanks_for_participating: 'Thanks a lot for your participation!',
            thanks_body: 'With your collaboration, we have been able to help Mary\'s Meals provide food for more than 33 children! This is a great achievement.'
          }
        },
        it: {
          message: {
            find_out_more: '➕ Scopri di più',
            event_date: '18 febbraio, 2023',
            event_time: '16:30h',
            copyright_notice: '© 2022. Association Student Association for Ukraine',
            charity_event: 'Evento di beneficenza.',
            all_income_to_charity: 'Tutti i guadagni netti saranno donati alle famiglie colpite dalla guerra in Ucraina per servire loro i pasti, fornire loro vestiti invernali e altre cose di cui hanno bisogno quotidianamente. Questa donazione non solo aiuterà a servire i bisognosi, ma fornirà anche forza e sostegno morale agli ucraini rimanendo al loro fianco quando ne hanno più bisogno.',
            home: 'Home',
            about: 'Chi siamo',
            consent_form: 'Modulo di consenso',
            sign_up: '🫶 Donare',
            about_intro: 'Siamo un gruppo di studenti dell\'USI con l\'obiettivo di raccogliere fondi per le famiglie colpite dalla guerra in Ucraina. A tale scopo, abbiamo creato l\'Associazione: Associazione studentesca per l\'Ucraina, per organizzare l\'escursione di beneficenza.\n',
            members: 'Membri',
            itinerary: 'Percorso',
            departure: 'Partenza',
            arrival: 'Arrivo',
            marys_meals_intro: '',
            marys_meals_description: 'Mary\'s Meals è una ONG che fornisce pasti scolastici ai bambini che vivono in alcuni dei Paesi più poveri del mondo. Doneremo a loro tutti i nostri guadagni. In particolare, per ogni 20,40 CHF raccolti, è possibile sfamare un bambino per un intero anno scolastico, circa 9 mesi.',
            project: 'Progetto',
            project_intro: 'Lavoriamo per creare migliori condizioni di vita per i bambini in difficoltà',
            project_description: 'Il 18 febbraio stiamo organizzando una passeggiata sul Monte Bar dal titolo "Verso il Monte Bar". Vorremmo camminare insieme ai partecipanti partendo da Bogno, in cima alla Val Colla, che sale tra boschi e sentieri sterrati fino all\'Alpe Cottino, famosa per i suoi bovini delle Highland scozzesi. Dopo una piccola pausa si prosegue per la Capanna San Lucio, situata ai piedi del Monte Gazzirola, da dove si gode di una magnifica vista oltre l\'orizzonte della Val Colla e sulla Val Cavargna. Questa è l\'occasione per assaggiare i pregiati prodotti locali, dissetarsi e rilassarsi. Il percorso, sempre esposto al sole, prosegue verso l\'Alpe Pietrarossa, per un\'altra sosta o magari per acquistare un po\' del delizioso formaggio locale. Rinvigoriti si prosegue, attraversando Piandanazzo, fino alla Capanna Monte Bar: il rifugio si trova nella splendida cornice dell\'imponente catena prealpina di Nord-Est che, dal Monte Bre, si estende al Monte Boglia, Denti della Vecchia, Paiolo, Passo del San Lucio fino al Monte Gazzirola. A sud c\'è il Lago Ceresio e l\'intera città di Lugano in tutta la sua maestosità. Verso ovest si può ammirare il Monte Rosa e, quando l\'aria è tersa, la catena delle Alpi bernesi. L\'escursione si conclude scendendo, attraversando l\'Alpe Musgatina, verso Corticiasca.\n',
            general_conditions_participation: 'Condizioni generali di partecipazione',
            data_protection: 'Protezione dei dati',
            content_only_in_italian: 'Questo contenuto è disponibile solo in italiano.',
            comment_departure_bus_stop: '3 minuti a piedi dalla fermata del bus “Pazzallo, Paese”',
            departure_place: 'Lugano(Stazione Nord)',
            arrival_place: 'Corticiasca',
            got_it: '✅ Ho capito',
            information: 'Informazione',
            warning_redirect_marysmeals: 'Nella prossima pagina, scegli di andare sul sito spagnolo.',
            warning: 'Attenzione!',
            price: 'Prezzo',
            free: 'Gratis',
            donate_as_much_as_you_want: 'Potete donare quanto volete, ma è facoltativo!',
            contact: '💬 Contatto',
            reach_out_to_us: 'Contattateci attraverso uno dei seguenti canali',
            join_whatsapp_group: 'Per avere informazioni in tempo reale sull\'evento, contatta Manuel +41 76 334 28 50!\n',
            join: 'Unisciti!',
            event_finished: 'L\'evento è finito.',
            thanks_for_participating: 'Grazzie mille per la vostra partecipazione!',
            thanks_body: 'Grazie alla vostra collaborazione, siamo riusciti ad aiutare Mary\'s Meals a fornire cibo a più di 33 bambini! È un grandissimo risultato.'
          }
        }
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: 'https://url.cf',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
  },

  router: {
    extendRoutes(routes, resolve) {
      /*routes.push({
        name: 'home',
        path: '/signup',
        component: resolve(__dirname, '/')
      })*/
    }
  }
}
