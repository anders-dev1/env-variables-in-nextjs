'use client';

import React, {useEffect, useState} from 'react';
import ValueDisplay from "@/app/valueDisplay";
import ComponentValues from "@/app/componentValues";

function ClientComponent() {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const localFileVariable = process.env.localFileVariable;
    const publicLocalFileVariable = process.env.NEXT_PUBLIC_localFileVariable;
    const devFileVariable = process.env.devFileVariable;
    const publicDevFileVariable = process.env.NEXT_PUBLIC_devFileVariable;
    const prodFileVariable = process.env.prodFileVariable;
    const publicProdFileVariable = process.env.NEXT_PUBLIC_prodFileVariable;
    const providedVariable = process.env.NEXT_PUBLIC_PROVIDED_VARIABLE;
    const publicProvidedVariable = process.env.NEXT_PUBLIC_PROVIDED_VARIABLE;

    if (isClient) {
        return <ComponentValues
            localFileVariable={localFileVariable}
            publicLocalFileVariable={publicLocalFileVariable}
            devFileVariable={devFileVariable}
            publicDevFileVariable={publicDevFileVariable}
            prodFileVariable={prodFileVariable}
            publicProdFileVariable={publicProdFileVariable}
            providedVariable={providedVariable}
            publicProvidedVariable={publicProvidedVariable}
        />
    }
}

export default ClientComponent;