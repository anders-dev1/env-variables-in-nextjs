'use client';

import React, {useEffect, useState} from 'react';
import ValueDisplay from "@/components/valueDisplay";
import ComponentValues from "@/components/componentValues";
import EnvVariables from "@/actions/envVariables";
import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";

interface Props {
    noStoreEnabled: boolean;
}

function ClientComponent({noStoreEnabled}: Props) {
    if (noStoreEnabled){
        noStore();
    }

    const [isClient, setIsClient] = useState(false);
    const [actionVariable, setActionVariable] = useState<string | undefined>(undefined);
    const [publicActionVariable, setPublicActionVariable] = useState<string | undefined>(undefined);

    useEffect(() => {
        setIsClient(true);

        EnvVariables().then(result => {
            setActionVariable(result.actionVariable);
            setPublicActionVariable(result.publicActionVariable);
        });
    }, [])

    const localFileVariable = process.env.localFileVariable;
    const publicLocalFileVariable = process.env.NEXT_PUBLIC_localFileVariable;
    const devFileVariable = process.env.devFileVariable;
    const publicDevFileVariable = process.env.NEXT_PUBLIC_devFileVariable;
    const prodFileVariable = process.env.prodFileVariable;
    const publicProdFileVariable = process.env.NEXT_PUBLIC_prodFileVariable;
    const providedVariable = process.env.providedVariable;
    const publicProvidedVariable = process.env.NEXT_PUBLIC_providedVariable;

    if (isClient) {
        return (
            <div>
                <p className={"text-xl font-bold"}>Rendered clientside {noStoreEnabled && "with noStore()"}</p>
                <ComponentValues
                    localFileVariable={localFileVariable}
                    publicLocalFileVariable={publicLocalFileVariable}
                    devFileVariable={devFileVariable}
                    publicDevFileVariable={publicDevFileVariable}
                    prodFileVariable={prodFileVariable}
                    publicProdFileVariable={publicProdFileVariable}
                    providedVariable={providedVariable}
                    publicProvidedVariable={publicProvidedVariable}
                    actionProvidedVariable={actionVariable}
                    publicActionProvidedVariable={publicActionVariable}
                />
            </div>
        )
    }
}

export default ClientComponent;