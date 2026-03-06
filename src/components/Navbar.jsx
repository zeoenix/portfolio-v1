import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, useScrollTrigger, Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: 'all 0.4s ease',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          background: scrolled
            ? alpha('#050510', 0.8)
            : 'transparent',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: 1100, width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: scrolled ? 0.5 : 1.5 }}>
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            className="gradient-text"
            sx={{
              fontWeight: 900,
              textDecoration: 'none',
              fontSize: '1.4rem',
              letterSpacing: '-0.5px',
              flexGrow: 1,
            }}
          >
            TP
          </Typography>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component="a"
                href={link.href}
                size="small"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 500,
                  px: 2,
                  '&:hover': { color: 'text.primary', background: alpha('#a78bfa', 0.08) },
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              component="a"
              href="mailto:tanujpurohit@hotmail.com"
              size="small"
              sx={{ ml: 2 }}
            >
              Hire Me
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { md: 'none' }, color: 'text.primary' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: alpha('#07071a', 0.97),
            backdropFilter: 'blur(20px)',
            border: 'none',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ px: 3, py: 1.5 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ color: 'text.secondary', fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 3, pt: 2 }}>
            <Button
              variant="contained"
              fullWidth
              component="a"
              href="mailto:tanujpurohit@hotmail.com"
              onClick={() => setDrawerOpen(false)}
            >
              Hire Me
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
