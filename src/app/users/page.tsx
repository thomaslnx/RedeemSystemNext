'use client'
import { useState, ChangeEvent, FormEvent, HTMLFormElement, useEffect } from 'react'
import useSWR from 'swr'
import { FaUserAlt } from 'react-icons/fa'
import { PiCurrencyDollarSimple } from 'react-icons/pi'

import Dashboard from '../components/Dashboard'
const allUsers = 'http://localhost:3001/users'
let userId = 0
const userById = `http://localhost:3001/users/${userId}`
const searchAllUsers = (allUsers) => fetch(allUsers).then(res => res.json())
const searchUserById = (userById) => fetch(userById).then(res => res.json())

function SearchUserById (user) {
  const { data: userByIdSearch, isLoading, error } = useSWR('http://localhost:3001/users/' + user, searchUserById)
  return data
}

const Users = ({ users }) => {
  const { data: allUsersSearch, isLoading: allUsersLoading, error: allUsersError } = useSWR(allUsers, searchAllUsers)
  const [userId, setUserId] = useState<number>()
  const [userSearched, setUserSearched] = useState()
  const { data: userByIdSearch, isLoading, error } = useSWR('http://localhost:3001/users/' + userId, searchUserById)

  useEffect(() => {}, [userId, userSearched])
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserId(e.currentTarget.elements[0].value)
    setUserId(e.currentTarget.elements[0].value)
    SearchUserById(userId)
  }

  const handleInputChange = (e: ChangeEvent) => {
    setUserId(e.target.value)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
      <div className="flex rounded-[6px] w-[80%] h-[900px] bg-[#202A37]">
        <Dashboard />
        <div className="flex flex-col w-[75%] h-[76px] mt-[30px]">
          <h1 className="text-[24px] ml-[24px] font-bold mb-[30px]"> All users </h1>

          <form
            className="flex ml-[20px] mb-[24px]"
            onSubmit={onSubmit}

          >
            <input
              className="w-[382px] h-[35px] rounded-[6px] bg-[#374151] border-[1px] border-[#4b5563] px-[10px] placeholder:text-[13px] focus:outline-none focus:border-[#3B82F6]"
              type="text"
              value={userId}
              placeholder="Search for users"
              onChange={handleInputChange}
            />
          </form>
          {
            allUsersLoading ? (
              <p> Is loading... </p>
            ) : userByIdSearch !== undefined ? userByIdSearch.map(user => (
              <div key={user.id} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                    <FaUserAlt
                      color='#9CA3AF'
                      size={40}
                      style={{
                        marginRight: '20px'
                      }}
                    />
                  <ul key={user.id} className="flex flex-col justify-center h-[90px] ">
                    <li className="text-[#cccccc] text-[24px] font-bold leading-[20px]">
                      {user.name}
                    </li>
                    <li className="text-[#cccccc] text-[12px] leading-[20px]">
                      {user.username}
                    </li>
                    <li className="text-[#cccccc] text-[12px] leading-[20px]">
                      {user.email}
                    </li>
                  </ul>

                </div>
            )) :
            allUsersSearch.map(user => (
                <div key={user.id} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                    <FaUserAlt
                      color='#9CA3AF'
                      size={40}
                      style={{
                        marginRight: '20px'
                      }}
                    />
                  <ul key={user.id} className="flex flex-col justify-center h-[90px] ">
                    <li className="text-[#cccccc] text-[24px] font-bold leading-[20px]">
                      {user.name}
                    </li>
                    <li className="text-[#cccccc] text-[12px] leading-[20px]">
                      {user.username}
                    </li>
                    <li className="text-[#cccccc] text-[12px] leading-[20px]">
                      {user.email}
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

export default Users