import { getUserWorkSpace } from '@/app/data/workspace/get-user-workspace'
import CreateWorkspaceForm from '@/components/workspace/create-worksapce-form'
import { redirect } from 'next/navigation'
import React from 'react'

const CreateWorkSpace = async () => {

  const data = await getUserWorkSpace()

  const workspaceData = data?.data


  if(!workspaceData?.onboardingCompleted) redirect("/onboarding")



  return (
    <div>
      <CreateWorkspaceForm/>

    
    </div>
  )
}

export default CreateWorkSpace