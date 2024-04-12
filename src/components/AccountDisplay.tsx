'use client'

// AccountDisplay.tsx is a component that displays the account information

import React, { useState } from 'react'
import { getSolanaAccountFromSeedPaths, getSolanaPath } from '@/utils/wallet'
import DetailModal from './DetailModal'
import { ChevronLeft, ChevronRight } from './Icons'

interface AccountDisplayProps {
  seed: Buffer | null
}

export default function AccountDisplay({ seed }: AccountDisplayProps) {
  const [page, setPage] = useState(1)
  const [inputPage, setInputPage] = useState('')
  return (
    <>
      {/* tab */}
      {/* <div className="flex space-x-3 mb-4">
        <button className="px-2 border-2 border-black rounded-sm">
          solana
        </button>
        <button className="px-2 border-2 border-black rounded-sm">
          ethereum
        </button>
      </div> */}
      {seed && (
        <table className="w-full">
          <thead className="text-left">
            <tr className="border-b-2 border-black">
              <th className="w-1/5 ">path</th>
              <th className="w-2/5">Address</th>
              <th className="w-2/5 text-right">SecretKey</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => {
              const pageId = (page - 1) * 10 + id
              const account = getSolanaAccountFromSeedPaths(seed, pageId)
              return (
                <tr key={pageId} className="border-b border-black">
                  <td>{getSolanaPath(pageId)}</td>
                  <td>{account.Address()}</td>
                  <td className="flex items-center justify-end">
                    {/* {summarizeString(account.SecretKey())} */}
                    <DetailModal
                      address={account.Address()}
                      secretKey={account.SecretKey()}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
      {seed && (
        <div className="flex items-center mt-6">
          <button
            className="flex items-center justify-center text-2xl"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1)
              }
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="flex text-2xl mx-5 leading-[24px] h-[24px]">
            {page}
          </span>
          <button
            className="flex items-center justify-center text-2xl"
            onClick={() => {
              setPage(page + 1)
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <input
            className="ml-4 border-2 border-black rounded w-24 h-9 px-2 flex justify-center items-center py-2 text-center outline-none focus:border-black focus:border-3"
            type="number"
            placeholder="page"
            value={inputPage}
            onChange={(e) => {
              setInputPage(e.target.value)
            }}
          />
          <button
            className="ml-4 font-bold"
            onClick={() => {
              if (inputPage) {
                setPage(parseInt(inputPage))
                setInputPage('')
              }
            }}
          >
            Go
          </button>
        </div>
      )}
    </>
  )
}
