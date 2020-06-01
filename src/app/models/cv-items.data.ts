import { CvItem } from './cv-item';

// tslint:enable:max-line-length
// todo: experiences
export const CVITEMS: CvItem[] = [
  {
    title: 'ON-X Groupe',
    subtitle: 'Développeur Web ',
    begin: '02-09-2019',
    end: '',
    description: 'Lead Développeur sur les technologies PHP et front développeur sur la technologie Angular, ' +
      'je me suis essentiellement chargé du développement de plusieurs API, de la réalisation de projets from scratch de même  ' +
      'que la réalisation d\'audit de code pour en vérifier la conformité sur les aspects best-pratices et sécurité.',
    tags: ['PHP', 'Symfony 4.3', 'Angular', 'Docker', 'MySQL', 'Git', 'Apache HTTPD', 'JavaScript', 'IntelliJ', 'Scrum'],
    link: 'https://www.on-x.com/',
    thumbnail: 'onx.png',
  },
  {
    title: 'FEV',
    subtitle: 'Administrateur base de données',
    begin: '02-2019',
    end: '06-2019',
    description: 'Contribution au développement du projet FlexLab ayant pour but de piloter à distance les bancs moteurs' +
      ' présents sur sites clients. Réalisation de l\'analyse et de la modélisation de la Base de données sous SQL server',
    tags: ['SQL Server', 'JIRA', 'Visual Studio'],
    link: 'https://www.fev.com/en/france.html',
    thumbnail: 'fev.gif',
  },
  {
    title: 'Galitt',
    subtitle: 'Développeur PHP / Bash',
    begin: '07-2018',
    end: '01-2019',
    description: 'Chargé de l\'Amélioration / Evolution du BackOffice « Carburant » mes tâches se sont résumées à de la correction ' +
      'et au développement des évolutions sur la Back office Carburant propre à 5 cinq clients dont ERI (EdenRed Italie),' +
      'ERFC (EdenRed Fuel Card), Onecard (Intermarché Portugal), UTA (Union Tank) ' +
      'et Phenix (Gestionnaire carte Intermarché France),avec certaines particularités par client.',
    tags: ['PHP', 'Bash', 'MySQL', 'Git', 'Apache HTTPD', 'JavaScript', 'JIRA', 'IntelliJ', 'Scrum'],
    link: 'https://www.galitt.fr/',
    thumbnail: 'galitt.png',
  },
  {
    title: 'Teksial',
    subtitle: 'Développeur Wordpress & Symfony ',
    begin: '03-2018',
    end: '07-2018',
    description: 'Intégration de nouvelles fonctionnalités sur http://monexpert-renovation-energie.fr/ et développement ' +
      'du site https://teksial-consulting.com/ pour les activités commerciales de l\'entreprise',
    tags: ['PHP', 'Symfony 3.4', 'Wordpress', 'Mandrill', 'MySQL', 'Git', 'Apache HTTPD', 'JavaScript', 'IntelliJ', 'Scrum', 'Slack'],
    link: 'https://teksial.com/',
    thumbnail: 'teksial.svg',
  },
  {
    title: 'Alterway',
    subtitle: 'Développeur Drupal 7 / 8',
    begin: '11-2017',
    end: '02-2018',
    description: 'Conception et développement de la plateforme de présentation du service Econocom ' +
      'en charge de la gestion et de la maintenance d\'infrastructures et refonte du multisite Apprendre/Enseigner ' +
      'de TV5 Monde',
    tags: ['Drupal 7/8', 'MySQL', 'Docker', 'Git', 'Apache HTTPD', 'IntelliJ', 'Scrum', 'Slack', 'Pantheon', 'Mailjet', 'Kalatheme'],
    link: 'https://www.alterway.fr/',
    thumbnail: 'alterway.png',
  },
  {
    title: 'Teksial',
    subtitle: 'Développeur Drupal 7/8 & Symfony 3',
    begin: '11-2016',
    end: '10-2017',
    description: 'Développement de la plateforme http://monexpert-renovation-energie.fr/ de gestion des travaux d\'économies d\'énergie.' +
      'du site https://teksial-consulting.com/ pour les activités commerciales de l\'entreprise',
    tags: ['PHP', 'Symfony 3.4', 'Mandrill', 'MySQL', 'Git', 'Apache HTTPD', 'JavaScript', 'IntelliJ', 'Scrum', 'Slack'],
    link: 'https://teksial.com/',
    thumbnail: 'teksial.svg',
  },
];

