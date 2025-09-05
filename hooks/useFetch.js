import {toast } from 'sonner';
import React, { useState } from 'react'

const useFetch = (cb) => {
  const [data, setData] =useState(undefined);
  const [error, setError] =useState(null);
  const [loading, setLoading] =useState(false);

  const fn=async (...args)=>{
    setLoading(true);
    setError(null);
    try {
        const res=await cb(...args)
        setData(res);
        setError(null);
        
    } catch (error) {
        setError(error);
        toast.error(error.message || 'Something went wrong');
    } finally {
        setLoading(false);
    }
  }

  return {data,error,loading,fn,setData};
}

export default useFetch

