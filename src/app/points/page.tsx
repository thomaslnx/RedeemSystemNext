'use client'
import { useState, ChangeEvent, FormEvent, HTMLFormElement, useEffect } from 'react'
import useSWR from 'swr'
import { FaUserAlt } from 'react-icons/fa'
import { PiCurrencyDollarSimple } from 'react-icons/pi'

import Dashboard from '../components/Dashboard'
const allUsersPoints = 'http://localhost:3001/points/balance'
let userId = 0
const userById = `http://localhost:3001/points/balance/${userId}`
const searchAllUsersPoints = (allUsersPoints) => fetch(allUsersPoints).then(res => res.json())
const searchPointsByUserId = (userById) => fetch(userById).then(res => res.json())

function SearchPointsByUserId (userById) {
  const { data: userPointsByIdSearch, isLoading, error: userPointsByIdError } = useSWR('http://localhost:3001/points/balance/' + userId, searchPointsByUserId)
  return data
}

function SearchAllUsersPoints () {
  const { data: allUsersPointsSearch, isLoading: allUsersPointsLoading, error: allUsersPointsError } = useSWR(allUsersPoints, searchAllUsersPoints)
  return data
}

const Points = () => {
  const { data: allUsersPointsSearch, isLoading: allUsersPointsLoading, error: allUsersPointsError } = useSWR(allUsersPoints, searchAllUsersPoints)
  const [userId, setUserId] = useState<number>()
  const [userSearched, setUserSearched] = useState()
  const { data: userPointsByIdSearch, isLoading, error: userPointsByIdError } = useSWR('http://localhost:3001/points/balance/' + userId, searchPointsByUserId)

  useEffect(() => {}, [userId, userSearched])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserId(e.currentTarget.elements[0].value)
    setUserId(e.currentTarget.elements[0].value)
    SearchAllUsersPoints(userId)
  }

  const handleInputChange = (e: ChangeEvent) => {
    setUserId(e.target.value)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
      <div className="flex rounded-[6px] w-[80%] h-[900px] bg-[#202A37]">
        <Dashboard />
        <div className="flex flex-col w-[75%] h-[76px] mt-[30px]">
          <h1 className="text-[24px] ml-[24px] font-bold mb-[30px]"> All users points </h1>

          <form
            className="flex ml-[20px] mb-[24px]"
            onSubmit={onSubmit}

          >
            <input
              className="w-[382px] h-[35px] rounded-[6px] bg-[#374151] border-[1px] border-[#4b5563] px-[10px] placeholder:text-[13px] focus:outline-none focus:border-[#3B82F6]"
              type="text"
              value={userId}
              placeholder="Search for users balance"
              onChange={handleInputChange}
            />
          </form>
          {
            allUsersPointsLoading ? (
              <p> Is loading... </p>
            ) : userPointsByIdSearch === undefined || userPointsByIdSearch.length === 0 ? allUsersPointsSearch.map(userPoint => (
              <div key={userPoint.id} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                  <FaUserAlt
                    color='#9CA3AF'
                    size={40}
                    style={{
                      marginRight: '20px'
                    }}
                  />
                <ul key={userPoint.id} className="flex flex-col justify-center h-[90px]">
                  <li className="text-[#cccccc] text-[24px] font-bold leading-[20px] mb-[8px]">
                    {userPoint.name}
                  </li>
                  <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                    <p className="mr-[5px]">Email: </p>
                    {userPoint.email}
                  </li>
                  <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                    <p className="mr-[5px]">Points Balance: </p>
                    {userPoint.points_balance}
                  </li>
                </ul>

              </div>
            )) : userPointsByIdSearch.map(userPoint => (
              <div key={userPoint.id} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                    <FaUserAlt
                      color='#9CA3AF'
                      size={40}
                      style={{
                        marginRight: '20px'
                      }}
                    />
                  <ul key={userPoint.id} className="flex flex-col justify-center h-[90px] ">
                    <li className="text-[#cccccc] text-[24px] font-bold leading-[20px] mb-[8px]">
                      {userPoint.name}
                    </li>
                    <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                      <p className="mr-[5px]">Email: </p>
                      {userPoint.email}
                    </li>
                    <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                      <p className="mr-[5px]">Points balance: </p>
                      {userPoint.points_balance}
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

export default Points