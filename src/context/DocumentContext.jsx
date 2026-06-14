import { createContext, useContext, useEffect, useState } from "react";

const DocumentContext = createContext();

const defaultDocuments = [
  {
    id: 1,
    title: "API Documentation.pdf",
    category: "Technical",
    keyword: "api",
    status: "Indexed",
    verified: true,
    uploadTime: "Today",
  },
  {
    id: 2,
    title: "Employee Handbook.pdf",
    category: "HR",
    keyword: "employee",
    status: "Indexed",
    verified: true,
    uploadTime: "Today",
  },
  {
    id: 3,
    title: "Financial Report.pdf",
    category: "Finance",
    keyword: "finance",
    status: "Pending",
    verified: true,
    uploadTime: "Today",
  },
];

export function DocumentProvider({ children }) {
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem("wikigaze-documents");
    return saved ? JSON.parse(saved) : defaultDocuments;
  });

  useEffect(() => {
    localStorage.setItem(
      "wikigaze-documents",
      JSON.stringify(documents)
    );
  }, [documents]);

  const addDocument = (file) => {
    const newDoc = {
      id: Date.now(),
      title: file.name,
      category: "General",
      keyword: file.name.split(".")[0].toLowerCase(),
      status: "Pending",
      verified: true,
      uploadTime: new Date().toLocaleTimeString(),
    };

    setDocuments((prev) => [...prev, newDoc]);
  };

  const deleteDocument = (id) => {
    setDocuments((prev) =>
      prev.filter((doc) => doc.id !== id)
    );
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        addDocument,
        deleteDocument,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocumentContext() {
  return useContext(DocumentContext);
}