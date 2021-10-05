import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
          height="100vh"
          projectID="090ec70b-b303-40a6-835b-8ed4f6ee5b76"
          userName="SushantSharma"
          userSecret="sharmasu"
          renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
        
    );
    
}

export default App;