import React from 'react'
import tw from 'tailwind-styled-components'
import {useState} from 'react'

const ErrorModal = () => {
    const [closee,setclosee] = useState(true)


    const closeHandler = ()=> {

    setclosee(false)

    }

    const ErrorModall = <Wrapper><Conatiner>
    <Error>Error!</Error>
    <Message>Check The Age, it's must be > 0</Message>
    <Button type="button" onClick={closeHandler}>X</Button>
</Conatiner></Wrapper>

    return (
        <div>
        
         {
            closee?ErrorModall:null
            
         }   
        </div>
    )
}
const Button = tw.button`text-white absolute left-40 top-40 bg-red-500 px-9 rounded-full`
const Message = tw.div`absolute left-7 text-white font-mono bg-red-400 px-3 py-3 rounded-xl`  
const Conatiner = tw.div``
const Error = tw.div`absolute top-6 bg-red-400 px-9 left-7 text-white rounded-xl text-xl font-mono`
const Wrapper = tw.div`
absolute bg-red-500 top-40 px-60 py-20 rounded-xl
`

export default ErrorModal
