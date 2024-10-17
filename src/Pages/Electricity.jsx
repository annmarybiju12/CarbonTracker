import React, { useState } from "react";
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

const ElectricityForm = () => {
  const [formData, setFormData] = useState({
    units: "",
    month: "",
    emissionFactor: 0.85,
  });

  const initialElectricityData = {
    labels: [
      "Jan 2022",
      "Feb 2022",
      "Mar 2022",
      "Apr 2022",
      "May 2022",
      "Jun 2022",
      "Jul 2022",
      "Aug 2022",
      "Sep 2022",
      "Oct 2022",
      "Nov 2022",
      "Dec 2022",
      "Jan 2023",
      "Feb 2023",
      "Mar 2023",
      "Apr 2023",
      "May 2023",
      "Jun 2023",
      "Jul 2023",
      "Aug 2023",
      "Sep 2023",
      "Oct 2023",
      "Dec 2023",
      "Jan 2024",
      "Mar 2024",
      "Apr 2024",
      "Jul 2024",
    ],
    datasets: [
      {
        label: "Avg. Energy Consumption (kWh)",
        data: [
          6906, 8624, 9421, 11561, 12317, 13675, 10756, 11315, 12835, 11605,
          11394, 10882, 13092, 10098, 13625, 16516, 17582, 19716, 22672, 23692,
          23220, 23330, 26736, 26472, 30121, 32176, 29855,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Light blue fill for Avg. Energy Consumption
        borderColor: "rgba(75, 192, 192, 1)", // Dark blue line color
        borderWidth: 1,
      },
      {
        label: "Total Energy Consumed (kWh)",
        data: [
          19137, 10307, 4781, 12843, 13245, 21735, 19053, 13659, 13902, 5470,
          11975, 18660, 14585, 13605, 17064, 22815, 18375, 31464, 32662, 19809,
          14232, 23478, 42165, 31044, 26994, 35808, 13806,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red fill for Total Energy Consumed
        borderColor: "rgba(255, 99, 132, 1)", // Dark red line color
        borderWidth: 1,
      },
    ],
  };

  const [electricityData, setElectricityData] = useState(
    initialElectricityData
  );
  const [totalEmission, setTotalEmission] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLabel = formData.month;
    const newValue = (formData.units * formData.emissionFactor) / 1000;

    setElectricityData((prev) => ({
      labels: [...prev.labels, newLabel],
      datasets: prev.datasets.map((dataset) => ({
        ...dataset,
        data: [...(dataset.data || []), newValue],
      })),
    }));

    setTotalEmission((prevTotal) => prevTotal + newValue);
    setFormData({ units: "", month: "", emissionFactor: 0.85 });
  };

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
              htmlFor="units"
            >
              Units Consumed (in kWh)
            </label>
            <input
              type="number"
              name="units"
              value={formData.units}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter units consumed"
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
              <option value="">Select a month</option>
              {[
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
              ].map((month) => (
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
              Emission Factor (0.40 - 1.00)
            </label>
            <input
              type="number"
              name="emissionFactor"
              value={formData.emissionFactor}
              onChange={handleChange}
              min="0.40"
              max="1.00"
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

        <h2 className="text-2xl font-bold text-center mb-4">
          Energy Consumption Chart
        </h2>

        <div style={{ width: "1000px", height: "600px" }}>
          <Line data={electricityData} />
        </div>

        <h3 className="text-xl font-semibold mt-6">
          Total Carbon Emission: {totalEmission.toFixed(2)} Tonne CO<sub>2</sub>
        </h3>

        {/* Explanation of chart lines */}
        <div className="mt-4 text-center mb-10">
          <p className="text-lg">
            <span className="font-bold text-teal-500">
              Avg. Energy Consumption (kWh)
            </span>
            : Represented by the blue line, this indicates the average energy
            consumption over the months.
          </p>
          <p className="text-lg">
            <span className="font-bold text-red-500">
              Total Energy Consumed (kWh)
            </span>
            : Represented by the red line, this shows the total energy
            consumption over the months.
          </p>
        </div>
      </div>
    </>
  );
};

export default ElectricityForm;
