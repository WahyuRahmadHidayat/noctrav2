import Home from 'views/home';
import DetailView from 'views/DetailView';

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Detail Ride",
    path: "/rides/:id",
    element: <DetailView />,
  },
  {
    name: "Detail Gear",
    path: "/shop/:id",
    element: <DetailView />,
  },
  {
    name: "Detail Blog",
    path: "/blog/:id",
    element: <DetailView />,
  }
];

export default routes;