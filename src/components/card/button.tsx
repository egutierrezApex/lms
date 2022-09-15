import React from 'react'
import { Card, CardActionArea } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import styles from './styles'
import { GroupCardButtonModel } from './group.model'

const GroupCardButton = (props: GroupCardButtonModel) => {
  const { title, onClick} = props;
  const { cardButton, titles, cardButtonAction } = styles();
  return (
    <Card className={cardButton} id="lmsGroupCreateCardButton">
      <CardActionArea className={cardButtonAction} onClick={onClick}>
        <Typography className={titles} variant="h4" component="h4">
          {title}
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default GroupCardButton
