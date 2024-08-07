import React, { useEffect, useState } from "react";
import TeamMembers from "../../Components/TeamCompo/TeamMembers";
import DocumentTitle from "react-document-title";

const Team = () => {

  const [c_data,setCdata]=useState('member')
  const [useMember,setMember]=useState([])
  let api = `http://localhost:1010/${c_data}`
  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data =>setMember(data) )
}, [c_data]);
// console.log(useMember);

  return (
    <>
      <DocumentTitle title="Oli Ullah | Team Members"></DocumentTitle>
      <div className="my-16 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        <h1 className="m-4 text-center text-3xl mt-8 font-bold" >Team Members </h1>
        <div className="mb-4 ">
          <div className=""> 
            <button onClick={()=> setCdata('member')} className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">All</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Degital Markating</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm" >Grapich Degine</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm" > Web Devlopment</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm" > IT Saport </button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm" > Others</button>
          </div>
          
         <div className="">
          
            <button onClick={()=> setCdata('kurigram')}  className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Kurigram</button>
            <button className="m-1 bg-blue-gray-50 overflow-hidden rounded-md p-1 px-2 hover:bg-opacity-85 text-sm"m-1 >Lalmonirhat</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Gaibandha</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm"m-1 >Rangpur</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm"m-1 >Dnajpur</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm"m-1 >Panchagor</button>
            <button className="m-1 bg-blue-gray-50 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm"m-1 >Nilphamari</button>
          </div>
          
        </div>


        <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
        {
          useMember.map((member) => <TeamMembers key={member._id} element={member} ></TeamMembers>)
        }
        </div>
      </div>
    </>
  );
};

export default Team;
