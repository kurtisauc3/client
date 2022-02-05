import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100px;
  height: 100px;
  img {
    object-fit: contain;
    min-width: 100%;
    max-width: 100%;
  }
`;
