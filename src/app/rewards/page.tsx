'use client'
import { useState, ChangeEvent, FormEvent, HTMLFormElement, useEffect } from 'react'
import useSWR from 'swr'
import { SlPresent } from 'react-icons/sl'

import Dashboard from '../components/Dashboard'
const allRewards = 'http://localhost:3001/rewards'
const searchAllRewards = (allRewards) => fetch(allRewards).then(res => res.json())

function SearchAllRewards () {
  const { data: allRewardsSearch, isLoading: allRewardsLoading, error: allRewardsError } = useSWR(allRewards, searchAllRewards)
  return data
}

const Rewards = () => {
  const { data: allRewardsSearch, isLoading: allRewardsLoading, error: allRewardsError } = useSWR(allRewards, searchAllRewards)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUserId(e.currentTarget.elements[0].value)
    setUserId(e.currentTarget.elements[0].value)
  }

  const handleInputChange = (e: ChangeEvent) => {
    setUserId(e.target.value)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
      <div className="flex rounded-[6px] w-[80%] h-[900px] bg-[#202A37]">
        <Dashboard />
        <div className="flex flex-col w-[75%] h-[76px] mt-[30px]">
          <h1 className="text-[24px] ml-[24px] font-bold mb-[30px]"> All rewards </h1>

          {/*
            ** No needed in this component
          */}

          {/* <form
            className="flex ml-[20px] mb-[24px]"
            onSubmit={onSubmit}

          >
            <input
              className="w-[382px] h-[35px] rounded-[6px] bg-[#374151] border-[1px] border-[#4b5563] px-[10px] placeholder:text-[13px] focus:outline-none focus:border-[#3B82F6]"
              type="text"
              value={userId}
              placeholder="Search for reward"
              onChange={handleInputChange}
            />
          </form> */}
          {
            allRewardsLoading ? (
              <p> Is loading... </p>
            ) : allRewardsSearch.map(reward => (
              <div key={reward.id} className="flex w-full items-center border-y-[1px] border-y-[#374151] pl-[30px] mb-[-1px]">
                  <SlPresent
                    color='#9CA3AF'
                    size={40}
                    style={{
                      marginRight: '20px'
                    }}
                  />
                <ul key={reward.id} className="flex flex-col justify-center h-[90px] ">
                  <li className="text-[#cccccc] text-[24px] font-bold leading-[20px] mb-[8px]">
                    {reward.name}
                  </li>
                  <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                    <p className="mr-[5px]">Product Description: </p>
                    {reward.description}
                  </li>
                  <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                    <p className="mr-[5px]">Points Required: </p>
                    {reward.points_required}
                  </li>
                  <li className="flex flex-row text-[#cccccc] text-[12px] leading-[15px]">
                    <p className="mr-[5px]">Quantity Available: </p>
                    {reward.quantity_available}
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

export default Rewards