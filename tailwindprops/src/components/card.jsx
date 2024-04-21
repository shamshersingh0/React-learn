import React from 'react'

function card({username, btnText = "visit me"}) {
    // console.log(obj.username)
  return (
    <div classNameName="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      classNameName="z-0 h-full w-full rounded-md object-cover"
    />
    <div classNameName="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div classNameName="absolute bottom-4 left-4 text-left">
      <h1 classNameName="text-lg font-semibold text-white">{username}</h1>
      <p classNameName="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button classNameName="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText}
      </button>
    </div>
  </div>
  )
}

export default card