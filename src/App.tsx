import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { NAVIGATION } from './Navigation';
import HealthIcon from '@mui/icons-material/LocalHospital';

// Import all components
import DashboardContent from './components/DashboardContent';
// import ProfileContent from './components/ProfileContent';
// import MealPlansContent from './components/MealPlansContent';
// import CurrentPlanContent from './components/CurrentPlanContent';
// import PlanHistoryContent from './components/PlanHistoryContent';
// import AllergiesContent from './components/AllergiesContent';
// import IngredientsContent from './components/IngredientsContent';
// import GroceryListContent from './components/GroceryListContent';
// import NutritionAnalyticsContent from './components/NutritionAnalyticsContent';
// import DailyIntakeContent from './components/DailyIntakeContent';
// import NutrientTrendsContent from './components/NutrientTrendsContent';
// import FitnessContent from './components/FitnessContent';
// import AboutContent from './components/AboutContent';
// import FAQsContent from './components/FAQsContent';
// import ContactContent from './components/ContactContent';
// import SettingsContent from './components/SettingsContent';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#4caf50', // Health-focused green color
    },
    secondary: {
      main: '#ff9800', // Complementary orange
    },
  },
});

const BRANDING = {
  title: 'HealthyLife Manager',
  logo: <HealthIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
};

function PageContent({ pathname }: { pathname: string }) {
  switch (pathname) {
    case '/dashboard':
      return <DashboardContent />;
    // case '/profile':
    //   return <ProfileContent />;
    // case '/meal-plans':
    //   return <MealPlansContent />;
    // case '/meal-plans/current-plan':
    //   return <CurrentPlanContent />;
    // case '/meal-plans/plan-history':
    //   return <PlanHistoryContent />;
    // case '/allergies':
    //   return <AllergiesContent />;
    // case '/ingredients':
    //   return <IngredientsContent />;
    // case '/grocery-list':
    //   return <GroceryListContent />;
    // case '/nutrition':
    //   return <NutritionAnalyticsContent />;
    // case '/nutrition/daily-intake':
    //   return <DailyIntakeContent />;
    // case '/nutrition/nutrient-trends':
    //   return <NutrientTrendsContent />;
    // case '/fitness':
    //   return <FitnessContent />;
    // case '/about':
    //   return <AboutContent />;
    // case '/faqs':
    //   return <FAQsContent />;
    // case '/contact':
    //   return <ContactContent />;
    // case '/settings':
    //   return <SettingsContent />;
    default:
      return <DashboardContent />;
  }
}

export default function App() {
  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={BRANDING}
    >
      <DashboardLayout>
        <PageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}