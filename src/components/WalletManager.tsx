'use client'

import React, { useState } from 'react'
import { getSolanaAccountFromMnemonicPaths } from '@/utils/wallet'
import { Account } from '@/types/wallet'

export default function WalletManager() {
  const [mnemonic, setMnemonic] = useState('')
  const [password, setPassword] = useState('')
  const [accounts, setAccounts] = useState<Account[]>([])

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-3 flex-grow bg-black gap-[2px]'>
      <div className="w-full px-4 bg-white">
        <div className="flex flex-col  w-full max-w-screen-sm">
          <label>Mnemonic</label>
          <textarea
            name="mnemonic"
            className="w-full px-4 py-2 text-black border-black border-2 rounded focus:outline-black"
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
          />
          <label>Phrase</label>
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
            const accounts = getSolanaAccountFromMnemonicPaths(
              mnemonic,
              password,
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            )
            setAccounts(accounts)
          }}
        >
          Go
        </button>
      </div>
      <div className='col-span-2 bg-white'>
        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>SecretKey</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {accounts.map((account, i) => (
              <tr key={i}>
                <td>{account.Address()}</td>
                <td>{account.SecretKey()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
