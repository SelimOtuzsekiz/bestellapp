import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function Warenkorb({ warenkorb }) {
  const calculatePreis = () => {
    let calculated = 0;
    const arr = warenkorb.map((artikel) => {
      return artikel.total;
    });
    arr.forEach((element) => {
      calculated += element;
    });
    return calculated;
  };

  return (
    <Card variant="outlined">
      <CardContent>
        {warenkorb.map((artikel) => {
          return (
            <div key={uuid()}>
              <li key={uuid()}>
                <div>{artikel.produkt.Name}</div>
                <ul key={uuid()}>
                  {artikel.extras.map((belag) => {
                    return <div>+ {belag}</div>;
                  })}
                </ul>
              </li>
            </div>
          );
        })}
        <div>Total Preis: {calculatePreis()}</div>
        <div>Button</div>
      </CardContent>
    </Card>
  );
}
