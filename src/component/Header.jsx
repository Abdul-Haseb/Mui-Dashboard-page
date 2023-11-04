import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div>
      <Stack
        spacing={4}
        display={"flex"}
        justifyContent={"space-between"}
        direction="row"
        style={{
          padding: "34px 0",
        }}
      >
        <div></div>
        <TextField
          variant="outlined"
          size="medium"
          placeholder="Search game"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "33px",
              backgroundColor: "#B8B8B885",
            },
            "&:hover": {
              borderColor: "transparent",
              outline: "none",
            },
            "&.Mui-focused": {
              borderColor: "transparent",
              outline: "none",
            },
            "& .MuiOutlinedInput-input": {
              padding: "10px 16px",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                style={{
                  color: "white",
                }}
              >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#F3F4F6",
            color: "#000000",
            border: "none",
            ":hover": {
              backgroundColor: "#F1F1F1",
              border: "none",
            },
          }}
        >
          <span
            style={{
              color: "#2D5F9A",
              fontSize: "25px",
              marginRight: "3px",
            }}
          >
            &#43;
          </span>
          ADD NEW
        </Button>
      </Stack>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            marginRight: "10px",
            paddingBottom: "34px",
          }}
        >
          <g id="Group 15507">
            <path
              id="Vector"
              d="M1 1L10.2 11.7448V19.8115L14.8 22.0833V11.7448L24 1H1Z"
              stroke="#2D5F9A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
