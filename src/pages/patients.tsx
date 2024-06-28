import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DashboardTemplate, IndoorPatientTemplate } from "~/components";
import ManageTile from "~/components/elements/ManageTile";
import PatientForm from "~/components/form/PatientForm";
import TileLayout from "~/components/layout/TileLayout";
import CustomTable from "~/components/tables/CustomTable";
import { api } from "~/utils/api";

const Patients: React.FC = () => {
  const width = [
    "w-[7%]",
    "w-[15%]",
    "w-[7%]",
    "w-[5%]",
    "w-[10%]",
    "w-[15%]",
    "w-[20%]",
    "w-[10%]",
    "w-[10%]",
  ];
  const headers = [
    "patientId",
    "name",
    "gender",
    "age",
    "BloodGroup",
    "contactNumber",
    "email",
    "dob",
    "BedNo",
  ];

  const router = useRouter();
  const { active_page } = router.query;
  const [initialFetch, setInitialFetch] = useState(false);
  const {
    data: data,
    isFetched,
    isError,
    isLoading,
  } = api.patient.getAllPatient.useQuery();

  useEffect(() => {
    if (!initialFetch && isFetched) {
      console.log(data);

      setInitialFetch(true);
    }
  }, [initialFetch, isFetched]);
  if (isError || isLoading || data === undefined) {
    return <div></div>;
  }
  return (
    <DashboardTemplate active_tile="Patients">
      <div className="h-full w-full p-[1%]">
        <div className="h-full w-full">
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
            <div className="h-[90%] w-full">
              <TileLayout
                tileone={"Patient List"}
                tiletwo={"Add Patient"}
                activeTabProps={active_page === "Table" ? "tabOne" : "tabTwo"}
                children1={
                  <CustomTable headers={headers} widths={width} data={data} />
                }
                children2={<PatientForm />}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default Patients;
