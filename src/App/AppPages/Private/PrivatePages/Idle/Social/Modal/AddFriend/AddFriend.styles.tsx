import Colors from 'core/components/Colors';
import styled from 'styled-components';

export const Container = styled.div``;
export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
`;
export const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  input {
    width: 320px;
    padding-left: 36px !important;
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.8);
    border: 2px solid ${Colors.TAN};
  }
  svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
  input,
  button {
    background-image: linear-gradient(to top, ${Colors.WHITE + '11'}, ${Colors.WHITE + '00'});
    padding: 5px 10px;
  }
  button:hover {
    background-image: linear-gradient(to top, ${Colors.WHITE + '33'}, ${Colors.WHITE + '00'});
  }
`;
