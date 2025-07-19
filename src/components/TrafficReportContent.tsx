import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TrafficReportContent() {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Traffic Reports
        </Typography>
        <Typography color="text.secondary">
          Website traffic analytics will be displayed here
        </Typography>
      </Box>
    );
  }