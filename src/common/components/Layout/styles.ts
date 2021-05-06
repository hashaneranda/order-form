import styled from 'styled-components';

import Fab from '@material-ui/core/Fab';

export const RootConatiner = styled.div`
  position: relative;
`;

export const FabContainer = styled(Fab)`
  position: absolute;
  top: 2%;
  right: 2%;
`;

export const LoadingConatiner = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
`;
