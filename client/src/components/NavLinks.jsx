import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end // this is to remove the active class to Add Job (default) button (blue color)
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
