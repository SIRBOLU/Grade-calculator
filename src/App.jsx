// import { useState } from "react";

// const App = () => {
//   // const [subject, setSubject] = useState("");
//   // const [score, setScore] = useState("");
//   // const [grade, setGrade] = useState("");

//   const [subjects, setSubjects] = useState([
//     {
//       subject: "",
//       score: "",
//       grade: "",
//     },
//   ]);

//   const scoreRange = (score) => {
//     if (score >= 80) {
//       return "A+";
//     } else if (score >= 70) {
//       return "A";
//     } else if (score >= 60) {
//       return "B";
//     } else if (score >= 50) {
//       return "C";
//     } else if (score >= 45) {
//       return "D";
//     } else if (score >= 40) {
//       return "E";
//     } else {
//       return "F";
//     }
//   };

//   const handleSubjectChange = (index, value) => {
//     const newSubjects = [...subjects];
//     newSubjects[index].subject = value;
//     setSubjects(newSubjects);
//   };
//   // const handleScoreChange = (index, value) => {
//   //   const newSubjects = [...subjects];
//   //   const currentRow = newSubjects[index];
//   //   currentRow.score = value;
//   //   currentRow.grade = scoreRange(Number(value));
//   //   setSubjects(newSubjects);
//   // };

//   const handleScoreChange = (index, value) => {
//     if (value === "") {
//       const newSubjects = [...subjects];
//       newSubjects[index].score = "";
//       newSubjects[index].grade = "";
//       setSubjects(newSubjects);
//       return;
//     }

//     const score = Number(value);

//     if (score < 0 || score > 100) {
//       return;
//     }

//     const newSubjects = [...subjects];
//     newSubjects[index].score = value;
//     newSubjects[index].grade = scoreRange(score);

//     setSubjects(newSubjects);
//   };

//   const addRow = () => {
//     const newSubjects = [
//       ...subjects,
//       {
//         subject: "",
//         score: "",
//         grade: "",
//       },
//     ];

//     setSubjects(newSubjects);
//   };

//   const deleteRow = (indexToRemove) => {
//     if (subjects.length === 1) {
//       return;
//     }

//     const newSubjects = subjects.filter((_, index) => {
//       return index !== indexToRemove;
//     });

//     setSubjects(newSubjects);
//   };

//   const resetForm = () => {
//     setSubjects([
//       {
//         subject: "",
//         score: "",
//         grade: "",
//       },
//     ]);
//   };

//   return (
//     <div className="bg-green-200 h-screen flex justify-center items-center">
//       <div className="h-auto bg-green-300 p-10 rounded-2xl border-2 border-green-700">
//         <h1 className="text-3xl text-green-800 font-extrabold text-center pb-6">
//           Grade Calculator
//         </h1>

//         <p className="italic">
//           This helps students easily calculate their overall grade (%)
//         </p>

//         <p className="mb-6">
//           Input your course/subject and the corresponding score
//         </p>

//         {/* HEADINGS */}
//         <div className="flex justify-between px-4 font-bold text-green-900 mb-2">
//           <div className="w-[180px]">
//             <p>Subject</p>
//           </div>

//           <div className="w-[60px]">
//             <p>Score</p>
//           </div>

//           <div className="w-[50px]">
//             <p>Grade</p>
//           </div>

//           <div className="w-[80px] text-center">
//             <p>Actions</p>
//           </div>
//         </div>

//         {/* ROWS */}
//         <div className="max-h-[40vh] overflow-y-auto pr-2">
//           {subjects.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex justify-between items-center px-4 py-2"
//               >
//                 <div className="w-[10px] text-center font-bold text-green-800">
//                   {index + 1}
//                 </div>
//                 {/* SUBJECT */}
//                 <div>
//                   <input
//                     className="w-[180px] p-1 border-2 border-green-700"
//                     type="text"
//                     value={item.subject}
//                     onChange={(e) => handleSubjectChange(index, e.target.value)}
//                   />
//                 </div>

//                 {/* SCORE */}
//                 <div>
//                   <input
//                     className="w-[60px] p-1 border-2 border-green-700 text-center"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={item.score}
//                     onChange={(e) => handleScoreChange(index, e.target.value)}
//                   />
//                 </div>

//                 {/* GRADE */}
//                 <div>
//                   <p className="w-[50px] h-[35px] p-1 border-2 border-green-700 text-center bg-white">
//                     {item.grade}
//                   </p>
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex gap-3">
//                   <button
//                     className="bg-green-600 text-white w-8 h-8 rounded-full hover:bg-green-700"
//                     onClick={addRow}
//                   >
//                     +
//                   </button>

