import Link from 'next/link'
import { AiFillPieChart } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'
import { PiCurrencyDollarSimple } from 'react-icons/pi'
import { SlPresent } from 'react-icons/sl'
import { BiMoneyWithdraw } from 'react-icons/bi';

const Dashboard = () => {
  return (
    <aside className="flex flex-col rounded-tl-[6px] border-r-[1px] border-r-[#374151] rounded-bl-[6px] bg-[#202A37] w-[255px] h-full px-[10px] pt-[30px]">
      <h1 className="flex h-[50px] px-[8px]">
        <AiFillPieChart
          color='#9CA3AF'
          size={20}
          style={{
            marginRight: '20px'
          }}
        />
        <p className="text-[#E4E6EA]"> Dashboard </p>
      </h1>
      <ul className="flex flex-col text-[#0F182A] w-full h-full justify-start ">
            <li className="flex justify-center w-full h-[45px] rounded-[6px] px-[8px] hover:bg-[#4D5C6A]">
              <Link className="flex w-full h-full justify-start items-center text-[#E4E6EA]" href="/users">
                <HiUsers
                  color='#9CA3AF'
                  size={20}
                  style={{
                    marginRight: '20px'
                  }}
                />
                Users
              </Link>
            </li>
            <li className="flex justify-center w-full h-[45px] rounded-[6px] px-[8px] hover:bg-[#4D5C6A]">
              <Link className="flex w-full h-full justify-start items-center text-[#E4E6EA]" href="http://">
                <PiCurrencyDollarSimple
                  color='#9CA3AF'
                  size={20}
                  style={{
                    marginRight: '20px'
                  }}
                />
                Points
              </Link>
            </li>
            <li className="flex justify-center w-full h-[45px] rounded-[6px] px-[8px] hover:bg-[#4D5C6A]">
              <Link className="flex w-full h-full justify-start items-center text-[#E4E6EA]" href="http://">
                <SlPresent
                  color='#9CA3AF'
                  size={20}
                  style={{
                    marginRight: '20px'
                  }}
                />
                Rewards
              </Link>
            </li>
            <li className="flex justify-center w-full h-[45px] rounded-[6px] px-[8px] hover:bg-[#4D5C6A]">
              <Link className="flex w-full h-full justify-start items-center text-[#E4E6EA]" href="http://">
                <BiMoneyWithdraw
                  color='#9CA3AF'
                  size={20}
                  style={{
                    marginRight: '20px'
                  }}
                />
                Redemptions
              </Link>
            </li>
          </ul>
    </aside>
  )
}

export default Dashboard