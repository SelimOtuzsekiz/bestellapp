import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Button, Card, CardContent } from "@mui/material";

export default function Warenkorb({
  warenkorb,
  total,
  updateTotalPreis,
  getPrice,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const calculated = calculatePreis();
    updateTotalPreis(calculated);
  }, [warenkorb]);

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
        <div>Total Preis: {getPrice(total)}</div>
        <Button variant="contained" onClick={() => navigate("/kontakt")}>
          Bestellen
        </Button>
      </CardContent>
    </Card>
  );
}
