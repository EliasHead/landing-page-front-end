import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  ${() => css`
    background: ${theme.colors.mediumGray};
  `};
`;
