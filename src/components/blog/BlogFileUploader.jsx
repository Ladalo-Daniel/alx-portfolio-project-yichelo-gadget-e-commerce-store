
import Image from 'next/image'
import {useCallback, useState} from 'react'
import {FileWithPath, useDropzone} from 'react-dropzone'




function BlogFileUploader({ fieldChange, mediaUrl }) {

    const [file, setFile] = useState([])
    const [fileUrl, setFileUrl] = useState(mediaUrl)

    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles)
        fieldChange(acceptedFiles)
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))
    }, [fieldChange])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {
            "image/*": ['.jpg', '.png', '.jpeg', '.svg']
        }
    })

  return (
    <div {...getRootProps()} className= 'flex flex-center cursor-pointer rounded-xl gap-2 bg-dark-3'>
      <input {...getInputProps()} className='cursor-pointer' />
      {
        fileUrl ?
          (
            <>
                <div className='flex flex-1 w-full items-center p-5 lg:p-10'>
                  <Image
                      src={fileUrl}
                      alt='file'
                      width={1000}
                      height={1000}
                      className= ' ring-2'
                  />
                  {!fileUrl && <p className="text-primary-600 cursor-pointer base-medium">Select a file to upload</p>}
                </div>
            </>
          ): (
               
                <Image
                    src='/logo.png'
                    alt='file'
                    size='lg'
                    className={'w-28 h-28 object-cover cursor-pointer'}
                />)
      }
    </div>
  )
}

export default BlogFileUploader