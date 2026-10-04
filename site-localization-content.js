/* Full client-side content localization for the management site.
   Static official facts are translated; geolocation only controls language/region presentation. */
(function(){
  "use strict";
  const T = {
    en: {
      title:"CONTACT WITH MANAGEMENT", eyebrowHome:"Official Artist Management",
      heroLead:"Professional management contact for official inquiries, collaborations, appearances, business matters and other verified communications.",
      heroBtn:"Contact Management", aboutEy:"About the Artist", aboutH:"Artist management with a long-term vision.",
      aboutP:"This official management website provides a verified point of contact for professional matters. Artist information, approved media and official communication channels are presented here for clarity, privacy and professional use.",
      bioTitle:"ARTIST MANAGEMENT & MUSIC SERVICES", bioTag:"Building Artists. Developing Careers. Creating Lasting Impact.",
      missionH:"OUR MISSION", missionP:"To support artists with focused management, thoughtful development and professional opportunities that build sustainable careers and lasting impact.",
      managementH:"ARTIST MANAGEMENT", managementP:"Professional representation, communication, planning and coordination across the artist’s career and approved professional activities.",
      developmentH:"ARTIST DEVELOPMENT", developmentP:"Strategic career development, positioning, creative direction and practical support designed around the artist’s goals.",
      bookingsH:"BOOKINGS & LIVE EVENTS", bookingsP:"Coordination for appearances, performances, events and other professional booking opportunities through verified management channels.",
      brandH:"BRAND & DIGITAL STRATEGY", brandP:"Thoughtful brand positioning and digital strategy that support the artist’s public presence while protecting authenticity and professional standards.",
      mediaH:"MEDIA & PROMOTION", mediaP:"Professional media coordination, publicity opportunities and approved promotional communication.",
      industryH:"INDUSTRY PARTNERSHIPS", industryP:"Professional collaboration with relevant industry partners, brands, media and other approved stakeholders.",
      whyH:"WHY WORK WITH US?", whyP:"A professional, structured and communication-focused approach designed to protect the artist’s interests and create clear pathways for legitimate opportunities.",
      workH:"WORK WITH US", workP:"For legitimate professional opportunities, please use the verified management channels provided on this website.",
      legacy:"MUSIC. VISION. CAREER. LEGACY.",
      mediaEy:"Media / Gallery", mediaH:"Approved visual stories.", mediaP:"Uploaded visuals are presented here as editable gallery items; replace any image or caption with approved final media when ready.",
      exploreEy:"Explore", exploreH:"Music & entertainment destinations.", exploreP:"These links lead to the official websites of the respective platforms and publications. Inclusion does not imply endorsement, representation, or affiliation.",
      official:"Official website ↗", music:"Music ↗", news:"News ↗",
      newsEy:"Celebrity & Entertainment News", newsH:"Stay connected to the entertainment world.", newsP:"Fans can use these links to read celebrity, music, film, television, and entertainment news from established publications. These external sites are independent and are not presented as affiliated with management.",
      celebrity:"Celebrity news ↗", pop:"Celebrity & pop culture ↗", industry:"Entertainment industry ↗", nta:"Nigerian entertainment news ↗",
      officeEy:"Official Management Office", officeH:"Professional communication, handled through verified channels.",
      officeP:"For professional inquiries, collaboration requests, appearances, business matters, and other official communications, please contact the artist's management team through the verified management channels provided below.",
      emailLabel:"Management Email", issue:"If you have any issue, please contact us via this email address.",
      verified:"Verified channel", channelP:"Use the official management channel for professional communication.",
      wa:"Contact Management on WhatsApp", tg:"Contact Management on Telegram",
      securityH:"Security notice", securityP:"Please use only the official management contact channels listed on this website for professional inquiries and communications. For privacy and security reasons, personal communication with the artist is handled exclusively through established management procedures.",
      contactEy:"Contact", contactH:"Connect with management.", optional:"[ADDITIONAL VERIFIED OFFICE DETAILS — OPTIONAL]",
      footerP:"Official management contact website.", footerEdit:"[EDITABLE FOOTER INFORMATION — ADD ONLY VERIFIED DETAILS]", rights:"All rights reserved."
    },
    fr: {
      title:"CONTACTER LA DIRECTION", eyebrowHome:"Management officiel de l’artiste",
      heroLead:"Contact officiel de la direction pour les demandes professionnelles, collaborations, apparitions, affaires et autres communications vérifiées.",
      heroBtn:"Contacter la direction", aboutEy:"À propos de l’artiste", aboutH:"Une gestion artistique avec une vision à long terme.",
      aboutP:"Ce site officiel de management offre un point de contact vérifié pour les questions professionnelles. Les informations sur l’artiste, les médias approuvés et les canaux officiels sont présentés ici pour favoriser la clarté, la confidentialité et un usage professionnel.",
      bioTitle:"MANAGEMENT D’ARTISTES & SERVICES MUSICAUX", bioTag:"Développer les artistes. Construire les carrières. Créer un impact durable.",
      missionH:"NOTRE MISSION", missionP:"Accompagner les artistes grâce à un management structuré, un développement réfléchi et des opportunités professionnelles qui favorisent des carrières durables.",
      managementH:"MANAGEMENT ARTISTIQUE", managementP:"Représentation professionnelle, communication, planification et coordination des activités professionnelles approuvées de l’artiste.",
      developmentH:"DÉVELOPPEMENT DE L’ARTISTE", developmentP:"Développement stratégique de carrière, positionnement, direction créative et accompagnement pratique selon les objectifs de l’artiste.",
      bookingsH:"RÉSERVATIONS & ÉVÉNEMENTS", bookingsP:"Coordination des apparitions, prestations, événements et autres opportunités professionnelles par les canaux de management vérifiés.",
      brandH:"STRATÉGIE DE MARQUE & DIGITALE", brandP:"Positionnement de marque et stratégie numérique réfléchis pour soutenir la présence publique de l’artiste tout en protégeant son authenticité.",
      mediaH:"MÉDIAS & PROMOTION", mediaP:"Coordination média professionnelle, opportunités de relations publiques et communication promotionnelle approuvée.",
      industryH:"PARTENARIATS INDUSTRIELS", industryP:"Collaboration professionnelle avec les partenaires du secteur, marques, médias et autres parties prenantes approuvées.",
      whyH:"POURQUOI TRAVAILLER AVEC NOUS ?", whyP:"Une approche professionnelle, structurée et axée sur la communication, conçue pour protéger les intérêts de l’artiste et clarifier les opportunités légitimes.",
      workH:"TRAVAILLEZ AVEC NOUS", workP:"Pour les opportunités professionnelles légitimes, utilisez les canaux de management vérifiés indiqués sur ce site.",
      legacy:"MUSIQUE. VISION. CARRIÈRE. HÉRITAGE.",
      mediaEy:"Médias / Galerie", mediaH:"Histoires visuelles approuvées.", mediaP:"Les visuels téléchargés sont présentés comme des éléments de galerie modifiables ; remplacez toute image ou légende par le média final approuvé.",
      exploreEy:"Explorer", exploreH:"Destinations musicales et de divertissement.", exploreP:"Ces liens mènent aux sites officiels des plateformes et publications concernées. Leur inclusion n’implique aucun soutien, représentation ou affiliation.",
      official:"Site officiel ↗", music:"Musique ↗", news:"Actualités ↗",
      newsEy:"Actualités des célébrités et du divertissement", newsH:"Restez connecté à l’univers du divertissement.", newsP:"Ces liens permettent de consulter les actualités des célébrités, de la musique, du cinéma, de la télévision et du divertissement auprès de publications reconnues. Ces sites externes sont indépendants.",
      celebrity:"Actualités célébrités ↗", pop:"Célébrités & culture pop ↗", industry:"Industrie du divertissement ↗", nta:"Actualités du divertissement nigérianes ↗",
      officeEy:"Bureau officiel du management", officeH:"Une communication professionnelle assurée par des canaux vérifiés.",
      officeP:"Pour les demandes professionnelles, collaborations, apparitions, affaires et autres communications officielles, veuillez contacter l’équipe de management de l’artiste via les canaux vérifiés indiqués ci-dessous.",
      emailLabel:"E-mail du management", issue:"En cas de problème, veuillez nous contacter à cette adresse e-mail.",
      verified:"Canal vérifié", channelP:"Utilisez le canal officiel du management pour toute communication professionnelle.",
      wa:"Contacter le management sur WhatsApp", tg:"Contacter le management sur Telegram",
      securityH:"Avis de sécurité", securityP:"Veuillez utiliser uniquement les canaux officiels du management indiqués sur ce site pour les demandes et communications professionnelles. Pour des raisons de confidentialité et de sécurité, les communications personnelles avec l’artiste sont exclusivement gérées par les procédures établies du management.",
      contactEy:"Contact", contactH:"Entrer en contact avec le management.", optional:"[DÉTAILS SUPPLÉMENTAIRES DU BUREAU — OPTIONNEL]",
      footerP:"Site officiel de contact du management.", footerEdit:"[INFORMATIONS DE PIED DE PAGE MODIFIABLES — AJOUTER UNIQUEMENT DES INFORMATIONS VÉRIFIÉES]", rights:"Tous droits réservés."
    },
    es: {
      title:"CONTACTO CON MANAGEMENT", eyebrowHome:"Management oficial del artista",
      heroLead:"Contacto oficial para consultas profesionales, colaboraciones, apariciones, asuntos comerciales y otras comunicaciones verificadas.",
      heroBtn:"Contactar con management", aboutEy:"Sobre el artista", aboutH:"Gestión artística con una visión a largo plazo.",
      aboutP:"Este sitio oficial de management ofrece un punto de contacto verificado para asuntos profesionales. La información del artista, los medios aprobados y los canales oficiales se presentan aquí para mayor claridad, privacidad y uso profesional.",
      bioTitle:"MANAGEMENT DE ARTISTAS Y SERVICIOS MUSICALES", bioTag:"Desarrollando artistas. Impulsando carreras. Creando un impacto duradero.",
      missionH:"NUESTRA MISIÓN", missionP:"Apoyar a los artistas mediante una gestión enfocada, desarrollo estratégico y oportunidades profesionales que construyan carreras sostenibles.",
      managementH:"MANAGEMENT DEL ARTISTA", managementP:"Representación profesional, comunicación, planificación y coordinación de las actividades profesionales aprobadas del artista.",
      developmentH:"DESARROLLO DEL ARTISTA", developmentP:"Desarrollo estratégico de carrera, posicionamiento, dirección creativa y apoyo práctico adaptado a los objetivos del artista.",
      bookingsH:"CONTRATACIONES Y EVENTOS", bookingsP:"Coordinación de apariciones, actuaciones, eventos y otras oportunidades profesionales mediante canales de management verificados.",
      brandH:"ESTRATEGIA DE MARCA Y DIGITAL", brandP:"Posicionamiento de marca y estrategia digital para apoyar la presencia pública del artista y proteger su autenticidad.",
      mediaH:"MEDIOS Y PROMOCIÓN", mediaP:"Coordinación profesional con medios, oportunidades de publicidad y comunicación promocional aprobada.",
      industryH:"ALIANZAS DE LA INDUSTRIA", industryP:"Colaboración profesional con socios del sector, marcas, medios y otras partes interesadas aprobadas.",
      whyH:"¿POR QUÉ TRABAJAR CON NOSOTROS?", whyP:"Un enfoque profesional, estructurado y centrado en la comunicación, diseñado para proteger los intereses del artista y facilitar oportunidades legítimas.",
      workH:"TRABAJA CON NOSOTROS", workP:"Para oportunidades profesionales legítimas, utiliza los canales de management verificados indicados en este sitio.",
      legacy:"MÚSICA. VISIÓN. CARRERA. LEGADO.",
      mediaEy:"Medios / Galería", mediaH:"Historias visuales aprobadas.", mediaP:"Los elementos visuales cargados se presentan como elementos editables de la galería; sustituye cualquier imagen o pie de foto por el material final aprobado.",
      exploreEy:"Explorar", exploreH:"Destinos de música y entretenimiento.", exploreP:"Estos enlaces llevan a los sitios oficiales de las respectivas plataformas y publicaciones. Su inclusión no implica respaldo, representación ni afiliación.",
      official:"Sitio oficial ↗", music:"Música ↗", news:"Noticias ↗",
      newsEy:"Noticias de celebridades y entretenimiento", newsH:"Mantente conectado con el mundo del entretenimiento.", newsP:"Estos enlaces permiten consultar noticias de celebridades, música, cine, televisión y entretenimiento en publicaciones reconocidas. Estos sitios externos son independientes.",
      celebrity:"Noticias de celebridades ↗", pop:"Celebridades y cultura pop ↗", industry:"Industria del entretenimiento ↗", nta:"Noticias de entretenimiento de Nigeria ↗",
      officeEy:"Oficina oficial de management", officeH:"Comunicación profesional gestionada mediante canales verificados.",
      officeP:"Para consultas profesionales, colaboraciones, apariciones, asuntos comerciales y otras comunicaciones oficiales, contacta con el equipo de management del artista mediante los canales verificados que aparecen a continuación.",
      emailLabel:"Correo del management", issue:"Si tienes algún problema, contacta con nosotros mediante esta dirección de correo.",
      verified:"Canal verificado", channelP:"Utiliza el canal oficial de management para comunicaciones profesionales.",
      wa:"Contactar con management por WhatsApp", tg:"Contactar con management por Telegram",
      securityH:"Aviso de seguridad", securityP:"Utiliza únicamente los canales oficiales de management indicados en este sitio para consultas y comunicaciones profesionales. Por motivos de privacidad y seguridad, la comunicación personal con el artista se gestiona exclusivamente mediante los procedimientos establecidos por management.",
      contactEy:"Contacto", contactH:"Conecta con management.", optional:"[DETALLES ADICIONALES DE LA OFICINA — OPCIONAL]",
      footerP:"Sitio oficial de contacto de management.", footerEdit:"[INFORMACIÓN EDITABLE DEL PIE DE PÁGINA — AÑADIR SOLO DATOS VERIFICADOS]", rights:"Todos los derechos reservados."
    },
    pt: {
      title:"CONTACTO COM A GESTÃO", eyebrowHome:"Gestão oficial do artista",
      heroLead:"Contacto oficial para consultas profissionais, colaborações, aparições, assuntos comerciais e outras comunicações verificadas.",
      heroBtn:"Contactar a gestão", aboutEy:"Sobre o artista", aboutH:"Gestão artística com uma visão de longo prazo.",
      aboutP:"Este site oficial de gestão oferece um ponto de contacto verificado para assuntos profissionais. As informações do artista, os conteúdos aprovados e os canais oficiais são apresentados para maior clareza, privacidade e uso profissional.",
      bioTitle:"GESTÃO DE ARTISTAS E SERVIÇOS MUSICAIS", bioTag:"Desenvolvendo artistas. Construindo carreiras. Criando impacto duradouro.",
      missionH:"A NOSSA MISSÃO", missionP:"Apoiar artistas através de uma gestão focada, desenvolvimento estratégico e oportunidades profissionais que construam carreiras sustentáveis.",
      managementH:"GESTÃO DO ARTISTA", managementP:"Representação profissional, comunicação, planeamento e coordenação das atividades profissionais aprovadas do artista.",
      developmentH:"DESENVOLVIMENTO DO ARTISTA", developmentP:"Desenvolvimento estratégico de carreira, posicionamento, direção criativa e apoio prático alinhados com os objetivos do artista.",
      bookingsH:"CONTRATAÇÕES E EVENTOS", bookingsP:"Coordenação de aparições, atuações, eventos e outras oportunidades profissionais através de canais de gestão verificados.",
      brandH:"ESTRATÉGIA DE MARCA E DIGITAL", brandP:"Posicionamento de marca e estratégia digital para apoiar a presença pública do artista e proteger a sua autenticidade.",
      mediaH:"MEDIA E PROMOÇÃO", mediaP:"Coordenação profissional com os media, oportunidades de divulgação e comunicação promocional aprovada.",
      industryH:"PARCERIAS DA INDÚSTRIA", industryP:"Colaboração profissional com parceiros do setor, marcas, media e outras partes interessadas aprovadas.",
      whyH:"PORQUÊ TRABALHAR CONNOSCO?", whyP:"Uma abordagem profissional, estruturada e focada na comunicação, concebida para proteger os interesses do artista e criar caminhos claros para oportunidades legítimas.",
      workH:"TRABALHE CONNOSCO", workP:"Para oportunidades profissionais legítimas, utilize os canais de gestão verificados apresentados neste site.",
      legacy:"MÚSICA. VISÃO. CARREIRA. LEGADO.",
      mediaEy:"Media / Galeria", mediaH:"Histórias visuais aprovadas.", mediaP:"Os visuais carregados são apresentados como itens de galeria editáveis; substitua qualquer imagem ou legenda pelo conteúdo final aprovado.",
      exploreEy:"Explorar", exploreH:"Destinos de música e entretenimento.", exploreP:"Estes links levam aos sites oficiais das respetivas plataformas e publicações. A inclusão não implica apoio, representação ou afiliação.",
      official:"Site oficial ↗", music:"Música ↗", news:"Notícias ↗",
      newsEy:"Notícias de celebridades e entretenimento", newsH:"Mantenha-se ligado ao mundo do entretenimento.", newsP:"Estes links permitem consultar notícias de celebridades, música, cinema, televisão e entretenimento em publicações estabelecidas. Estes sites externos são independentes.",
      celebrity:"Notícias de celebridades ↗", pop:"Celebridades e cultura pop ↗", industry:"Indústria do entretenimento ↗", nta:"Notícias de entretenimento da Nigéria ↗",
      officeEy:"Escritório oficial de gestão", officeH:"Comunicação profissional tratada através de canais verificados.",
      officeP:"Para consultas profissionais, colaborações, aparições, assuntos comerciais e outras comunicações oficiais, contacte a equipa de gestão do artista através dos canais verificados abaixo.",
      emailLabel:"E-mail da gestão", issue:"Se tiver algum problema, contacte-nos através deste endereço de e-mail.",
      verified:"Canal verificado", channelP:"Utilize o canal oficial da gestão para comunicação profissional.",
      wa:"Contactar a gestão pelo WhatsApp", tg:"Contactar a gestão pelo Telegram",
      securityH:"Aviso de segurança", securityP:"Utilize apenas os canais oficiais de gestão indicados neste site para consultas e comunicações profissionais. Por motivos de privacidade e segurança, a comunicação pessoal com o artista é tratada exclusivamente através dos procedimentos estabelecidos pela gestão.",
      contactEy:"Contacto", contactH:"Entre em contacto com a gestão.", optional:"[DETALHES ADICIONAIS DO ESCRITÓRIO — OPCIONAL]",
      footerP:"Site oficial de contacto da gestão.", footerEdit:"[INFORMAÇÃO EDITÁVEL DO RODAPÉ — ADICIONAR APENAS DADOS VERIFICADOS]", rights:"Todos os direitos reservados."
    },
    de: {
      title:"KONTAKT MIT DEM MANAGEMENT", eyebrowHome:"Offizielles Künstler-Management",
      heroLead:"Offizieller Management-Kontakt für professionelle Anfragen, Kooperationen, Auftritte, geschäftliche Angelegenheiten und andere verifizierte Kommunikation.",
      heroBtn:"Management kontaktieren", aboutEy:"Über den Künstler", aboutH:"Künstler-Management mit langfristiger Perspektive.",
      aboutP:"Diese offizielle Management-Website bietet eine verifizierte Anlaufstelle für berufliche Anliegen. Künstlerinformationen, freigegebene Medien und offizielle Kommunikationskanäle werden hier für Klarheit, Datenschutz und professionelle Nutzung bereitgestellt.",
      bioTitle:"KÜNSTLERMANAGEMENT & MUSIKDIENSTE", bioTag:"Künstler aufbauen. Karrieren entwickeln. Nachhaltige Wirkung schaffen.",
      missionH:"UNSERE MISSION", missionP:"Künstler durch fokussiertes Management, durchdachte Entwicklung und professionelle Chancen zu unterstützen und nachhaltige Karrieren aufzubauen.",
      managementH:"KÜNSTLERMANAGEMENT", managementP:"Professionelle Vertretung, Kommunikation, Planung und Koordination der freigegebenen beruflichen Aktivitäten des Künstlers.",
      developmentH:"KÜNSTLERENTWICKLUNG", developmentP:"Strategische Karriereentwicklung, Positionierung, kreative Leitung und praktische Unterstützung nach den Zielen des Künstlers.",
      bookingsH:"BUCHUNGEN & LIVE-EVENTS", bookingsP:"Koordination von Auftritten, Performances, Veranstaltungen und weiteren professionellen Buchungsmöglichkeiten über verifizierte Management-Kanäle.",
      brandH:"MARKEN- & DIGITALSTRATEGIE", brandP:"Durchdachte Markenpositionierung und Digitalstrategie zur Unterstützung der öffentlichen Präsenz des Künstlers bei Wahrung seiner Authentizität.",
      mediaH:"MEDIEN & PROMOTION", mediaP:"Professionelle Medienkoordination, Publicity-Möglichkeiten und freigegebene Promotion-Kommunikation.",
      industryH:"BRANCHENPARTNERSCHAFTEN", industryP:"Professionelle Zusammenarbeit mit relevanten Branchenpartnern, Marken, Medien und anderen freigegebenen Stakeholdern.",
      whyH:"WARUM MIT UNS ARBEITEN?", whyP:"Ein professioneller, strukturierter und kommunikationsorientierter Ansatz zum Schutz der Interessen des Künstlers und zur Schaffung klarer Wege für legitime Chancen.",
      workH:"MIT UNS ARBEITEN", workP:"Für legitime professionelle Möglichkeiten nutzen Sie bitte die auf dieser Website angegebenen verifizierten Management-Kanäle.",
      legacy:"MUSIK. VISION. KARRIERE. VERMÄCHTNIS.",
      mediaEy:"Medien / Galerie", mediaH:"Freigegebene visuelle Geschichten.", mediaP:"Hochgeladene Bilder werden als bearbeitbare Galerieelemente präsentiert; ersetzen Sie Bilder oder Bildunterschriften durch freigegebenes finales Material.",
      exploreEy:"Entdecken", exploreH:"Musik- und Unterhaltungsangebote.", exploreP:"Diese Links führen zu den offiziellen Websites der jeweiligen Plattformen und Publikationen. Die Aufnahme stellt keine Empfehlung, Vertretung oder Zugehörigkeit dar.",
      official:"Offizielle Website ↗", music:"Musik ↗", news:"News ↗",
      newsEy:"Promi- & Unterhaltungsnachrichten", newsH:"Bleiben Sie mit der Unterhaltungswelt verbunden.", newsP:"Über diese Links können Sie Nachrichten über Prominente, Musik, Film, Fernsehen und Unterhaltung aus etablierten Publikationen lesen. Die externen Seiten sind unabhängig.",
      celebrity:"Promi-News ↗", pop:"Promis & Popkultur ↗", industry:"Unterhaltungsbranche ↗", nta:"Nigerianische Unterhaltungsnachrichten ↗",
      officeEy:"Offizielle Managementstelle", officeH:"Professionelle Kommunikation über verifizierte Kanäle.",
      officeP:"Für professionelle Anfragen, Kooperationen, Auftritte, geschäftliche Angelegenheiten und andere offizielle Kommunikation wenden Sie sich bitte über die unten angegebenen verifizierten Management-Kanäle an das Management-Team des Künstlers.",
      emailLabel:"Management-E-Mail", issue:"Bei Problemen kontaktieren Sie uns bitte über diese E-Mail-Adresse.",
      verified:"Verifizierter Kanal", channelP:"Nutzen Sie den offiziellen Management-Kanal für professionelle Kommunikation.",
      wa:"Management über WhatsApp kontaktieren", tg:"Management über Telegram kontaktieren",
      securityH:"Sicherheitshinweis", securityP:"Bitte verwenden Sie für professionelle Anfragen und Kommunikation ausschließlich die offiziellen Management-Kanäle dieser Website. Aus Datenschutz- und Sicherheitsgründen wird die persönliche Kommunikation mit dem Künstler ausschließlich über etablierte Management-Verfahren abgewickelt.",
      contactEy:"Kontakt", contactH:"Mit dem Management verbinden.", optional:"[ZUSÄTZLICHE VERIFIZIERTE BÜRODETAILS — OPTIONAL]",
      footerP:"Offizielle Website für Management-Kontakte.", footerEdit:"[BEARBEITBARE FUSSZEILENINFORMATIONEN — NUR VERIFIZIERTE ANGABEN HINZUFÜGEN]", rights:"Alle Rechte vorbehalten."
    },
    it: {
      title:"CONTATTA IL MANAGEMENT", eyebrowHome:"Management ufficiale dell’artista",
      heroLead:"Contatto ufficiale per richieste professionali, collaborazioni, apparizioni, questioni commerciali e altre comunicazioni verificate.",
      heroBtn:"Contatta il management", aboutEy:"Sull’artista", aboutH:"Management artistico con una visione a lungo termine.",
      aboutP:"Questo sito ufficiale del management offre un punto di contatto verificato per le questioni professionali. Informazioni sull’artista, media approvati e canali ufficiali sono presentati qui per chiarezza, privacy e uso professionale.",
      bioTitle:"MANAGEMENT ARTISTI & SERVIZI MUSICALI", bioTag:"Costruire artisti. Sviluppare carriere. Creare un impatto duraturo.",
      missionH:"LA NOSTRA MISSIONE", missionP:"Supportare gli artisti con management mirato, sviluppo strategico e opportunità professionali che costruiscano carriere sostenibili.",
      managementH:"MANAGEMENT DELL’ARTISTA", managementP:"Rappresentanza professionale, comunicazione, pianificazione e coordinamento delle attività professionali approvate dell’artista.",
      developmentH:"SVILUPPO DELL’ARTISTA", developmentP:"Sviluppo strategico della carriera, posizionamento, direzione creativa e supporto pratico in linea con gli obiettivi dell’artista.",
      bookingsH:"BOOKING & EVENTI LIVE", bookingsP:"Coordinamento di apparizioni, performance, eventi e altre opportunità professionali attraverso canali di management verificati.",
      brandH:"STRATEGIA DEL BRAND E DIGITALE", brandP:"Posizionamento del brand e strategia digitale per sostenere la presenza pubblica dell’artista proteggendone l’autenticità.",
      mediaH:"MEDIA & PROMOZIONE", mediaP:"Coordinamento professionale con i media, opportunità di pubbliche relazioni e comunicazione promozionale approvata.",
      industryH:"PARTNERSHIP NELL’INDUSTRIA", industryP:"Collaborazione professionale con partner del settore, brand, media e altri stakeholder approvati.",
      whyH:"PERCHÉ LAVORARE CON NOI?", whyP:"Un approccio professionale, strutturato e orientato alla comunicazione, pensato per tutelare gli interessi dell’artista e creare percorsi chiari verso opportunità legittime.",
      workH:"LAVORA CON NOI", workP:"Per opportunità professionali legittime, utilizza i canali di management verificati indicati su questo sito.",
      legacy:"MUSICA. VISIONE. CARRIERA. EREDITÀ.",
      mediaEy:"Media / Galleria", mediaH:"Storie visive approvate.", mediaP:"I contenuti visivi caricati sono presentati come elementi di galleria modificabili; sostituisci immagini o didascalie con i materiali finali approvati.",
      exploreEy:"Esplora", exploreH:"Destinazioni musicali e di intrattenimento.", exploreP:"Questi link portano ai siti ufficiali delle rispettive piattaforme e pubblicazioni. L’inclusione non implica approvazione, rappresentanza o affiliazione.",
      official:"Sito ufficiale ↗", music:"Musica ↗", news:"Notizie ↗",
      newsEy:"Notizie su celebrità e intrattenimento", newsH:"Resta connesso al mondo dell’intrattenimento.", newsP:"Questi link permettono di leggere notizie su celebrità, musica, cinema, televisione e intrattenimento da pubblicazioni affermate. I siti esterni sono indipendenti.",
      celebrity:"Notizie sulle celebrità ↗", pop:"Celebrità e cultura pop ↗", industry:"Industria dell’intrattenimento ↗", nta:"Notizie sull’intrattenimento nigeriano ↗",
      officeEy:"Ufficio ufficiale del management", officeH:"Comunicazione professionale gestita tramite canali verificati.",
      officeP:"Per richieste professionali, collaborazioni, apparizioni, questioni commerciali e altre comunicazioni ufficiali, contatta il team di management dell’artista tramite i canali verificati indicati di seguito.",
      emailLabel:"E-mail del management", issue:"Per qualsiasi problema, contattaci tramite questo indirizzo e-mail.",
      verified:"Canale verificato", channelP:"Utilizza il canale ufficiale del management per le comunicazioni professionali.",
      wa:"Contatta il management su WhatsApp", tg:"Contatta il management su Telegram",
      securityH:"Avviso di sicurezza", securityP:"Utilizza esclusivamente i canali ufficiali del management indicati su questo sito per richieste e comunicazioni professionali. Per motivi di privacy e sicurezza, la comunicazione personale con l’artista è gestita esclusivamente attraverso le procedure stabilite dal management.",
      contactEy:"Contatti", contactH:"Contatta il management.", optional:"[DETTAGLI AGGIUNTIVI DELL’UFFICIO VERIFICATI — OPZIONALE]",
      footerP:"Sito ufficiale per i contatti del management.", footerEdit:"[INFORMAZIONI MODIFICABILI DEL PIÈ DI PAGINA — AGGIUNGERE SOLO DATI VERIFICATI]", rights:"Tutti i diritti riservati."
    },
    nl: {
      title:"CONTACT MET MANAGEMENT", eyebrowHome:"Officieel artiestenmanagement",
      heroLead:"Officieel managementcontact voor professionele vragen, samenwerkingen, optredens, zakelijke aangelegenheden en andere geverifieerde communicatie.",
      heroBtn:"Contact met management", aboutEy:"Over de artiest", aboutH:"Artiestenmanagement met een langetermijnvisie.",
      aboutP:"Deze officiële managementwebsite biedt een geverifieerd contactpunt voor professionele zaken. Artiestinformatie, goedgekeurde media en officiële communicatiekanalen worden hier aangeboden voor duidelijkheid, privacy en professioneel gebruik.",
      bioTitle:"ARTIESTENMANAGEMENT & MUZIEKSERVICES", bioTag:"Artiesten bouwen. Carrières ontwikkelen. Blijvende impact creëren.",
      missionH:"ONZE MISSIE", missionP:"Artiesten ondersteunen met gericht management, doordachte ontwikkeling en professionele kansen die duurzame carrières opbouwen.",
      managementH:"ARTIESTENMANAGEMENT", managementP:"Professionele vertegenwoordiging, communicatie, planning en coördinatie van de goedgekeurde professionele activiteiten van de artiest.",
      developmentH:"ARTIESTONTWIKKELING", developmentP:"Strategische carrièreontwikkeling, positionering, creatieve richting en praktische ondersteuning rond de doelen van de artiest.",
      bookingsH:"BOEKINGEN & LIVE-EVENEMENTEN", bookingsP:"Coördinatie van optredens, performances, evenementen en andere professionele boekingsmogelijkheden via geverifieerde managementkanalen.",
      brandH:"MERK- & DIGITALE STRATEGIE", brandP:"Doordachte merkpositionering en digitale strategie ter ondersteuning van de publieke aanwezigheid van de artiest met behoud van authenticiteit.",
      mediaH:"MEDIA & PROMOTIE", mediaP:"Professionele mediacoördinatie, publiciteitsmogelijkheden en goedgekeurde promotionele communicatie.",
      industryH:"INDUSTRIEPARTNERSCHAPPEN", industryP:"Professionele samenwerking met relevante branchepartners, merken, media en andere goedgekeurde belanghebbenden.",
      whyH:"WAAROM MET ONS WERKEN?", whyP:"Een professionele, gestructureerde en communicatiegerichte aanpak die de belangen van de artiest beschermt en duidelijke routes naar legitieme kansen creëert.",
      workH:"WERK MET ONS", workP:"Gebruik voor legitieme professionele kansen de geverifieerde managementkanalen op deze website.",
      legacy:"MUZIEK. VISIE. CARRIÈRE. ERFENIS.",
      mediaEy:"Media / Galerij", mediaH:"Goedgekeurde visuele verhalen.", mediaP:"Geüploade visuals worden als bewerkbare galerij-items gepresenteerd; vervang afbeeldingen of bijschriften door goedgekeurd definitief materiaal.",
      exploreEy:"Ontdekken", exploreH:"Muziek- en entertainmentbestemmingen.", exploreP:"Deze links leiden naar de officiële websites van de betreffende platforms en publicaties. Opname betekent geen goedkeuring, vertegenwoordiging of affiliatie.",
      official:"Officiële website ↗", music:"Muziek ↗", news:"Nieuws ↗",
      newsEy:"Celebrity- & entertainmentnieuws", newsH:"Blijf verbonden met de entertainmentwereld.", newsP:"Via deze links kun je nieuws over beroemdheden, muziek, film, televisie en entertainment lezen bij gevestigde publicaties. Deze externe sites zijn onafhankelijk.",
      celebrity:"Celebritynieuws ↗", pop:"Celebrities & popcultuur ↗", industry:"Entertainmentindustrie ↗", nta:"Nigeriaans entertainmentnieuws ↗",
      officeEy:"Officieel managementkantoor", officeH:"Professionele communicatie via geverifieerde kanalen.",
      officeP:"Neem voor professionele vragen, samenwerkingen, optredens, zakelijke zaken en andere officiële communicatie contact op met het managementteam van de artiest via de hieronder vermelde geverifieerde kanalen.",
      emailLabel:"Management-e-mail", issue:"Neem bij problemen contact met ons op via dit e-mailadres.",
      verified:"Geverifieerd kanaal", channelP:"Gebruik het officiële managementkanaal voor professionele communicatie.",
      wa:"Contact met management via WhatsApp", tg:"Contact met management via Telegram",
      securityH:"Beveiligingsbericht", securityP:"Gebruik uitsluitend de officiële managementcontactkanalen op deze website voor professionele vragen en communicatie. Om privacy- en veiligheidsredenen wordt persoonlijke communicatie met de artiest uitsluitend via de vastgestelde managementprocedures afgehandeld.",
      contactEy:"Contact", contactH:"Neem contact op met management.", optional:"[AANVULLENDE GEVERIFIEERDE KANTOORGEGEVENS — OPTIONEEL]",
      footerP:"Officiële website voor managementcontact.", footerEdit:"[BEWERKBARE VOETTEKSTINFORMATIE — ALLEEN GEVERIFIEERDE GEGEVENS TOEVOEGEN]", rights:"Alle rechten voorbehouden."
    }
  };

  /* For the remaining supported languages, the interface and core management copy
     use carefully selected translations below. */
  Object.assign(T,{
    ar:{title:"التواصل مع الإدارة",eyebrowHome:"الإدارة الرسمية للفنان",heroLead:"جهة الاتصال الرسمية للإدارة للاستفسارات المهنية والتعاونات والظهور والشؤون التجارية وغيرها من الاتصالات الموثقة.",heroBtn:"التواصل مع الإدارة",aboutEy:"عن الفنان",aboutH:"إدارة فنية برؤية طويلة المدى.",aboutP:"يوفر هذا الموقع الرسمي للإدارة نقطة اتصال موثقة للشؤون المهنية. تُعرض معلومات الفنان والوسائط المعتمدة وقنوات الاتصال الرسمية بوضوح وخصوصية للاستخدام المهني.",bioTitle:"إدارة الفنانين والخدمات الموسيقية",bioTag:"بناء الفنانين. تطوير المسارات المهنية. صناعة أثر مستدام.",missionH:"مهمتنا",missionP:"دعم الفنانين من خلال إدارة مركزة وتطوير مدروس وفرص مهنية تبني مسارات مستدامة.",managementH:"إدارة الفنان",managementP:"تمثيل مهني واتصال وتخطيط وتنسيق للأنشطة المهنية المعتمدة للفنان.",developmentH:"تطوير الفنان",developmentP:"تطوير استراتيجي للمسيرة المهنية والتموضع والتوجيه الإبداعي والدعم العملي وفق أهداف الفنان.",bookingsH:"الحجوزات والفعاليات الحية",bookingsP:"تنسيق الظهور والعروض والفعاليات والفرص المهنية الأخرى عبر قنوات الإدارة الموثقة.",brandH:"استراتيجية العلامة التجارية والرقمية",brandP:"تموضع مدروس للعلامة التجارية واستراتيجية رقمية تدعم الحضور العام للفنان وتحافظ على أصالته.",mediaH:"الإعلام والترويج",mediaP:"تنسيق إعلامي مهني وفرص علاقات عامة واتصالات ترويجية معتمدة.",industryH:"شراكات القطاع",industryP:"تعاون مهني مع الشركاء والعلامات التجارية ووسائل الإعلام والجهات المعتمدة ذات الصلة.",whyH:"لماذا العمل معنا؟",whyP:"نهج مهني ومنظم يركز على التواصل ويحمي مصالح الفنان ويوضح مسارات الفرص المشروعة.",workH:"اعمل معنا",workP:"للفرص المهنية المشروعة، استخدم قنوات الإدارة الموثقة الواردة في هذا الموقع.",legacy:"الموسيقى. الرؤية. المسيرة. الإرث.",mediaEy:"الإعلام / المعرض",mediaH:"قصص بصرية معتمدة.",mediaP:"تُعرض الصور المرفوعة كعناصر قابلة للتحرير في المعرض؛ استبدل أي صورة أو وصف بالوسائط النهائية المعتمدة عند جاهزيتها.",exploreEy:"استكشف",exploreH:"وجهات الموسيقى والترفيه.",exploreP:"تؤدي هذه الروابط إلى المواقع الرسمية للمنصات والمنشورات المعنية. لا يعني إدراجها تأييدًا أو تمثيلًا أو انتسابًا.",official:"الموقع الرسمي ↗",music:"الموسيقى ↗",news:"الأخبار ↗",newsEy:"أخبار المشاهير والترفيه",newsH:"ابقَ على اتصال بعالم الترفيه.",newsP:"يمكن للزوار استخدام هذه الروابط لقراءة أخبار المشاهير والموسيقى والسينما والتلفزيون والترفيه من منشورات معروفة. هذه المواقع الخارجية مستقلة.",celebrity:"أخبار المشاهير ↗",pop:"المشاهير والثقافة الشعبية ↗",industry:"قطاع الترفيه ↗",nta:"أخبار الترفيه النيجيرية ↗",officeEy:"مكتب الإدارة الرسمي",officeH:"اتصالات مهنية عبر قنوات موثقة.",officeP:"للاستفسارات المهنية والتعاونات والظهور والشؤون التجارية وغيرها من الاتصالات الرسمية، يرجى التواصل مع فريق إدارة الفنان عبر قنوات الإدارة الموثقة أدناه.",emailLabel:"البريد الإلكتروني للإدارة",issue:"إذا واجهت أي مشكلة، يرجى التواصل معنا عبر عنوان البريد الإلكتروني هذا.",verified:"قناة موثقة",channelP:"استخدم قناة الإدارة الرسمية للاتصالات المهنية.",wa:"التواصل مع الإدارة عبر واتساب",tg:"التواصل مع الإدارة عبر تيليجرام",securityH:"تنبيه أمني",securityP:"يرجى استخدام قنوات اتصال الإدارة الرسمية المدرجة في هذا الموقع فقط للاستفسارات والاتصالات المهنية. حفاظًا على الخصوصية والأمان، تتم الاتصالات الشخصية مع الفنان حصريًا عبر إجراءات الإدارة المعتمدة.",contactEy:"اتصل بنا",contactH:"تواصل مع الإدارة.",optional:"[تفاصيل إضافية موثقة للمكتب — اختياري]",footerP:"الموقع الرسمي للاتصال بالإدارة.",footerEdit:"[معلومات تذييل قابلة للتحرير — أضف المعلومات الموثقة فقط]",rights:"جميع الحقوق محفوظة."},
    hi:{title:"प्रबंधन से संपर्क",eyebrowHome:"आधिकारिक कलाकार प्रबंधन",heroLead:"पेशेवर पूछताछ, सहयोग, उपस्थिति, व्यावसायिक मामलों और अन्य सत्यापित संचार के लिए आधिकारिक प्रबंधन संपर्क।",heroBtn:"प्रबंधन से संपर्क करें",aboutEy:"कलाकार के बारे में",aboutH:"दीर्घकालिक दृष्टि के साथ कलाकार प्रबंधन।",aboutP:"यह आधिकारिक प्रबंधन वेबसाइट पेशेवर मामलों के लिए एक सत्यापित संपर्क बिंदु प्रदान करती है। कलाकार की जानकारी, स्वीकृत मीडिया और आधिकारिक संपर्क चैनल स्पष्टता, गोपनीयता और पेशेवर उपयोग के लिए प्रस्तुत किए गए हैं।",bioTitle:"कलाकार प्रबंधन और संगीत सेवाएँ",bioTag:"कलाकारों का निर्माण। करियर का विकास। स्थायी प्रभाव का निर्माण।",missionH:"हमारा मिशन",missionP:"केंद्रित प्रबंधन, विचारशील विकास और ऐसे पेशेवर अवसरों के माध्यम से कलाकारों का समर्थन करना जो टिकाऊ करियर बनाएं।",managementH:"कलाकार प्रबंधन",managementP:"कलाकार की स्वीकृत पेशेवर गतिविधियों के लिए पेशेवर प्रतिनिधित्व, संचार, योजना और समन्वय।",developmentH:"कलाकार विकास",developmentP:"रणनीतिक करियर विकास, पोजिशनिंग, रचनात्मक दिशा और कलाकार के लक्ष्यों के अनुरूप व्यावहारिक सहायता।",bookingsH:"बुकिंग और लाइव इवेंट",bookingsP:"सत्यापित प्रबंधन चैनलों के माध्यम से प्रस्तुतियों, प्रदर्शन, कार्यक्रमों और अन्य पेशेवर बुकिंग अवसरों का समन्वय।",brandH:"ब्रांड और डिजिटल रणनीति",brandP:"कलाकार की सार्वजनिक उपस्थिति को समर्थन देने वाली ब्रांड पोजिशनिंग और डिजिटल रणनीति, साथ ही प्रामाणिकता की रक्षा।",mediaH:"मीडिया और प्रचार",mediaP:"पेशेवर मीडिया समन्वय, प्रचार अवसर और स्वीकृत प्रमोशनल संचार।",industryH:"उद्योग साझेदारियाँ",industryP:"संबंधित उद्योग भागीदारों, ब्रांडों, मीडिया और अन्य स्वीकृत हितधारकों के साथ पेशेवर सहयोग।",whyH:"हमारे साथ क्यों काम करें?",whyP:"एक पेशेवर, संरचित और संचार-केंद्रित दृष्टिकोण जो कलाकार के हितों की रक्षा करता है और वैध अवसरों के लिए स्पष्ट मार्ग बनाता है।",workH:"हमारे साथ काम करें",workP:"वैध पेशेवर अवसरों के लिए इस वेबसाइट पर दिए गए सत्यापित प्रबंधन चैनलों का उपयोग करें।",legacy:"संगीत। दृष्टि। करियर। विरासत।",mediaEy:"मीडिया / गैलरी",mediaH:"स्वीकृत दृश्य कहानियाँ।",mediaP:"अपलोड किए गए दृश्य संपादन योग्य गैलरी आइटम के रूप में प्रस्तुत हैं; तैयार होने पर किसी भी छवि या कैप्शन को स्वीकृत अंतिम मीडिया से बदलें।",exploreEy:"एक्सप्लोर",exploreH:"संगीत और मनोरंजन के गंतव्य।",exploreP:"ये लिंक संबंधित प्लेटफॉर्म और प्रकाशनों की आधिकारिक वेबसाइटों पर ले जाते हैं। इन्हें शामिल करना समर्थन, प्रतिनिधित्व या संबद्धता नहीं दर्शाता।",official:"आधिकारिक वेबसाइट ↗",music:"संगीत ↗",news:"समाचार ↗",newsEy:"सेलिब्रिटी और मनोरंजन समाचार",newsH:"मनोरंजन की दुनिया से जुड़े रहें।",newsP:"इन लिंक के माध्यम से सेलिब्रिटी, संगीत, फिल्म, टेलीविजन और मनोरंजन समाचार स्थापित प्रकाशनों से पढ़े जा सकते हैं।",celebrity:"सेलिब्रिटी समाचार ↗",pop:"सेलिब्रिटी और पॉप संस्कृति ↗",industry:"मनोरंजन उद्योग ↗",nta:"नाइजीरियाई मनोरंजन समाचार ↗",officeEy:"आधिकारिक प्रबंधन कार्यालय",officeH:"सत्यापित चैनलों के माध्यम से पेशेवर संचार।",officeP:"पेशेवर पूछताछ, सहयोग, उपस्थिति, व्यावसायिक मामलों और अन्य आधिकारिक संचार के लिए नीचे दिए गए सत्यापित प्रबंधन चैनलों से कलाकार की प्रबंधन टीम से संपर्क करें।",emailLabel:"प्रबंधन ईमेल",issue:"किसी समस्या के लिए इस ईमेल पते पर हमसे संपर्क करें।",verified:"सत्यापित चैनल",channelP:"पेशेवर संचार के लिए आधिकारिक प्रबंधन चैनल का उपयोग करें।",wa:"WhatsApp पर प्रबंधन से संपर्क करें",tg:"Telegram पर प्रबंधन से संपर्क करें",securityH:"सुरक्षा सूचना",securityP:"पेशेवर पूछताछ और संचार के लिए केवल इस वेबसाइट पर दिए गए आधिकारिक प्रबंधन चैनलों का उपयोग करें। गोपनीयता और सुरक्षा के लिए कलाकार से व्यक्तिगत संचार स्थापित प्रबंधन प्रक्रियाओं के माध्यम से ही किया जाता है।",contactEy:"संपर्क",contactH:"प्रबंधन से जुड़ें।",optional:"[अतिरिक्त सत्यापित कार्यालय विवरण — वैकल्पिक]",footerP:"आधिकारिक प्रबंधन संपर्क वेबसाइट।",footerEdit:"[संपादन योग्य फुटर जानकारी — केवल सत्यापित विवरण जोड़ें]",rights:"सर्वाधिकार सुरक्षित."}
  });

  const selectors = {
    title:"title", heroLead:".hero .lead", heroBtn:".hero .btn",
    aboutEy:"#about .eyebrow", aboutH:"#about h2", aboutP:"#about .section-head p",
    bioTitle:"#about .bio-copy h2", bioTag:"#about .bio-copy .bio-tag",
    missionH:"#about .service:nth-of-type(1) h3", missionP:"#about .service:nth-of-type(1) p",
    managementH:"#about .service:nth-of-type(2) h3", managementP:"#about .service:nth-of-type(2) p",
    developmentH:"#about .service:nth-of-type(3) h3", developmentP:"#about .service:nth-of-type(3) p",
    bookingsH:"#about .service:nth-of-type(4) h3", bookingsP:"#about .service:nth-of-type(4) p",
    brandH:"#about .service:nth-of-type(5) h3", brandP:"#about .service:nth-of-type(5) p",
    mediaH:"#about .service:nth-of-type(6) h3", mediaP:"#about .service:nth-of-type(6) p",
    industryH:"#about .service:nth-of-type(7) h3", industryP:"#about .service:nth-of-type(7) p",
    whyH:"#about .service:nth-of-type(8) h3", whyP:"#about .service:nth-of-type(8) p",
    workH:"#about .service:nth-of-type(9) h3", workP:"#about .service:nth-of-type(9) p",
    legacy:"#about .legacy",
    mediaEy:"#media .eyebrow", mediaH:"#media h2", mediaP:"#media .section-head p",
    exploreEy:"#explore > .container > .section-head .eyebrow", exploreH:"#explore > .container > .section-head h2", exploreP:"#explore > .container > .section-head p",
    newsEy:".news-links .eyebrow",newsH:".news-links h2",newsP:".news-links .section-head p",
    officeEy:"#management .eyebrow",officeH:"#management h2",officeP:"#management > .container > p",
    emailLabel:".contact-card-label",issue:".contact-card-note",verified:".contact-card .meta",channelP:".contact-card > p",
    securityH:".security strong",securityP:".security p",
    contactEy:"#contact .eyebrow",contactH:"#contact h2",optional:"#contact .section-head p",
    footerP:"footer .mark + p",footerEdit:"footer .footer-grid > p:nth-of-type(1)"
  };

  function set(el,text,html){ if(!el)return; if(html) el.innerHTML=text; else el.textContent=text; }
  function translate(lang){
    const t=T[lang]||T.en;
    for(const [k,sel] of Object.entries(selectors)){
      const el=document.querySelector(sel);
      if(el && t[k]!=null) set(el,t[k]);
    }
    document.querySelectorAll('.btn').forEach(a=>{
      const txt=a.textContent.trim();
      if(/WhatsApp/i.test(txt)) set(a,(t.wa||"Contact Management on WhatsApp"));
      else if(/Telegram/i.test(txt)) set(a,(t.tg||"Contact Management on Telegram"));
      else if(/Contact Management/i.test(txt)) set(a,t.heroBtn||"Contact Management");
    });
    document.querySelectorAll('.platform > span').forEach(s=>{
      const txt=s.textContent.trim();
      if(/^Official website/i.test(txt))s.textContent=t.official;
      else if(/^Music/i.test(txt))s.textContent=t.music;
      else if(/^News/i.test(txt))s.textContent=t.news;
      else if(/^Celebrity news/i.test(txt))s.textContent=t.celebrity;
      else if(/^Celebrity & pop/i.test(txt))s.textContent=t.pop;
      else if(/^Entertainment industry/i.test(txt))s.textContent=t.industry;
      else if(/^Nigerian entertainment/i.test(txt))s.textContent=t.nta;
      else if(/^Entertainment news/i.test(txt))s.textContent=t.news;
    });
    document.querySelectorAll('footer').forEach(f=>{
      const p=[...f.querySelectorAll('p')].find(x=>/All rights reserved|Todos|Alle Rechte|Tous droits|Tutti i diritti|सर्वाधिकार|جميع الحقوق/.test(x.textContent));
      if(p && t.rights){ const y=p.querySelector('#year'); p.textContent="© "; if(y)p.appendChild(y); p.append(" Management. "+t.rights); }
    });
    document.documentElement.dataset.contentLanguage=lang;
  }

  window.addEventListener("site-localized",e=>translate(e.detail?.lang||"en"));
  if(document.readyState!=="loading") setTimeout(()=>translate(window.SiteLocalization?.language||"en"),0);
  else document.addEventListener("DOMContentLoaded",()=>translate(window.SiteLocalization?.language||"en"),{once:true});
  window.SiteContentLocalization={translate,languages:Object.keys(T)};
})();