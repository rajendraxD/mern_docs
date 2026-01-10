import { Paper, Typography, Box } from '@mui/material';
import useThemeStore from '../../stores/useThemeStore';

const Card = ({ title, value, icon, trend }) => {
  const {themeMode} = useThemeStore();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: `1px solid ${themeMode==='dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
        bgcolor: 'background.paper',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: themeMode==='dark' ? '0 8px 24px rgba(0,0,0,0.5)' : '0 8px 24px rgba(149, 157, 165, 0.2)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <div className="p-2 rounded-lg bg-opacity-10 bg-blue-500/10">
          {icon}
        </div>
        <Typography variant="caption" sx={{ color: trend.startsWith('+') ? 'success.main' : 'error.main', fontWeight: 'bold' }}>
          {trend}
        </Typography>
      </Box>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 0.5 }}>
        {value}
      </Typography>
    </Paper>
  );
};
export default Card;