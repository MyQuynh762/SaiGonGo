import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
    return (
        <div style={styles.header}>
          <div style={styles.location}>
            <span style={styles.icon}>📍</span>
            <select style={styles.select}>
              <option>TP.HCM</option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
              {/* Add more locations as needed */}
            </select>
          </div>
          <div style={styles.category}>
            <select style={styles.select}>
              <option>Ăn uống</option>
              <option>Giải trí</option>
              <option>Du lịch</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <input
            type="text"
            placeholder="Địa điểm, món ăn, loại hình..."
            style={styles.searchInput}
          />
          <div style={styles.icons}>
            <FaUserCircle style={styles.icon} />
            <FaBell style={styles.icon} />
          </div>
        </div>
      );
    }
    
    const styles = {
      header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      location: {
        display: "flex",
        alignItems: "center",
        marginRight: "20px", // Add spacing between elements
      },
      category: {
        display: "flex",
        alignItems: "center",
        marginRight: "20px", // Add spacing between elements
      },
      select: {
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #d1d5db",
        marginLeft: "5px",
      },
      searchInput: {
        flex: 1,
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #d1d5db",
        marginLeft: "10px",
        marginRight: "20px", // Add spacing before icons
      },
      icons: {
        display: "flex",
        alignItems: "center",
      },
      icon: {
        fontSize: "1.5rem",
        marginLeft: "15px",
        cursor: "pointer",
      },
    };