export const CERTIFICATES: CvItem[] = [
  {
    title: 'ITIL v4 Foundation',
    subtitle: 'Axelos Global Best Practice',
    begin: '',
    end: '03-2020',
    description: '',
    thumbnail: 'itil4.png',
    attachment: 'e-Cert.pdf',
  },
  {
    title: 'Certification Webmaster Drupal 7',
    subtitle: 'TrainedPeople',
    begin: '',
    end: '12-2017',
    description: '',
    thumbnail: 'trainedpeople.png',
    attachment: '',
  },
  {
    title: 'Git version control basics',
    subtitle: '',
    begin: '',
    end: '10-2017',
    description: '',
    thumbnail: 'Git-Logo-2Color.png',
    attachment: '',
  },
];

export const EDUCATION: CvItem[] = [
  {
    title: 'Angular 8',
    subtitle: 'Front developpement',
    begin: '',
    end: '10-2019',
    description: 'Formation de prise en main et approfondissement de Angular 8',
    tags: ['Développement', 'Front'],
    link: 'https://www.sqli-institut.com/',
    thumbnail: 'sqli.png',
  },
  {
    title: 'Expert en Informatique et Systemes d\'Information ',
    subtitle: 'Master of Science | Computer Science',
    begin: '11-2015',
    end: '11-2017',
    description: '',
    tags: ['Développement', 'Administration systèmes & réseaux', 'Big Data'],
    link: 'https://www.supinfo.com',
    thumbnail: 'SupInfoLogo.png',
  },
  {
    title: 'Génie Télécoms et TICs',
    subtitle: 'Bachelor of Science | Computer Science',
    begin: '10-2014',
    end: '10-2015',
    description: '',
    tags: [],
    link: 'http://suptelecomsbj.com/',
    thumbnail: 'SupTelecomBj.png',
  },
  {
    title: 'Classes Préparatoires',
    subtitle: 'CLasses préparatoires | Computer Science',
    begin: '10-2012',
    end: '09-2014',
    description: '',
    tags: [],
    link: 'http://suptelecomsbj.com/',
    thumbnail: 'SupTelecomBj.png',
  },
  {
    title: 'Secteur Industriel 1',
    subtitle: 'Computer Science',
    begin: '01-2012',
    end: '09-2012',
    description: '',
    tags: [],
    link: 'https://epac.uac.bj/',
    thumbnail: 'epac.png',
  },
];

export const LANGUAGES = [
  // RATE YOURSELF  =>  100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
  { title: 'Français', level: '100' },
  { title: 'English', level: '80' },
];

export const CONTACT = [
  {
  city: 'Yvelines, France',
  phone: '',
  mail: 'jalidjinou@gmail.com',
  skype: '', // just the account name
  linkedin: 'https://fr.linkedin.com/in/jared-alidjinou-b5b7326b', // full url
  github: 'https://github.com/Redx36', // full url
  twitter: '', // full url
  facebook: '', // full url
  instagram: '', // full url
  other: [
    // { title: 'GitHub Page', icon: 'icon-github', link: 'https://Redx36.github.io' },
  ],
}
];

export const INTERESTS = [
  {
    title: 'Paintball / Airsoft',
    icon: 'my_location',
  },
  {
    title: 'Basket-ball',
    icon: 'sports_basketball',
  },
  {
    title: 'Natation',
    icon: 'pool',
  },
  {
    title: 'Jeux d\' échecs',
    icon: 'deck',
  },
  {
    title: 'Instrument/Battérie',
    icon: 'queue_music',
  },
  {
    title: 'Photography',
    icon: 'camera_alt',
  },
];
