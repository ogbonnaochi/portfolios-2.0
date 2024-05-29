import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    subject: string
    message:string;
  }
 
type Props={};

function ContactMe({}: Props) {


    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href='mailto: donatusochinanwata1996@gmail.com?subject ${formData.subject}&body= hi my name is ${formData.name}, ${formData.message} $({formData.email})'
      

    }




  return (
<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        
        <div className='flex flex-col space-y-10 bg-white p-10 shadow-xl rounded-lg'>
            <h4 className='text-4xl font-semibold text-center'>
                I HAVE JUST GOT WHAT YOU NEED.{'   '} <br />
                <span className='decoration-[#F7AB0A] underline'>LETS TALK.</span>
            </h4>

            <div className='flex flex-col items-center space-y-10'>
                <div className='flex items-center justify-center'>
                    <PhoneIcon style={{ color: '#F7AB0A', height: '1.75rem', width: '1.75rem' }} className='animate-pulse mr-2'/>
                    <div className='text-2xl'>+234 8105727270</div>
                </div>

                <div className='flex items-center justify-center'>
                    <EnvelopeIcon style={{ color: '#F7AB0A', height: '1.75rem', width: '1.75rem' }} className='animate-pulse mr-2'/>
                    <div className='text-2xl'>donatusochinanwata1996@gmail.com</div>
                </div>

                <div className='flex items-center justify-center'>
                    <MapPinIcon style={{ color: '#F7AB0A', height: '1.75rem', width: '1.75rem' }} className='animate-pulse mr-2'/>
                    <div className='text-2xl'>36 Ajayi Street Anthony Onike Lagos</div>
                </div>
            </div>

            {/* Form starts here */}
            <div className='flex flex-col items-center space-y-5'>
                <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-4 w-full max-w-md mx-auto'>
                    <div className='flex flex-col space-y-2'>
                        <input{... register('name')} placeholder='Name' className='contactInput' type='text'style={{color: 'white', backgroundColor: 'black'}} />
                        <input {... register('email')} placeholder='Email' className='contactInput' type='Email' style={{color: 'white', backgroundColor: 'black'}}/>
                        <input {... register('subject')} placeholder='Subject' className='contactInput' type='text' style={{color: 'white', backgroundColor: 'black'}}/>
                        <textarea {... register('message')} placeholder='Message' className='contactInput' rows={4} style={{color: 'white', backgroundColor: 'black'}}/>
                    </div>
                    <button 
                        type='submit'
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
                        Submit
                    </button>
                </form>
            </div>
            {/* Form ends here */}
        </div>
    </div>
  )
}

export default ContactMe
