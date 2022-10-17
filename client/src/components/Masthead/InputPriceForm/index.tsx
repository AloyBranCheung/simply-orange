import React, { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import styles from "./InputPriceForm.module.css";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import axios from "axios";

export default function InputPriceForm() {
  const [company, setCompany] = useState("");
  const [date, setDate] = useState<Moment | null>(moment);
  const [price, setPrice] = useState<number>(0);

  // Date component
  const handleDate = (newDate: Moment | null) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  // Select Options component
  const handleCompany = (event: SelectChangeEvent) => {
    setCompany(event.target.value as string);
  };

  // Price input component
  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPrice(value);
  };

  // Form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("pricinghistory");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      {/* company selection component */}
      <FormControl>
        <InputLabel id="demo-simple-select-label">Company</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={company}
          label="Company"
          onChange={handleCompany}
        >
          <MenuItem value="loblaws">Loblaws</MenuItem>
          <MenuItem value="farmBoy">Farm Boy</MenuItem>
          <MenuItem value="t&t">T&T</MenuItem>
        </Select>
      </FormControl>

      {/* date picker component */}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>

      {/* price input component */}
      <TextField
        required
        inputProps={{ type: "number" }}
        id="outlined-basic"
        label="Price"
        onChange={handlePrice}
        variant="outlined"
      />

      {/* submit button */}
      <Button
        sx={{ backgroundColor: "var(--green-brand)" }}
        type="submit"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  );
}
