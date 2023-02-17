import Products from "./Products";
import AddProduct from "./AddProduct";
import "./CSS/App.scss";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { useState } from "react";
import GlobalMessage from "./components/GlobalMessage";

function App() {
  const [globalMessage, setGlobalMessage] = useState(null);

  const removeGlobalMessage = () => {
    setGlobalMessage(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            index
            element={<Products setGlobalMessage={setGlobalMessage} />}
          />
          <Route
            path="/addproduct"
            element={<AddProduct setGlobalMessage={setGlobalMessage} />}
          />
        </Switch>
      </BrowserRouter>

      <GlobalMessage
        message={globalMessage && globalMessage.message}
        status={globalMessage && globalMessage.status}
        removeGlobalMessage={removeGlobalMessage}
      />
    </div>
  );
}

export default App;
