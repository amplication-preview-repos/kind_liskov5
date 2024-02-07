import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BuildingProjectList } from "./buildingProject/BuildingProjectList";
import { BuildingProjectCreate } from "./buildingProject/BuildingProjectCreate";
import { BuildingProjectEdit } from "./buildingProject/BuildingProjectEdit";
import { BuildingProjectShow } from "./buildingProject/BuildingProjectShow";
import { ConstructionList } from "./construction/ConstructionList";
import { ConstructionCreate } from "./construction/ConstructionCreate";
import { ConstructionEdit } from "./construction/ConstructionEdit";
import { ConstructionShow } from "./construction/ConstructionShow";
import { AdressList } from "./adress/AdressList";
import { AdressCreate } from "./adress/AdressCreate";
import { AdressEdit } from "./adress/AdressEdit";
import { AdressShow } from "./adress/AdressShow";
import { HazardousSubstanceList } from "./hazardousSubstance/HazardousSubstanceList";
import { HazardousSubstanceCreate } from "./hazardousSubstance/HazardousSubstanceCreate";
import { HazardousSubstanceEdit } from "./hazardousSubstance/HazardousSubstanceEdit";
import { HazardousSubstanceShow } from "./hazardousSubstance/HazardousSubstanceShow";
import { ComponentList } from "./component/ComponentList";
import { ComponentCreate } from "./component/ComponentCreate";
import { ComponentEdit } from "./component/ComponentEdit";
import { ComponentShow } from "./component/ComponentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={" EvaluerBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="BuildingProject"
          list={BuildingProjectList}
          edit={BuildingProjectEdit}
          create={BuildingProjectCreate}
          show={BuildingProjectShow}
        />
        <Resource
          name="Construction"
          list={ConstructionList}
          edit={ConstructionEdit}
          create={ConstructionCreate}
          show={ConstructionShow}
        />
        <Resource
          name="Adress"
          list={AdressList}
          edit={AdressEdit}
          create={AdressCreate}
          show={AdressShow}
        />
        <Resource
          name="HazardousSubstance"
          list={HazardousSubstanceList}
          edit={HazardousSubstanceEdit}
          create={HazardousSubstanceCreate}
          show={HazardousSubstanceShow}
        />
        <Resource
          name="Component"
          list={ComponentList}
          edit={ComponentEdit}
          create={ComponentCreate}
          show={ComponentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
