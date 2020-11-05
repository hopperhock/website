import 'jest-styled-components';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import CoreValues from '../index';

describe('<CoreValues />', () => {
  afterEach(cleanup);
  describe('snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<CoreValues />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});