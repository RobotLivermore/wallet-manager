// DetailModal.tsx

import React, { useState } from 'react'

// interface
interface DetailModalProps {
  address: string
  secretKey: string
}

// a modal to display detailed information about the account
export default function DetailModal({ address, secretKey }: DetailModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className="font-bold rounded px-4 py-1"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Detail
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
          <div className="bg-white p-4 w-full max-w-screen-sm border-4 h-[50vh] border-black rounded-3xl">
            <div className="flex justify-between">
              <h2 className="text-xl">Account Detail</h2>
              <button
                className="border-black border-2 rounded px-4 py-1"
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <p className='text-lg'>Address: </p>
              <p className='mt-2'>{address}</p>
              <p className='mt-4 text-lg'>SecretKey:</p>
              <textarea
                className="w-full mt-2 px-4 py-2 text-black border-black border-2 rounded focus:outline-black"
                value={secretKey}
                readOnly
              />
              <p className='text-sm text-red-800'> ‼️ Please do not copy all private keys at once; instead, copy them in several batches of random data to prevent malicious programs from monitoring your clipboard.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
