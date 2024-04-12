// SeedImporter component is a form that allows users to import a seed phrase to create a new wallet.

import React, { useState } from 'react'
import { getSeed } from '@/utils/wallet'
import { generateMnemonic } from 'bip39'

interface SeedImporterProps {
  onImport: (seed: Buffer) => void
}

function SeedImporter({ onImport }: SeedImporterProps) {
  const [mnemonic, setMnemonic] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
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
      <div className="flex space-x-4">
        <button
          className="border-black border-2 rounded px-4 py-1 mt-4"
          onClick={() => {
            const _mnemonic = generateMnemonic()
            setMnemonic(_mnemonic)
            const s = getSeed(_mnemonic, password)
            onImport(s)
          }}
        >
          Generate
        </button>
        <button
          className="border-black border-2 rounded px-4 py-1 mt-4"
          onClick={() => {
            const s = getSeed(mnemonic, password)
            onImport(s)
          }}
        >
          Go
        </button>
      </div>
    </>
  )
}

export default SeedImporter
