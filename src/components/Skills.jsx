import {
  Box, Container, Typography, Grid, Card, CardContent,
  LinearProgress, Chip, Stack,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import TranslateIcon from '@mui/icons-material/Translate';
import { alpha } from '@mui/material/styles';

const skillGroups = [
  {
    category: 'Frontend',
    Icon: CodeIcon,
    color: '#a78bfa',
    skills: [
      { name: 'React.js',     level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML / CSS',   level: 92 },
      { name: 'Bootstrap',    level: 80 },
    ],
  },
  {
    category: 'Backend & DB',
    Icon: StorageIcon,
    color: '#60a5fa',
    skills: [
      { name: 'Python',    level: 88 },
      { name: '.NET',      level: 72 },
      { name: 'SQL',       level: 78 },
      { name: 'REST APIs', level: 82 },
    ],
  },
  {
    category: 'Cybersecurity',
    Icon: SecurityIcon,
    color: '#34d399',
    skills: [
      { name: 'Network Security',        level: 75 },
      { name: 'Penetration Testing',     level: 70 },
      { name: 'Vulnerability Assessment',level: 72 },
      { name: 'Security Auditing',       level: 68 },
    ],
  },
  {
    category: 'Languages',
    Icon: TranslateIcon,
    color: '#fbbf24',
    skills: [
      { name: 'English',  level: 95 },
      { name: 'Hindi',    level: 98 },
      { name: 'Punjabi',  level: 90 },
      { name: 'French',   level: 75 },
      { name: 'German',   level: 35 },
    ],
  },
];

function SkillBar({ name, level, color }) {
  return (
    <Box mb={2}>
      <Stack direction="row" justifyContent="space-between" mb={0.75}>
        <Typography variant="body2" fontWeight={500}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {level}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={level}
        sx={{
          '& .MuiLinearProgress-bar': {
            background: `linear-gradient(90deg, ${color}, ${alpha(color, 0.6)})`,
          },
        }}
      />
    </Box>
  );
}

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, transparent, rgba(7,7,26,0.5))' }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="overline" color="primary" sx={{ letterSpacing: '0.2em', fontWeight: 600 }}>
            What I Know
          </Typography>
          <Typography variant="h3" mt={1}>
            Skills &amp;{' '}
            <Box component="span" className="gradient-text">Expertise</Box>
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skillGroups.map((group) => {
            const { Icon } = group;
            return (
              <Grid item xs={12} sm={6} key={group.category}>
                <Card
                  elevation={0}
                  sx={{
                    p: 1,
                    height: '100%',
                    background: alpha(group.color, 0.06),
                    border: `1px solid ${alpha(group.color, 0.2)}`,
                    '&:hover': {
                      boxShadow: `0 0 30px ${alpha(group.color, 0.15)}`,
                    },
                  }}
                >
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: alpha(group.color, 0.15),
                        }}
                      >
                        <Icon sx={{ color: group.color, fontSize: 22 }} />
                      </Box>
                      <Typography variant="h6" fontWeight={700} sx={{ color: group.color }}>
                        {group.category}
                      </Typography>
                    </Stack>

                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} color={group.color} />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
