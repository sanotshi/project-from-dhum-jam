import React from "react";
import { CChart } from "@coreui/react-chartjs";

const BarGraph = () => {
  return (
    <div className="barGraph">
      <CChart
        type="bar"
        data={{
          labels: [
            "Custom",
            "Category1",
            "Category2",
            "Category3",
            "Category4",
          ],
          datasets: [
            {
              
              data: [80, 70, 52, 39, 20],
              backgroundColor: [
                'rgba(250, 197, 224, 0.8)',
                'rgba(250, 197, 224, 0.8)',
                'rgba(250, 197, 224, 0.8)',
                'rgba(250, 197, 224, 0.8)',
                'rgba(250, 197, 224, 0.8)',
                
              ],
            },
          ],
        }}
        labels="months"
        options={{
          plugins: {
            legend: {
              labels: {
                color: '#fff',
              },
            },
          },
          scales: {
            x: {
            //   grid: {
            //     color: '#fff',
            //   },
            //   ticks: {
            //     color: '#fff',
            //   },
            },
            y: {
              grid: {
                color: '#fff',
              },
            //   ticks: {
            //     color: '#fff'   ,
            //   },
            },
          },
        }}
      />
       <button className='saveButton'>Save</button>
    </div>
  );
};

export default BarGraph;
