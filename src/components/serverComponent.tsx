import React from 'react';
import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";
import ComponentValues from "@/components/componentValues";
import EnvVariables from "@/actions/envVariables";

interface Props {
    noStoreEnabled: boolean;
}

async function ServerComponent({noStoreEnabled}: Props) {
    if (noStoreEnabled){
        noStore();
    }

    const localFileVariable = process.env.localFileVariable;
    const publicLocalFileVariable = process.env.NEXT_PUBLIC_localFileVariable;
    const devFileVariable = process.env.devFileVariable;
    const publicDevFileVariable = process.env.NEXT_PUBLIC_devFileVariable;
    const prodFileVariable = process.env.prodFileVariable;
    const publicProdFileVariable = process.env.NEXT_PUBLIC_prodFileVariable;
    const providedVariable = process.env.providedVariable;
    const publicProvidedVariable = process.env.NEXT_PUBLIC_PROVIDED_VARIABLE;

    const result = await EnvVariables();

    return(
        <div>
            <p className={"text-xl font-bold"}>Rendered serverside {noStoreEnabled && "with noStore()"}</p>
            <ComponentValues
                localFileVariable={localFileVariable}
                publicLocalFileVariable={publicLocalFileVariable}
                devFileVariable={devFileVariable}
                publicDevFileVariable={publicDevFileVariable}
                prodFileVariable={prodFileVariable}
                publicProdFileVariable={publicProdFileVariable}
                providedVariable={providedVariable}
                publicProvidedVariable={publicProvidedVariable}
                actionProvidedVariable={result.actionVariable}
                publicActionProvidedVariable={result.publicActionVariable}
            />
        </div>
    )
}

export default ServerComponent;
