import React from 'react';
import Typography from 'material-ui/Typography';

import Create from './create';
import AchievmentList from './list';

const adminView = () => (
  <div style={{ padding: 30, backgroundColor: '#fff' }}>
    <Typography variant="display3" color="primary">
      Future Health
    </Typography>
    <Typography variant="headline" color="secondary">
      Write a new achievment
    </Typography>
    <Create />
    <Typography style={{ marginTop: 20 }} variant="headline" color="secondary">
      Achievments
    </Typography>
    <AchievmentList />
  </div>
);

export default adminView;
