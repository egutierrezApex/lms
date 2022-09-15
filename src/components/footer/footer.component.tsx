import React, { useEffect } from 'react';
import { WorkStation } from 'utils/api';


import './footer.styles.scss';

const Footer = () => {
    useEffect(()=>{
        WorkStation.GetWorkStationsById("1");
        WorkStation.GetWorkStationsByQuery("");
    },[])

    return (
        <footer className="footer">
            <div>Innovation Labs</div>
            <div>Apex Systems</div>
        </footer>
    )
}



export default Footer;