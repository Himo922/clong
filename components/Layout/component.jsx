import React, { useState, useEffect } from "react";

export const Layout = ({ children }) => {
  return (
    <div>
      <main className="min-h-screen font-sans bg-lightTheme dark:bg-darkTheme transition-colors -z-10 m-0">
        {children}
      </main>
    </div>
  );
};
