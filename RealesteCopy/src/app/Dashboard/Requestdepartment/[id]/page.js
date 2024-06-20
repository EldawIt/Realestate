"use client"
import DetailsUser from "@/Components/Dashborad/pages/RequestDepartment/detailsUser/DetailsUser";
 
function page({params}) {

  return (
    <div>
       <DetailsUser params={params.id}/>
    </div>
  )
}

export default page
