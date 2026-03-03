import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Quiz from './components/Quiz';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Destinations />
      <Quiz />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
