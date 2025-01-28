import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export default function HeaderTop({ collapsed, onClick }) {
  return (
    <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => onClick(!collapsed)}
      style={{
        fontSize: "16px",
        width: 64,
        height: 64,
      }}
    />
  );
}
