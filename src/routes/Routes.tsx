import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import BorrowSummery from "../pages/BorrowSummery";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books",
        element: <AllBooks />,
      },
      {
        path: "create-book",
        element: <AddBook />,
      },
      {
        path: "borrow-summary",
        element: <BorrowSummery />,
      },
    ],
  },
]);
