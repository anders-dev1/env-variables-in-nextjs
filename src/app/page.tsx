import {unstable_noStore as noStore} from 'next/cache'
// import {useEffect, useState} from "react";
import EnvVariables from "@/actions/envVariables";

export default function Home() {
    noStore();
    // const [envVariables, setEnvVariables] = useState("")
    
    // useEffect(() =>{
    //     EnvVariables().then(result => {
    //         setEnvVariables(result.something);
    //     });
    // });

    return (
        <div>
            <p>From local env file: {process.env.localFileVariable}</p>
            <p>From dev env file: {process.env.devFileVariable}</p>
            <p>From prod env file: {process.env.prodFileVariable}</p>
            <p>Public: {process.env.NEXT_PUBLIC_HELLO}</p>
            <p>Private: {process.env.secret}</p>
            {/*<p>Secret from action: pst</p>*/}
        </div>
    );
}
