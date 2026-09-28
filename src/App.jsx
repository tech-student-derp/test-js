import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  function help() {
    const listcommands = [
      "help - shows this command",
      "cls - clears terminal"
    ];

    setHistory([...history, ...listcommands]);
  }

  const commands = {
    cls: () => setHistory([]),
    help: () => help()
  };

  function exeCom(command)
  {
    if (commands[command])
    {
      commands[command]();
      return;
    }
    
    setHistory([...history, input]);
  }

  function handleKeyDown(event) 
  {
    if (event.key === "Enter")
    {
      exeCom(input);
      setInput("");
    }
  }

  return (
    <>
      <main onClick={() => document.querySelector(".terminal-input").focus()}>
        <input 
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          className='terminal-input'
        />

        {history.map((command, index) => (
          <h1 
            key={index}
          >
            &gt; {command}
          </h1>
        ))}

        <h1>
          &gt; {input}<span className='cursor'>_</span>
        </h1>
      </main>
    </>
  )
}

export default App
