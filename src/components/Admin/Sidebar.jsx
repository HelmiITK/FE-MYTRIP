import { Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import { PresentationChartBarIcon, UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid";
import { IoAirplane } from "react-icons/io5";
import { FaHotel } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="mb-2 p-5">
        <Typography variant="h5" color="blue-gray">
          <Link to="dashboard">My-Trip</Link>
        </Typography>
      </div>
      <List>
        <Link to="dashboard">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>

        <Link to="kelola-hotel">
          <ListItem>
            <ListItemPrefix>
              <FaHotel className="h-5 w-5" />
            </ListItemPrefix>
            Kelola Hotel
          </ListItem>
        </Link>

        <Link to="kelola-pesawat">
          <ListItem>
            <ListItemPrefix>
              <IoAirplane className="h-5 w-5" />
            </ListItemPrefix>
            Kelola Pesawat
          </ListItem>
        </Link>

        <Link>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </Link>

        <Link>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
