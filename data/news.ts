export type NewsItem = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
};

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Testspiel-Sieg gegen Hamborn',
    category: 'Herren',
    excerpt: 'Ein dominanter Auftritt, frühes Pressing und ein später Doppelschlag sichern den 3:1-Erfolg.',
    author: 'Redaktion',
    date: '2024-07-12'
  },
  {
    id: '2',
    title: 'U19 startet mit Heimdreier in die Saison',
    category: 'Junioren',
    excerpt: 'Dichte Defensive, schnelles Umschalten und ein starker Auftritt von Keeper Luca sichern die Punkte.',
    author: 'Jugendleitung',
    date: '2024-07-08'
  },
  {
    id: '3',
    title: 'Neues Trikot vorgestellt: Rot, mutig, nachhaltig',
    category: 'Verein',
    excerpt: 'Recycelte Materialien, klarer Look und starke Sponsoren-Platzierung – ab sofort im Fanshop.',
    author: 'Marketing',
    date: '2024-07-05'
  }
];
