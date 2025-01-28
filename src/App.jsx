import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardView from "@/pages/dashboard/DashboardView";
import UserView from "@/pages/accounts/users/UserView";

import SideMenu from "./pages/layouts/SideMenu";
import HeaderTop from "./pages/layouts/HeaderTop";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <Layout>
        <Sider
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider"
        >
          <SideMenu />
        </Sider>

        <Layout>
          <Header
            className="header"
            style={{
              padding: 0,
            }}
          >
            <HeaderTop collapsed={collapsed} onClick={setCollapsed} />
          </Header>

          <Content
            style={{
              padding: 24,
            }}
          >
            <Routes>
              <Route path="/dashboard" element={<DashboardView />} />
              <Route path="/accounts/users" element={<UserView />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
