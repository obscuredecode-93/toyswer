
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from 'material-table';
import axios from "../../api/products";


const useStyles = makeStyles({
    table: {
       minWidth: 500,
       marginTop: +"100px",
       paddingBottom: "30%",
       backgroundColor:"blue",
      },
      space:{
        height:'35%',
      }
   },[]);


export default function ProductsTable() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    useEffect(() => {
       axios.get("/all", {}).then((response) => {
       setRows({
        columns: [
          { title: 'ID', field: 'pId' },
          { title: 'Name', field: 'pName' },
          { title: 'Details', field: 'pDetails'},
          { title: 'Link',field: 'pImgLink'},
          { title: 'Price', field: 'price'},
          { title: 'Category', field: 'pCategory'},
        ],
        data: response.data
      });
     });
    },[]);

  return (
    <React.Fragment>
    <div className={classes.space} ></div>
    <MaterialTable
      title="Prodcts Table"
      columns={rows.columns}
      data={rows.data}
      style={{ marginTop: '11%'}}
      className={classes.table}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setRows(prevState => {
                const data = [...prevState.data];
                axios.post('/add',newData);
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
      </React.Fragment>
  );                                                                    
}
