import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import SearchComponent from "../search/search";
import LmsIcon from "assets/icons/lms.svg";
import "./header.styles.scss";
import { IEmployee } from "types/shared";
import EmployeesApiWrapper from "utils/apiWrappers/employeesApiWrapper";

import './header.styles.scss';
import GearComponent from './profile/gear.component';

const Header = () => {
  const [searchResults, setSearchResults] = useState<IEmployee[] | null>(null);
  const [errorOnSearch, setErrorOnSearch] = useState<boolean>(false);

  const beginSearch = async (filterSearch: string, searchText: string) => {
    setErrorOnSearch(false);
    const params =
      filterSearch === "Name"
        ? { fullname: searchText }
        : filterSearch === "Project"
        ? { projectName: searchText }
        : {};

    try {
      const employees = await EmployeesApiWrapper.getEmployees(params);

      if (employees) return setSearchResults(employees);
    } catch (error) {
      console.log(error);
      setErrorOnSearch(true);
    }
    setSearchResults(null);
  };

	return (
		<div className="headerRoot">
			<AppBar className="appBar">
				<Toolbar className="toolBarContainer">
					<div className="logoWrapper">
						<Link to="/" className="logoWrapperLink" id="lmsHeaderLogo">
							<img src={LmsIcon} className="lmsIcon" alt='logo' />
							<div className="lmsText">Layout Management System</div>
						</Link>
					</div>
					<SearchComponent
						beginSearch={beginSearch}
						searchResults={searchResults}
						clearResults={() => setSearchResults(null)}
						error={errorOnSearch}
					/>
					<div className="profileWrapper">
						<GearComponent />						
						<div className="profileButton">
							<span>CC</span>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
