import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import styles from '../style'

interface iEdit {
  isEdit: boolean;
}

function Header(props: iEdit) {
  const { header, label, content } = styles();
  return (
    <Paper className={header} elevation={0}>
      <Grid
        className={content}
        container
        spacing={3}
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography className={label}
            align="left"
            variant="h5"
            component="h3"
          >
            {props.isEdit ? 'Edit a group' : 'Create a group'}
          </Typography>
        </Grid>
      
      </Grid>
    </Paper>
  );
}

export default Header;
