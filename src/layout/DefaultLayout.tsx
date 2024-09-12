import { ReactElement } from 'react'
import { NavBar } from '@/components'
export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <NavBar />
      {children}
      <div>Footer</div>
    </div>
  )
}
