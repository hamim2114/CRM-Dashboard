import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import LeadsPage from './pages/leadsPage/LeadsPage'
import ContactsPage from './pages/contactsPage/ContactsPage'
import AccountsPage from './pages/accountsPage/AccountsPage'
import TasksPage from './pages/tasksPage/TasksPage'
import MeetingsPage from './pages/meetingsPage/MeetingsPage'
import CallPage from './pages/callPage/CallPage'
import ReportsPage from './pages/reportsPage/ReportsPage'
import CreateLeadPage from './pages/leadsPage/createLeadPage/CreateLeadPage'
import EditLeadPage from './pages/leadsPage/editLeadPage/EditLeadPage'
import CreateContactPage from './pages/contactsPage/createContactPage/CreateContactPage'
import EditContactPage from './pages/contactsPage/editContactPage/EditContactPage'
import CreateAccountPage from './pages/accountsPage/createAccountPage/CreateAccountPage'
import EditAccountPage from './pages/accountsPage/editAccountPage/EditAccountPage'
import CreateTaskPage from './pages/tasksPage/createTaskPage/CreateTaskPage'
import EditTaskPage from './pages/tasksPage/editTaskPage/EditTaskPage'
import SettingsPage from './pages/settingsPage/SettingsPage'
import CreateLeadTask from './pages/leadsPage/createLeadTask/CreateLeadTask'
import CreateContactTask from './pages/contactsPage/createContactTask/CreateContactTask'
import CreateAccountTask from './pages/accountsPage/createAccountTask/CreateAccountTask'
import CreateMeeting from './pages/meetingsPage/createMeeting/CreateMeeting'
import EditMeeting from './pages/meetingsPage/editMeeting/EditMeeting'
import ScheduleCall from './pages/callPage/scheduleCall/ScheduleCall'
import LogCall from './pages/callPage/logCall/LogCall'
import EditCall from './pages/callPage/editCall/EditCall'
import LeadProfilePage from './pages/leadsPage/leadProfilePage/LeadProfilePage'
import ContactProfilePage from './pages/contactsPage/contactProfilePage/ContactProfilePage'
import AccountProfilePage from './pages/accountsPage/accountProfilePage/AccountProfilePage'
import Profile from './pages/profilePage/Profile'
import Security from './pages/profilePage/Security'
import Settings from './pages/profilePage/Settings'
import TaskDetailsPage from './pages/tasksPage/taskDetailsPage/TaskDetailsPage'
import MeetingDetailsPage from './pages/meetingsPage/meetingDetails/MeetingDetailsPage'
import CallDetails from './pages/callPage/callDetails/CallDetails'
import PersonalSettings from './pages/settingsPage/PersonalSettings/PersonalSettings'

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'leads', element: <LeadsPage /> },
        { path: 'leads/create', element: <CreateLeadPage /> },
        { path: 'leads/edit/:id', element: <EditLeadPage /> },
        { path: 'leads/createtask/:id', element: <CreateLeadTask /> },
        { path: 'leads/profile/:id', element: <LeadProfilePage /> },
        { path: 'contacts', element: <ContactsPage /> },
        { path: 'contacts/createtask/:id', element: <CreateContactTask /> },
        { path: 'contacts/create', element: <CreateContactPage /> },
        { path: 'contacts/edit/:id', element: <EditContactPage /> },
        { path: 'contacts/profile/:id', element: <ContactProfilePage /> },
        { path: 'accounts', element: <AccountsPage /> },
        { path: 'accounts/create', element: <CreateAccountPage /> },
        { path: 'accounts/edit/:id', element: <EditAccountPage /> },
        { path: 'accounts/createtask/:id', element: <CreateAccountTask /> },
        { path: 'accounts/profile/:id', element: <AccountProfilePage /> },
        { path: 'tasks', element: <TasksPage /> },
        { path: 'tasks/create', element: <CreateTaskPage /> },
        { path: 'tasks/edit/:id', element: <EditTaskPage /> },
        { path: 'tasks/details/:id', element: <TaskDetailsPage /> },
        { path: 'meetings', element: <MeetingsPage /> },
        { path: 'meetings/create', element: <CreateMeeting /> },
        { path: 'meetings/edit/:id', element: <EditMeeting /> },
        { path: 'meetings/details/:id', element: <MeetingDetailsPage /> },
        { path: 'calls', element: <CallPage /> },
        { path: 'calls/schedule', element: <ScheduleCall /> },
        { path: 'calls/log', element: <LogCall /> },
        { path: 'calls/edit/:id', element: <EditCall /> },
        { path: 'calls/details/:id', element: <CallDetails /> },
        { path: 'reports', element: <ReportsPage /> },
        { path: 'settings/index', element: <SettingsPage /> },
        { path: 'settings/personal-settings', element: <PersonalSettings /> },
        { path: 'profile', element: <Profile /> },
        { path: 'profile/security', element: <Security /> },
        { path: 'profile/settings', element: <Settings /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App;