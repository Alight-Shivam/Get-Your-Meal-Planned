import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SalesReportContent() {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sales Reports
        </Typography>
        <Typography color="text.secondary">
          Sales analytics and reports will be displayed here
        </Typography>
      </Box>
    );
  }