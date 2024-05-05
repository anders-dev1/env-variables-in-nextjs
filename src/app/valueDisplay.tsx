'use client';

import React from 'react';

interface Props {
    description: string,
    value: string | undefined
}

function ValueDisplay({description, value}: Props) {
    const valueSpan = value
        ? <span className={"text-green-600"}>{value}</span>
        : <span className={"text-red-600"}>Undefined</span>

    return (
        <>
            <p>{description}: {valueSpan}</p>
        </>
    );
}

export default ValueDisplay;