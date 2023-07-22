'use client'

import { useEffect } from "react"

import { FC } from 'react'
import EmptyState from "./components/EmptyState"

interface errorProps {
    error: Error
}

const error: FC<errorProps> = ({
    error
}) => {
    useEffect(() => {
        console.error(error)
    },[error])

    return (
        <EmptyState 
        title="Uh Oh"
        subtitle="Something went wrong!" />
    )
}

export default error