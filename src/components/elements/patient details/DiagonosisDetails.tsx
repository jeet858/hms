// import React from 'react'

// const DiagonosisDetails:React.FC = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default DiagonosisDetails


import React, { useState } from 'react';
import TableWithAddButton from '~/components/tables/TableWithAddButton';

const App: React.FC = () => {
  const [rows, setRows] = useState([
    { id: 'DOC 101', doctorName: 'Dr. M. Kamruzzaman Mazumder', date: '21-06-2024', time: '08:35', prescription: 'PDF' },
    { id: 'DOC 102', doctorName: 'Pr. Dr. Md. Abdus Sobur', date: '21-06-2024', time: '16:40', prescription: 'PDF' },
    { id: 'DOC 103', doctorName: 'Dr. AKM Sajedur Rahman', date: '20-06-2024', time: '18:55', prescription: 'PDF' },
  ]);

  const handleAddMore = () => {
    // Logic to add more rows
    const newRow = { id: `DOC ${rows.length + 101}`, doctorName: 'New Doctor', date: '22-06-2024', time: '12:00', prescription: 'PDF' };
    setRows([...rows, newRow]);
  };

  return (
    <div className="container mx-auto p-4 flex-col">
      <div className='pb-2'>
       <TableWithAddButton rows={rows} onAddMore={handleAddMore} title='Doctor Attending'/>
      </div>
      <div className='pb-2'>
       <TableWithAddButton rows={rows} onAddMore={handleAddMore} title='Tests Done'/>
      </div>
      <div>
       <TableWithAddButton rows={rows} onAddMore={handleAddMore} title={'Drugs'} />
      </div>
    </div>
  );
};

export default App;
