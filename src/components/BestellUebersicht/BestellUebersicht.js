import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function BestellUebersicht({ warenkorb, kontakt, total }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {warenkorb.map((artikel) => {
                  return (
                    <div key={uuid()}>
                      <ul key={uuid()}>
                        <div>{artikel.produkt.Name}</div>
                        <ul key={uuid()}>
                          {artikel.extras.map((belag) => {
                            return <div>+ {belag}</div>;
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
                    <div>
                      {kontakt.vorname} {kontakt.nachname}
                    </div>
                    <div>
                      {kontakt.strasse} {kontakt.hausnummer} {kontakt.zusatz}
                    </div>
                    <div>
                      {kontakt.plz} {kontakt.stadt}
                    </div>
                    <div>{kontakt.firma}</div>
                    <div>{kontakt.telefonnummer}</div>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>Total: {total}</div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
