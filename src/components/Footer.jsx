import { Box, Container, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4 }}>
      <Divider sx={{ mb: 4 }} />
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.disabled" textAlign="center">
          © {new Date().getFullYear()} Tanuj Purohit. Built with React, MUI v6 &amp; Unicorn Studio.
        </Typography>
      </Container>
    </Box>
  );
}
