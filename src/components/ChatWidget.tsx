import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Bonjour ! Je suis votre assistant temporel. Comment puis-je vous aider à planifier votre voyage ?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Merci pour votre message ! Un conseiller temporel vous répondra sous peu. En attendant, n\'hésitez pas à explorer nos destinations.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] z-50 flex flex-col backdrop-blur-2xl bg-gray-900/95 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Assistant Temporel</h3>
                  <p className="text-gray-900 text-xs">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900'
                        : 'backdrop-blur-xl bg-white/10 border border-white/20 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
                >
                  <Send className="w-5 h-5 text-gray-900" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-amber-500/50 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-gray-900" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-gray-900" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
