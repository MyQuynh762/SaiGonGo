import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Login() {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <div style={styles.logo}>S</div>
        <form>
          <div style={styles.inputGroup}>
            <input type="email" placeholder="Email" style={styles.inputField} />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Mật khẩu"
              style={styles.inputField}
            />
          </div>
          <button
            type="submit"
            style={styles.loginButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.loginButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.loginButton.backgroundColor)}
          >
            Đăng Nhập
          </button>
        </form>
        <div style={styles.linkGroup}>
          <Link to="/forgotPassword" style={styles.link}> {/* Use Link for navigation */}
            Quên mật khẩu
          </Link>
        </div>
        <div style={styles.linkGroup}>
          Chưa có tài khoản?{' '}
          <Link to="/signin" style={styles.link}> {/* Link to register page */}
            Đăng ký
          </Link>
        </div>
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
    textShadow: "2px 2px 4px rgba(131, 61, 61, 0.9)",
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
  link: {
    color: "#e11d48",
    textDecoration: "none",
    transition: "color 0.3s",
  },
};