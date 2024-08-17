import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProfileWidget from "./components/ProfileWidget";
import Chart from "./components/Chart";
import respiratory from "./assets/respiratory rate.svg";
import temperature from "./assets/temperature.svg";

const App = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
            },
          }
        );
        const data = await response.json();
        console.log("Here are the patient: ", data)
        setPatients(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!patients.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <Sidebar patients={patients} />
      <div className="ml-[320px] mt-6 flex gap-6">
        <ProfileWidget patientData={patients[0]} />
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Diagnosis History</h2>
            <div className="bg-[#F4F0FE] rounded-lg p-4 flex gap-6">
              <div className="flex-1">
                <div className="flex justify-between mb-4">
                  <h3>Blood Pressure</h3>
                  <p>Last 6 months</p>
                </div>
                <Chart />
              </div>
              <div className="flex flex-col gap-4">
                <div className="pb-2 border-b">
                  <div className="flex justify-between">
                    <span>Systolic</span>
                    <h3>160</h3>
                  </div>
                  <span>Higher than Average</span>
                </div>
                <div className="pt-2">
                  <div className="flex justify-between">
                    <span>Diastolic</span>
                    <h3>78</h3>
                  </div>
                  <span>Lower than Average</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <div className="bg-[#E0F3FA] rounded-lg p-4 flex flex-col items-center gap-4 w-[230px]">
                <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                  <img src={respiratory} alt="Respiratory Rate" />
                </div>
                <p>Respiratory Rate</p>
                <h4>20 bpm</h4>
                <small className="text-green-500">Normal</small>
              </div>
              <div className="bg-[#FFE6E9] rounded-lg p-4 flex flex-col items-center gap-4 w-[230px]">
                <div className="bg-white flex items-center justify-center p-3 rounded-full w-[100px] h-[100px]">
                  <img src={temperature} alt="Temperature" />
                </div>
                <p>Temperature</p>
                <h4>98.6 F</h4>
                <small className="text-green-500">Normal</small>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Diagnostic List</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#F6F7F8] p-2 rounded-md">
                  <tr>
                    <th className="p-2">Problem/Diagnosis</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patients[0].diagnostic_list.map((diagnostic, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2">{diagnostic.name}</td>
                      <td className="p-2">{diagnostic.description}</td>
                      <td className="p-2">{diagnostic.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
