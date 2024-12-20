/* eslint-disable import/no-anonymous-default-export */
const newsData = [
    {
      imageUrl: "https://www.winzmedia.org/media/app/uploads/news/zakir-hussain-peerless-indian-tabla-player-dies-at-73-562671aa.jpg",
      timeAgo: "5 hour(s) ago",
      hashtags: "#Music, #QureshiAllaRakha, #India",
      source: "Americas 🇺🇸 / The New York Times",
      title: "Zakir Hussain, Peerless Indian Tabla Player, Dies at 73",
      link: "https://www.winzmedia.org/news/zakir-hussain-peerless-indian-tabla-player-dies-at-73"
    },
    {
      imageUrl: "https://www.winzmedia.org/media/app/uploads/news/myanmars-war-has-pushed-doctors-and-nurses-into-prostitution-1f136009.jpg",
      timeAgo: "5 hour(s) ago",
      hashtags: "#MandalayMyanmar, #WomensRights, #Prostitution ",
      source: "Asia 🇲🇲 / The New York Times",
      title: "Myanmar’s War Has Pushed Doctors and Nurses Into Prostitution",
      link: "https://www.winzmedia.org/news/myanmars-war-has-pushed-doctors-and-nurses-into-prostitution"
    },
    {
      imageUrl: "https://www.winzmedia.org/media/app/uploads/news/monday-briefing-0f16813f.jpg",
      timeAgo: "5 hour(s) ago",
      hashtags: "#Americas 🇺🇸 / The New York Times",
      title: "Monday Briefing",
      link: "https://www.winzmedia.org/news/monday-briefing-2"
    },
    {
        imageUrl: "https://www.winzmedia.org/media/app/uploads/news/private-schools-group-apologizes-after-claims-of-antisemitism-at-event-2445c184.jpg",
        timeAgo: "8 hour(s) ago",
        hashtags: "#Anti-DefamationLeague, #Israel-GazaWar2023-, #Apologies",
        source: "Americas 🇺🇸 / The New York Times",
        title: "Private Schools Group Apologizes After Claims of Antisemitism at Event",
        link: "https://www.winzmedia.org/news/private-schools-group-apologizes-after-claims-of-antisemitism-at-event"
      }
  ];


  const cardData= [
    {
        imageUrl:"https://www.winzmedia.org/media/app/uploads/news/young-republicans-gather-ready-to-make-america-vengeful-again-b5f8c816.jpg",
        timeAgo: "2 hour(s) ago",
        hashtags: "#BannonStephenK, #UnitedStatesPoliticsandGovernment, #Right-WingExtremismandAlt-Right",
        source: "Americas 🇺🇸 / The New York Times",
        title: "Young Republicans Gather, Ready to Make America Vengeful Again",
        text: "At a gala on Wall Street for the New York Young Republican Club, attendees were looking forward to retribution from the next Trump era, and musing on another run in 2028.",

      },
      {
        imageUrl:"https://www.winzmedia.org/media/app/uploads/news/black-student-enrollment-at-harvard-law-drops-by-more-than-half-81b0a372.jpg",
        timeAgo: "2 hour(s) ago",
        hashtags: "#HarvardLawSchool, #RaceandEthnicity, #AffirmativeAction",
        source: "Americas 🇺🇸 / The New York Times",
        title: "Black Student Enrollment at Harvard Law Drops by More Than Half",
        text: "After a Supreme Court decision ended race-based admissions, some law schools saw a decline in Black and Hispanic students entering this fall. Harvard appeared to have the steepest drop.",
        
      },
      {
        imageUrl:"https://www.winzmedia.org/media/app/uploads/news/the-ordinary-explanations-behind-the-reported-drone-sightings-d5e2a534.jpg",
        timeAgo: "2 hour(s) ago",
        hashtags: "#AirlinesandAirplanes, #EspionageandIntelligenceServices, #TrumpDonaldJ",
        source: "Americas 🇺🇸 / The New York Times",
        title: "The Ordinary Explanations Behind the Reported Drone Sightings",
        text: "Overnight strikes targeted former army positions, according to the Syrian Observatory for Human Rights, a war monitor. Israel has said it aims to keep military equipment away from extremists.",
        
      },{
        imageUrl:"https://www.winzmedia.org/media/app/uploads/news/trump-remark-at-news-conference-gives-glimpse-into-his-worldview-60b776b7.jpg",
        timeAgo: "2 hour(s) ago",
        hashtags: "#Mar-a-LagoPalmBeachFla, #NewsandNewsMedia, #TrumpDonaldJ",
        source: "Americas 🇺🇸 / The New York Times",
        title: "Trump Remark at News Conference Gives Glimpse Into His Worldview",
        text: "“The first term, everybody was fighting me,” the president-elect said. “In this term, everybody wants to be my friend.”",
        
      },
      {
        imageUrl:"https://www.winzmedia.org/media/app/uploads/news/trump-meets-the-press-3c67ca6c.jpg",
        timeAgo: "2 hour(s) ago",
        hashtags: "#Elections, #PresidentialElectionof2024, #TrumpDonaldJ",
        source: "Americas 🇺🇸 / The New York Times",
        title: "Trump Meets the Press",
        text: "Reflecting on how much has changed, and hasn’t, for Donald Trump since he first became president.",
        
      },
      {
        imageUrl:"https://www.winzmedia.org/media/app/uploads/news/biden-administration-takes-first-step-to-retaliate-against-china-over-h_Zxdp1E6.jpg",
        timeAgo: "2 hour(s) ago",
        hashtags: "#FederalCommunicationsCommission, #CyberwarfareandDefense, #UnitedStatesInternationalRelations",
        source: "Americas 🇺🇸 / The New York Times",
        title: "Biden Administration Takes First Step to Retaliate Against China Over Hack",
        text: "The Commerce Department is banning the few remaining operations of China Telecom in the United States, a move that appears unlikely to deter Beijing from conducting sophisticated cyberoperations.",
        
      },
    
      
  ]
  const cardImage= [
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/gilgo-beach-prosecutor-promises-major-development-in-serial-killing-cas_UCtcUrQ.jpg',
      timeAgo: "7 hour(s) ago /",
      hashtags: "#HeuermannRex1963-, #TierneyRaymondA1965-, #SerialMurders  /",
      source: "Americas 🇺🇸 / The New York Times",
      title:'Gilgo Beach Prosecutor Promises Major Development in Serial Killing Case',

    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/real-estate-leaders-sue-to-stop-new-york-citys-overhaul-of-broker-fees-5afaa837.jpg',
      timeAgo: "7 hour(s) ago /",
      hashtags: "#LawandLegislation, #RealEstateBoardofNewYork, #NewYorkCity /",
      source: "Americas 🇺🇸 / The New York Times",
      title:'Real Estate Leaders Sue to Stop New York City’s Overhaul of Broker Fees',

    },{
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/orrin-h-pilkey-geologist-who-fought-to-save-beaches-dies-at-90-05f0548c.jpg',
      timeAgo: "7 hour(s) ago /",
      hashtags: "#ImmunityfromProsecution, #TrumpDonaldJ, #DecisionsandVerdicts",
      source: "Americas 🇺🇸 / The New York Times",
      title:'Judge Denies Trump’s Bid to Throw Out Conviction Over Immunity Ruling',

    },{
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/judge-denies-trumps-bid-to-throw-out-conviction-over-immunity-ruling-e3e29d7d.jpg',
      timeAgo: "7 hour(s) ago /",
      hashtags: "#TrumpDonaldJ, #UnitedStatesPoliticsandGovernment, #PoliticsandGovernment",
      source: "Americas 🇺🇸 / The New York Times",
      title:'Fact-Checking Trump’s First Post-Election News Conference',

    },
  ];

  const cardnews = [
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/unfettered-gas-exports-would-harm-us-economy-energy-secretary-warns-c09b1366.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#Environment, #GranholmJenniferM, #NaturalGas",
      source: "Americas 🇺🇸 / The New York Times",
       title:'‘Unfettered’ Gas Exports Would Harm U.S. Economy, Energy Secretary Warns'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/gilgo-beach-prosecutor-promises-major-development-in-serial-killing-cas_UCtcUrQ.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#HeuermannRex1963-, #TierneyRaymondA1965-, #SerialMurders",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Gilgo Beach Prosecutor Promises Major Development in Serial Killing Case'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/real-estate-leaders-sue-to-stop-new-york-citys-overhaul-of-broker-fees-5afaa837.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#LawandLegislation, #RealEstateBoardofNewYork, #NewYorkCity",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Real Estate Leaders Sue to Stop New York City’s Overhaul of Broker Fees'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/judge-denies-trumps-bid-to-throw-out-conviction-over-immunity-ruling-e3e29d7d.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#ImmunityfromProsecution, #TrumpDonaldJ, #DecisionsandVerdicts",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Judge Denies Trump’s Bid to Throw Out Conviction Over Immunity Ruling'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/fact-checking-trumps-first-post-election-news-conference-4f7a9170.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#TrumpDonaldJ, #UnitedStatesPoliticsandGovernment, #PoliticsandGovernment",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Fact-Checking Trump’s First Post-Election News Conference'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/young-republicans-gather-ready-to-make-america-vengeful-again-b5f8c816.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#BannonStephenK, #UnitedStatesPoliticsandGovernment, #Right-WingExtremismandAlt-Right",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Young Republicans Gather, Ready to Make America Vengeful Again'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/black-student-enrollment-at-harvard-law-drops-by-more-than-half-81b0a372.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#HarvardLawSchool, #RaceandEthnicity, #AffirmativeAction",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Black Student Enrollment at Harvard Law Drops by More Than Half'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/the-ordinary-explanations-behind-the-reported-drone-sightings-d5e2a534.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#AirlinesandAirplanes, #EspionageandIntelligenceServices, #TrumpDonaldJ",
      source: "Americas 🇺🇸 / The New York Times",
       title:'The Ordinary Explanations Behind the Reported Drone Sightings'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/trump-remark-at-news-conference-gives-glimpse-into-his-worldview-60b776b7.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#Mar-a-LagoPalmBeachFla, #NewsandNewsMedia, #TrumpDonaldJ",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Trump Remark at News Conference Gives Glimpse Into His Worldview'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/trump-meets-the-press-3c67ca6c.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#Elections, #PresidentialElectionof2024, #TrumpDonaldJ",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Trump Meets the Press'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/biden-administration-takes-first-step-to-retaliate-against-china-over-h_Zxdp1E6.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "#FederalCommunicationsCommission, #CyberwarfareandDefense, #UnitedStatesInternationalRelations",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Biden Administration Takes First Step to Retaliate Against China Over Hack'
    },
    {
      imageUrl:'https://www.winzmedia.org/media/app/uploads/news/tuesday-briefing-syrias-new-leader-calls-for-lifting-sanctions-503bc6b4.jpg',
      timeAgo: "9 hour(s) ago /",
      hashtags: "",
      source: "Americas 🇺🇸 / The New York Times",
       title:'Tuesday Briefing: Syria’s New Leader Calls for Lifting Sanctions'
    },
  ];

 const Authors = [
  {
    textrounded:'B.C.',
    maintext: "Brian X. Chen",
    hashtags:['#WearableComputing', '#OuraHealthOy', '#MotorolaMobilityLLC'],
  },
  {
    textrounded:'V.F.',
    maintext: "Vanessa Friedman",
    hashtags:['#AxiomSpaceInc', '#PradaSpA', '#BertelliLorenzo'],
  }, 
  {
    textrounded:'D.G.',
    maintext: "Dana Goldstein",
    hashtags:['#CharterSchools', '#AmericanFederationofTeachers', '#NationalEducationAssn'],
  }, {
    textrounded:'K.R.',
    maintext: "Kaleigh Rogers",
    hashtags:['#FiveThirtyEightcom', '#Miami-DadeCountyFla', '#PassaicCountyNJ'],
  }, {
    textrounded:'A.W.',
    maintext: "Brian X. Chen",
    hashtags:['#NakayamaMiho1970-2024', '#PaleyAndy1951-2024', '#BeachBoys'],
  }, {
    textrounded:'B.P.',
    maintext: "Brad Plumer",
    hashtags:['#ShahJigar', '#EnergyDepartment', '#BakuAzerbaijan'],
  }, {
    textrounded:'A.N.',
    maintext: "Amelia Nierenberg",
    hashtags:['#AmericanAirlines', '#UnitedAirlines', '#OxfordEngland'],
  }, {
    textrounded:'S.S.',
    maintext: "Shannon Sims",
    hashtags:['#AmericanRedCross', '#FederalEmergency', '#GoBag'],
  }, {
    textrounded:'S.O.',
    maintext: "Sharon Otterman",
    hashtags:['#InternationalStudyandTeaching', '#AmericaFirstPolicyInstitute', '#Zionism'],
  }, {
    textrounded:'R.L.',
    maintext: "Ron Lieber",
    hashtags:['#AmericansAbroad', '#ExpenseAccounts', '#ConcurTechnologiesInc'],
  }, {
    textrounded:'S.M.',
    maintext: "Sapna Maheshwari",
    hashtags:['#AppealsCourtsUS', '#VoiceandSpeech', '#ScreenTimeDevice'],
  }, 
  {
    textrounded:'A.S.',
    maintext: "Ana Swanson",
    hashtags:['#OfficeoftheUnitedStates', '#EmbargoesandSanctions', '#HuaweiTechnologiesCoLtd'],
  },
 ]
  
  export  { newsData, cardData, cardImage, cardnews, Authors};
