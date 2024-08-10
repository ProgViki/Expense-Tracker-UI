

import { ReactNode} from 'react';
import SideNav from './SideNav';
import Header from './Navbar';
import Sidebar from './Sidebar';

export default function Layout(props: {children: ReactNode}) {

  

  return (
    <div className=" flex w-screen ">
        <div className='h-[100vh] bg-[#EFF7FB] hidden md:flex w-[230px]'>
             <SideNav />
             {/* <Sidebar /> */}
        </div>
      
      <div className="overflow-hidden">
        <div className='h-[72px] w-[100vw] md:w-[calc(100vw-230px)] bg-white px-[24px] border-b-[1px] border-[var(--greygrey-400-f-0-f-1-f-3, #F0F1F3)]'>
                <Header />
        </div>
        

        <div className='h-[calc(100vh-122px)] w-[100vw] md:w-[calc(100vw-230px)] px-[24px] py-[32px] overflow-y-auto bg-[#F0F1F3] '>
                {props.children}
        </div>

        
       
      </div>
    </div>
  )
}


