'use client';

import React from 'react';

interface Props{
    description: string,
    value: string | undefined
}

function ValueDisplay({description, value} : Props) {
    return (
        <>
            <p>{description}: <span className={"text-green-600"}>{value}</span></p>
        </>
    );
}

export default ValueDisplay;