import {
  Box, Container, Typography, Grid, Card, CardActionArea,
  CardContent, Button, Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { alpha } from '@mui/material/styles';

const contactLinks = [
  {
    label: 'Email',
    value: 'tanujpurohit@hotmail.com',
    href: 'mailto:tanujpurohit@hotmail.com',
    Icon: EmailIcon,
    color: '#a78bfa',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tanujpurohit',
    href: 'https://www.linkedin.com/in/tanujpurohit',
    Icon: LinkedInIcon,
    color: '#60a5fa',
  },
  {
    label: 'Portfolio',
    value: 'zeoenix.tech',
    href: 'https://zeoenix.tech/',
    Icon: LanguageIcon,
    color: '#34d399',
  },
];

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="sm">
        <Box textAlign="center" mb={6}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.2em', fontWeight: 600 }}>
            Get In Touch
          </Typography>
          <Typography variant="h3" mt={1} mb={2}>
            Let&apos;s{' '}
            <Box component="span" className="gradient-text">Connect</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            my inbox is always open. I&apos;ll get back to you as soon as possible!
          </Typography>
        </Box>

        <Grid container spacing={2} mb={5}>
          {contactLinks.map((link) => {
            const { Icon } = link;
            return (
              <Grid item xs={12} sm={4} key={link.label}>
                <Card
                  elevation={0}
                  sx={{
                    background: alpha(link.color, 0.05),
                    border: `1px solid ${alpha(link.color, 0.15)}`,
                    '&:hover': {
                      boxShadow: `0 0 24px ${alpha(link.color, 0.2)}`,
                      border: `1px solid ${alpha(link.color, 0.4)}`,
                    },
                  }}
                >
                  <CardActionArea
                    component="a"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    sx={{ p: 3, textAlign: 'center' }}
                  >
                    <CardContent sx={{ p: '0 !important' }}>
                      <Icon sx={{ color: link.color, fontSize: 32, mb: 1 }} />
                      <Typography variant="subtitle2" fontWeight={700} gutterBottom>
                        {link.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', wordBreak: 'break-all' }}
                      >
                        {link.value}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            component="a"
            href="mailto:tanujpurohit@hotmail.com"
            sx={{ px: 6, fontSize: '1rem' }}
          >
            Say Hello 👋
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
