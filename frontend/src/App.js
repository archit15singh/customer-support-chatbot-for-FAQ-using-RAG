import React from 'react';

import Chat from './components/Chat';

function App() {
  return (
    <div className="App" style={{"padding": "1.5rem"}}>
      <header className="App-header">
        <h1>Multilingual Chatbot with RAG for FAQs using Mistral-7B and SeamlessM4T</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
}

export default App;
