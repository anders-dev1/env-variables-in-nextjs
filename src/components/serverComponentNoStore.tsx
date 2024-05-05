import React from 'react';
import ComponentValues from "@/components/componentValues";


function ServerComponentNoStore() {

    const localFileVariable = process.env.localFileVariable;
    const publicLocalFileVariable = process.env.NEXT_PUBLIC_localFileVariable;
    const devFileVariable = process.env.devFileVariable;
    const publicDevFileVariable = process.env.NEXT_PUBLIC_devFileVariable;
    const prodFileVariable = process.env.prodFileVariable;
    const publicProdFileVariable = process.env.NEXT_PUBLIC_prodFileVariable;
    const providedVariable = process.env.providedVariable;
    const publicProvidedVariable = process.env.NEXT_PUBLIC_PROVIDED_VARIABLE;

    return(
        <div>
            <p className={"text-xl font-bold"}>Rendered serverside with noStore()</p>
            <ComponentValues
                localFileVariable={localFileVariable}
                publicLocalFileVariable={publicLocalFileVariable}
                devFileVariable={devFileVariable}
                publicDevFileVariable={publicDevFileVariable}
                prodFileVariable={prodFileVariable}
                publicProdFileVariable={publicProdFileVariable}
                providedVariable={providedVariable}
                publicProvidedVariable={publicProvidedVariable}
            />
        </div>
    )
}

export default ServerComponentNoStore;
