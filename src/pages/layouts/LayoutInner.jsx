import SideMenu from "./pages/layouts/SideMenu";
import HeaderTop from "./pages/layouts/HeaderTop";

import DashboardView from "@/pages/dashboard/DashboardView";
import UserView from "@/pages/accounts/users/UserView";

import { Route, Routes } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function LayoutInner() {
  const [collapsed, setCollapsed] = useState(false);

  return (
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

        <BrowserRouter>
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
        </BrowserRouter>
      </Layout>
    </Layout>
  );
}
