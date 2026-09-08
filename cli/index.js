#!/usr/bin/env node

const { program } = require('commander');
const https = require('https');
const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const inquirer = require('inquirer');
const clear = require('clear');

const PROFILE = {
  name: 'Zuhaib Rashid',
  handle: '@zuhaib-dev',
  role: 'Full Stack Developer and AI Engineer',
  location: 'Srinagar, Kashmir, India',
  website: 'https://zuhaibrashid.com',
  email: 'zuhaibrashid01@gmail.com',
  github: 'https://github.com/zuhaib-dev',
  linkedin: 'https://linkedin.com/in/zuhaib-rashid',
  twitter: 'https://x.com/xuhaib_x9',
  repository: 'https://github.com/zuhaib-dev/new-portfolio',
};

const PROJECTS = [
  { slug: 'healos', name: 'HealOS', description: 'Healthcare management platform', stack: ['Next.js', 'React', 'MongoDB', 'Socket.io'], url: 'https://healos-theta.vercel.app/' },
  { slug: 'rydexx', name: 'Rydexx', description: 'Vehicle booking platform', stack: ['Next.js', 'TypeScript', 'MongoDB'], url: 'https://rydexx.netlify.app/' },
  { slug: 'resumind', name: 'Resumind', description: 'AI-powered resume builder', stack: ['React', 'TypeScript', 'OpenAI'], url: 'https://resumind-ebon.vercel.app/' },
  { slug: 'roomify', name: 'Roomify', description: 'AI architectural visualization platform', stack: ['React', 'Tailwind CSS', 'Three.js'], url: 'https://airoomify.netlify.app/' },
];

const SKILLS = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'MongoDB', 'Appwrite', 'PostgreSQL'],
  toolsAndAI: ['Git', 'GitHub', 'Vercel', 'Figma', 'OpenAI', 'LangChain'],
};

const BLOGS = [
  { title: 'The Human Element in an AGI World', url: 'https://zuhaibrashid.com/blogs/the-human-element-in-an-agi-world' },
  { title: 'From Lighthouse to Agentic Scores', url: 'https://zuhaibrashid.com/blogs/from-lighthouse-to-agentic-scores-building-for-ai-agents' },
  { title: 'Escaping Tutorial Hell as a Developer', url: 'https://zuhaibrashid.com/blogs/escaping-tutorial-hell-as-a-developer' },
];

program
  .name('zuhaibrashid')
  .description('Developer portfolio CLI for people and AI agents')
  .version('1.2.0')
  .option('--json', 'Print machine-readable JSON without terminal styling')
  .option('--plain', 'Disable terminal color and interactive prompts')
  .option('--no-clear', 'Keep the existing terminal content in interactive mode');

program.hook('preAction', () => {
  if (program.opts().plain || program.opts().json) chalk.level = 0;
});

const isJson = () => program.opts().json;
const writeJson = (value) => console.log(JSON.stringify(value, null, 2));

const printHeader = () => {
  if (!program.opts().clear) return;
  clear();
  console.log(chalk.cyan(figlet.textSync('Zuhaib Rashid', { horizontalLayout: 'full', font: 'Slant' })));
  console.log(chalk.bold.white('  Developer | Builder | Open Source Enthusiast\n'));
  console.log(chalk.dim('  -----------------------------------------------------------------\n'));
};

const showCard = () => {
  if (isJson()) return writeJson({ profile: PROFILE });

  const output = [
    `${chalk.bold.white(PROFILE.name)} ${chalk.blueBright(PROFILE.handle)}`,
    '',
    `${chalk.bold.white('Role:')} ${PROFILE.role}`,
    `${chalk.bold.white('Location:')} ${PROFILE.location}`,
    `${chalk.bold.white('Website:')} ${chalk.magenta(PROFILE.website)}`,
    `${chalk.bold.white('GitHub:')} ${chalk.green(PROFILE.github)}`,
    `${chalk.bold.white('LinkedIn:')} ${chalk.blue(PROFILE.linkedin)}`,
    `${chalk.bold.white('Email:')} ${chalk.yellow(PROFILE.email)}`,
    `${chalk.bold.white('Repository:')} ${chalk.cyan(PROFILE.repository)}`,
  ].join('\n');

  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }));
};

const showProjects = () => {
  if (isJson()) return writeJson({ projects: PROJECTS });
  const output = PROJECTS.map((project) => [
    chalk.bold.white(project.name),
    chalk.gray(project.description),
    chalk.cyan(project.stack.join(' | ')),
    chalk.magenta(project.url),
  ].join('\n')).join('\n\n');
  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'blue', title: 'Featured Projects', titleAlignment: 'center' }));
};

