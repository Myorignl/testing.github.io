// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot(); 

   // 1. Create the trace for the bubble chart.
 var bubbleData = {
  x:individualOtuIds,
  y:individualSampleValues,
  mode:'markers',
  marker: {
    color: individualOtuIds,
    size:individualSampleValues,
    colorscale: "Picnic"              
    },
  text: individualOtuLabels 
  };

// 2. Create the layout for the bubble chart.
var bubbleLayout = {
  title:"Bacteria Culture Per Sample",
  hovermode:"closest",
  xaxis: {title:"OTU ID", hoverformat:'.0f'},
  yaxis: {hoverformat:'0.f'},
  font: {
    family: 'font-family: Arial, Helvetica Neue, Helvetica, sans-serif',
    size: 14,
    color: '#191970'
    }
  };

// 3. Use Plotly to plot the data with the layout.
Plotly.newPlot("bubble",[bubbleData],bubbleLayout);
  };