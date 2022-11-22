import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Content, ConversationChat, SendArea, ChatBallon } from "./styles";

interface TemperatureProps {
  weatherData: any;
  socket: any;
}

interface IChatHistoric {
  message: string;
  userName: string | null;
  date: string;
}

export const Chat: React.FC<TemperatureProps> = ({ weatherData, socket }) => {
  const [message, setMessage] = useState("");

  const [chatHistoric, setChatHistoric] = useState<IChatHistoric[]>([]);

  const userName = window.localStorage.getItem("userName");

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message) {
      const generateDate = new Date();

      const temporaryObject = {
        message,
        userName,
        date: generateDate.toLocaleTimeString(),
      };

      setChatHistoric([temporaryObject, ...chatHistoric]);

      socket.emit("sendMessage", temporaryObject);

      setMessage("");
    }
  };

  socket.on("receivedMessage", (returnedMessages: any) => {
    setChatHistoric([returnedMessages, ...chatHistoric]);
  });

  return (
    <Content>
      <ConversationChat>
        <strong>
          {chatHistoric.map(({ message, userName, date }) => (
            <ChatBallon>
              <strong>{userName} :</strong>
              <p>{message}</p>
              <p>{date}</p>
            </ChatBallon>
          ))}
        </strong>
      </ConversationChat>
      <SendArea onSubmit={handleSendMessage}>
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Enviar Mensagem"
        />
        <button type="button" onClick={handleSendMessage}>
          <PaperPlaneRight />
        </button>
      </SendArea>
    </Content>
  );
};
