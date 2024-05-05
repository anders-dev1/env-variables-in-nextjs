import React from 'react';
import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";

interface Props {
    noStoreEnabled: boolean;
}

function ServerComponent({noStoreEnabled}: Props) {
    if (noStoreEnabled){
        noStore();
    }

    return (
        <div className={"space-y-2"}>
            <p className={"text-xl font-bold"}>Rendered serverside {noStoreEnabled && "with noStore()"}</p>
            <div>
                <p>From local env file: {process.env.localFileVariable}</p>
                <p>From local env file prepended with NEXT_PUBLIC: {process.env.NEXT_PUBLIC_localFileVariable}</p>
            </div>

            <div>
                <p>From dev env file: {process.env.devFileVariable}</p>
                <p>From dev env file prepended with NEXT_PUBLIC: {process.env.NEXT_PUBLIC_devFileVariable}</p>
            </div>

            <div>
                <p>From prod env file: {process.env.prodFileVariable}</p>
                <p>From prod env file prepended with NEXT_PUBLIC: {process.env.prodFileVariable}</p>
            </div>

            <div>
                <p>Provided env variable with NEXT_PUBLIC: {process.env.NEXT_PUBLIC_HELLO}</p>
                <p>Provided env variable: {process.env.secret}</p>
            </div>
        </div>
    );
}

export default ServerComponent;
