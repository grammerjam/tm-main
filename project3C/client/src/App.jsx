import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TableView from "./components/TableView";
import useFetch from "./hooks/useFetch";
import {Suspense} from "react";
import Loading from "./components/Loading";

function App() {
  const {data, loading} = useFetch(
    "http://ec2-13-59-53-226.us-east-2.compute.amazonaws.com:8080/api/userData"
  );

  /**
   * @type import('@tanstack/react-table').ColumnDef<any>
   */
  const columns = [
    {
      header: "First Name",
      accessorKey: "firstName",
    },
    {
      header: "Last Name",
      accessorKey: "lastName",
    },
    {
      header: "Provider",
      accessorKey: "cardProvider",
    },
    {
      header: "Card Number",
      accessorKey: "cardNumber",
    },
    {
      header: "Expiration",
      accessorFn: (row) => `${row.expirationMonth}/${row.expirationYear}`,
      enableSorting: false,
    },
    {
      header: "CVC",
      accessorKey: "cvcNumber",
      enableSorting: false,
    },
    {
      header: "Added",
      accessorKey: "createdAt",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    },
  ];

  return (
    <Router>
      <div className="w-[375px] lg:w-[1440px] mx-auto">
        <Navbar />{" "}
        <Routes>
          <Route element={<TableView columns={columns} />} path="/dataview" />
          <Route element={<MainPage />} path="/" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
