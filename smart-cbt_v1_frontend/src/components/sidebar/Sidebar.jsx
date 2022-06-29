import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuizIcon from '@mui/icons-material/Quiz';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">smart-CBT</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/questions" style={{ textDecoration: "none" }}>
            <li>
              <LiveHelpIcon className="icon" />
              <span>Questions</span>
            </li>
          </Link>
          <Link to="/question-sets" style={{ textDecoration: "none" }}>
            <li>
              <QuestionAnswerIcon className="icon" />
              <span>Question sets</span>
            </li>
          </Link>
          <li>
            <QuizIcon className="icon" />
            <span>Tests</span>
          </li>
          <li>
            <SupervisedUserCircleIcon className="icon" />
            <span>All users</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <span>Principle Question Setters</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        
      </div>
    </div>
  );
};

export default Sidebar;
