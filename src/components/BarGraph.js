import React, { useEffect, useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import {useSelector} from "react-redux";

const BarGraph = ({graphData}) => {
  
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
              
              data: [graphData.category_6, graphData.category_7, graphData.category_8, graphData.category_9, graphData.category_10],
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
      
    </div>
  );
};

export default BarGraph;
