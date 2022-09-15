import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './selectors';
import mapDispatchToProps from './dispatcher';

import { IZoneIndividualProps } from '../../types/zones/containers';
import Loading from 'components/loading/loading';

const ZoneContainer = (props: IZoneIndividualProps) => {
  const { currentZone, isLoading, match, get_zone } = props;
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
		get_zone(match.params.zoneId);
    setloading(false);
	}, [get_zone, match.params.zoneId]);

  if(loading) return <Loading />;
  
  return (<Fragment>
    <h1>Individual zone</h1>
    { currentZone ? (
      <div>
        <h2>{currentZone.name}</h2>
        <p>{currentZone.description}</p>
      </div>
    ) : ''}
    { isLoading ? <p>Loading</p> : ''}
  </Fragment>);
}

export default connect(mapStateToProps.individualProps, mapDispatchToProps.individualDispatcher)(ZoneContainer);
