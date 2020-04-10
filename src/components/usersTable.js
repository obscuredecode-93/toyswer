import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "../api/axios";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    marginTop: "100px",
  },
});



export default function UsersTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get("/all", {}).then((response) => {
      console.log(response.data);
      setRows(response.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Firstname</TableCell>
            <TableCell align="right">Lastname</TableCell>
            <TableCell align="right">Signdate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.eMail}>
              <TableCell component="th" scope="row">
                {row.eMail}
              </TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.fName}</TableCell>
              <TableCell align="right">{row.lName}</TableCell>
              <TableCell align="right">{row.signDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
