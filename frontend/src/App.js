import React from 'react';

import Chat from './components/Chat';

function App() {
  return (
    <div className="App" style={{"padding": "1.5rem"}}>
      <header className="App-header">
        <h1>Customer Support Chatbot with Memory - Twitter</h1>
      </header>
      <main>
        <Chat />
      </main>
    </div>
  );
}

export default App;
