// Route component to determine what child component to display based on path name

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
