2.1 📌 Project Title

WikiGaze Matrix – Intelligent Document Management Dashboard

WikiGaze Matrix is a React.js based web application that provides a centralized platform for organizing, searching, indexing, and managing digital documents. The project focuses on creating a modern and responsive dashboard using reusable components and an intuitive user interface.

⸻

2.2 🎯 Problem Statement

Managing a large collection of digital documents can become difficult without proper organization and search capabilities. Traditional systems often lack efficient categorization, quick access, and document verification features.

WikiGaze Matrix addresses these challenges by providing a single dashboard that allows users to organize documents, track search history, monitor indexing status, verify document security, and visualize document relationships in an efficient manner.

-

2.3 🚀 Objectives

* Build a modern document management dashboard using React.js.
* Organize documents through categories and keywords.
* Implement search history and background indexing modules.
* Simulate document verification and relevance ranking.
* Develop reusable and scalable React components.
* Create a clean, responsive, and user-friendly interface.

-
## 🏗️ 2.4 System Overview / Architecture

```
WikiGaze Matrix
│
├── Pages
│   ├── Dashboard
│   ├── Keyword Organizer
│   ├── Search History
│   ├── Background Indexer
│   ├── Security Checker
│   ├── Relevance Sorter
│   ├── Citation Hub
│   ├── Quick Reference Finder
│   └── Data Balancer
│
├── Components
│   ├── Navbar
│   ├── Sidebar
│   ├── FeatureCard
│   ├── StatsCard
│   └── SearchBar
│
├── Layouts
│   └── DashboardLayout
│
├── Context
│   └── DocumentContext
│
└── Hooks
    └── useDocuments
```

The application uses a modular architecture with reusable components, centralized state management, and React Router for seamless navigation between modules.

⸻

2.5 💻 Data Structures and Algorithms Used

The project uses Arrays and Objects to manage document information and categories. Context API is used for global state management across components.

The following algorithms are implemented:

* Linear Search for document lookup
* Filtering for category-wise organization
* Sorting for relevance ranking
* Queue simulation for background indexing

These approaches ensure efficient handling of document operations while maintaining a simple frontend implementation.

⸻

2.6 ⚙️ Implementation Approach

WikiGaze Matrix is developed using React functional components and Tailwind CSS. Each module is implemented as an independent page and integrated using React Router.

Reusable components such as Sidebar, Navbar, Stats Cards, and Feature Cards provide consistency across the application, while Context API enables dynamic data sharing between multiple modules.

⸻

2.7 📊 Time and Space Complexity Analysis

The application performs most document operations using linear traversal and filtering techniques.

* Document Upload – Constant Time O(1)
* Document Search – Linear Time O(n)
* Category Filtering – Linear Time O(n)
* Relevance Sorting – O(n log n)
* Document Deletion – Linear Time O(n)

Overall space complexity remains O(n) based on the number of stored documents.

⸻

2.8 ▶️ Execution Steps

1. Launch the application.
2. Open the Dashboard.
3. Upload and manage documents.
4. Organize files using keywords and categories.
5. Navigate between modules using the sidebar.
6. View indexing, security status, and relevance information.
7. Delete or manage documents dynamically.

⸻

2.9 📄 Sample Inputs and Outputs

Sample Input

Document Name : Project_Report.pdf
Category      : Technical Documents
Keywords      : React, Dashboard, Frontend

Sample Output

✓ Document Uploaded Successfully

Title      : Project_Report.pdf
Category   : Technical Documents
Status     : Indexed
Security   : Verified
Visibility : Available Across Modules

2.10 🖼️ Screenshots

Include screenshots of the following pages:
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/8d66aa5a-99cc-43d9-bc96-11ccba7d8d73" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/c4a50fbc-15a1-4529-b571-0e25df93748e" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/c83a36f1-9f93-4856-ae33-2e7b8e410e5e" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/43215f4f-ba8e-441c-9756-8659553b711b" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/2ac16c5f-8687-41af-b4da-9e268d44cc1a" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/0e0107fd-c870-4e45-a2d0-ef001c37b3b5" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/602de846-a45a-45a3-bc95-00f356eb2d41" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/9eb191ef-0ad7-44dc-a033-6f0ffb8021a0" />
<img width="1461" height="879" alt="image" src="https://github.com/user-attachments/assets/12df288f-ea74-498d-b3ff-ebf3539bde16" />
<img width="1461" height="323" alt="image" src="https://github.com/user-attachments/assets/3dc6d709-6b55-4c1a-b95b-137c473db206" />

2.11 📈 Results and Observations

The application successfully demonstrates a responsive and modular document management system. All modules are integrated through a common navigation structure, and uploaded documents are reflected dynamically across different sections. The project showcases reusable React components, clean UI design, and effective state management, resulting in a smooth and organized user experience.

⸻

2.12 ✅ Conclusion

WikiGaze Matrix successfully implements a modern document management dashboard using React.js, Tailwind CSS, and Context API. The project demonstrates component-based architecture, routing, reusable UI design, and interactive document management features. Its scalable structure and intuitive interface make it a strong foundation for future enhancements such as backend integration, authentication, and cloud storage support.












