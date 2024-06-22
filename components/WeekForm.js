import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const WeekForm = () => {
  const [tieBreaker1, setTieBreaker1] = React.useState("");
  const [tieBreaker2, setTieBreaker2] = React.useState("");
  const [tieBreaker3, setTieBreaker3] = React.useState("");

  const handleTieBreaker1Change = (event) => {
    setTieBreaker1(event.target.value);
  };

  const handleTieBreaker2Change = (event) => {
    setTieBreaker2(event.target.value);
  };
  const handleTieBreaker3Change = (event) => {
    setTieBreaker3(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <TextField required id="outlined-required" label="Name" />
        <br />
        <TextField required id="outlined-required" label="Contact #" />
        <br />
        <TextField required id="outlined-required" label="Alias" />
        <br />
        {/* 1st */}
        <FormLabel id="demo-radio-buttons-group-label">
          <br />
          Carolina Panthers @ Atlanta Falcons *
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Carolina Panthers"
            control={<Radio />}
            label="Carolina Panthers"
          />
          <FormControlLabel
            value="Atlanta Falcons"
            control={<Radio />}
            label="Atlanta Falcons"
          />
        </RadioGroup>
        {/* 2st */}
        <FormLabel id="demo-radio-buttons-group-label">
          <br />
          Carolina Panthers @ Atlanta Falcons *
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Carolina Panthers"
            control={<Radio />}
            label="Carolina Panthers"
          />
          <FormControlLabel
            value="Atlanta Falcons"
            control={<Radio />}
            label="Atlanta Falcons"
          />
        </RadioGroup>
        {/* 3st */}
        <FormLabel id="demo-radio-buttons-group-label">
          <br />
          Carolina Panthers @ Atlanta Falcons *
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Carolina Panthers"
            control={<Radio />}
            label="Carolina Panthers"
          />
          <FormControlLabel
            value="Atlanta Falcons"
            control={<Radio />}
            label="Atlanta Falcons"
          />
        </RadioGroup>
        {/* 4st */}
        <FormLabel id="demo-radio-buttons-group-label">
          <br />
          Carolina Panthers @ Atlanta Falcons *
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Carolina Panthers"
            control={<Radio />}
            label="Carolina Panthers"
          />
          <FormControlLabel
            value="Atlanta Falcons"
            control={<Radio />}
            label="Atlanta Falcons"
          />
        </RadioGroup>
        {/* 5st */}
        <FormLabel id="demo-radio-buttons-group-label">
          <br />
          Carolina Panthers @ Atlanta Falcons *
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Carolina Panthers"
            control={<Radio />}
            label="Carolina Panthers"
          />
          <FormControlLabel
            value="Atlanta Falcons"
            control={<Radio />}
            label="Atlanta Falcons"
          />
        </RadioGroup>
        <br />
        <Divider>
          {" "}
          <Typography variant="h5">Tiebreaker </Typography>
        </Divider>
        <br />
        <Typography>
          Pick 3 Teams you believe will score the most points in their game.
          Your TB1 score will be compared to others TB1 scores. If there is
          still a tie, we will move to TB2 and then TB3. Remember, you must pick
          3 different teams for each tiebreaker.
        </Typography>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label1">Tiebreaker 1</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
            value={tieBreaker1}
            label="Tiebreaker 1"
            onChange={handleTieBreaker1Change}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label2">Tiebreaker 2</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select"
            value={tieBreaker2}
            label="Tiebreaker 2"
            onChange={handleTieBreaker2Change}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label3">Tiebreaker 3</InputLabel>
          <Select
            labelId="demo-simple-select-label3"
            id="demo-simple-select"
            value={tieBreaker3}
            label="Tiebreaker 3"
            onChange={handleTieBreaker3Change}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="success"
          sx={{
            p: 0,
            backgroundColor: "green !important",
            padding: 1,
          }}
        >
          Submit
        </Button>
      </FormControl>
    </div>
  );
};

export default WeekForm;
