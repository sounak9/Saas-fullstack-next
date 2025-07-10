import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <div>
      <h1 className='text-2xl underline'>welcome to my saas app</h1>
      <Button className='bg-black text-white hover:bg-gray-800'>
        Let's go
      </Button>
    </div>
  )
}

export default Page