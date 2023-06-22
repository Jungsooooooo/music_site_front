import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataGrid } from "@mui/x-data-grid";

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

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "address",
      headerName: "address",
      width: 500,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <div id="userTable">
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default UserInfo;
