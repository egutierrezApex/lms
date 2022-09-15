import React from 'react'
import { Box } from '@material-ui/core'
import styles from './styles';

const CustomBox = ({ children }) => {
  const { defaultBox } = styles();
  return (
    <Box className={defaultBox}>{children}</Box>
  )
}

export default CustomBox