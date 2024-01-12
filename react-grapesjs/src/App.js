import React, {useState, useEffect} from "react";
import grapesjs from "grapesjs";

function App() {
  const [editor, seteditor] = useState(null);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