//                   <button
//                     className="bg-red-600 text-white w-8 h-8 rounded-full hover:bg-red-700"
//                     onClick={() => deleteRow(index)}
//                   >
//                     -
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="flex justify-end mt-6">
//           <button
//             className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
//             onClick={resetForm}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [subjects, setSubjects] = useState([
    {
      subject: "",
      score: "",
      grade: "",
      error: "",
    },
  ]);

  const scoreRange = (score) => {
    if (score >= 80) return "A+";
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 45) return "D";
    if (score >= 40) return "E";
    return "F";
  };

  const handleSubjectChange = (index, value) => {
    const newSubjects = [...subjects];
    newSubjects[index].subject = value;
    setSubjects(newSubjects);
  };

  const handleScoreChange = (index, value) => {
    // Allow the user to clear the input
    if (value === "") {
      const newSubjects = [...subjects];
      newSubjects[index].score = "";
      newSubjects[index].grade = "";
      newSubjects[index].error = "";
      setSubjects(newSubjects);
      return;
    }

    const score = Number(value);

    // Prevent invalid values from updating the score,
    // but still show an error message.
    if (score < 0 || score > 100) {
      const newSubjects = [...subjects];
      newSubjects[index].error = "Score must be between 0 and 100.";
      setSubjects(newSubjects);
      return;
    }

    const newSubjects = [...subjects];

    // Update only if the score is valid
    newSubjects[index].score = value;
    newSubjects[index].grade = scoreRange(score);
    newSubjects[index].error = "";

    setSubjects(newSubjects);
  };

  const addRow = () => {
    setSubjects([
      ...subjects,
      {
        subject: "",
        score: "",
        grade: "",
        error: "",
      },
    ]);
  };

  const deleteRow = (indexToRemove) => {
    if (subjects.length === 1) return;

    setSubjects(subjects.filter((_, index) => index !== indexToRemove));
  };

  const resetForm = () => {
    setSubjects([
      {
        subject: "",
        score: "",
        grade: "",
        error: "",
      },
    ]);
  };

  // ===========================
  // Statistics
  // ===========================

  const validScores = subjects
    .map((item) => Number(item.score))
    .filter((score) => !isNaN(score));

  const totalSubjects = subjects.length;

  const totalScore = validScores.reduce((total, score) => total + score, 0);

  const averageScore =
    validScores.length > 0 ? (totalScore / validScores.length).toFixed(1) : 0;

  const highestScore = validScores.length > 0 ? Math.max(...validScores) : 0;

  const lowestScore = validScores.length > 0 ? Math.min(...validScores) : 0;

  // return (
  //   <div className="bg-green-200 h-screen flex justify-center items-center">
  //     <div className="bg-green-300 p-10 rounded-2xl border-2 border-green-700 w-[850px]">
  //       <h1 className="text-3xl text-green-800 font-extrabold text-center pb-6">
  //         Grade Calculator
  //       </h1>

  //       <p className="italic">
  //         This helps students easily calculate their overall grade (%)
  //       </p>

  //       <p className="mb-6">
  //         Input your course/subject and the corresponding score.
  //       </p>

  //       {/* Headings */}
  //       <div className="flex justify-between px-4 font-bold text-green-900 mb-2">
  //         <div className="w-[30px] text-center">No.</div>

  //         <div className="w-[180px]">Subject</div>

  //         <div className="w-[70px] text-center">Score</div>

  //         <div className="w-[60px] text-center">Grade</div>

  //         <div className="w-[90px] text-center">Actions</div>
  //       </div>

  //       {/* Rows */}
  //       <div className="max-h-[40vh] overflow-y-auto pr-2">
  //         {subjects.map((item, index) => (
  //           <div
  //             key={index}
  //             className="flex justify-between items-start px-4 py-2"
  //           >
  //             {/* Number */}
  //             <div className="w-[30px] text-center font-bold text-green-800 pt-2">
  //               {index + 1}
  //             </div>

  //             {/* Subject */}
  //             <div>
  //               <input
  //                 className="w-[180px] p-1 border-2 border-green-700"
  //                 type="text"
  //                 value={item.subject}
  //                 onChange={(e) => handleSubjectChange(index, e.target.value)}
  //               />
  //             </div>

  //             {/* Score */}
  //             <div>
  //               <input
  //                 className={`w-[70px] p-1 border-2 text-center ${
  //                   item.error ? "border-red-500" : "border-green-700"
  //                 }`}
  //                 type="number"
  //                 min="0"
  //                 max="100"
  //                 value={item.score}
  //                 onChange={(e) => handleScoreChange(index, e.target.value)}
  //               />

  //               {item.error && (
  //                 <p className="text-red-600 text-xs mt-1 w-[120px]">
  //                   {item.error}
  //                 </p>
  //               )}
  //             </div>

  //             {/* Grade */}
  //             <div>
  //               <p className="w-[60px] h-[36px] flex items-center justify-center border-2 border-green-700 bg-white">
  //                 {item.grade}
  //               </p>
  //             </div>

  //             {/* Buttons */}
  //             <div className="flex gap-2">
  //               <button
  //                 className="bg-green-600 text-white w-8 h-8 rounded-full hover:bg-green-700"
  //                 onClick={addRow}
  //               >
  //                 +
  //               </button>

  //               <button
  //                 className="bg-red-600 text-white w-8 h-8 rounded-full hover:bg-red-700"
  //                 onClick={() => deleteRow(index)}
  //               >
  //                 -
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Statistics */}
  //       <div className="mt-6 border-t-2 border-green-700 pt-4">
  //         <h2 className="text-xl font-bold mb-3">Statistics</h2>

  //         <p>
  //           <strong>Total Subjects:</strong> {totalSubjects}
  //         </p>

  //         <p>
  //           <strong>Average Score:</strong> {averageScore}%
  //         </p>

  //         <p>
  //           <strong>Highest Score:</strong> {highestScore}
  //         </p>

  //         <p>
  //           <strong>Lowest Score:</strong> {lowestScore}
  //         </p>
  //       </div>

  //       {/* Reset Button */}
  //       <div className="flex justify-end mt-6">
  //         <button
  //           className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
  //           onClick={resetForm}
  //         >
  //           Reset
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    // <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
    //   <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 flex items-center justify-center p-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-30"></div>

      {/* Main Card */}
      <div className="relative w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 p-8">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-2xl">
          <h1 className="text-4xl font-bold">🎓 Grade Calculator</h1>
          <p className="text-green-100 mt-2">
            Enter your subjects and scores to calculate grades instantly.
          </p>
        </div>

        <div className="p-6">
          {/* Column Headings */}
          <div className="hidden lg:grid lg:grid-cols-[50px_1fr_120px_100px_120px] gap-4 font-semibold text-gray-700 border-b pb-3">
            <p>No.</p>
            <p>Subject</p>
            <p className="text-center">Score</p>
            <p className="text-center">Grade</p>
            <p className="text-center">Actions</p>
          </div>

          {/* Rows */}
          <div className="max-h-[45vh] overflow-y-auto mt-3 pr-2 space-y-4">
            {subjects.map((item, index) => (
              <div
                key={index}
                className="
        bg-slate-50 rounded-xl p-4 hover:bg-green-50 transition

        grid grid-cols-1 gap-4
        sm:grid-cols-2
        lg:grid-cols-[50px_1fr_120px_100px_120px]
        lg:items-center
      "
              >
                {/* Number */}
                <div className="flex justify-center lg:justify-center">
                  <span className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600 mb-1 lg:hidden">
                    Subject
                  </label>

                  <input
                    type="text"
                    value={item.subject}
                    onChange={(e) => handleSubjectChange(index, e.target.value)}
                    placeholder="Enter subject"
                    className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                {/* Score */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-600 mb-1 lg:hidden">
                    Score
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={item.score}
                    onChange={(e) => handleScoreChange(index, e.target.value)}
                    placeholder="0-100"
                    className={`w-full border rounded-lg px-3 py-2 text-center focus:ring-2 focus:outline-none ${
                      item.error
                        ? "border-red-500 focus:ring-red-300"
                        : "focus:ring-green-500"
                    }`}
                  />

                  {item.error && (
                    <p className="text-red-500 text-xs mt-1">{item.error}</p>
                  )}
                </div>

                {/* Grade */}
                <div className="flex flex-col items-center">
                  <label className="text-sm font-medium text-gray-600 mb-1 lg:hidden">
                    Grade
                  </label>

                  <span
                    className={`w-fit px-4 py-2 rounded-lg font-bold text-white ${
                      item.grade === "A+" || item.grade === "A"
                        ? "bg-green-600"
                        : item.grade === "B"
                          ? "bg-blue-500"
                          : item.grade === "C"
                            ? "bg-yellow-500"
                            : item.grade === "D"
                              ? "bg-orange-500"
                              : item.grade === "E"
                                ? "bg-pink-500"
                                : item.grade === "F"
                                  ? "bg-red-500"
                                  : "bg-gray-400"
                    }`}
                  >
                    {item.grade || "-"}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3">
                  <button
                    onClick={addRow}
                    className="w-10 h-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    +
                  </button>

                  <button
                    onClick={() => deleteRow(index)}
                    className="w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    −
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Total Rows:{" "}
              <span className="font-bold text-green-700">
                {subjects.length}
              </span>
            </div>

            <button
              onClick={resetForm}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow"
            >
              Reset
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {/* Total Subjects */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">📚 Total Subjects</p>
              <h2 className="text-3xl font-bold text-green-700 mt-2">
                {totalSubjects}
              </h2>
            </div>

            {/* Average */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">📈 Average Score</p>
              <h2 className="text-3xl font-bold text-blue-700 mt-2">
                {averageScore}%
              </h2>
            </div>

            {/* Highest */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">🏆 Highest Score</p>
              <h2 className="text-3xl font-bold text-yellow-600 mt-2">
                {highestScore}
              </h2>
            </div>

            {/* Lowest */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">📉 Lowest Score</p>
              <h2 className="text-3xl font-bold text-red-600 mt-2">
                {lowestScore}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
