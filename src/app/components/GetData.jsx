"use client";
import { useState, useEffect } from "react";

const GetData = () => {
    const [cmsData, setCmsData] = useState(null);
    console.log("cmsData LLbeen");
    console.log(cmsData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/proxy');
                const data = await response.json();
                setCmsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Get Data</h1>
            {/* {cmsData && (
        <>
          <h2>{cmsData["first part"]["Title"]}</h2>
          <p>{cmsData["first part"]["Content"]}</p>
          <h2>{cmsData["second part"]["Title"]}</h2>
          <p>{cmsData["second part"]["Content"]}</p>
        </>
      )} */}
        </div>
    );
};

export default GetData;