const showProject = (slug) => {
  const project = PROJECTS.find((item) => item.slug === slug.toLowerCase());
  if (!project) {
    if (isJson()) writeJson({ error: 'project_not_found', slug, availableProjects: PROJECTS.map((item) => item.slug) });
    else console.error(chalk.red(`Unknown project "${slug}". Try: ${PROJECTS.map((item) => item.slug).join(', ')}`));
    process.exitCode = 1;
    return;
  }

  if (isJson()) return writeJson({ project });
  console.log(boxen([
    chalk.bold.white(project.name),
    chalk.gray(project.description),
    chalk.cyan(project.stack.join(' | ')),
    chalk.magenta(project.url),
  ].join('\n'), { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'magenta' }));
};

const showSkills = () => {
  if (isJson()) return writeJson({ skills: SKILLS });
  const output = [
    chalk.bold.white('Frontend'), chalk.cyan(SKILLS.frontend.join(' | ')), '',
    chalk.bold.white('Backend'), chalk.cyan(SKILLS.backend.join(' | ')), '',
    chalk.bold.white('Tools and AI'), chalk.cyan(SKILLS.toolsAndAI.join(' | ')),
  ].join('\n');
  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green', title: 'Tech Stack' }));
};

const showBlogs = () => {
  if (isJson()) return writeJson({ blogs: BLOGS });
  const output = BLOGS.map((blog) => `${chalk.bold.white(blog.title)}\n${chalk.magenta(blog.url)}`).join('\n\n');
  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan', title: 'Technical Writing' }));
};

const getGithubStats = () => new Promise((resolve, reject) => {
  const request = https.get('https://www.zuhaibrashid.com/api/v1/github', {
    headers: { 'user-agent': 'zuhaibrashid-cli/1.2.0' },
    timeout: 8000,
  }, (response) => {
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => { body += chunk; });
    response.on('end', () => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        reject(new Error(`Portfolio API returned HTTP ${response.statusCode}`));
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Portfolio API returned invalid JSON'));
      }
    });
  });
  request.on('timeout', () => request.destroy(new Error('Portfolio API timed out after 8 seconds')));
  request.on('error', reject);
});

const showGithubStats = async () => {
  try {
    const stats = await getGithubStats();
    if (isJson()) return writeJson({ github: stats });
    const output = [
      `${chalk.white('Stars:')} ${chalk.yellow(stats.stars ?? 'Unavailable')}`,
      `${chalk.white('Forks:')} ${chalk.green(stats.forks ?? 'Unavailable')}`,
      `${chalk.white('Repositories:')} ${chalk.blueBright(stats.reposCount ?? 'Unavailable')}`,
    ].join('\n');
    console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'double', borderColor: 'yellow', title: 'GitHub Live Stats' }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    if (isJson()) writeJson({ github: null, error: { code: 'github_stats_unavailable', message } });
    else {
      console.error(chalk.yellow(`GitHub stats are temporarily unavailable: ${message}`));
      console.error(chalk.dim(`Visit ${PROFILE.github} for the latest activity.`));
    }
    process.exitCode = 1;
  }
};

const promptMenu = async () => {
  const { choice } = await inquirer.prompt([{
    type: 'list',
    name: 'choice',
    message: 'What would you like to explore?',
    choices: ['About me', 'Projects', 'Skills', 'Blogs', 'GitHub Stats', 'Contact and Links', 'Exit'],
  }]);

  printHeader();
  switch (choice) {
    case 'About me':
      console.log(chalk.bold.white('\n  I build accessible, high-performance web products and AI-ready developer experiences.\n'));
      break;
    case 'Projects': showProjects(); break;
    case 'Skills': showSkills(); break;
    case 'Blogs': showBlogs(); break;
    case 'GitHub Stats': await showGithubStats(); break;
    case 'Contact and Links': showCard(); break;
    case 'Exit':
      console.log(chalk.dim('\nThanks for dropping by.\n'));
      return;
    default: return;
  }
  await promptMenu();
};

program.action(async () => {
  if (isJson()) {
    writeJson({ profile: PROFILE, projects: PROJECTS, skills: SKILLS, blogs: BLOGS });
    return;
  }
  if (program.opts().plain || !process.stdout.isTTY) {
    showCard();
    return;
  }
  printHeader();
  console.log(chalk.bold.green('Welcome.\n'));
  await promptMenu();
});

program.command('about').description('Show profile details').action(showCard);
program.command('projects').description('View featured projects').action(showProjects);
program.command('project <slug>').description('View a project by slug').action(showProject);
program.command('skills').description('View tech stack').action(showSkills);
program.command('blogs').description('View featured technical writing').action(showBlogs);
program.command('contact').description('Show contact information').action(showCard);
program.command('links').description('Show social and developer links').action(showCard);
program.command('github').description('Fetch live GitHub statistics').action(showGithubStats);

program.parse();
