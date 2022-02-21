import { FC } from 'react';

import classNames from 'classnames';

import styles from './Chat.module.css';

export interface ChatProps {
  className?: string;
}

const Chat: FC<ChatProps> = ({ className }) => {
  return <div className={classNames(className, styles.chat)}>I'm a chat!</div>;
};

export default Chat;
