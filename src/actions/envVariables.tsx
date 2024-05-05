'use server'

interface EnvVariablesResult {
    actionVariable: string | undefined
    publicActionVariable: string |undefined
}

async function EnvVariables(): Promise<EnvVariablesResult> {
    'use server';

    return {
        actionVariable: process.env.actionVariable || undefined,
        publicActionVariable: process.env.NEXT_PUBLIC_actionVariable || undefined
    }
}

export default EnvVariables;