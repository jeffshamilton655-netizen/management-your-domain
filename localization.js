/* Automatic country + language localization for the management site.
   Uses browser language plus approximate IP country. No precise GPS permission is requested.
   Manual selection is remembered locally. Official artist/management facts are never replaced by geolocation data. */
(function () {
  "use strict";

  const LANGS = {
    en: { name: "English", locale: "en-US", dir: "ltr" },
    fr: { name: "Français", locale: "fr-FR", dir: "ltr" },
    es: { name: "Español", locale: "es-ES", dir: "ltr" },
    pt: { name: "Português", locale: "pt-PT", dir: "ltr" },
    de: { name: "Deutsch", locale: "de-DE", dir: "ltr" },
    it: { name: "Italiano", locale: "it-IT", dir: "ltr" },
    ar: { name: "العربية", locale: "ar", dir: "rtl" },
    hi: { name: "हिन्दी", locale: "hi-IN", dir: "ltr" },
    sw: { name: "Kiswahili", locale: "sw-KE", dir: "ltr" },
    yo: { name: "Yorùbá", locale: "yo-NG", dir: "ltr" },
    zh: { name: "中文", locale: "zh-CN", dir: "ltr" },
    ja: { name: "日本語", locale: "ja-JP", dir: "ltr" },
    ko: { name: "한국어", locale: "ko-KR", dir: "ltr" },
    tr: { name: "Türkçe", locale: "tr-TR", dir: "ltr" },
    nl: { name: "Nederlands", locale: "nl-NL", dir: "ltr" }
  };

  const COUNTRY = {
    NG:{lang:"en", locale:"en-NG", currency:"NGN", tz:"Africa/Lagos", region:"Nigeria", flag:"🇳🇬"},
    BJ:{lang:"fr", locale:"fr-BJ", currency:"XOF", tz:"Africa/Porto-Novo", region:"Benin", flag:"🇧🇯"},
    GH:{lang:"en", locale:"en-GH", currency:"GHS", tz:"Africa/Accra", region:"Ghana", flag:"🇬🇭"},
    KE:{lang:"sw", locale:"sw-KE", currency:"KES", tz:"Africa/Nairobi", region:"Kenya", flag:"🇰🇪"},
    TZ:{lang:"sw", locale:"sw-TZ", currency:"TZS", tz:"Africa/Dar_es_Salaam", region:"Tanzania", flag:"🇹🇿"},
    ZA:{lang:"en", locale:"en-ZA", currency:"ZAR", tz:"Africa/Johannesburg", region:"South Africa", flag:"🇿🇦"},
    US:{lang:"en", locale:"en-US", currency:"USD", tz:"America/New_York", region:"United States", flag:"🇺🇸"},
    CA:{lang:"en", locale:"en-CA", currency:"CAD", tz:"America/Toronto", region:"Canada", flag:"🇨🇦"},
    GB:{lang:"en", locale:"en-GB", currency:"GBP", tz:"Europe/London", region:"United Kingdom", flag:"🇬🇧"},
    IE:{lang:"en", locale:"en-IE", currency:"EUR", tz:"Europe/Dublin", region:"Ireland", flag:"🇮🇪"},
    FR:{lang:"fr", locale:"fr-FR", currency:"EUR", tz:"Europe/Paris", region:"France", flag:"🇫🇷"},
    BE:{lang:"fr", locale:"fr-BE", currency:"EUR", tz:"Europe/Brussels", region:"Belgium", flag:"🇧🇪"},
    CH:{lang:"de", locale:"de-CH", currency:"CHF", tz:"Europe/Zurich", region:"Switzerland", flag:"🇨🇭"},
    DE:{lang:"de", locale:"de-DE", currency:"EUR", tz:"Europe/Berlin", region:"Germany", flag:"🇩🇪"},
    AT:{lang:"de", locale:"de-AT", currency:"EUR", tz:"Europe/Vienna", region:"Austria", flag:"🇦🇹"},
    ES:{lang:"es", locale:"es-ES", currency:"EUR", tz:"Europe/Madrid", region:"Spain", flag:"🇪🇸"},
    MX:{lang:"es", locale:"es-MX", currency:"MXN", tz:"America/Mexico_City", region:"Mexico", flag:"🇲🇽"},
    BR:{lang:"pt", locale:"pt-BR", currency:"BRL", tz:"America/Sao_Paulo", region:"Brazil", flag:"🇧🇷"},
    PT:{lang:"pt", locale:"pt-PT", currency:"EUR", tz:"Europe/Lisbon", region:"Portugal", flag:"🇵🇹"},
    IT:{lang:"it", locale:"it-IT", currency:"EUR", tz:"Europe/Rome", region:"Italy", flag:"🇮🇹"},
    IN:{lang:"hi", locale:"hi-IN", currency:"INR", tz:"Asia/Kolkata", region:"India", flag:"🇮🇳"},
    JP:{lang:"ja", locale:"ja-JP", currency:"JPY", tz:"Asia/Tokyo", region:"Japan", flag:"🇯🇵"},
    KR:{lang:"ko", locale:"ko-KR", currency:"KRW", tz:"Asia/Seoul", region:"South Korea", flag:"🇰🇷"},
    CN:{lang:"zh", locale:"zh-CN", currency:"CNY", tz:"Asia/Shanghai", region:"China", flag:"🇨🇳"},
    TR:{lang:"tr", locale:"tr-TR", currency:"TRY", tz:"Europe/Istanbul", region:"Türkiye", flag:"🇹🇷"},
    NL:{lang:"nl", locale:"nl-NL", currency:"EUR", tz:"Europe/Amsterdam", region:"Netherlands", flag:"🇳🇱"},
    MA:{lang:"fr", locale:"fr-MA", currency:"MAD", tz:"Africa/Casablanca", region:"Morocco", flag:"🇲🇦"},
    EG:{lang:"ar", locale:"ar-EG", currency:"EGP", tz:"Africa/Cairo", region:"Egypt", flag:"🇪🇬"},
    AE:{lang:"ar", locale:"ar-AE", currency:"AED", tz:"Asia/Dubai", region:"United Arab Emirates", flag:"🇦🇪"},
    SA:{lang:"ar", locale:"ar-SA", currency:"SAR", tz:"Asia/Riyadh", region:"Saudi Arabia", flag:"🇸🇦"}
  };

  const UI = {
    en:{home:"Home",about:"About the Artist","media":"Media / Gallery",explore:"Explore",management:"Management",contact:"Contact",auto:"Auto",detected:"Region detected",regional:"Regional experience",manual:"Language"},
    fr:{home:"Accueil",about:"À propos de l'artiste",media:"Médias / Galerie",explore:"Explorer",management:"Management",contact:"Contact",auto:"Auto",detected:"Région détectée",regional:"Expérience régionale",manual:"Langue"},
    es:{home:"Inicio",about:"Sobre el artista",media:"Medios / Galería",explore:"Explorar",management:"Management",contact:"Contacto",auto:"Auto",detected:"Región detectada",regional:"Experiencia regional",manual:"Idioma"},
    pt:{home:"Início",about:"Sobre o artista",media:"Mídia / Galeria",explore:"Explorar",management:"Gestão",contact:"Contato",auto:"Auto",detected:"Região detectada",regional:"Experiência regional",manual:"Idioma"},
    de:{home:"Startseite",about:"Über den Künstler",media:"Medien / Galerie",explore:"Entdecken",management:"Management",contact:"Kontakt",auto:"Auto",detected:"Region erkannt",regional:"Regionales Erlebnis",manual:"Sprache"},
    it:{home:"Home",about:"Sull'artista",media:"Media / Galleria",explore:"Esplora",management:"Management",contact:"Contatti",auto:"Auto",detected:"Regione rilevata",regional:"Esperienza regionale",manual:"Lingua"},
    ar:{home:"الرئيسية",about:"عن الفنان",media:"الإعلام / المعرض",explore:"استكشف",management:"الإدارة",contact:"اتصل بنا",auto:"تلقائي",detected:"المنطقة المكتشفة",regional:"تجربة إقليمية",manual:"اللغة"},
    hi:{home:"होम",about:"कलाकार के बारे में",media:"मीडिया / गैलरी",explore:"एक्सप्लोर",management:"प्रबंधन",contact:"संपर्क",auto:"स्वचालित",detected:"क्षेत्र पहचाना गया",regional:"क्षेत्रीय अनुभव",manual:"भाषा"},
    sw:{home:"Nyumbani",about:"Kuhusu Msanii",media:"Vyombo / Matunzio",explore:"Gundua",management:"Usimamizi",contact:"Mawasiliano",auto:"Otomatiki",detected:"Eneo limetambuliwa",regional:"Uzoefu wa eneo",manual:"Lugha"},
    yo:{home:"Ilé",about:"Nipa Oṣere",media:"Media / Àwòrán",explore:"Ṣàwárí",management:"Ìṣàkóso",contact:"Kàn sí wa",auto:"Aifọwọyi",detected:"Agbegbe ti a mọ",regional:"Ìrírí agbègbè",manual:"Èdè"},
    zh:{home:"首页",about:"关于艺术家",media:"媒体 / 图库",explore:"探索",management:"管理",contact:"联系",auto:"自动",detected:"检测到的地区",regional:"区域体验",manual:"语言"},
    ja:{home:"ホーム",about:"アーティストについて",media:"メディア / ギャラリー",explore:"探索",management:"マネジメント",contact:"お問い合わせ",auto:"自動",detected:"検出された地域",regional:"地域向け表示",manual:"言語"},
    ko:{home:"홈",about:"아티스트 소개",media:"미디어 / 갤러리",explore:"둘러보기",management:"매니지먼트",contact:"문의",auto:"자동",detected:"감지된 지역",regional:"지역 맞춤 경험",manual:"언어"},
    tr:{home:"Ana Sayfa",about:"Sanatçı Hakkında",media:"Medya / Galeri",explore:"Keşfet",management:"Yönetim",contact:"İletişim",auto:"Otomatik",detected:"Algılanan bölge",regional:"Bölgesel deneyim",manual:"Dil"},
    nl:{home:"Home",about:"Over de artiest",media:"Media / Galerij",explore:"Ontdekken",management:"Management",contact:"Contact",auto:"Auto",detected:"Regio gedetecteerd",regional:"Regionale ervaring",manual:"Taal"}
  };

  const NEWS_BY_COUNTRY = {
    NG:["NTA Entertainment","Entertainment Tonight","People","The Hollywood Reporter"],
    US:["Entertainment Tonight","People","Entertainment Weekly","E! News","The Hollywood Reporter"],
    GB:["People","Entertainment Weekly","The Hollywood Reporter","Entertainment Tonight"],
    FR:["People","The Hollywood Reporter","Entertainment Weekly","Entertainment Tonight"],
    DE:["People","The Hollywood Reporter","Entertainment Weekly","Entertainment Tonight"],
    IN:["Entertainment Tonight","People","The Hollywood Reporter","Entertainment Weekly"]
  };

  function browserLang(){
    const list=(navigator.languages||[navigator.language||"en"]).map(x=>(x||"en").toLowerCase().split("-")[0]);
    return list.find(x=>LANGS[x])||"en";
  }

  async function detectCountry(){
    try{
      const ctl=new AbortController();
      const timer=setTimeout(()=>ctl.abort(),4500);
      const r=await fetch("https://ipwho.is/?fields=success,country,country_code,city,region,timezone,currency",{signal:ctl.signal,cache:"no-store"});
      clearTimeout(timer);
      if(!r.ok) throw new Error("geo");
      const d=await r.json();
      if(d && d.success && d.country_code) return d;
    }catch(e){}
    return {country_code:"",country:"",city:"",region:"",timezone:{id:""},currency:{code:""}};
  }

  function ensureSelector(){
    let box=document.querySelector("[data-localization-selector]");
    if(box) return box;
    box=document.createElement("div");
    box.setAttribute("data-localization-selector","true");
    box.style.cssText="position:fixed;right:18px;bottom:18px;z-index:99999;background:rgba(24,24,24,.94);color:#fff;padding:10px 12px;border:1px solid rgba(212,175,55,.5);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.25);font:600 12px/1.2 system-ui,sans-serif;backdrop-filter:blur(10px)";
    const label=document.createElement("span"); label.textContent="🌐 ";
    const select=document.createElement("select"); select.id="site-language";
    select.style.cssText="background:transparent;color:#fff;border:0;outline:0;font:inherit;cursor:pointer";
    const autoOption=document.createElement("option"); autoOption.value="auto"; autoOption.textContent="Auto"; select.appendChild(autoOption); Object.entries(LANGS).forEach(([k,v])=>{const o=document.createElement("option");o.value=k;o.textContent=v.name;select.appendChild(o);});
    select.addEventListener("change",async()=>{if(select.value==="auto"){localStorage.setItem("site-language","auto");const c=await detectCountry();const code=(c.country_code||"").toUpperCase();const cfg=COUNTRY[code];apply((cfg&&LANGS[cfg.lang])?cfg.lang:browserLang(),c,false);}else{localStorage.setItem("site-language",select.value);apply(select.value,window.__siteCountry||null,true);}});
    box.append(label,select); document.body.appendChild(box); return box;
  }

  function addRegionBadge(country,lang){
    if(!country || !country.country) return;
    let badge=document.querySelector("[data-region-badge]");
    if(!badge){
      badge=document.createElement("div"); badge.setAttribute("data-region-badge","true");
      badge.style.cssText="position:fixed;left:18px;bottom:18px;z-index:99998;background:rgba(255,255,255,.94);color:#222;padding:9px 12px;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.12);font:500 11px/1.35 system-ui,sans-serif;max-width:280px";
      document.body.appendChild(badge);
    }
    const c=COUNTRY[country.country_code]||{};
    const city=country.city?country.city+", ":"";
    badge.textContent=(c.flag||"🌐")+" "+city+(country.country||c.region||"")+" · "+(LANGS[lang]?.name||lang);
  }

  function addRegionalPanel(country,lang){
    if(!country || !country.country) return;
    let p=document.querySelector("[data-regional-panel]");
    if(!p){p=document.createElement("aside");p.setAttribute("data-regional-panel","true");p.style.cssText="position:fixed;left:18px;bottom:64px;z-index:99997;background:rgba(23,23,22,.96);color:#f4f0e8;padding:10px 13px;border:1px solid rgba(185,154,98,.45);border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.22);font:500 11px/1.45 system-ui,sans-serif;max-width:290px;backdrop-filter:blur(10px)";document.body.appendChild(p);}
    const c=COUNTRY[(country.country_code||"").toUpperCase()]||{};
    const currency=(c.currency||country.currency?.code||"—");
    const tz=(c.tz||country.timezone?.id||"—");
    let localTime="—"; try{localTime=new Intl.DateTimeFormat(c.locale||LANGS[lang].locale,{dateStyle:"medium",timeStyle:"short",timeZone:tz}).format(new Date());}catch(e){}
    p.innerHTML="<strong>"+(UI[lang]?.regional||"Regional experience")+"</strong><br>"+(c.flag||"🌐")+" "+(country.city?country.city+", ":"")+(country.country||c.region||"")+"<br>"+currency+" · "+tz+"<br>"+localTime;
  }

  function translateNav(lang){
    const t=UI[lang]||UI.en;
    const anchors=[...document.querySelectorAll("a")];
    anchors.forEach(a=>{
      const href=a.getAttribute("href")||"";
      const target=href.toLowerCase();
      let key=null;
      if(target==="#" || target.endsWith("#home")) key="home";
      else if(target.endsWith("#about")||target.includes("about")) key="about";
      else if(target.endsWith("#media")||target.includes("gallery")) key="media";
      else if(target.endsWith("#explore")) key="explore";
      else if(target.endsWith("#management")) key="management";
      else if(target.endsWith("#contact")) key="contact";
      if(key && a.children.length===0 && a.textContent.trim().length<40) a.textContent=t[key];
    });
  }

  function regionalize(countryCode){
    const order=NEWS_BY_COUNTRY[countryCode];
    if(!order) return;
    const all=[...document.querySelectorAll("a")];
    const cards=all.filter(a=>order.some(n=>a.textContent.trim().toLowerCase()===n.toLowerCase()));
    cards.forEach((a,i)=>{const card=a.closest("article,.card,.explore-card,.news-card,.link-card,li")||a;card.style.order=String(i);});
  }

  function apply(lang,country,manual){
    const meta=LANGS[lang]||LANGS.en;
    document.documentElement.lang=meta.locale;
    document.documentElement.dir=meta.dir;
    document.documentElement.dataset.region=(country&&country.country_code)||"";
    window.__siteCountry=country;
    try{
      localStorage.setItem("site-language",manual?lang:"auto");
      localStorage.setItem("site-region",country&&country.country_code||"");
    }catch(e){}
    translateNav(lang);
    regionalize(country&&country.country_code);
    const selector=ensureSelector().querySelector("select");
    if(selector) selector.value=(manual?lang:"auto");
    addRegionBadge(country,lang); addRegionalPanel(country,lang);
    window.dispatchEvent(new CustomEvent("site-localized",{detail:{lang,country}}));
  }

  async function init(){
    const selector=ensureSelector();
    const saved=localStorage.getItem("site-language");
    if(saved && saved!=="auto" && LANGS[saved]) apply(saved,null,true);
    else apply(browserLang(),null,false);

    const country=await detectCountry();
    const code=(country.country_code||"").toUpperCase();
    const cfg=COUNTRY[code];
    const lang=(saved && saved!=="auto" && LANGS[saved])?saved:((cfg&&LANGS[cfg.lang])?cfg.lang:browserLang());
    apply(lang,country,!!(saved && saved!=="auto" && LANGS[saved]));

    // Expose locale data for future country-specific modules and editable content.
    window.SiteLocalization={
      country:country,
      countryConfig:cfg||null,
      language:lang,
      locale:(cfg&&cfg.locale)||LANGS[lang].locale,
      currency:(cfg&&cfg.currency)||null,
      timezone:(cfg&&cfg.tz)||country?.timezone?.id||null,
      formatCurrency:(value,currency)=>new Intl.NumberFormat((cfg&&cfg.locale)||LANGS[lang].locale,{style:"currency",currency:currency||((cfg&&cfg.currency)||"USD")}).format(value),
      formatDate:(value)=>new Intl.DateTimeFormat((cfg&&cfg.locale)||LANGS[lang].locale,{dateStyle:"medium",timeZone:(cfg&&cfg.tz)||country?.timezone?.id||undefined}).format(new Date(value))
    };
  }

  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true}); else init();
})();