import React from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Button, Card, CardContent } from "@mui/material";

export default function Warenkorb({ warenkorb, total, getPrice }) {
  const navigate = useNavigate();

  const handleRenderButton = () => {
    const myButton =
      total != 0 ? (
        <Button variant="contained" onClick={() => navigate("/kontakt")}>
          Bestellen
        </Button>
      ) : (
        <Button
          disabled
          variant="contained"
          onClick={() => navigate("/kontakt")}
        >
          Bestellen
        </Button>
      );
    return myButton;
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
                    return <div key={uuid()}>+ {belag}</div>;
                  })}
                </ul>
              </ul>
            </div>
          );
        })}
        <div>Total Preis: {getPrice(total)}</div>
        {handleRenderButton()}
      </CardContent>
    </Card>
  );
}
