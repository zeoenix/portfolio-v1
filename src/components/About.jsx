import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Stack, Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const stats = [
  { value: '3+', label: 'Years Freelancing' },
  { value: '2',  label: 'Internships' },
  { value: '5',  label: 'Languages Spoken' },
  { value: "'26", label: 'Grad Year' },
];

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.2em', fontWeight: 600 }}>
              About Me
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, mb: 3, lineHeight: 1.2 }}>
              Crafting digital{' '}
              <Box component="span" className="gradient-text">experiences</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              I&apos;m a Computer Science undergrad at{' '}
              <Typography component="span" color="primary.light" fontWeight={600}>IIT Patna</Typography>{' '}
              (graduating Dec 2026), passionate about building clean, scalable web applications and solving cybersecurity challenges.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              Currently serving as{' '}
              <Typography component="span" color="secondary.light" fontWeight={600}>Campus Coordinator</Typography>{' '}
              for the Training &amp; Placement Cell at IIT Patna&apos;s Hybrid Programs, while also freelancing on web development
              and cybersecurity projects since August 2023.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                component="a"
                href="https://www.linkedin.com/in/tanujpurohit"
                target="_blank"
                rel="noreferrer"
                size="small"
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<LanguageIcon />}
                component="a"
                href="https://zeoenix.tech/"
                target="_blank"
                rel="noreferrer"
                size="small"
              >
                zeoenix.tech
              </Button>
            </Stack>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {stats.map((stat) => (
                <Grid item xs={6} key={stat.label}>
                  <Card
                    elevation={0}
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      '&:hover': {
                        boxShadow: '0 0 30px rgba(167,139,250,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: '0 !important' }}>
                      <Typography
                        variant="h3"
                        className="gradient-text"
                        sx={{ fontWeight: 900, mb: 0.5 }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
