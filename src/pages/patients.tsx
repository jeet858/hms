import React from 'react'
import { DashboardTemplate } from '~/components'
import ManageTile from '~/components/elements/ManageTile'
import PatientForm from '~/components/form/PatientForm'
import TileLayout from '~/components/layout/TileLayout'

const Patients:React.FC = () => {
  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full p-[1%]">
        <div className='h-full w-full'>
          <div>
            <ManageTile
              title="Manage Doctor"
              doctors={10}
              patients={50}
              nurses={20}
              pharmacists={5}
              laboratorists={3}
              accountants={2}
            />
          </div>
          <div className="h-[90%] w-full">
            <div className="w-full h-[90%]">
              <TileLayout
                tileone={"Patient List"}
                tiletwo={"Add Patient"}
                children1={<></>}
                children2={<PatientForm />}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  )
}

export default Patients
