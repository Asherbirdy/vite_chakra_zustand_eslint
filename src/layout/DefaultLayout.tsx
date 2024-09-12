import { ReactElement } from 'react'
import { NavBar } from '@/components/common/Public/NavBar'
export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <NavBar />
      {children}
      <div>Footer</div>
    </div>
  )
}
