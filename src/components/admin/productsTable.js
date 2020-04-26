
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import axios from "../../api/products";


const useStyles = makeStyles({
    table: {
       minWidth: 500,
       marginTop: +"100px",
           },
   },[]);


export default function ProductsTable() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    useEffect(() => {
       axios.get("/all", {}).then((response) => {
       console.log(response.data);
       const result = response.data;
       setRows({
        columns: [
          { title: 'ID', field: 'pId' },
          { title: 'Name', field: 'pName' },
          { title: 'Details', field: 'pDetails'},
          { title: 'Link',field: 'pImgLink'},
          { title: 'Price', field: 'price'},
        ],
        data: response.data
      });
     });
    },[]);

  return (
    <MaterialTable
      title="Editable Example"
      columns={rows.columns}
      data={rows.data}
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
