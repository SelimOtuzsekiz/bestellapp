import React, { useState } from "react";
import uuid from "react-uuid";
import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";

export default function BelagList({
  produktID,
  belagList,
  produktPreis,
  handleOnClickWarenkorb,
}) {
  const [extras, setExtras] = useState([]);
  const [total, setTotal] = useState(produktPreis);
  const [checkedState, setCheckedState] = useState(
    new Array(belagList.length).fill(false)
  );

  const handleOnChange = (position, belag) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + belagList[index].Preis;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice + produktPreis);
    setExtras([...extras, belag.Name]);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          {belagList.map((belag, index) => {
            return (
              <FormControlLabel
                key={uuid()}
                control={
                  <Checkbox
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index, belag)}
                  />
                }
                label={belag.Name + " (+" + belag.Preis + ")"}
              />
            );
          })}
        </Grid>
        <Grid item xs={3}>
          Total Preis: {total}
          <Button
            variant="contained"
            onClick={() => handleOnClickWarenkorb(produktID, extras, total)}
          >
            In den Warenkorb
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
