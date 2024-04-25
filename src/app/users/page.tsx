import axios from 'axios'

const Users = async () => {
  const users = await axios.get('http://localhost:3001/users')

  console.log('users value: ', users.data)
  return (
    <div className="flex flex-column justify-center bg-[#ffffff] w-full h-[2/3]">
      {
        users.data.map(user => (
          <div key={user.id} className="w-[300px] border-[1px] rounded-[6px] border-[black]">
            <p className="text-[#cccccc]">
              {user.name}
            </p>
            <p className="text-[#cccccc]">
              {user.username}
            </p>
            <p className="text-[#cccccc]">
              {user.email}
            </p>
          </div>
        ))
      }
      <p> just a paragraph </p>
    </div>
  )
}

export default Users