import React, { useState } from "react";
import uuid from "react-uuid";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BelagList from "../BelagList/BelagList";

export default function ProduktList({
  produktList,
  handleOnClickWarenkorb,
  getPrice,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {produktList.map((produkt) => {
        return (
          <Accordion
            expanded={expanded === produkt._id}
            onChange={handleChange(produkt._id)}
            key={uuid()}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "90%", flexShrink: 0 }}>
                Pizza {produkt.Name}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {produkt.Preis / 100}0€
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <BelagList
                  produktID={produkt._id}
                  belagList={produkt.Belag}
                  produktPreis={produkt.Preis}
                  handleOnClickWarenkorb={handleOnClickWarenkorb}
                  getPrice={getPrice}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
