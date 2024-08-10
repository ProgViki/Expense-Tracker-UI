import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import NewDropMenu from './NewDropMenu';

// type Props = { user?: User };

export default function Navbar() {
  return (
    <div className="flex justify-end items-center h-full">
      <div className="space-x-4 flex text-sm font-semibold justify-center items-center text-gray-600 mr-8 cursor-pointer">
        <BellOutlined className="text-2xl " />
        <SettingOutlined className="text-xl " />

        <NewDropMenu />
      </div>
    </div>
  );
}
