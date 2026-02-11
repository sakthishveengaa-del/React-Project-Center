import { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [projectRegistrations, setProjectRegistrations] = useState([]);
  const [courseRegistrations, setCourseRegistrations] = useState([]);

  const addProjectRegistration = (data) =>
    setProjectRegistrations((prev) => [...prev, data]);

  const addCourseRegistration = (data) =>
    setCourseRegistrations((prev) => [...prev, data]);

  return (
    <RegistrationContext.Provider
      value={{
        projectRegistrations,
        courseRegistrations,
        addProjectRegistration,
        addCourseRegistration,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
