import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const MyTable = () => {
  const sampleData = [
    {
      id: 1,
      Image: "./assets/img1.png",
      Name: "Pubg Mobile",
      Description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...",
      category: "Hot Game",
      Status: "Activate",
      Actions: (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BorderColorOutlinedIcon />
          <DeleteOutlineIcon />
          <VisibilityOutlinedIcon />
        </div>
      ),
    },
    {
      id: 2,
      Image: "./assets/img1.png",
      Name: "Pubg Mobile",
      Description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...",
      category: "Hot Game",
      Status: "Activate",
      Actions: (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            color: "#000000CC",
          }}
        >
          <BorderColorOutlinedIcon />
          <DeleteOutlineIcon />
          <VisibilityOutlinedIcon />
        </div>
      ),
    },
    {
      id: 3,
      Image: "./assets/img1.png",
      Name: "Pubg Mobile",
      Description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...",
      category: "Hot Game",
      Status: "Activate",
      Actions: (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            color: "#000000CC",
          }}
        >
          <BorderColorOutlinedIcon />
          <DeleteOutlineIcon />
          <VisibilityOutlinedIcon />
        </div>
      ),
    },
    {
      id: 4,
      Image: "./assets/img1.png",
      Name: "Pubg Mobile",
      Description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...",
      category: "Hot Game",
      Status: "Activate",
      Actions: (
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            color: "#000000CC",
          }}
        >
          <BorderColorOutlinedIcon />
          <DeleteOutlineIcon />
          <VisibilityOutlinedIcon />
        </div>
      ),
    },
  ];

  return (
    <Box display="flex" justifyContent="center">
      <TableContainer component={Paper} className="relative overflow-x-auto">
        <Table className="w-full text-sm text-left text-gray-500">
          <TableHead
            style={{
              backgroundColor: "#E9EAF3",
              fontSize: "24px",
            }}
          >
            <TableRow>
              <TableCell
                style={{
                  width: "16.67%",
                  textAlign: "center",
                }}
              >
                Image
              </TableCell>
              <TableCell style={{ width: "16.67%", textAlign: "center" }}>
                Name
              </TableCell>
              <TableCell style={{ width: "16.67%", textAlign: "center" }}>
                Description
              </TableCell>
              <TableCell style={{ width: "16.67%", textAlign: "center" }}>
                Category
              </TableCell>
              <TableCell style={{ width: "16.67%", textAlign: "center" }}>
                Status
              </TableCell>
              <TableCell style={{ width: "16.67%", textAlign: "center" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={row.Image}
                    alt={row.Name}
                    style={{
                      width: "92px",
                      height: "129.836px",
                      flexShrink: 0,
                    }}
                  />
                </TableCell>
                <TableCell
                  className="px-6 py-4"
                  style={{
                    maxWidth: "21px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                  }}
                >
                  {row.Name}
                </TableCell>
                <TableCell
                  className="px-6 py-4"
                  style={{
                    maxWidth: "21px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "left",
                  }}
                >
                  {row.Description}
                </TableCell>
                <TableCell
                  className="px-6 py-4"
                  style={{
                    maxWidth: "21px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                  }}
                >
                  {row.category}
                </TableCell>
                <TableCell
                  className="px-6 py-4"
                  style={{
                    maxWidth: "21px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                  }}
                >
                  {row.Status}
                </TableCell>
                <TableCell
                  className="px-6 py-4"
                  style={{
                    maxWidth: "21px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                  }}
                >
                  {row.Actions}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyTable;
