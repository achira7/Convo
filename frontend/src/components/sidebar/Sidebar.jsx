import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 p-4 flex flex-col'>
      <SearchInput />
      <div className="divider px-3 divider-success"></div>
       <Conversations />
      <LogoutButton />  
    </div>
  )
}

export default Sidebar