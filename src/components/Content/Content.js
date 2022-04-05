import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import ProduktList from "../ProduktList/ProduktList";
import Warenkorb from "../Warenkorb/Warenkorb";

export default function Content({
  produktList,
  warenkorb,
  total,
  handleOnClickWarenkorb,
  getPrice,
}) {
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
              getPrice={getPrice}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Warenkorb warenkorb={warenkorb} total={total} getPrice={getPrice} />
      </Grid>
    </Grid>
  );
}
