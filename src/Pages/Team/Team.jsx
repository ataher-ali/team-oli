import React from "react";
import TeamMembers from "../../Components/TeamCompo/TeamMembers";
import DocumentTitle from "react-document-title";

const Team = () => {
  let Person = [
    {
      _id: 1,
      name: "Atahar",
      bio: "Web Devloper",
      edu: ["HSC", "BBA"],
    },
    {
      _id: 2,
      name: "Atahar",
      bio: "Web Devloper",
      edu: ["HSC", "BBA"],
    },
    {
      _id: 3,
      name: "Atahar",
      bio: "Web Devloper",
      edu: ["HSC", "BBA"],
    },
  ];
  return (
    <>
      <DocumentTitle title="Oli Ullah | Team "></DocumentTitle>
      <div className="my-16 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        <div>
          <div className="flex gap-2"> 
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">All</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Degital Markating</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Grapich Degine</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Web Devlopment</button>
          </div>
          <br />
          <div className="flex gap-2 "> 
            {/* <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">All</button> */}
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Kurigram</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Lalmonirhat</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Gaibandha</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Rangpur</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Dnajpur</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Panchagor</button>
            <button className="bg-blue-gray-200 rounded-md p-1 px-2 hover:bg-opacity-85 text-sm">Nilphamari</button>
          </div>
          
        </div>

        <h1>Team </h1>
        <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
          {Person.map((p) => (
            <TeamMembers key={p._id} element={p}></TeamMembers>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
