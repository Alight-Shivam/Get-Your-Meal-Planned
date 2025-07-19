import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// Map Component
function MapComponent() {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        height: '400px', 
        overflow: 'hidden',
        borderRadius: 2
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" component="h2">
            Interactive Map
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 0 
            }}
            allowFullScreen
            loading="lazy"
          />
        </Box>
      </Box>
    </Paper>
  );
}

// Stats Component
function StatsComponent() {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '200px' }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Statistics
      </Typography>
      <Typography color="text.secondary">
        Your key metrics and data will appear here
      </Typography>
    </Paper>
  );
}

// Activity Component
function ActivityComponent() {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '200px' }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Recent Activity
      </Typography>
      <Typography color="text.secondary">
        Latest updates and notifications
      </Typography>
    </Paper>
  );
}

// Quick Actions Component
function QuickActionsComponent() {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '400px' }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Quick Actions
      </Typography>
      <Typography color="text.secondary">
        Frequently used tools and shortcuts
      </Typography>
    </Paper>
  );
}

export default function DashboardContent() {
  return (
    <Box sx={{ p: 3 }}>
      {/* Dashboard Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard Overview
        </Typography>
        <Typography color="text.secondary">
          Monitor your data and manage your operations
        </Typography>
      </Box>

      {/* Dashboard Layout using Flexbox */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Top Row - Stats and Activity */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box sx={{ flex: 1 }}>
            <StatsComponent />
          </Box>
          <Box sx={{ flex: 1 }}>
            <ActivityComponent />
          </Box>
        </Box>

        {/* Bottom Row - Map and Quick Actions */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: 3,
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box sx={{ flex: 2 }}>
            <MapComponent />
          </Box>
          <Box sx={{ flex: 1 }}>
            <QuickActionsComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}