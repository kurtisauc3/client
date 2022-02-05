import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Border from './Border';
import Colors from './Colors';
import Overlay from './Overlay';

export type TNotificationProps = React.HTMLAttributes<HTMLDivElement> & {
  titleCode?: string;
  onOutsideClick?: () => void;
};

const NotificationContainer = styled(Border)`
  min-width: 300px;
  position: relative;
`;

const Title = styled.div`
  font-size: 26px;
  color: ${Colors.WHITE};
  text-align: center;
  margin: 10px 0;
`;
const Content = styled.div`
  color: ${Colors.TAN};
  text-align: center;
  margin: 10px 0;
`;

const Component: FC<TNotificationProps> = (props) => {
  const { titleCode, onOutsideClick, children, ...rest } = props;
  return (
    <Overlay onClick={onOutsideClick}>
      <NotificationContainer {...rest}>
        {titleCode !== undefined && (
          <Title>
            <FormattedMessage id={titleCode}></FormattedMessage>
          </Title>
        )}
        <Content>{children}</Content>
      </NotificationContainer>
    </Overlay>
  );
};

export default Component;
