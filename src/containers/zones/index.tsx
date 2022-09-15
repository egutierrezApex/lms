import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import mapStateToProps from './selectors';
import mapDispatchToProps from './dispatcher';
import { Link } from 'react-router-dom';

import { IZonesIndexProps } from '../../types/zones/containers';
import Loading from '../../components/loading/loading';


const ZonesContainer = (props: IZonesIndexProps) => {
    const { zonesByPage, isLoading, get_zones } = props;
    const [loading, setloading] = useState(true);

    useEffect(() => {
			// se actualiza el query vacio en el mount para llamar las zonas default
			// esto con propósitos de demo, idealmente aqui se tiene el edificio y zona
			// para poder obtener las zonas que pertenezcan a estos mismos
            setloading(true);
			get_zones({});
            setloading(false);
		}, [get_zones]);


        if(loading) return <Loading />;

    return (
        <Fragment>
            <h1>Zones</h1>
            <ul>
                {
                    zonesByPage.map(zone => (
                        <li key={zone.id} >
                            <Link to={`/zones/${zone.id}`} > {zone.name} </Link>
                        </li>
                    ))
                }
            </ul>
            {
                isLoading ? <p>Loading</p> : ''
            }
        </Fragment>
    );
}

export default connect(mapStateToProps.defaultProps, mapDispatchToProps.defaultDispatcher)(ZonesContainer);
