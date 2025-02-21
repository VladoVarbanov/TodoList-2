import React from "react";

export default function Tabs() {
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        return (
          <button key={tabIndex} className="tab-button">
            <h4>{tab}</h4>
          </button>
        );
      })}
    </nav>
  );
}
