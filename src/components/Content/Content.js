import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@mui/material";

import ProduktList from "../ProduktList/ProduktList";
import Warenkorb from "../Warenkorb/Warenkorb";

export default function Content({
  produktList,
  warenkorb,
  total,
  handleOnClickWarenkorb,
  updateTotalPreis,
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
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Warenkorb
          warenkorb={warenkorb}
          total={total}
          updateTotalPreis={updateTotalPreis}
        />
      </Grid>
    </Grid>
  );
}
