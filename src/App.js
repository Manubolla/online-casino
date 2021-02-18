import React from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [login, setLogin] = React.useState(false);
  const [balance, setBalance] = React.useState(0);
  const [data, setData] = React.useState({
    columns: [
      { field: "id", headerName: "ID", width: 130 },
      { field: "slots", headerName: "slots", width: 130 },
      { field: "time", headerName: "time", width: 130 },
    ],
    rows: [],
  });

  React.useEffect(() => {
    const user = window.localStorage.getItem("user");
    const localBalance = parseInt(window.localStorage.getItem("balance"));
    const localData = JSON.parse(window.localStorage.getItem("data"));
    if (user) {
      setLogin(true);
    }
    if (localBalance) {
      setBalance(localBalance);
    } else {
      window.localStorage.setItem("balance", JSON.stringify(100));
      setBalance(100);
    }
    if (localData) {
      setData(localData);
    }
  }, []);
  return (
    <div className="app">
      <Header
        login={login}
        balance={balance}
        setLogin={setLogin}
        setBalance={setBalance}
      />
      <StartGame
        balance={balance}
        setBalance={setBalance}
        data={data}
        setData={setData}
      />
      <Footer />
    </div>
  );
}

export default App;
