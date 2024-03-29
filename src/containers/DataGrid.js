import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from '../store/actions'
import Spinner from '../components/UI/spinner/Spinner'
import DataTable from '../components/DataTable/DataTable';
class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };
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

        if (this.props.apiData === undefined) {
            return <Spinner />
        } else {
            return (
                <div>
                    <DataTable data={this.props.apiData}  sai = 'test'/>
                </div>);
        }
    }
}
const mapStateToProps = (state) => {
    return { apiData: state.data }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(actionCreators.dataGrid())
    }
}
DataGrid.defaltProps = {
    apiData: ''
}
const DataGridTable = connect(mapStateToProps, mapDispatchToProps)(DataGrid);
export default DataGridTable;