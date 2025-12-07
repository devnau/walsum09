import { render } from '@testing-library/react';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Matches } from '@/app/components/Matches';
import { matches } from '@/data/matches';

describe('matches data', () => {
  it('preformats dates using Europe/Berlin', () => {
    expect(matches.map((match) => match.dateLabel)).toEqual([
      '20.7.2024',
      '27.7.2024',
      '21.7.2024'
    ]);
  });
});

describe('Matches component', () => {
  it('renders stable date strings on both server and client', () => {
    const serverRendered = ReactDOMServer.renderToStaticMarkup(<Matches />);

    matches.forEach((match) => {
      expect(serverRendered).toContain(match.dateLabel);
    });

    const { getByText } = render(<Matches />);

    matches.forEach((match) => {
      expect(getByText(match.dateLabel)).toBeInTheDocument();
    });
  });
});
