import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function KontaktFormular({ handleAddKontakt }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleAddKontakt({
      vorname: data.get("vorname"),
      nachname: data.get("nachname"),
      strasse: data.get("strasse"),
      hausnummer: data.get("hausnummer"),
      zusatz: data.get("zusatz"),
      plz: data.get("plz"),
      stadt: data.get("stadt"),
      firma: data.get("firma"),
      telefonnummer: data.get("telefonnummer"),
    });
    navigate("/uebersicht");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
              >
                Kontakt:
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="vorname"
                      label="Vorname"
                      name="vorname"
                      autoComplete="vorname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="nachname"
                      label="Nachname"
                      name="nachname"
                      autoComplete="nachname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="strasse"
                      label="Strasse"
                      name="strasse"
                      autoComplete="strasse"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="hausnummer"
                      label="Hausnummer"
                      name="hausnummer"
                      autoComplete="hausnummer"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="zusatz"
                      label="Zusatz"
                      name="zusatz"
                      autoComplete="zusatz"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="plz"
                      label="PLZ"
                      name="plz"
                      autoComplete="plz"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="stadt"
                      label="Stadt"
                      name="stadt"
                      autoComplete="stadt"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="firma"
                      label="Firma"
                      name="firma"
                      autoComplete="firma"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="telefonnummer"
                      label="Telefonnummer"
                      name="telefonnummer"
                      autoComplete="telefonnummer"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Anmelden
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
