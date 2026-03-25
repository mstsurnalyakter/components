import PropTypes from "prop-types";
import React from "react";

interface ButtonProps {
  /** Button label text */
  label: string;
  /** Optional icon to display */
  icon?: React.ReactNode;
  /** Click event handler */
  onClick: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Button type */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button-component ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: disabled ? "#f0f0f0" : "#007bff",
        color: disabled ? "#a0a0a0" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 0.3s ease",
        width: "100%",
        maxWidth: "300px",
      }}
    >
      {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      {label}
    </button>
  );
};

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

/**
 * Example usage:
 *
 * // Basic button with label
 * <ButtonComponent
 *   label="Click Me"
 *   onClick={() => alert('Button clicked!')}
 * />
 *
 * // Button with an icon
 * <ButtonComponent
 *   label="Save"
 *   icon={<SaveIcon />}
 *   onClick={handleSave}
 * />
 *
 * // Disabled button
 * <ButtonComponent
 *   label="Submit"
 *   onClick={handleSubmit}
 *   disabled={true}
 * />
 */
export default ButtonComponent;