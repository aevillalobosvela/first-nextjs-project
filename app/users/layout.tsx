import { NextPage } from 'next'

interface Props {
  children: React.ReactNode;
}

const UserLayout: NextPage<Props> = ({ children }) => {
  return <div>
    <h1>User Layout</h1>
    
    {children}</div>
}

export default UserLayout
