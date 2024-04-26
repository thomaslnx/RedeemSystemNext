'use client'
import { useState, ChangeEvent, FormEvent, HTMLFormElement, useEffect } from 'react'
import useSWR from 'swr'
import { FaUserAlt } from 'react-icons/fa'
import { BiMoneyWithdraw } from 'react-icons/bi';

import Dashboard from '../components/Dashboard'
const allUsersRedemptions = 'http://localhost:3001/redemptions'
let userId = 0
const userById = `http://localhost:3001/redemptions/redemptions/history/${userId}`
const searchAllUsersRedemptions = (allUsersRedemptions) => fetch(allUsersRedemptions).then(res => res.json())
const searchRedemptionHistorysByUserId = (userById) => fetch(userById).then(res => res.json())

function SearchRedeemHistoryByUserId (userById) {
  const { data: redemptionsHisotryByUserIdSearch, isLoading, error: redemptionsHistoryByUserIdError } = useSWR('http://localhost:3001/redemptions/history/' + userById, searchRedemptionHistorysByUserId)
  return data
}

function SearchAllUsersRedemptions () {
  const { data: allUsersRedemptionsSearch, isLoading: allUsersRedemptionsLoading, error: allUsersRedemptionsError } = useSWR(allUsersRedemptions, searchAllUsersRedemptions)
  return data
}

const Redemptions = () => {
  const { data: allUsersRedemptionsSearch, isLoading: allUsersRedemptionsLoading, error: allUsersRedemptionsError } = useSWR(allUsersRedemptions, searchAllUsersRedemptions)
  const [userId, setUserId] = useState<number>()
  const [userSearched, setUserSearched] = useState()
  const { data: redemptionsHisotryByUserIdSearch, isLoading, error: redemptionsHistoryByUserIdError } = useSWR('http://localhost:3001/redemptions/history/' + userId, searchRedemptionHistorysByUserId)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserId(e.currentTarget.elements[0].value)
    setUserId(e.currentTarget.elements[0].value)
    SearchRedeemHistoryByUserId(userId)
  }

  const handleInputChange = (e: ChangeEvent) => {
    setUserId(e.target.value)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
      <div className="flex rounded-[6px] w-[80%] h-[900px] bg-[#202A37]">
        <Dashboard />
        <div className="flex flex-col w-[75%] h-[76px] mt-[30px]">
          <h1 className="text-[24px] ml-[24px] font-bold mb-[30px]"> All users redemptions </h1>

          <form
            className="flex ml-[20px] mb-[24px]"
            onSubmit={onSubmit}

          >
            <input
              className="w-[382px] h-[35px] rounded-[6px] bg-[#374151] border-[1px] border-[#4b5563] px-[10px] placeholder:text-[13px] focus:outline-none focus:border-[#3B82F6]"
              type="text"
              value={userId}
              placeholder="Search for user redemptions history"
              onChange={handleInputChange}
            />
          </form>
          {
            allUsersRedemptionsLoading ? (
              <p> Is loading... </p>
            ) : redemptionsHisotryByUserIdSearch === undefined ? allUsersRedemptionsSearch.map(userRedeem => (
                <div key={userRedeem.id} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                    <FaUserAlt
                      color='#9CA3AF'
                      size={40}
                      style={{
                        marginRight: '20px'
                      }}
                    />
                  <ul key={userRedeem.id} className="flex flex-col justify-center h-[90px]">
                    <li className="text-[#cccccc] text-[24px] font-bold leading-[20px] mb-[8px]">
                      {userRedeem.user_id}
                    </li>
                    <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                      <p className="mr-[5px]">Reward Id: </p>
                      {userRedeem.reward_id}
                    </li>
                    <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                      <p className="mr-[5px]">Points Spent: </p>
                      {userRedeem.points_spent}
                    </li>
                  </ul>
                </div>
              )) : redemptionsHisotryByUserIdSearch.map(userHistory => (
                <div key={userHistory.historyId} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                    <BiMoneyWithdraw
                      color='#9CA3AF'
                      size={40}
                      style={{
                        marginRight: '20px'
                      }}
                    />
                  <ul key={userHistory.historyId} className="flex flex-col justify-center h-[90px] ">
                    <li className="text-[#cccccc] text-[24px] font-bold leading-[20px] mb-[8px]">
                      {userHistory.rewardName}
                    </li>
                    <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                      <p className="mr-[5px]">Redemption Date: </p>
                      {userHistory.redemptionDate}
                    </li>
                    <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                      <p className="mr-[5px]">Points Spent: </p>
                      {userHistory.pointsSpent}
                    </li>
                  </ul>
  
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Redemptions