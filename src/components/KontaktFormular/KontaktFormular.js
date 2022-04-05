import React from "react";
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
      Vorname: data.get("Vorname"),
      Nachname: data.get("Nachname"),
      Strasse: data.get("Strasse"),
      Hausnummer: data.get("Hausnummer"),
      Zusatz: data.get("Zusatz"),
      PLZ: data.get("PLZ"),
      Stadt: data.get("Stadt"),
      Firma: data.get("Firma"),
      Telefonnummer: data.get("Telefonnummer"),
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
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Vorname"
                      label="Vorname"
                      name="Vorname"
                      autoComplete="Vorname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Nachname"
                      label="Nachname"
                      name="Nachname"
                      autoComplete="Nachname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Strasse"
                      label="Strasse"
                      name="Strasse"
                      autoComplete="Strasse"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Hausnummer"
                      label="Hausnummer"
                      name="Hausnummer"
                      autoComplete="Hausnummer"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="Zusatz"
                      label="Zusatz"
                      name="Zusatz"
                      autoComplete="Zusatz"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="PLZ"
                      label="PLZ"
                      name="PLZ"
                      autoComplete="PLZ"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Stadt"
                      label="Stadt"
                      name="Stadt"
                      autoComplete="Stadt"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="Firma"
                      label="Firma"
                      name="Firma"
                      autoComplete="Firma"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="Telefonnummer"
                      label="Telefonnummer"
                      name="Telefonnummer"
                      autoComplete="Telefonnummer"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Weiter zur Bestellübersicht
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
