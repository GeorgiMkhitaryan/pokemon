import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './progres.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class LinearDeterminate extends Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed >= this.props.base_stat) {
      clearInterval(this.timer)
    } else {
      this.setState({ completed: Math.min(completed + 1, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
        <div style={{display: "flex", marginBottom: '20px'}}>
            <div style={{width: '130px', textAlign: 'left'}}>
                <div><span>{this.props.name}</span><span> {this.props.base_stat}</span></div>
            </div>
            <div className={classes.root}>
                <LinearProgress variant="determinate" style={{height: '15px', borderRadius: '5px'}} value={this.state.completed} className='liner'/>
            </div>
        </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearDeterminate);