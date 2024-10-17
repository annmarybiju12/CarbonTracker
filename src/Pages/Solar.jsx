import React, { useState, useEffect } from "react";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  LineController,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Header from "../components/Header";

Chart.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  LineController
);

const SolarForm = () => {
  const [formData, setFormData] = useState({
    kWhGenerated: "",
    month: "",
    emissionFactor: 0.0, // Adjust as needed
  });
  const [solarData, setSolarData] = useState({
    labels: [],
    datasets: [],
  });
  const [carbonEmission, setCarbonEmission] = useState(null); // State to hold carbon emission result

  const solarDataArray = [
    { month: "Dec", year: 2021, solarGen: null },
    { month: "Jan", year: 2022, solarGen: null },
    { month: "Apr", year: 2022, solarGen: null },
    { month: "May", year: 2022, solarGen: null },
    { month: "Jun", year: 2022, solarGen: 21040 },
    { month: "Jul", year: 2022, solarGen: 20400 },
    { month: "Aug", year: 2022, solarGen: 25120 },
    { month: "Oct", year: 2022, solarGen: 18600 },
    { month: "Mar", year: 2023, solarGen: 19680 },
    { month: "Apr", year: 2023, solarGen: 15360 },
    { month: "May", year: 2023, solarGen: 16640 },
    { month: "Jun", year: 2023, solarGen: 13200 },
    { month: "Jul", year: 2023, solarGen: 15120 },
    { month: "Aug", year: 2023, solarGen: 18720 },
    { month: "Sep", year: 2023, solarGen: 12240 },
    { month: "Oct", year: 2023, solarGen: 11200 },
    { month: "Nov", year: 2023, solarGen: 7840 },
    { month: "Dec", year: 2023, solarGen: 9440 },
    { month: "Jan", year: 2024, solarGen: 10640 },
    { month: "Mar", year: 2024, solarGen: 12480 },
    { month: "Apr", year: 2024, solarGen: 11520 },
    { month: "Jun", year: 2024, solarGen: 18960 },
  ];

  useEffect(() => {
    // Extract labels and data for the chart
    const labels = solarDataArray.map((data) => `${data.month} ${data.year}`);
    const solarGenData = solarDataArray.map((data) => data.solarGen || 0); // Default to 0 if no data

    setSolarData({
      labels,
      datasets: [
        {
          label: "Solar Generation (kWh)",
          data: solarGenData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLabel = formData.month;
    const emission = (formData.kWhGenerated * formData.emissionFactor) / 1000; // Calculate carbon emission in tonnes
    setCarbonEmission(emission); // Save calculated emission to state

    setSolarData((prev) => ({
      labels: [...prev.labels, newLabel],
      datasets: [
        {
          label: "Solar Energy Carbon Emission (Tonne CO₂)",
          data: [...(prev.datasets[0]?.data || []), emission],
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
      ],
    }));

    setFormData({ kWhGenerated: "", month: "", emissionFactor: 0.0 });
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-center mb-4 mt-[50px]">
          Carbon Check
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="kWhGenerated"
            >
              kWh Generated
            </label>
            <input
              type="number"
              name="kWhGenerated"
              value={formData.kWhGenerated}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter kWh generated"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="month"
            >
              Month
            </label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Select a month
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emission"
            >
              Emission Factor (0.0 for Solar)
            </label>
            <input
              type="number"
              name="emissionFactor"
              value={formData.emissionFactor}
              onChange={handleChange}
              min="0.0"
              max="0.01"
              step="0.01"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter emission factor"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Display the calculated carbon emission */}
        {carbonEmission !== null && (
          <div className="mt-6">
            <h3 className="text-lg font-bold">
              Carbon Footprint: {carbonEmission.toFixed(2)} Tonne CO₂ Emitted
            </h3>
          </div>
        )}

        <h2 className="text-2xl font-bold text-center mb-4">
          Solar consumption Chart
        </h2>

        <div style={{ width: "1000px", height: "600px" }}>
          <Line data={solarData} />
        </div>

        {/* Description of the blue line */}
        <h2 className="text-2xl font-bold text-center mb-4">
          <p className="text-lg">
            <span className="font-bold text-teal-500">
              {" "}
              The blue line represents the total solar energy generation (in
              kWh) for each month. It helps to visualize the trends in solar
              energy production over time.
            </span>
          </p>
        </h2>
      </div>
    </>
  );
};

export default SolarForm;
