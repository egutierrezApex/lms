import { Link } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from '../sideBar.styles';

export interface Option {
  text: string;
  url: string;
  callback?: () => void;
}

interface OptionButtonsProps {
  isActive: Boolean;
  options: Option[];
  name?: string;
}

function OptionButtons({ isActive, options, name }: OptionButtonsProps) {
  const classes = useStyles();
  const noWhiteSpacesName = name?.replaceAll(' ', ''); 
  return (
    <div className={clsx(classes.sidebarButtonMore, isActive && 'active')}>
      <ul>
        {options.map((option) => (
          <li key={'option_' + option.text}>
            <Link
              id={`lmsHomeButtonBuilding${option.text}${noWhiteSpacesName}`}
              underline="none"
              className={classes.optionsLink}
              onClick={() => option.callback && option.callback()}
            >
              {option.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionButtons;
