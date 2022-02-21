import { FC, useState } from 'react';

import classNames from 'classnames';

import styles from './App.module.css';
import Chat from './Chat';

export interface AppProps {
  className?: string;
}

interface ChatItem {
  id: number;
}

const App: FC<AppProps> = ({ className }) => {
  let [chats, setChats] = useState<ChatItem[]>([{ id: 1 }]);

  let handleCreate = () => {
    // Create a new chat
  };

  return (
    <div className={classNames(className, styles.app)}>
      <button onClick={handleCreate}>New Chat</button>
      <div className={styles.chats}>
        {chats.map((c) => (
          <Chat key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
