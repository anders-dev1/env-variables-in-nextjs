'use server'

interface EnvVariablesResult {
    something: string
}

async function EnvVariables(): Promise<EnvVariablesResult> {
    'use server';
    return { something: process.env.secret || "" }
}

export default EnvVariables;