import React, { useEffect, useState } from "react";
import TeamMembers from "../../Components/TeamCompo/TeamMembers";
import DocumentTitle from "react-document-title";

const Team = () => {

  const [useMember,setMember]=useState([])
  let api = `http://localhost:3000/member`
  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data =>setMember(data) )
}, []);
// console.log(useMember);

  return (
    <>
      <DocumentTitle title="Oli Ullah | Team Members"></DocumentTitle>
      <div className="my-16 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        <h1 className="m-4 text-center text-3xl mt-8 font-bold" >Team Members </h1>
       
          
          
         


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
