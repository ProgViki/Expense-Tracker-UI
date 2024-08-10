import { Link, useLocation } from 'react-router-dom'
import Activities from '../../public/react.svg'
import Vendor from '../../public/react.svg'
import ArrowDown from '../../public/vite.svg'
import Category from '../../public/vite.svg'
import Listing from '../../public/vite.svg'
import { useState } from 'react'

import { twMerge } from 'tailwind-merge'
import Expense from '../pages/Expense';

type MenuItemProps = {
  extraStyle?: string
  img?: string
  href: string
  children: React.ReactNode
  className?: string
  drop?: string
}

function MenuItems(props: MenuItemProps) {
  const selected = useLocation().pathname === props.href
  return (
    <div
      className={`${props.extraStyle} py-[2px] text-[#0A96CC] hover:border-l-4 hover:border-[#0A96CC] hover:text-[#0A96CC] 
    active:text-[#0A96CC] active:border-[#0A96CC] active:border-l-4`}
    >
      <Link to={props.href}>
        <div
          className={`flex hover:text-[#0A96CC]  justify-between items-center py-[8px] pl-[24px] font-semibold text-[14px] 
          ${selected ? 'text-[#0A96CC] border-[#0A96CC]' : 'text-[#262626]'}`}
        >
          <div className="flex gap-[16px]">
            {props.img && <img src={props.img} className="w-[24px] " />}
            <span className="">{props.children}</span>
          </div>

          <div>
            <img src={props.drop} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function SideNav() {
  const [openSubmenu, setOpenSubmenu] = useState(false)

  // // const { data: authUser, isLoading: authUserLoading } = useGetAuthUserQuery()
  // const isAdmin =
  //   !authUserLoading && authUser?.role === UserRole.ADMIN ? true : false

  return (
    <div className=" py-[24px] space-y-[64px] w-full">
      <section className="text-center w-full space-y-2 bg-[#EFF7FB]">
        
        <p className="text-center font-bold text-xl">Expense Tracker</p>
      </section>
      <section className="">
        <MenuItems img={Activities} href={'/activities'}>
          <div className="flex items-center space-x-2">
            <span>Home</span>
            {/* <small className="px-2 text-white bg-blue-500 rounded-lg ">1</small> */}
          </div>
        </MenuItems>
        <MenuItems img={Listing} href={'/listing'}>
          Trips
        </MenuItems>

            <MenuItems img={Category} href={'/categories'}>
              Expenses
            </MenuItems>
            <MenuItems img={Category} href={'/categories'}>
              Advances
            </MenuItems>
            <MenuItems img={Category} href={'/categories'}>
              Purchase Request
            </MenuItems>
            <MenuItems img={Category} href={'/categories'}>
              Cards
            </MenuItems>
            <MenuItems img={Category} href={'/categories'}>
              Approvals
            </MenuItems>
            <MenuItems img={Category} href={'/categories'}>
              Analytics
            </MenuItems>
            <MenuItems img={Category} href={'/categories'}>
              My Settings
            </MenuItems>
      </section>
    </div>
  )
}
