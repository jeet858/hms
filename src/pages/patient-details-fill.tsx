import React,{useState} from 'react'
import { DashboardTemplate } from '~/components'
import ContactDetails from '~/components/form/patient/ContactDetails'
import PersonalInfo from '~/components/form/patient/PersonalInfo'

const PatientDetailsFill = () => {
    const [formNo,setFormNo]=useState<number>(1)

    const renderForm=()=>{
        switch(formNo){
            case 1:
                return <PersonalInfo/>
                break;
            case 2:
                return <ContactDetails/>
                break;
        }
    }

  return (
    <DashboardTemplate active_tile='Doctors'>
        <div className='w-full h-full py-[5%]'>
            <div className='w-full  h-full'>
                <div className='w-full h-[10%] bg-blue-700 '>
                    <button className='w-[10%] bg-red-600 h-full' onClick={()=>setFormNo(1)}></button>
                    <button className='w-[10%] bg-green-600 h-full' onClick={()=>setFormNo(2)}></button>
                </div>
                <div className='w-full h-[90%] '>
                    {renderForm()}
                </div>
            </div>
        </div>
    </DashboardTemplate>
  )
}

export default PatientDetailsFill
