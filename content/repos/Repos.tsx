import { GetServerSideProps } from "next"
import { useEffect, useState} from "react";

interface Repo { 
    name:string
}


export default function Repos(){
    const [repos,setRepos]=useState([])


    async function getUserRepos(username:string) {
        const repos = await fetch(`https://api.github.com/users/${username}/repos`);
        return repos;
     }
     useEffect(()=>{
        getUserRepos("WahyudiSetiawn")
     .then(response => response.json())
     .then(data => {
        setRepos(data) 
     });

     },[])
       

    return (
        <div>
            <ul>
                {
                    repos.map((repo:Repo) => 
                    (<li key={repo.name}>{repo.name}</li>)
                    )
                }
            </ul>
        </div>

    )
}
