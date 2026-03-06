import {
  Box, Container, Typography, Card, CardContent,
  Chip, Stack, Avatar,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { alpha } from '@mui/material/styles';

const education = [
  {
    degree: "Bachelor's — Computer Science",
    institution: 'Indian Institute of Technology, Patna',
    period: 'Dec 2023 – Dec 2026',
    color: '#a78bfa',
    Icon: SchoolIcon,
    description:
      'Pursuing B.Tech in Computer Science, building expertise in algorithms, data structures, web development, and cybersecurity. Expected graduation December 2026.',
    highlights: ['IIT Patna', 'B.Tech CS', 'Expected 2026'],
  },
  {
    degree: 'High School Diploma — Computer Engineering',
    institution: 'Ambedkar DSEU Shakarpur Campus-I',
    period: 'Aug 2018 – Jul 2021',
    color: '#60a5fa',
    Icon: MenuBookIcon,
    description:
      'Completed diploma in Computer Engineering, establishing a strong foundation in programming, electronics, and engineering principles.',
    highlights: ['Computer Engineering', 'Diploma', '2021'],
  },
  {
    degree: 'Middle School',
    institution: 'Kendriya Vidyalaya Pitampura',
    period: 'Completed',
    color: '#34d399',
    Icon: AutoStoriesIcon,
    description:
      'Completed middle school education at a prestigious Kendriya Vidyalaya, developing foundational academic skills.',
    highlights: ['Kendriya Vidyalaya', 'Middle School'],
  },
];

export default function Education() {
  return (
    <Box
      component="section"
      id="education"
      sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, transparent, rgba(7,7,26,0.5))' }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" mb={8}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.2em', fontWeight: 600 }}>
            Academic Path
          </Typography>
          <Typography variant="h3" mt={1}>
            <Box component="span" className="gradient-text">Education</Box>
          </Typography>
        </Box>

        <Stack spacing={3}>
          {education.map((edu, idx) => {
            const { Icon } = edu;
            return (
              <Card
                key={idx}
                elevation={0}
                sx={{
                  borderLeft: `4px solid ${edu.color}`,
                  background: alpha(edu.color, 0.04),
                  border: `1px solid ${alpha(edu.color, 0.15)}`,
                  borderLeftWidth: 4,
                  '&:hover': {
                    boxShadow: `0 0 30px ${alpha(edu.color, 0.12)}`,
                  },
                }}
              >
                <CardContent>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    mb={1.5}
                    spacing={2}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        sx={{
                          bgcolor: alpha(edu.color, 0.15),
                          border: `1.5px solid ${alpha(edu.color, 0.4)}`,
                          width: 44,
                          height: 44,
                        }}
                      >
                        <Icon sx={{ color: edu.color, fontSize: 22 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" fontWeight={700}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.institution}
                        </Typography>
                      </Box>
                    </Stack>
                    <Chip
                      label={edu.period}
                      size="small"
                      sx={{
                        bgcolor: alpha(edu.color, 0.15),
                        color: edu.color,
                        fontWeight: 600,
                        flexShrink: 0,
                      }}
                    />
                  </Stack>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {edu.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {edu.highlights.map((h) => (
                      <Chip
                        key={h}
                        label={h}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.7rem' }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
