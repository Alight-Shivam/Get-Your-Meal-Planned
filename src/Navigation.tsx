import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PersonIcon from '@mui/icons-material/Person';
import WarningIcon from '@mui/icons-material/Warning';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsIcon from '@mui/icons-material/Settings';
import { type Navigation } from '@toolpad/core/AppProvider';

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Health Dashboard',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'profile',
    title: 'My Profile',
    icon: <PersonIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Diet Management',
  },
  {
    segment: 'meal-plans',
    title: 'Meal Plans',
    icon: <RestaurantMenuIcon />,
    children: [
      {
        segment: 'current-plan',
        title: 'Current Plan',
        icon: <RestaurantMenuIcon />,
      },
      {
        segment: 'plan-history',
        title: 'Plan History',
        icon: <BarChartIcon />,
      },
    ],
  },
  {
    segment: 'allergies',
    title: 'Allergies & Restrictions',
    icon: <WarningIcon />,
  },
  {
    segment: 'ingredients',
    title: 'Available Ingredients',
    icon: <KitchenIcon />,
  },
  {
    segment: 'grocery-list',
    title: 'Grocery List',
    icon: <LocalGroceryStoreIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Health Tracking',
  },
  {
    segment: 'nutrition',
    title: 'Nutrition Analytics',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'daily-intake',
        title: 'Daily Intake',
        icon: <BarChartIcon />,
      },
      {
        segment: 'nutrient-trends',
        title: 'Nutrient Trends',
        icon: <BarChartIcon />,
      },
    ],
  },
  {
    segment: 'fitness',
    title: 'Fitness Tracking',
    icon: <FitnessCenterIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Support & Info',
  },
  {
    segment: 'about',
    title: 'About',
    icon: <InfoIcon />,
  },
  {
    segment: 'faqs',
    title: 'FAQs',
    icon: <HelpIcon />,
  },
  {
    segment: 'contact',
    title: 'Contact Support',
    icon: <ContactSupportIcon />,
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />,
  },
];