import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMEssage";
const ChatFeed = (props) => {
        const { chats, activeChat, userName, messages } = props;

        const chat = chats && chats[activeChat];
        
        const renderMessages = () => {
            const keys = Object.keys(messages);

            return keys.map(key,index) => {
                const message = messages[key];
                const lastMessageKey = index === 0 ? null : keys[index-1];
                const isMyMessage = userName  message.sender.username;

                return (
                    <div key={`msg`}>

                    </div>
                );

            }
        }
    return(
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed;