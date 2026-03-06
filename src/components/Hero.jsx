import UnicornScene from 'unicornstudio-react';
import { Box, Typography, Button, Stack, IconButton, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Unicorn Studio 3D Background */}
      <div className="unicorn-wrapper">
        <UnicornScene
          projectId="h2AkbNByRgq39WxqiMBQ"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.1/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,16,0.35) 60%, #050510 100%)',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 3, md: 6 },
          maxWidth: 800,
          animation: 'fadeInUp 0.9s ease both',
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'primary.light',
            letterSpacing: '0.25em',
            fontWeight: 600,
            mb: 2,
            display: 'block',
          }}
        >
          Hello, I&apos;m
        </Typography>

        <Typography
          variant="h1"
          className="gradient-text"
          sx={{
            fontSize: { xs: '3.2rem', sm: '4.5rem', md: '6rem' },
            lineHeight: 1.05,
            mb: 2,
          }}
        >
          Tanuj Purohit
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: 'text.primary', fontWeight: 300, mb: 1 }}
        >
          Full-Stack Developer &amp; Cybersecurity Enthusiast
        </Typography>

        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
          CSE @ IIT Patna · Freelancer · Campus Coordinator
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mb={6}>
          <Button variant="contained" size="large" href="#experience" component="a">
            View My Work
          </Button>
          <Button variant="outlined" size="large" href="#contact" component="a">
            Contact Me
          </Button>
        </Stack>

        {/* Social icons */}
        <Stack direction="row" spacing={1} justifyContent="center">
          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/tanujpurohit"
              target="_blank"
              rel="noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton
              component="a"
              href="mailto:tanujpurohit@hotmail.com"
              sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="zeoenix.tech">
            <IconButton
              component="a"
              href="https://zeoenix.tech/"
              target="_blank"
              rel="noreferrer"
              sx={{ color: 'text.secondary', '&:hover': { color: 'success.main' } }}
            >
              <LanguageIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          zIndex: 2,
        }}
        className="animate-bounce-scroll"
      >
        <KeyboardArrowDownIcon sx={{ color: 'text.disabled', fontSize: 28 }} />
      </Box>
    </Box>
  );
}
