// import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'Node 1' },
  },
];

export default function ContentSpace() {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h5" component="h1">
          Interactive Space
        </Typography>
      </Box>
      <Box sx={{ flex: 1, display: 'flex' }}>
        <Box sx={{ flex: 1 }}>
          <ReactFlow nodes={initialNodes} />
        </Box>
        
        {/* Right Sidebar */}
        <Paper sx={{ width: 280, p: 2, borderLeft: 1, borderColor: 'divider' }}>
          <Typography variant="h6" gutterBottom>
            Tools
          </Typography>
          
          {/* Shapes Section */}
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
            Shapes
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button variant="outlined" size="small">Rectangle</Button>
            <Button variant="outlined" size="small">Circle</Button>
            <Button variant="outlined" size="small">Diamond</Button>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          {/* Nodes Section */}
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Nodes
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button variant="outlined" size="small" fullWidth>Input Node</Button>
            <Button variant="outlined" size="small" fullWidth>Default Node</Button>
            <Button variant="outlined" size="small" fullWidth>Output Node</Button>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          {/* Colors Section */}
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Colors
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Box sx={{ width: 24, height: 24, bgcolor: '#ff6b6b', cursor: 'pointer', border: 1, borderColor: 'grey.300' }} />
            <Box sx={{ width: 24, height: 24, bgcolor: '#4ecdc4', cursor: 'pointer', border: 1, borderColor: 'grey.300' }} />
            <Box sx={{ width: 24, height: 24, bgcolor: '#45b7d1', cursor: 'pointer', border: 1, borderColor: 'grey.300' }} />
            <Box sx={{ width: 24, height: 24, bgcolor: '#96ceb4', cursor: 'pointer', border: 1, borderColor: 'grey.300' }} />
            <Box sx={{ width: 24, height: 24, bgcolor: '#ffeaa7', cursor: 'pointer', border: 1, borderColor: 'grey.300' }} />
            <Box sx={{ width: 24, height: 24, bgcolor: '#dda0dd', cursor: 'pointer', border: 1, borderColor: 'grey.300' }} />
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          {/* Text Box Section */}
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Text
          </Typography>
          <Button variant="outlined" size="small" fullWidth>
            Add Text Box
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}