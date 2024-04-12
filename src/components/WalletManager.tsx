'use client'

import React, { useState } from 'react'
import AccountDisplay from './AccountDisplay'
import SeedImporter from './SeedImporter'

export default function WalletManager() {
  const [seed, setSeed] = useState<Buffer | null>(null)

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 flex-grow bg-black gap-[2px]">
      <div className="w-full p-4 bg-white">
        <SeedImporter onImport={setSeed} />
      </div>
      <div className="col-span-2 p-4 bg-white">
        <AccountDisplay seed={seed} />
      </div>
    </div>
  )
}
