import React from 'react'
import { Card, CardContent, CardActions } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import FloatingMenu from '../menu';
import { GroupCardModel } from './group.model';

const GroupCard = (props: GroupCardModel) => {
  const { card, titlesSecondary, moreInfo } = styles();
  return (
    <Card className={card} id={`lmsGroups${props.id}GroupCard`}>
      <FloatingMenu cardId={props.id}/>
      <CardContent>
        <Typography className={titlesSecondary} color="primary" variant="h4" component="h4">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography className={moreInfo}  variant="body1">
         {props.description}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default GroupCard
