"use client"
import TemplateFileTree from '@/features/playground/components/tempalte-file-tree';
import { useFileExplorer } from '@/features/playground/hooks/useFileExplorer';
import { usePlayground } from '@/features/playground/hooks/usePlayground';
import { useParams } from 'next/navigation'
import React from 'react'


const Page = () => {
    const { id } = useParams<{ id: string }>();
    const { playgroundData, templateData, isLoading, error, saveTemplateData } =
        usePlayground(id);
    const {
        activeFileId,
        closeAllFiles,
        openFile,
        closeFile,
        editorContent,
        updateFileContent,
        handleAddFile,
        handleAddFolder,
        handleDeleteFile,
        handleDeleteFolder,
        handleRenameFile,
        handleRenameFolder,
        openFiles,
        setTemplateData,
        setActiveFileId,
        setPlaygroundId,
        setOpenFiles,
    } = useFileExplorer();

    return (<>
        <TemplateFileTree
            data={templateData}
        // onFileSelect={handleFileSelect}
        // selectedFile={activeFile}
        // title="File Explorer"
        // onAddFile={wrappedHandleAddFile}
        // onAddFolder={wrappedHandleAddFolder}
        // onDeleteFile={wrappedHandleDeleteFile}
        // onDeleteFolder={wrappedHandleDeleteFolder}
        // onRenameFile={wrappedHandleRenameFile}
        // onRenameFolder={wrappedHandleRenameFolder}
        />

        <div>{id}</div>
        <div>{playgroundData?.title || "code "}</div>
    </>
    )
}

export default Page