import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import ProduktList from "../ProduktList/ProduktList";
import Warenkorb from "../Warenkorb/Warenkorb";

export default function Content() {
  const [produktList, setProduktList] = useState([]);
  const [warenkorb, setWarenkorb] = useState([]);

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

  useEffect(() => {
    console.log(warenkorb);
  }, [warenkorb]);

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

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={8}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 30 }}
              color="text.secondary"
              gutterBottom
            >
              Speisekarte
            </Typography>
            <ProduktList
              produktList={produktList}
              handleOnClickWarenkorb={handleOnClickWarenkorb}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Warenkorb warenkorb={warenkorb} />
      </Grid>
    </Grid>
  );
}
