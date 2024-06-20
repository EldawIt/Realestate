"use client"

import DetailsUser from "@/Components/Dashborad/pages/RequestShops/detailsUser/DetailsUser"

function page({params}) {
  return (
    <div>
      <DetailsUser params={params.id} />
    </div>
  )
}

export default page
