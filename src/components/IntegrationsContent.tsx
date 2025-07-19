import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function IntegrationsContent() {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Integrations
        </Typography>
        <Typography color="text.secondary">
          Your integrations will be displayed here
        </Typography>
      </Box>
    );
  }