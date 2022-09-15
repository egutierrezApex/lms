import React from 'react'
import { CircularProgress
} from "react-cssfx-loading";
import './loading.scss';

export default function Loading() {
  return (
    <div className="loading-container">
        <div className="loader">
            <CircularProgress color="#44546A" width="100px" height="100px" />
        </div>
    </div>
    
  )
}
