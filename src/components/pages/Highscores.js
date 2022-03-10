import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

const styles = {
  tableContainer: {
    background: "#1B998B",
    // maxWidth: "80vw",
    border: "5px double white",
    padding: "10px",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
    color: "white",
    marginTop: "50px",
  },
  title: {
    fontSize: "50px",
    textAlign: "left",
    color: "white",
    textShadow: "2px 2px 3px #f46036",
    padding: "10px",
  },
  tableHeader: { color: "#F46036", fontSize: "20px" },
};

// const [value, setValue] = React.useState('one');

// const handleChange = (event, newValue) => {
//   setValue(newValue);
// };

// return (
//   <Box sx={{ width: '100%' }}>
//     <Tabs
//       value={value}
//       onChange={handleChange}
//       textColor="secondary"
//       indicatorColor="secondary"
//       aria-label="secondary tabs example"
//     >
//       <Tab value="one" label="Card Matching" />
//       <Tab value="two" label="Wordle" />
//     </Tabs>
//   </Box>
// );

export function Highscores() {
  const rows = [
    createData("username", 100),
    createData("username", 90),
    createData("username", 80),
    createData("username", 70),
    createData("username", 60),
  ];

  function createData(name, score) {
    return { name, score };
  }

  return (
    <div className="d-flex justify-content-center row">
      <div className="col-5">
        <TableContainer style={styles.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <p style={styles.title}>Card Matching</p>
              <TableRow>
                <TableCell style={styles.tableHeader}>
                  <strong>Username</strong>{" "}
                </TableCell>
                <TableCell align="center" style={styles.tableHeader}>
                  <strong>High Score</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="col-5">
        <TableContainer  style={styles.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <p style={styles.title}>Wordle</p>
              <TableRow>
                <TableCell style={styles.tableHeader}>
                  <strong>Username</strong>{" "}
                </TableCell>
                <TableCell align="center" style={styles.tableHeader}>
                  <strong>High Score</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* <div className="d-flex justify-content-center"> */}
        {/* <TableContainer style={styles.tableContainer}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <p style={styles.title}>TBD</p>
              <TableRow>
                <TableCell style={styles.tableHeader}>
                  <strong>Username</strong>{" "}
                </TableCell>
                <TableCell align="center" style={styles.tableHeader}>
                  <strong>High Score</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      {/* </div> */}
    </div>
  );
}

export default Highscores;
