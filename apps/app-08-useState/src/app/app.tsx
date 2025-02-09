import { useState } from 'react';

export default function App() {
  const [unreadMessages, setUnreadMessages] = useState<string[]>([]);
  return (
    <>
      {unreadMessages.length > 0 ? (
        <h1>You have {unreadMessages.length} unread messages</h1>
      ) : (
        <h1>You have no unread messages</h1>
      )}
      <button
        onMouseDown={() =>
          setUnreadMessages((prevMessages) => [...prevMessages, 'a'])
        }
      >
        Add message
      </button>
      <button
        onMouseDown={() =>
          setUnreadMessages((prevMessages) => {
            const newMessage = [...prevMessages];
            newMessage.pop();
            return newMessage;
          })
        }
      >
        Remove message
      </button>
    </>
  );
}
