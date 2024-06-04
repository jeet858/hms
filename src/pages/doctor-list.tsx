import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { DashboardTemplate } from "~/components";

interface Column {
  id:
    | "iden"
    | "name"
    | "gender"
    | "specialization"
    | "department"
    | "contactnumber"
    | "emailid"
    | "timing"
    | "days";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "iden", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 200 },
  { id: "gender", label: "Gender", minWidth: 50 },
  {
    id: "specialization",
    label: "Specialization",
    minWidth: 170,
    align: "center",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "department",
    label: "Department",
    minWidth: 70,
    align: "center",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "contactnumber",
    label: "ContactNumber",
    minWidth: 100,
    align: "center",
    // format: (value: number) => value.toFixed(2),
  },
  // {
  //   id: "emailid",
  //   label: "Email-ID",
  //   minWidth: 100,
  //   align: "center",
  // },
  {
    id: "timing",
    label: "Timing",
    minWidth: 130,
    align: "center",
  },
  {
    id: "days",
    label: "Days",
    minWidth: 100,
    align: "center",
  }
];

interface Data {
  iden: string;
  name: string;
  gender: string;
  specialization: string;
  department: string;
  contactnumber: number;
  emailid: string;
  timing: string;
  days: string;
}

function createData(
  iden: string,
  name: string,
  gender: string,
  specialization: string,
  department: string,
  contactnumber: number,
  emailid: string,
  timing: string,
  days: string,
): Data {
  // const density = population / size;
  return {
    iden,
    name,
    gender,
    specialization,
    department,
    contactnumber,
    emailid,
    timing,
    days,
  };
}

const rows = [
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat"),
  createData("DOC101", "Dr. M. Kamruzzaman Mazumder", "Male", "MBBS, MD(Medicine)", "Medicine", 9830012300, "abc@getMaxListeners.com", "10AM-12PM", "Mon-Sat")
];

const DoctorList: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <DashboardTemplate active_tile="Doctors">
      <div className="m-5 ml-20 max-h-max ">
        <div className="flex space-x-3 my-8">
          <div className="font-sans text-cyan-700 text-xl mt-1">Available Doctors</div>
          <div className="font-sans text-cyan-700 text-3xl">22</div>
        </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.iden}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </DashboardTemplate>
  );
};
export default DoctorList;
