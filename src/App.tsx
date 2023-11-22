import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import UserList from "./pages/UserList";
import DriverList from "./pages/DriverList";
import VoucherCatalogue from "./pages/VoucherCatalogue";
import RouteList from "./pages/RouteList";
import BookingList from "./pages/BookingList";
import AllTransaction from "./pages/AllTransaction";
import TripList from "./pages/TripList";
import RideList from "./pages/RideList";
import Navbar from "./components/global/Navbar";
import Sidebar from "./components/global/Sidebar";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<UserList />} />
          <Route path="/driver-list" element={<DriverList />} />
          <Route path="/route-list" element={<RouteList />} />
          <Route path="/voucher-catalogue" element={<VoucherCatalogue />} />
          <Route path="/trip-list" element={<TripList />} />
          <Route path="/booking-list" element={<BookingList />} />
          <Route path="/all-transaction" element={<AllTransaction />} />
          <Route path="/ride-list" element={<RideList />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Root() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="m-[16px] bg-white w-full h-[1403px] p-[16px] rounded-md">
          <Outlet />
        </div>
      </div>
    </>
  );
}
