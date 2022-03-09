import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

//Components
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import KontaktFormular from "./components/KontaktFormular/KontaktFormular";
import BestellUebersicht from "./components/BestellUebersicht/BestellUebersicht";

function App() {
  const [produktList, setProduktList] = useState([]);
  const [warenkorb, setWarenkorb] = useState([]);
  const [kontakt, setKontakt] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getOrder = async () => {
      await axios
        .get(`http://localhost:5000/produkte`)
        .then((res) => {
          setProduktList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOrder();
  }, []);

  const handleOnClickWarenkorb = (produktID, belagListe, totalPreis) => {
    const findProdukt = produktList.filter(
      (produkt) => produkt._id === produktID
    );
    const artikel = {
      produkt: findProdukt[0],
      extras: belagListe,
      total: totalPreis,
    };
    setWarenkorb([...warenkorb, artikel]);
  };

  const handleAddKontakt = (kontaktDaten) => {
    setKontakt(kontaktDaten);
  };

  const updateTotalPreis = (totalPreis) => {
    setTotal(totalPreis);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                produktList={produktList}
                warenkorb={warenkorb}
                total={total}
                handleOnClickWarenkorb={handleOnClickWarenkorb}
                updateTotalPreis={updateTotalPreis}
              />
            }
          />
          <Route
            path="/kontakt"
            element={<KontaktFormular handleAddKontakt={handleAddKontakt} />}
          />
          <Route
            path="/uebersicht"
            element={
              <BestellUebersicht
                warenkorb={warenkorb}
                kontakt={kontakt}
                total={total}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
