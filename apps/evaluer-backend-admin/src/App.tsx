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
      </Admin>
    </div>
  );
};

export default App;
