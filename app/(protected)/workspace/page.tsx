import { getUserWorkSpace } from '@/app/data/workspace/get-user-workspace'
import React from 'react'

const Workspace = async () => {
    const data = await getUserWorkSpace()
  return (
    <div>
        
    </div>
  )
}

export default Workspace