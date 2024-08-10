
import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';



export default function NewDropMenu() {
 
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      ),
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item (disabled)
        </a>
      ),
      icon: <LogoutOutlined />,
      disabled: true,
    },
  ];

  return (
    <Dropdown  menu={{ items }}>
      <a onClick={e => e.preventDefault()}>
        <Space>
         Victor Wilson
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
