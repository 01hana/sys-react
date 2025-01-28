import {
  TeamOutlined,
  LineChartOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

import logo from "@images/logo/logo.svg";

const menuIems = [
  {
    key: "/dashboard",
    icon: <LineChartOutlined />,
    label: "資訊面板",
  },
  {
    key: "/employees",
    icon: <ContactsOutlined />,
    label: "司機管理",
  },
  {
    key: "/accounts",
    icon: <TeamOutlined />,
    label: "帳戶管理",
    children: [
      {
        key: "/accounts/usergroups",
        label: "帳戶群組",
      },
      {
        key: "/accounts/users",
        label: "帳戶資訊",
      },
    ],
  },
];

export default function SideMenu() {
  const navigate = useNavigate();

  const navigateToPage = (e) => {
    navigate(e.key);
  };

  return (
    <>
      <div style={{ margin: "24px 0" }}>
        <img src={logo} alt="logo" />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        items={menuIems}
        style={{ borderInlineEnd: "none" }}
        onClick={navigateToPage}
      />
    </>
  );
}
