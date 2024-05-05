'use client';

import React, {useEffect, useState} from 'react';
import ValueDisplay from "@/app/valueDisplay";

function ClientComponent() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])


    if (isClient) {
        return (
            <div className={"space-y-2"}>
                <p className={"text-xl font-bold"}>Rendered clientside</p>

                <div>
                    <ValueDisplay description={"From local env file"} value={process.env.localFileVariable}/>
                    <ValueDisplay description={"From local env file prepended with NEXT_PUBLIC"}
                                  value={process.env.NEXT_PUBLIC_localFileVariable}/>
                </div>

                <div>
                    <ValueDisplay description={"From dev env file"} value={process.env.devFileVariable}/>
                    <ValueDisplay description={"From dev env file prepended with NEXT_PUBLIC"}
                                  value={process.env.NEXT_PUBLIC_devFileVariable}/>
                </div>

                <div>
                    <ValueDisplay description={"From prod env file"} value={process.env.prodFileVariable}/>
                    <ValueDisplay description={"From prod env file prepended with NEXT_PUBLIC"}
                                  value={process.env.NEXT_PUBLIC_prodFileVariable}/>
                </div>

                <div>
                    <ValueDisplay description={"Provided env variable with NEXT_PUBLIC"}
                                  value={process.env.NEXT_PUBLIC_HELLO}/>
                    <ValueDisplay description={"Provided env variable"} value={process.env.secret}/>
                </div>

            </div>
        );
    }
}

export default ClientComponent;