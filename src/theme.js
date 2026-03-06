import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a78bfa',       // violet-400
      light: '#c4b5fd',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#60a5fa',       // blue-400
      light: '#93c5fd',
      dark: '#2563eb',
      contrastText: '#ffffff',
    },
    success: {
      main: '#34d399',
    },
    warning: {
      main: '#fbbf24',
    },
    background: {
      default: '#050510',
      paper: 'rgba(255,255,255,0.05)',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 900 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050510',
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-track': { background: '#0a0a1a' },
          '&::-webkit-scrollbar-thumb': { background: '#6d28d9', borderRadius: 3 },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 28px',
          fontSize: '0.9rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6d28d9, #1d4ed8)',
            boxShadow: '0 8px 25px rgba(124,58,237,0.4)',
          },
        },
        outlinedPrimary: {
          borderColor: alpha('#a78bfa', 0.4),
          color: '#a78bfa',
          '&:hover': {
            borderColor: '#a78bfa',
            background: alpha('#a78bfa', 0.08),
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 6,
          backgroundColor: 'rgba(255,255,255,0.08)',
        },
        bar: {
          borderRadius: 4,
          background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.08)',
        },
      },
    },
  },
});

export default theme;
