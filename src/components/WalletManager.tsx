'use client'

import React, { useState } from 'react'
import {
  getSeed,
  getSolanaAccountFromSeedPaths,
  getSolanaPath,
} from '@/utils/wallet'
import { Account } from '@/types/wallet'
import { summarizeString } from '@/utils/format'

export default function WalletManager() {
  const [page, setPage] = useState(1)
  const [mnemonic, setMnemonic] = useState('')
  const [password, setPassword] = useState('')
  const [seed, setSeed] = useState<Buffer | null>(null)

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 flex-grow bg-black gap-[2px]">
      <div className="w-full p-4 bg-white">
        <div className="flex flex-col  w-full max-w-screen-sm">
          <label className="mb-1">Mnemonic</label>
          <textarea
            name="mnemonic"
            className="w-full px-4 py-2 text-black border-black border-2 rounded focus:outline-black"
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
          />
          <label className="mt-2 mb-1">Phrase</label>
          <input
            type="password"
            className="w-full px-4 py-1 text-black border-black border-2 rounded focus:outline-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="border-black border-2 rounded px-4 py-1 mt-4"
          onClick={() => {
            const s = getSeed(mnemonic, password)
            setSeed(s)
          }}
        >
          Go
        </button>
      </div>
      <div className="col-span-2 p-4 bg-white">
        {/* tab */}
        <div className="flex space-x-3">
          <button className="px-2 border-2 border-black rounded-sm">
            solana
          </button>
          <button className="px-2 border-2 border-black rounded-sm">
            ethereum
          </button>
        </div>
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
                const account = getSolanaAccountFromSeedPaths(seed, id)
                return (
                  <tr key={id} className="border-b border-black">
                    <td>{getSolanaPath(id)}</td>
                    <td>{account.Address()}</td>
                    <td className="text-right">
                      {summarizeString(account.SecretKey())}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
        {seed && (
          <div className="flex item-center mt-6">
            <button className="flex items-center justify-center text-2xl">
              {'<'}
            </button>
            <span className="text-2xl mx-5">{page} </span>
            <button className="flex items-center justify-center text-2xl">
              {'>'}
            </button>
            <input className="ml-4 border-2 border-black rounded w-12 h-9 px-2 text-center" />
            <button className="ml-4 font-bold">Go</button>
          </div>
        )}
      </div>
    </div>
  )
}
