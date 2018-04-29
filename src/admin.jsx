import React from 'react';
import Typography from 'material-ui/Typography';
import { withTheme } from 'material-ui/styles';

import Create from './create';
import AchievmentList from './list';


const adminView = ({ theme }) => (
  <div style={{ padding: 30 }}>
    <Typography variant="display3" color="primary">
      Future
    </Typography>
    <Typography variant="display3" style={{ paddingLeft: 40, color: theme.palette.primary.light }}>
      Health
    </Typography>
    <Typography variant="headline" color="secondary">
      Add a new achievement
    </Typography>
    <Create />
    <Typography style={{ marginTop: 20 }} variant="headline" color="secondary">
      Achievements
    </Typography>
    <AchievmentList />
  </div>
);

export default withTheme()(adminView);
