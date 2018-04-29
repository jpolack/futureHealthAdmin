import React from 'react';

import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const ListView = ({ achievments }) => (
  <div >
    {achievments.reverse().map(achiev => (
      <Paper key={achiev.id} style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
        <Typography variant="display1">
          {achiev.name}&nbsp;—&nbsp;{achiev.points}&nbsp;Points
        </Typography>
        <Typography>
          {achiev.description}
        </Typography>
        <Typography>
          <i className="material-icons">directions_run</i>:&nbsp;{achiev.value}&nbsp;{achiev.unit}
        </Typography>
      </Paper>
    ))}
  </div >
);

ListView.propTypes = {
  achievments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListView;
