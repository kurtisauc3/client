import HighlightButton from 'core/components/HighlightButton';
import styled from 'styled-components';

export const RequestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const PictureContainer = styled.div`
  height: 80px;
  width: 80px;
`;
export const Name = styled.div`
  flex-grow: 1;
`;
export const ActionButton = styled(HighlightButton)`
  padding: 4px 8px;
  margin: 0 4px;
`;
