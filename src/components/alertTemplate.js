import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const alertStyle = {
  backgroundColor: "#1976d2",
  color: "white",
  padding: "10px",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  minWidth: "300px",
  boxSizing: "border-box",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: 1.43,
  letterSpacing: "0.01071em",
}

const buttonStyle = {
  marginLeft: "10px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#FFFFFF",
}

const AlertTemplate = ({ message, options, style, close }) => {
  return (
    <div style={{ ...alertStyle, ...style }}>
      {options.type === "info" && (
        <FontAwesomeIcon icon={["fas", "info-circle"]} size="2x" />
      )}
      {options.type === "success" && (
        <FontAwesomeIcon icon={["fas", "location-circle"]} size="2x" />
      )}
      {options.type === "error" && (
        <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="2x" />
      )}
      <span style={{ flex: 2, padding: 10, fontWeight: 400 }}>{message}</span>
      <button onClick={close} style={buttonStyle}>
        <FontAwesomeIcon icon={["far", "times"]} size="2x" />
      </button>
    </div>
  )
}

export default AlertTemplate
