import { Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { PresentationChartBarIcon, UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid";
import { IoAirplane } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-64 p-3 flex flex-col text-white">
      <div className="mb-4 p-5">
        <Typography variant="h5" color="blue-gray">
          <Link to="dashboard">My-Trip</Link>
        </Typography>
      </div>
      <List>
        <Link to="dashboard">
          <ListItem className="mb-2">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-6 w-6 mr-2" />
            </ListItemPrefix>
            <span className="text-sm">Dashboard</span>
          </ListItem>
        </Link>

        <Link to="kelola-hotel">
          <ListItem className="mb-2">
            <ListItemPrefix>
              <FaHotel className="h-6 w-6 mr-2" />
            </ListItemPrefix>
            <span className="text-sm">Kelola Hotel</span>
          </ListItem>
        </Link>

        <Link to="kelola-pesawat">
          <ListItem className="mb-2">
            <ListItemPrefix>
              <IoAirplane className="h-6 w-6 mr-2" />
            </ListItemPrefix>
            <span className="text-sm">Kelola Pesawat</span>
          </ListItem>
        </Link>

        <Link className="mb-2">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-6 w-6 mr-2" />
            </ListItemPrefix>
            <span className="text-sm">Create Status</span>
          </ListItem>
        </Link>

        <Link className="mb-2">
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6 mr-2" />
            </ListItemPrefix>
            <span className="text-sm">Log Out</span>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
