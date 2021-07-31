import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Navlinks } from '.';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<Navlink />', () => {
  it('should render links', () => {
    renderTheme(<Navlinks links={mock}>Children</Navlinks>);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<Navlinks links={mock}>Children</Navlinks>);
    expect(screen.queryAllByAltText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<Navlinks links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Navlinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
