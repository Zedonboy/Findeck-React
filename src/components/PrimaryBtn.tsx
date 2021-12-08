import React from "react"
function PrimaryBtn (props : any) {
    return <button
    {...props}
    className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
  >
  </button>
}

export default React.memo(PrimaryBtn)