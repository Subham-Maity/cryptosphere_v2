import React from "react";

const Prediction = () => {
    // Render the prediction website in an iframe
    return (
        <div>
            <iframe src="https://cryptodiction.streamlit.app/?embedded=true" width="1800" height="1080"></iframe>
        </div>
    );
};

export default Prediction;
