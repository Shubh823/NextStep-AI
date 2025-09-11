import { resumeSchema } from '@/app/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

const EntryForm = ({type,entries,onChange}) => {


      const { 
             register,
             handleSubmit:handleValidation,
             watch,
             setValue,
             formState: { errors },
         } = useForm({
             resolver: zodResolver(resumeSchema),
             defaultValues: {
                    title:"",
                    organization:"",
                    startDate:"",
                    endDate:"",
                    description:"",
                    current:false
             }
         });

         const current =watch("current");

  return (
    <div>
      
    </div>
  )
}

export default EntryForm
