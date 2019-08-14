import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {connect} from "react-redux";
import * as actionCreators from '../store/actions'


class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:''};
    }
    componentDidMount() {
        // axios.get('https://5d46e636992ea9001444c6c5.mockapi.io/api/v1/users')
        // .then(res => {
        //   const persons = res.data;
        //   console.log(persons);
        //   this.setState({ data: persons });
        // })

        this.props.getData();
            
    }

    render() {
        const columns = [
            { key: 'id', name: 'ID' },
            { key: 'name', name: 'Name' },
            { key: 'username', name: 'UserName' },
            {key: 'email', name: 'Email' } ];
            const rows  = this.props.apiData;
          
          
        return (<div>

<ReactDataGrid
  columns={columns}
  rowGetter={i => rows[i]}
  rowsCount={10}
  minHeight={400} />

        </div>);
    }


}
const mapStateToProps = (state) => {
    return {apiData: state.data}
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actionCreators.dataGrid())
    }
}
DataGrid.defaltProps = {
    apiData: {}
}
const DataGridTable  = connect(mapStateToProps,mapDispatchToProps)(DataGrid);
export default DataGridTable;