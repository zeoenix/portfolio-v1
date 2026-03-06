import {
  Box, Container, Typography, Card, CardContent,
  Chip, Stack, Avatar,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { alpha } from '@mui/material/styles';

const experiences = [
  {
    role: 'Campus Coordinator',
    company: 'Training & Placement Cell — IIT Patna (Hybrid Programs)',
    period: 'Jan 2026 – Present',
    location: 'Patna, India',
    type: 'Leadership',
    color: '#a78bfa',
    Icon: SchoolIcon,
    description:
      'Contributing to the facilitation of hybrid programs and student placements at UG Hybrid IIT Patna. Managing coordination between students and companies for placement activities.',
    tags: ['Leadership', 'Coordination', 'Placement'],
  },
  {
    role: 'Freelancer',
    company: 'Self-Employed',
    period: 'Aug 2023 – Present',
    location: 'Remote',
    type: 'Freelance',
    color: '#60a5fa',
    Icon: LaptopIcon,
    description:
      'Focusing on cybersecurity and web development projects for various clients. Building full-stack web applications and conducting security assessments.',
    tags: ['React', 'Python', 'Cybersecurity', 'Web Dev'],
  },
  {
    role: 'Cyber Security Engineer (Intern)',
    company: 'Tech Mahindra',
    period: 'Jan 2021 – Jun 2021',
    location: 'Delhi, India',
    type: 'Internship',
    color: '#34d399',
    Icon: SecurityIcon,
    description:
      'Worked as a cybersecurity intern, gaining deep hands-on experience in IT security operations, vulnerability assessments, and best practices in enterprise-level security.',
    tags: ['Cybersecurity', 'IT Security', 'Enterprise'],
  },
  {
    role: 'Web Developer (Intern)',
    company: 'DRDO — Ministry of Defence, Govt. of India',
    period: 'Jan 2021 – Mar 2021',
    location: 'Delhi, India',
    type: 'Internship',
    color: '#fbbf24',
    Icon: AccountBalanceIcon,
    description:
      'Developed a Library Management System using HTML, CSS, .NET, Bootstrap, and SQL. Worked with a highly collaborative team under exceptional mentorship.',
    tags: ['HTML', 'CSS', '.NET', 'Bootstrap', 'SQL'],
  },
];

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={8}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.2em', fontWeight: 600 }}>
            My Journey
          </Typography>
          <Typography variant="h3" mt={1}>
            Work{' '}
            <Box component="span" className="gradient-text">Experience</Box>
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Vertical line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: 28 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #a78bfa66, #60a5fa44, transparent)',
              display: { xs: 'none', sm: 'block' },
            }}
          />

          <Stack spacing={4}>
            {experiences.map((exp, idx) => {
              const { Icon } = exp;
              return (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, sm: 4 },
                    position: 'relative',
                  }}
                >
                  {/* Dot */}
                  <Box
                    sx={{
                      flexShrink: 0,
                      display: { xs: 'none', sm: 'flex' },
                      alignItems: 'flex-start',
                      pt: 2.5,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: alpha(exp.color, 0.15),
                        border: `2px solid ${alpha(exp.color, 0.5)}`,
                        zIndex: 1,
                      }}
                    >
                      <Icon sx={{ color: exp.color, fontSize: 20 }} />
                    </Avatar>
                  </Box>

                  <Card
                    elevation={0}
                    sx={{
                      flex: 1,
                      borderLeft: `4px solid ${exp.color}`,
                      background: alpha(exp.color, 0.04),
                      border: `1px solid ${alpha(exp.color, 0.15)}`,
                      borderLeftWidth: 4,
                      '&:hover': {
                        boxShadow: `0 0 30px ${alpha(exp.color, 0.12)}`,
                      },
                    }}
                  >
                    <CardContent>
                      <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                        mb={1.5}
                        spacing={1}
                      >
                        <Box>
                          <Typography variant="h6" fontWeight={700}>
                            {exp.role}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {exp.company}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: { sm: 'right' } }}>
                          <Chip
                            label={exp.type}
                            size="small"
                            sx={{
                              bgcolor: alpha(exp.color, 0.15),
                              color: exp.color,
                              fontWeight: 600,
                              mb: 0.5,
                            }}
                          />
                          <Typography variant="caption" color="text.disabled" display="block">
                            {exp.period}
                          </Typography>
                          <Typography variant="caption" color="text.disabled" display="block">
                            {exp.location}
                          </Typography>
                        </Box>
                      </Stack>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                        {exp.description}
                      </Typography>

                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {exp.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{ borderColor: 'divider', color: 'text.secondary', fontSize: '0.7rem' }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
