import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import { connect } from 'react-redux';
import { offsetChange } from '../../redux/action';
 
const theme = createMuiTheme();
 
class Example extends React.Component { 
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={40}
          offset={this.props.offset}
          total={200}
          onClick={(e, offset) => this.props.fetchData(offset)}
        />
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
    return {
        offset: state.offsetChange,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    };
  }
  
const mapDispatchToProps = dispatch => {
    return{
      fetchData: (url) => dispatch(offsetChange(url))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Example)