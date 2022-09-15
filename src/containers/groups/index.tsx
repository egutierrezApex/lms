import React, { useEffect, useState } from "react";
import Pagination from "../../components/pagination";
import Header from "./header";
import GroupsList from "./groupsList";
import { IGroup } from "types/shared";
import GroupsApiWrapper from "utils/apiWrappers/groupsApiWrapper";
import Loading from "components/loading/loading";

const GroupsContainer = () => {

  const [groups, setGroups] = useState<IGroup[]>([]);
	const [loading, setloading] = useState(true);

	const fetchGroups = async () => {
		const groups = await GroupsApiWrapper.getGroups();
    console.log(groups);
		setGroups(groups);
    setloading(false);
	};

  
	useEffect(() => {
		setloading(true);
		fetchGroups();
	}, []);

  //Handle pagination
  const prev = () => {};
  const next = () => {};
  const first = () => {};
  const last = () => {};

  if(loading) return <Loading />;

  return (
    <>
      <Header />
      <GroupsList groups={groups} />
      <Pagination prev={prev} next={next} first={first} last={last} />
    </>
  );
};

export default GroupsContainer;
