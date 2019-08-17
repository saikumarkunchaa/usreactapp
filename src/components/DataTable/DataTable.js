import React,{useState} from 'react';
import ReactDataGrid from 'react-data-grid';
const defaultColumnProperties = {
    sortable: true,
    width: 350
  };
  const ROW_COUNT = 50;

const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

const DataTable = (props,{ initialRows }) => {
    initialRows = props.data;
    const [rows, setRows] = useState(initialRows);

    const columns = [
        { key: 'id', name: 'ID',sortDescendingFirst: true },
        { key: 'name', name: 'Name' },
        { key: 'username', name: 'UserName' },
        { key: 'email', name: 'Email' }].map(c => ({ ...c, ...defaultColumnProperties }));;
    //this.state.data = this.props.apiData;
    return (
        <div>
             <ReactDataGrid
                        columns={columns}
                        rowGetter={i => rows[i]}
                        rowsCount={ROW_COUNT}
                        minHeight={400}
                        onGridSort={(sortColumn, sortDirection) =>
                            setRows(sortRows(initialRows, sortColumn, sortDirection))
                          }
                         />
        </div>
    );
};

export default DataTable;