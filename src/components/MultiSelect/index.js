import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Status = ["All", "Active", "Upcoming", "Past"];
const Level = ["Easy", "Medium", "Hard"];
export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(personName);
  };

  return (
    <div>
      <Select
        sx={{
          width: "100%",
          height: "100%",
          marginRight: 15,
          border: "0px solid darkgrey",
          color: "#000",
          "&.focus": {
            border: "none",
            outline: "none",
            background: "pink",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline ": {
            border: "0px",
          },
          "&.MuiOutlinedInput-root .css-1d3z3hw-MuiOutlinedInput-notchedOutline":
            {
              border: "none",
            },
        }}
        multiple
        native={false}
        notched={false}
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput />}
        displayEmpty
        MenuProps={MenuProps}
        renderValue={(selected) => {
          return <p>Filter</p>;
        }}
      >
        <div
          style={{
            padding: "8px 20px",
            fontSize: "1.3em",
            fontWeight: "bold",
          }}
        >
          Filter
        </div>
        <div
          style={{
            margin: "10px 20px",
            width: "80%",
            height: "1px",
            background: "#b6b6b6",
          }}
        ></div>
        <div
          style={{
            padding: "10px 20px",
            fontSize: "1.1em",
            fontWeight: "100",
            color: "#666666",
          }}
        >
          Status
        </div>
        {Status.map((name) => (
          <MenuItem
            sx={{
              "&.MuiMenuItem-root": {
                margin: "none",
                padding: "none",
                height: "30px",
              },
            }}
            key={name}
            value={name}
          >
            <Checkbox
              sx={{
                "&.MuiCheckbox-root": {
                  margin: "none",
                },
              }}
              checked={personName.indexOf(name) > -1}
            />
            <ListItemText
              sx={{
                "&.MuiListItemText-root": {
                  color: "#858585",
                },
              }}
              primary={name}
            />
          </MenuItem>
        ))}
        <div
          style={{
            margin: "10px 20px",
            width: "80%",
            height: "1px",
            background: "#eee",
          }}
        ></div>

        <div
          style={{
            padding: "10px 20px",
            fontSize: "1.1em",
            fontWeight: "100",
            color: "#666666",
          }}
        >
          Level
        </div>
        {Level.map((name) => (
          <MenuItem
            sx={{
              "&.MuiMenuItem-root": {
                margin: "none",
                padding: "none",
                height: "30px",
              },
            }}
            key={name}
            value={name}
          >
            <Checkbox
              sx={{
                "&.MuiCheckbox-root": {
                  margin: "none",
                },
              }}
              checked={personName.indexOf(name) > -1}
            />
            <ListItemText
              sx={{
                "&.MuiListItemText-root": {
                  color: "#858585",
                },
              }}
              primary={name}
            />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
