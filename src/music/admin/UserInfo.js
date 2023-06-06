import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const UserInfo = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getUserList().then((res) => {
      setRows(res.data);
    });
  });

  const getUserList = () => {
    return axios.get("/api/user");
  };

  return (
    <Table id="userTable" style={{ margin: "auto", width: "800px" }}>
      <TableHead>
        <TableRow>
          <TableCell>Uid</TableCell>
          <TableCell>Id</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.uid}>
            <TableCell>{row.uid}</TableCell>
            <TableCell>{row.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserInfo;
