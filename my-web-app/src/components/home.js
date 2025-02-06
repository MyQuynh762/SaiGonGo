import React from "react";
import Header from "../components/header"; 


function Home() {
  return (
    <div style={styles.container}>
      <Header /> {/* Include the Header component */}
      
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f3f4f6",
    padding: "20px",
  },
};

export default Home;