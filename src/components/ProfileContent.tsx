import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ProfileContent() {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile Management
        </Typography>
        <Typography color="text.secondary">
          Your profile will be displayed here
        </Typography>
      </Box>
    );
  }