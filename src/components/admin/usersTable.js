
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import axios from "../../api/axios";


const useStyles = makeStyles({
    table: {
       minWidth: 500,
       marginTop: +"100px",
           },
   },[]);


export default function MaterialTableDemo() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    useEffect(() => {
       axios.get("/all", {}).then((response) => {
       console.log(response.data);
       const result = response.data;
       setRows({
        columns: [
          { title: 'Firstname', field: 'fName' },
          { title: 'Lastname', field: 'lName' },
          { title: 'Email', field: 'eMail', type: 'email',editable: 'onAdd' },
          { title: 'role',field: 'role'},
          { title: 'signDate', field: 'signDate', type: 'date' },
        ],
        data: response.data
      });
     });
    },[]);

  
  return (
    <MaterialTable
      title="Users Table"
      columns={rows.columns}
      data={rows.data}
      style={{ marginTop: '11%'}}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setRows(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setRows(prevState => {
                  const data = [...prevState.data];
                  axios.put(`/edit/${newData.eMail}`,newData);
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setRows(prevState => {
                const data = [...prevState.data];
                axios.delete(`/delete/${oldData.eMail}`);
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );                                                                    
}
