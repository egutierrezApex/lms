import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './HOC/container/container.hoc';
import HomePage from './pages/homePage/homePage';
import Header from './components/header/header.component';

//containers
import ZonesContainer from './containers/zones/index';
import ZoneContainer from './containers/zones/individual';
import FormContainer from './containers/dev/form';
import DrawMenuContainer from './containers/dev/draw-menu';
import GroupsContainer from './containers/groups';
import WorkstationContainer from './containers/workstations';

import './App.scss';
import Theme from './utils/theme';
import BuildingOptions from './components/buildings-options/buildings-options';
import AssignSeatPage from 'pages/assignSeatPage';
import ZoneEditor from 'components/zoneEditor';
import TabsHome from './components/tabsHome';
import SingleGroup from 'containers/singleGroup';

function App() {
	return (
		<Theme>
			<div className="App" data-test="appComponent">
				<Header />
				
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/assign-seats" element={<AssignSeatPage />} />
						<Route path="/zones" element={<ZonesContainer />} />
						<Route path="/zones/:zoneId" element={<ZoneContainer match={undefined} />} />
						<Route path="/dev/form-elements" element={<FormContainer />} />
						<Route
							path="/dev/draw-menu"
							element={
								<DrawMenuContainer
									onFiguresClick={function (): void {
										throw new Error('Function not implemented.');
									}}
									onEditClick={function (): void {
										throw new Error('Function not implemented.');
									}}
									onDeleteClick={function (): void {
										throw new Error('Function not implemented.');
									}}
									onSaveClick={function (): void {
										throw new Error('Function not implemented.');
									}}
								/>
							}
						/>
						<Route path="/dev/building" element={<BuildingOptions />} />
						<Route path="/groups" element={<GroupsContainer />} />
						<Route path="/groups/create" element={<SingleGroup />} />
						<Route path="/groups/edit/:groupId" element={<SingleGroup />} />
						<Route path="/workstation" element={<WorkstationContainer />} />
						<Route path="/dev/zone-editor" element={<ZoneEditor />} />
						<Route path="/dev/tabs" element={<TabsHome tabSelected={0} activeBuilding={undefined}/>} />
					</Routes>
	
			</div>
		</Theme>
	);
}

export default App;
