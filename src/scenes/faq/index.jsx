import React from "react"
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore soluta accusantium velit voluptas laudantium pariatur vero aut, dolore corrupti eos itaque quam officiis blanditiis commodi ipsa similique reiciendis labore autem.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore soluta accusantium velit voluptas laudantium pariatur vero aut, dolore corrupti eos itaque quam officiis blanditiis commodi ipsa similique reiciendis labore autem.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore soluta accusantium velit voluptas laudantium pariatur vero aut, dolore corrupti eos itaque quam officiis blanditiis commodi ipsa similique reiciendis labore autem.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore soluta accusantium velit voluptas laudantium pariatur vero aut, dolore corrupti eos itaque quam officiis blanditiis commodi ipsa similique reiciendis labore autem.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandedIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore soluta accusantium velit voluptas laudantium pariatur vero aut, dolore corrupti eos itaque quam officiis blanditiis commodi ipsa similique reiciendis labore autem.
            </Typography>
          </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