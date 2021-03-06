/* Index/Home page styles
========================================================================== */

import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  p {
    font-size: 2.1rem;
  }
  p:first-of-type {
    color: var(--grey-300);
    span {
      color: var(--white);
    }
  }
  p:last-of-type {
    color: var(--white);
    span {
      color: var(--red);
    }
  }
`;
