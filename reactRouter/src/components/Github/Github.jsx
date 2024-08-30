import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // const [data, setData] = useState([]);
    const data = useLoaderData();
    // useEffect(() => {
    //    fetch('https://api.github.com/users/Ansh022')
    //      .then((response) => response.json())
    //      .then((data) => {
    //          console.log(data);
    //          setData(data)
    //      })
 
    // },[])

    

    return (
      <div className="bg-gray-600 text-white text-3xl p-4">
        Github follower: {data.followers}
        <br />
        <br />
        <img
          src={data.avatar_url}
          alt="Git picture"
          width={300}
          className="text-center"
        />
      </div>
    );
}

export default Github

export const githubinfo = async () => {
    const response = await fetch("https://api.github.com/users/Ansh022")
    return response.json()
}
 