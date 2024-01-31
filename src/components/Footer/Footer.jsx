import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div className="h-[389px] relative flex-col bg-slate-700 m-auto flex items-center">
        <p className="text-lg mb-[40px] mt-[10px] text-white pt-[30px]">Contact</p>
        <p className="mt-[10px]">Hemanth Kumar</p>
        <p className="mt-[10px]">React JS Intern</p>
        <p className="mt-[10px]"><EmailIcon />gujjalahemanthkumar789@gmail.com</p>        
    </div>
  )
}
