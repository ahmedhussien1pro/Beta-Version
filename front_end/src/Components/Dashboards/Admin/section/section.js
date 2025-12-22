import AddUser from "./AddUser";
import Overview from "./Overview";
import UsersTable from "./UsersTable";
import Courses from "./Courses";
import Activities from "./Activities";

const sections = {
  overview: ({ data }) => (
    <Overview usersData={data.users} coursesData={data.courses || []} />
  ),
  usersTable: ({ data }) => <UsersTable {...data} />,
  addUser: ({ data }) => <AddUser {...data} />,
  courses: ({ data }) => <Courses {...data} />,
  activities: ({ data }) => <Activities {...data} />,
};

export default sections;
