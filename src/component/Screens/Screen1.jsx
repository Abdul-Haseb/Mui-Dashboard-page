/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Category } from "@mui/icons-material";
const Screen1 = () => {
  const theme = useTheme();

  return (
    <Box width={"783px"} mx={"auto"} py={"60px"}>
      {/* BUTTON AND THE PAGE NUMBER  */}
      <Stack direction={"row"} justifyContent={"space-between"} pb={"30px"}>
        <Button
          sx={{
            bgcolor: "transparent",
            color: "black",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <Typography
            variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowBackIosIcon /> ADD NEW GAME
          </Typography>
        </Button>
        <Typography variant={theme.breakpoints.up("sm") ? "h6" : "body1"}>
          1/4
        </Typography>
      </Stack>
      <Typography
        variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
        textAlign={"center"}
        pb={"30px"}
        fontWeight={"400"}
      >
        Product Identity
      </Typography>
      {/* FORM  */}
      <form action="">
        {/* SKU NAME AND CATEGORY  */}
        <Stack direction={"row"} justifyContent={"space-between"} pb={"50px"}>
          {/* SKU NAME INPUT  */}
          <Box width={"46%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              SKU Number
            </Typography>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            />
          </Box>
          {/* CATEGORY  */}
          <Box width={"46%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Category
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            >
              <MenuItem value={1}>Category 1</MenuItem>
              <MenuItem value={2}>Category 2</MenuItem>
              <MenuItem value={3}>Category 3</MenuItem>
            </Select>
          </Box>
        </Stack>
        {/* PO NUMBER / STOCK / FEATURES  */}
        <Stack direction={"row"} justifyContent={"space-between"} pb={"50px"}>
          {/* PO NUMBER  */}
          <Box width={"46%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              PO Number
            </Typography>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            />
          </Box>
          {/* STOCK AND FEATURES  */}
          <Box width={"46%"} display={"flex"} gap={"50px"}>
            {/* STOCK  */}
            <div>
              <Typography
                variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
                pb={"10px"}
                fontWeight={"400"}
              >
                Stock:
              </Typography>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "#DBDBDB99",
                }}
              />
            </div>
            <div>
              {/* FEATURES  */}
              <Typography
                variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
                pb={"10px"}
                fontWeight={"400"}
              >
                Features
              </Typography>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: "#DBDBDB99",
                }}
              />
            </div>
          </Box>
        </Stack>
        {/* LANGUAGE AND PLATFORM  */}
        <Stack direction={"row"} justifyContent={"space-between"} pb={"50px"}>
          <Box width={"46%"}>
            {/* LANGUAGE  */}
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Language
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            >
              <MenuItem value={1}>Language 1</MenuItem>
              <MenuItem value={2}>Language 2</MenuItem>
              <MenuItem value={3}>Language 3</MenuItem>
            </Select>
          </Box>
          {/* PLATFORM  */}
          <Box width={"46%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Platoform
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            >
              <MenuItem value={1}>Platform 1</MenuItem>
              <MenuItem value={2}>Platform 2</MenuItem>
              <MenuItem value={3}>Platform 3</MenuItem>
            </Select>
          </Box>
        </Stack>
        {/* REGION AND GENRE  */}
        <Stack direction={"row"} justifyContent={"space-between"} pb={"50px"}>
          <Box width={"46%"}>
            {/* REGION  */}
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Region:
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            >
              <MenuItem value={1}>Region 1</MenuItem>
              <MenuItem value={2}>Region 2</MenuItem>
              <MenuItem value={3}>Region 3</MenuItem>
            </Select>
          </Box>
          {/* GENRE */}
          <Box width={"46%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              GENRE:
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Category}
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            >
              <MenuItem value={1}>Genre 1</MenuItem>
              <MenuItem value={2}>Genre 2</MenuItem>
              <MenuItem value={3}>Genre 3</MenuItem>
            </Select>
          </Box>
        </Stack>
        {/* DEVELOPER / RELEASE DATE / PUBLISHER / DELIVERY  */}
        <Stack direction={"row"} justifyContent={"space-between"} pb={"50px"}>
          {/* DEVELOPER  */}

          <Box width={"22%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Developer
            </Typography>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            />
          </Box>
          {/* RELEASE DATE  */}
          <Box width={"22%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Release Date
            </Typography>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            />
          </Box>
          {/* PUBLISHER  */}
          <Box width={"22%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Publisher
            </Typography>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            />
          </Box>
          {/* DELIVERY  */}
          <Box width={"22%"}>
            <Typography
              variant={theme.breakpoints.up("sm") ? "h6" : "body1"}
              pb={"10px"}
              fontWeight={"400"}
            >
              Delivery
            </Typography>
            <TextField
              fullWidth
              sx={{
                backgroundColor: "#DBDBDB99",
              }}
            />
          </Box>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button
            sx={{
              backgroundColor: "#DBDBDB99",
              width: "200px",
              color: "black",
              ":hover": {
                backgroundColor: "#DBDBDB99",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: "#2D5F9A",
              width: "200px",
              color: "white",
              ":hover": {
                backgroundColor: "#2D5F9A",
              },
            }}
          >
            Next
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Screen1;
