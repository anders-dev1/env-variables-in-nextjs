import React from 'react';
import ValueDisplay from "@/components/valueDisplay";

interface Props {
    localFileVariable: string | undefined,
    publicLocalFileVariable: string | undefined,
    devFileVariable: string | undefined,
    publicDevFileVariable: string | undefined,
    prodFileVariable: string | undefined,
    publicProdFileVariable: string | undefined,
    providedVariable: string | undefined,
    publicProvidedVariable: string | undefined,
    actionProvidedVariable: string | undefined,
    publicActionProvidedVariable: string | undefined,
}

function ComponentValues({
                             localFileVariable,
                             publicLocalFileVariable,
                             devFileVariable,
                             publicDevFileVariable,
                             prodFileVariable,
                             publicProdFileVariable,
                             providedVariable,
                             publicProvidedVariable,
                             actionProvidedVariable,
                             publicActionProvidedVariable
                         }: Props) {
    return (
        <div className={"space-y-2"}>
            <div className={"space-y-2 p-2 outline outline-1 outline-amber-500"}>
                <p className={"text-amber-500"}>.env files</p>
                <div>
                    <ValueDisplay description={"From local env file"} value={localFileVariable}/>
                    <ValueDisplay description={"From local env file prepended with NEXT_PUBLIC"}
                                  value={publicLocalFileVariable}/>
                </div>

                <div>
                    <ValueDisplay description={"From dev env file"} value={devFileVariable}/>
                    <ValueDisplay description={"From dev env file prepended with NEXT_PUBLIC"}
                                  value={publicDevFileVariable}/>
                </div>

                <div>
                    <ValueDisplay description={"From prod env file"} value={prodFileVariable}/>
                    <ValueDisplay description={"From prod env file prepended with NEXT_PUBLIC"}
                                  value={publicProdFileVariable}/>
                </div>
            </div>

            <div>
                <ValueDisplay description={"Provided env variable"} value={providedVariable}/>
                <ValueDisplay description={"Provided env variable with NEXT_PUBLIC"}
                              value={publicProvidedVariable}/>
            </div>

            <div>
                <ValueDisplay description={"Provided action variable"} value={actionProvidedVariable}/>
                <ValueDisplay description={"Provided action variable with NEXT_PUBLIC"}
                              value={publicActionProvidedVariable}/>
            </div>

        </div>
    );
}

export default ComponentValues;