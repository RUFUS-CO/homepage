import { render } from '@testing-library/react';

import SomeList from './some-list';

describe('SomeList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomeList />);
    expect(baseElement).toBeTruthy();
  });
});
