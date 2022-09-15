import React from 'react'
import { Button, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './styles'

const Pagination = ({ prev, next, first, last }) => {
  const { button, buttonEnd, pagination, arrow } = styles();
  return <p className={pagination}>
    <IconButton className={arrow} onClick={prev} color="primary"><ArrowBackIosIcon /></IconButton>
    <Button onClick={first} className={button} type="submit" variant="outlined" color="secondary">1</Button>
    /
    <Button onClick={last} className={`${button} ${buttonEnd}`} type="submit" variant="text" color="secondary">20</Button>
    <IconButton className={arrow} onClick={next} color="primary"><ArrowForwardIosIcon /></IconButton>
  </p>
}

export default Pagination
