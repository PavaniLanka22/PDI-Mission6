1. What is the most effective way to manage 404 (Not Found) routes in the application?
2. Which pieces of data should be stored globally, and which should remain temporary/local?
3. What is the recommended strategy for transitioning from Context API to Redux or Zustand in the future?
4. What is the best method for organizing and managing API endpoints centrally?
5. How should the application handle user navigation when an unauthorized user attempts to access checkout?
6. In what ways should temporary UI state be handled differently from state that needs to persist?
7. How should access to /checkout be restricted for unauthenticated users?
8. Implement protected checkout flow in a React Vite e-commerce app.

Requirements:
- protect /checkout route
- redirect unauthorized users to /login
- redirect back after login
- Context API authentication
- React Router v6