import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getScores , getWordleScores } from "../../utils/API";

const styles = {
  tableContainer: {
    background: "#1B998B",
    maxWidth: "80vw",
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
  const [scoreDataCM, setscoreDataCM] = useState([]);
  const [scoreDataWordle, setscoreDataWordle] = useState([]);
  const rows = [];
  // const [gameValue, setgameValue] = useState()

  useEffect(() => {
    callGetScores();
  }, []);
  
  const groupBy = (arr) => {
    const numberofEntries= {}
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (numberofEntries[element.username] == undefined){
        numberofEntries[element.username] = 0
      }
      numberofEntries[element.username]+= 1
    }
    return numberofEntries
  }



  const callGetScores = async () => {
    let sdCM = await getScores(1);
    let sdW = await getWordleScores(2);
    setscoreDataCM(sdCM);
    const wordleScores = groupBy(sdW)
    const sortable = Object.fromEntries(
      Object.entries(wordleScores).sort(([,a],[,b]) => b-a)
  );
    console.log(sortable)
    setscoreDataWordle(sortable);
  };
  


  return (
    <div>
      <div className="d-flex justify-content-center">
        <TableContainer style={styles.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <p style={styles.title}>Card Matching</p>
              <TableRow>
                <TableCell style={styles.tableHeader}>
                  <strong>Username</strong>
                </TableCell>
                <TableCell align="center" style={styles.tableHeader}>
                  <strong>High Score</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scoreDataCM.map((row) => (
                <TableRow
                  key={row.username}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="d-flex justify-content-center">
        <TableContainer style={styles.tableContainer}>
          <Table aria-label="simple table">
            <TableHead>
              <p style={styles.title}>Wordle</p>
              <TableRow>
                <TableCell style={styles.tableHeader}>
                  <strong>Username</strong>
                </TableCell>
                <TableCell align="center" style={styles.tableHeader}>
                  <strong>Number of Wins</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(scoreDataWordle).map((row) => (
                <TableRow
                  key={row[0]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell align="center">{row[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Highscores;
