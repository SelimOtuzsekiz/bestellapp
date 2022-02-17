import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Content() {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);
  const [produktList, setProduktList] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      await axios
        .get(`http://localhost:5000/produkte`)
        .then((res) => {
          setProduktList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOrder();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeCheck = () => {
    return;
  };

  return (
    <div>
      {produktList.map((produkt) => {
        return (
          <Accordion
            expanded={expanded === produkt._id}
            onChange={handleChange(produkt._id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Pizza {produkt.Name}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {produkt.Preis}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {produkt.Belag.map((belag) => {
                  console.log(belag);
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={handleChangeCheck}
                        />
                      }
                      label={belag.Name +" (+"+ belag.Preis+")"}
                    />
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
