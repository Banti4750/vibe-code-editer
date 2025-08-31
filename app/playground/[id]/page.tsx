"use client"
import { usePlayground } from '@/features/playground/hooks/usePlayground';
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
    const { id } = useParams<{ id: string }>();
    const { playgroundData, templateData, isLoading, error, saveTemplateData } =
        usePlayground(id);
    console.log(templateData)
    return (<>
        <div>{id}</div>
        <div>{playgroundData?.title || "code "}</div>
    </>
    )
}

export default Page