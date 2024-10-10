import React from 'react';
import students from './data.json';

const StudentTable = () => {
  return (
    <>
      <div className="md:h-[460px] container mx-auto py-5 px-4 md:px-10 bg-custom-gradient">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center my-4 text-white pb-5">Student Table</h2>
        
        <div className="overflow-x-auto">
          <table className="md:w-[900px] mx-auto bg-white bg-opacity-30  text-sm md:text-base">
            <thead className="bg-white opacity-60">
              <tr>
                <th className="text-left py-2 px-2 md:px-4 border">ID</th>
                <th className=" text-left py-2 px-2 md:px-4 border">Name</th>
                <th className="text-left  py-2 px-2 md:px-4 border">Class Timing</th>
                <th className="text-left py-2 px-2 md:px-4 border">Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="py-2 px-2 md:px-4 text-white ">{student.id}</td>
                  <td className="py-2 px-2 md:px-4 text-white">{student.name}</td>
                  <td className="py-2 px-2 md:px-4 text-white">{student.ClassTimeing}</td>
                  <td className="py-2 px-2 md:px-4 text-white">{student.Course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
