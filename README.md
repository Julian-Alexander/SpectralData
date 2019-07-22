# Spectral Data

Data visualization of spectral data aquired by nuclear magnetic resonance spectroscopy (NMR spectroscopy) from a blood sample, reading concentrations of blood metabolite biomarkers like levels of amino acids, lipids, glucose, etc.

More info at [https://www.chemguide.co.uk/analysis/nmr/background.html](https://www.chemguide.co.uk/analysis/nmr/background.html)

Y-Axis = Signal Intensity.
X-Axis = Frequency.

## **Dependencies**

- express
- node-sass
- concurrently
- nodemon

## **Start**

- To run both React and local server run

        yarn dev

## **Observations**

- Used the HTML5 charting library CanvasJS for the visualization both in React and full JavaScript + HTML.
- CanvasJS allows a fast rendering for the 50,000+ pairs of data visualized, plus Zooming into the graph and panning to explore more closely.
