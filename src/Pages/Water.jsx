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

const WaterForm = () => {
  const [formData, setFormData] = useState({
    liters: "", // Default value for liters
    month: "",
    emissionFactor: 0.38, // Default value for emission factor
  });
  const [waterData, setWaterData] = useState({
    labels: [],
    datasets: [],
  });
  const [carbonEmission, setCarbonEmission] = useState(null); // State to hold carbon emission result

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLabel = formData.month;
    const emission = Number(formData.liters) * formData.emissionFactor; // Calculate carbon emission
    setCarbonEmission(emission); // Save calculated emission to state

    setWaterData((prev) => ({
      labels: [...prev.labels, newLabel],
      datasets: [
        {
          label: "Water Carbon Emission (Tonne CO2)",
          data: [...(prev.datasets[0]?.data || []), emission],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    }));

    // Reset form to default values
    setFormData({ liters: "", month: "", emissionFactor: 0.38 });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-center mb-4 mt-[50px]">
          Water Consumption
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="liters"
            >
              Liters Consumed
            </label>
            <input
              type="number"
              name="liters"
              value={formData.liters} // This should show 0.38 initially
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter liters consumed"
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
            <input
              type="text"
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter month"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emission"
            >
              Emission Factor (0.05 - 0.60)
            </label>
            <input
              type="number"
              name="emissionFactor"
              value={formData.emissionFactor} // This should show 0.38 initially
              onChange={handleChange}
              min="0.05"
              max="0.60"
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
              Carbon Footprint: {carbonEmission.toFixed(2)} Tonne CO2 Emitted
            </h3>
          </div>
        )}

        <div style={{ width: "600px", height: "400px" }}>
          <Line data={waterData} />
        </div>
      </div>
    </>
  );
};

export default WaterForm;
