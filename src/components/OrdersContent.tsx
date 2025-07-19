import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function OrdersContent() {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Orders Management
        </Typography>
        <Typography color="text.secondary">
          Your orders will be displayed here
        </Typography>
      </Box>
    );
  }