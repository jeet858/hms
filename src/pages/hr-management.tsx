import { headers } from 'next/headers'
import React from 'react'
import { data, width } from 'tailwindcss/defaultTheme'
import { DashboardTemplate } from '~/components'
import Depertment from '~/components/elements/Depertment'
import Designation from '~/components/elements/Designation'
import ManageTile from '~/components/elements/ManageTile'
import AddDoctorForm from '~/components/form/AddDoctorForm'
import TileLayout from '~/components/layout/TileLayout'
import CustomTable from '~/components/tables/CustomTable'

const HrManagement:React.FC = () => {
  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="h-full w-full p-[1%]">
        <div>
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
          <div className="h-full w-full">
            <div className="w-full">
              <TileLayout
                tileone={"Depertment"}
                tiletwo={"Designation"}
                children1={<Depertment/>}
                children2={<Designation/>}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  )
}

export default HrManagement
