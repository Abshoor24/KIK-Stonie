import { ShoppingCart } from 'lucide-react'
import React from 'react'

export default function Cart() {
  return (
    <div>
         <button className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:bg-gray-800 transition">
                <ShoppingCart size={18} />
              </button>
    </div>
)
}
