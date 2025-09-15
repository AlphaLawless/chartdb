import type { Diagram } from '@/lib/domain/diagram';
import { adonisAclDb } from './templates/adonis-acl-db';
import { airbnbDb } from './templates/airbnb-db';
import { akauntingDb } from './templates/akaunting-db';
import { attendizeDb } from './templates/attendize-db';
import { bookstackDb } from './templates/bookstack-db';
import { bouncerDb } from './templates/bouncer-db';
import { buddypressDb } from './templates/buddypress-db';
import { cabotDb } from './templates/cabot-db';
import { cachetDb } from './templates/cachet-db';
import { canvasDb } from './templates/canvas-db';
import { comfortableMexicanSofaDb } from './templates/comfortable-mexican-sofa-db';
import { deployerDb } from './templates/deployer-db';
import { deviseDb } from './templates/devise-db';
import { djangoAxesDb } from './templates/django-axes-db';
import { djangoDb } from './templates/django-db';
import { doorkeeperDb } from './templates/doorkeeper-db';
import { employeeDb } from './templates/employee-db';
import { feedbinDb } from './templates/feedbin-db';
import { flarumDb } from './templates/flarum-db';
import { flipperDb } from './templates/flipper-db';
import { freescoutDb } from './templates/freescout-db';
import { gravityDb } from './templates/gravity-db';
import { hackerNewsDb } from './templates/hacker-news-db';
import { koelDb } from './templates/koel-db';
import { laravelActivitylogDb } from './templates/laravel-activitylog-db';
import { laravelDb } from './templates/laravel-db';
import { laravelPermissionDb } from './templates/laravel-permission-db';
import { laravelSparkDb } from './templates/laravel-spark-db';
import { lobstersDb } from './templates/lobsters-db';
import { monicaDb } from './templates/monica-db';
import { octoboxDb } from './templates/octobox-db';
import { orchidDb } from './templates/orchid-db';
import { payRailsDb } from './templates/pay-rails-db';
import { pixelfedDb } from './templates/pixelfed-db';
import { pokemonDb } from './templates/pokemon-db';
import { polrDb } from './templates/polr-db';
import { refinerycmsDb } from './templates/refinerycms-db';
import { reversionDb } from './templates/reversion-db';
import { saasPegasusDb } from './templates/saas-pegasus-db';
import { screeenlyDb } from './templates/screeenly-db';
import { snipeItDb } from './templates/snipe-it-db';
import { staytusDb } from './templates/staytus-db';
import { syliusDb } from './templates/sylius-db';
import { taggitDb } from './templates/taggit-db';
import { talkDb } from './templates/talk-db';
import { ticketitDb } from './templates/ticketit-db';
import { twitterDb } from './templates/twitter-db';
import { visualNovelDb } from './templates/visual-novel-db';
import { voyagerDb } from './templates/voyager-db';
import { wordpressDb } from './templates/wordpress-db';
export interface Template {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  imageDark: string;
  diagram: Diagram;
  tags: string[];
  featured: boolean;
  url?: string;
}

export const templates: Template[] = [
  employeeDb,
  pokemonDb,
  airbnbDb,
  wordpressDb,
  djangoDb,
  laravelDb,
  twitterDb,
  visualNovelDb,
  adonisAclDb,
  akauntingDb,
  laravelSparkDb,
  voyagerDb,
  koelDb,
  laravelPermissionDb,
  gravityDb,
  ticketitDb,
  lobstersDb,
  refinerycmsDb,
  buddypressDb,
  snipeItDb,
  comfortableMexicanSofaDb,
  syliusDb,
  monicaDb,
  attendizeDb,
  saasPegasusDb,
  bookstackDb,
  bouncerDb,
  cabotDb,
  feedbinDb,
  freescoutDb,
  hackerNewsDb,
  flarumDb,
  canvasDb,
  taggitDb,
  doorkeeperDb,
  orchidDb,
  flipperDb,
  cachetDb,
  reversionDb,
  screeenlyDb,
  staytusDb,
  deployerDb,
  deviseDb,
  talkDb,
  octoboxDb,
  payRailsDb,
  laravelActivitylogDb,
  pixelfedDb,
  polrDb,
  djangoAxesDb,
];
