// DetailModal.tsx

import React, { useState } from 'react'


// a modal to display detailed information about the account
export default function DetailModal() {
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 w-full max-w-screen-sm">
            <div className="flex justify-between">
              <h2 className="text-lg">Account Detail</h2>
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
              <p>Address: 0x1234567890abcdef</p>
              <p>Balance: 1000</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}