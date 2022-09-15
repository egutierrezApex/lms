import React from 'react';
import useStyles from './bodySection.styles';

const BodySection = () => {
  const classes = useStyles();
  return (
    <div className={classes.bodySection}>
      <div className={classes.centerBody}>
        <div className={classes.noData}>
          <span>No Data Available</span>
        </div>
        <button className={classes.addBuildingButton}>
          <div className={classes.buildingButtonText}>
            <span>ADD BUILDING</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BodySection;
