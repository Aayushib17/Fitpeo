import React from "react";
import { PieChart, Pie } from "recharts";
import './Piechart.css'
function RePieChart() {
  const data01 = [
    { name: "Team A", value: 800 },
    { name: "Team B", value: 600 },
    { name: "Team C", value: 300 },
    { name: "Team D", value: 0 },
  ];

  return (
    <div className="Piechart">
      <div width="100%" height="100%">
      {/* <div class="col-sm-12 btn btn-info"> How to Create Pie Chart in React Application</div> */}
        <PieChart width={300} height={300}>
          <Pie
          className="recharts-pie"
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            innerRadius={40}
            fill="#8884d8"
          />

        </PieChart>
      </div>
    </div>
  );
}
export default RePieChart;