import React from 'react'
import { Card, CardContent, CardActions } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import FloatingMenu from '../menu';

const GroupCard = ({title}) => {
  const { card, titlesSecondary, moreInfo } = styles();
  return (
    <Card className={card}>
      <FloatingMenu />
      <CardContent>
        <Typography className={titlesSecondary} color="primary" variant="h4" component="h4">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography className={moreInfo}  variant="body1">
          algo más
        </Typography>
      </CardActions>
    </Card>
  )
}

export default GroupCard
