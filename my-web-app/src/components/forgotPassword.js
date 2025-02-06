import React from "react";


export default function ForgotPassword() {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.logo}>S</div>
        <form>
          <div style={styles.inputGroup}>
            <input type="email" placeholder="Email" style={styles.inputField} />
          </div>
          
          <button type="submit"  style={styles.loginButton}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.loginButtonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.loginButton.backgroundColor)}>
            Gửi
          </button>
        </form>
     
      </div>
    </div>
  );
}
const styles = {
    loginContainer: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
    },
    loginBox: {
      backgroundColor: "#FFFBFB",
      padding: "2rem",
      borderRadius: "1.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "24rem",
    },
    logo: {
        fontSize: "5rem",
        fontWeight: "bold",
        color: "#A82D2D",
        marginBottom: "1.5rem",
        textShadow: "2px 2px 4px rgba(131, 61, 61, 0.9)", // Add shadow effect
      },
    inputGroup: {
    
      marginBottom: "1rem",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    inputField: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.5rem",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s",
    },
    inputFieldFocus: {
      borderColor: "#f43f5e",
    },
     loginButton: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#E3C1C1",
      color: "#A82D2D",
      fontWeight: "bold",
      border: "none",
      borderRadius: "0.5rem",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    loginButtonHover: {
      backgroundColor: "#FFE6E6", 
    },
    linkGroup: {
      marginTop: "1rem",
      fontSize: "0.875rem",
    },
   
  };
