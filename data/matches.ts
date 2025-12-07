export type Match = {
  id: string;
  team: string;
  opponent: string;
  home: boolean;
  competition: string;
  date: string;
  kickoff: string;
  venue: string;
  result?: string;
  /** Preformatted date string using Europe/Berlin to avoid timezone drift. */
  dateLabel: string;
};

const berlinDateFormatter = new Intl.DateTimeFormat('de-DE', {
  timeZone: 'Europe/Berlin'
});

const formatMatchDate = (isoDate: string) => berlinDateFormatter.format(new Date(isoDate));

export const matches: Match[] = [
  {
    id: 'm1',
    team: 'Herren I',
    opponent: 'SV Genc Osman',
    home: true,
    competition: 'Niederrheinliga',
    date: '2024-07-20',
    dateLabel: formatMatchDate('2024-07-20'),
    kickoff: '15:00',
    venue: 'Sportpark Driesenbusch',
    result: '3:1'
  },
  {
    id: 'm2',
    team: 'Herren I',
    opponent: 'VfB Bottrop',
    home: false,
    competition: 'Niederrheinliga',
    date: '2024-07-27',
    dateLabel: formatMatchDate('2024-07-27'),
    kickoff: '18:30',
    venue: 'Dietzbach Arena'
  },
  {
    id: 'm3',
    team: 'U19',
    opponent: 'Hamborn 07',
    home: true,
    competition: 'Landesliga',
    date: '2024-07-21',
    dateLabel: formatMatchDate('2024-07-21'),
    kickoff: '11:00',
    venue: 'Kunstrasen Platz 2',
    result: '2:0'
  }
];
