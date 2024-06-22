import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import Select from "@mui/material/Select";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import BracketResults from "./BracketResults";
import exp from "constants";

export const TeamSelector = ({
  isLocked,
  selection,
  selectedTeam,
  handleChange,
}) => (
  <Box sx={{ minWidth: 120 }} style={{ marginTop: "10px" }}>
    {isLocked ? (
      <BracketResults />
    ) : (
      <FormControl size="small" fullWidth>
        <InputLabel id="demo-select-small-label">--Select A Team--</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="--Select A Team--"
          value={selectedTeam}
          onChange={handleChange}
        >
          {Array.isArray(selection) &&
            selection.map((team) => (
              <MenuItem key={team.key} value={team.name}>
                {team.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    )}
  </Box>
);
