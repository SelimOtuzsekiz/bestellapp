import React from "react";
import axios from "axios";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function BestellUebersicht({
  warenkorb,
  kontakt,
  total,
  getPrice,
  resetWarenkorb,
}) {
  const navigate = useNavigate();

  const getProductList = (products) => {
    return products.map((product) => {
      const name = product.produkt.Name;
      const extrasString = product.extras.toString();
      return { Name: name, Belag: extrasString, Preis: product.total };
    });
  };

  const handleSubmit = (event) => {
    const sendOrder = async () => {
      await axios
        .post(`http://localhost:5000/bestellungen`, {
          Produkte: getProductList(warenkorb),
          Preis: total,
          KontaktDaten: kontakt,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    sendOrder();
    resetWarenkorb();
    navigate("/");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4">Bestellübersicht:</Typography>
              </Grid>
              <Grid item xs={6}>
                {warenkorb.map((artikel) => {
                  return (
                    <div key={uuid()}>
                      <ul key={uuid()}>
                        <div key={uuid()}>{artikel.produkt.Name}</div>
                        <ul key={uuid()}>
                          {artikel.extras.map((belag) => {
                            return <div key={uuid()}>+ {belag}</div>;
                          })}
                        </ul>
                      </ul>
                    </div>
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                <div>
                  <ul>
                    <div key={uuid()}>
                      <Typography variant="h6">Kontaktdaten:</Typography>
                    </div>
                    <div key={uuid()}>
                      {kontakt.Vorname} {kontakt.Nachname}
                    </div>
                    <div key={uuid()}>
                      {kontakt.Strasse} {kontakt.Hausnummer} {kontakt.Zusatz}
                    </div>
                    <div key={uuid()}>
                      {kontakt.PLZ} {kontakt.Stadt}
                    </div>
                    <div key={uuid()}>{kontakt.Firma}</div>
                    <div key={uuid()}>{kontakt.Telefonnummer}</div>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>Total: {getPrice(total)}</div>
              </Grid>
              <Grid item xs={12}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Bestellung abschließen
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
