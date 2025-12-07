export type Sponsor = {
  id: string;
  name: string;
  tier: 'Premium' | 'Partner' | 'Supporter';
  description: string;
  url: string;
};

export const sponsors: Sponsor[] = [
  {
    id: 's1',
    name: 'Stahlwerk Ruhr',
    tier: 'Premium',
    description: 'Trikotsponsor Herren I, Ausbildungspartner für die Jugend.',
    url: 'https://example.com/stahlwerk'
  },
  {
    id: 's2',
    name: 'Niederrhein Energie',
    tier: 'Partner',
    description: 'CO₂-neutraler Strom, unterstützt Nachhaltigkeitsprojekte.',
    url: 'https://example.com/niederrhein'
  },
  {
    id: 's3',
    name: 'Physio Walsum',
    tier: 'Supporter',
    description: 'Regeneration, Reha und Leistungsdiagnostik für alle Teams.',
    url: 'https://example.com/physio'
  }
];
