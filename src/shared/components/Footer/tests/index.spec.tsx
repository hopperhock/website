import 'jest-styled-components';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Footer from '../index';

describe('<Footer />', () => {
  afterEach(cleanup);
  describe('snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Footer />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      const { queryByText } = render(<Footer />);

      expect(queryByText('Footer Component! :D')).toBeTruthy();
    });
  });

  it('should have unit tests specified', () => {
    expect(true).toEqual(false);
  });
});