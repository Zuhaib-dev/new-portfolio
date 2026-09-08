#!/usr/bin/env node

const { program } = require('commander');
const https = require('https');
const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const inquirer = require('inquirer');
const clear = require('clear');

program
  .name('zuhaibrashid')
  .description('Premium Interactive CLI for Zuhaib Rashid')
  .version('1.1.0');

const printHeader = () => {
  clear();
  console.log(
    chalk.cyan(
      figlet.textSync('Zuhaib Rashid', { horizontalLayout: 'full', font: 'Slant' })
    )
  );
  console.log(chalk.bold.white('  ✦ Developer | ✦ Builder | ✦ Open Source Enthusiast\n'));
  console.log(chalk.dim('  ─────────────────────────────────────────────────────────────────\n'));
};

const showCard = () => {
  const data = {
    name: chalk.bold.white('               Zuhaib Rashid'),
    handle: chalk.blueBright('@zuhaib-dev'),
    work: chalk.white('Full Stack Developer & AI Engineer'),
    location: chalk.white('Srinagar, Kashmir ⛰️'),
    twitter: chalk.cyan('https://x.com/xuhaib_x9'),
    github: chalk.green('https://github.com/zuhaib-dev'),
    linkedin: chalk.blue('https://linkedin.com/in/zuhaib-rashid'),
    web: chalk.magenta('https://zuhaibrashid.com'),
    email: chalk.yellow('zuhaibrashid01@gmail.com'),
    npx: chalk.white('npx zuhaibrashid'),
    
    labelWork: chalk.white.bold('       Work:'),
    labelTwitter: chalk.white.bold('    Twitter:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('        Web:'),
    labelEmail: chalk.white.bold('      Email:'),
    labelCard: chalk.white.bold('       Card:')
  };

  const output = `${data.name} ${data.handle}\n\n` +
                 `${data.labelWork}  ${data.work} (${data.location})\n` +
                 `${data.labelTwitter}  ${data.twitter}\n` +
                 `${data.labelGitHub}  ${data.github}\n` +
                 `${data.labelLinkedIn}  ${data.linkedin}\n` +
                 `${data.labelWeb}  ${data.web}\n` +
                 `${data.labelEmail}  ${data.email}\n\n` +
                 `${data.labelCard}  ${data.npx}`;

  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'magenta' }));
};

const showProjects = () => {
  const output = chalk.bold.white('  HealOS\n') +
                 chalk.gray('  Healthcare management platform\n') +
                 chalk.cyan('  Next.js • React • MongoDB • Socket.io\n') +
                 chalk.magenta('  🔗 https://healos-theta.vercel.app/\n\n') +
                 chalk.bold.white('  Rydexx\n') +
                 chalk.gray('  Vehicle booking platform\n') +
                 chalk.cyan('  Next.js • TypeScript • MongoDB\n') +
                 chalk.magenta('  🔗 https://rydexx.netlify.app/\n\n') +
                 chalk.bold.white('  Resumind\n') +
                 chalk.gray('  AI-powered resume builder\n') +
                 chalk.cyan('  React • TypeScript • GPT\n') +
                 chalk.magenta('  🔗 https://resumind-ebon.vercel.app/\n\n') +
                 chalk.bold.white('  Roomify\n') +
                 chalk.gray('  AI Architecture Platform\n') +
                 chalk.cyan('  React • Tailwind CSS • Three.js\n') +
                 chalk.magenta('  🔗 https://airoomify.netlify.app/');

  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'blue', title: 'Featured Projects', titleAlignment: 'center' }));
};

const showBlogs = () => {
  const output = chalk.bold.white('  The Human Element in an AGI World\n') +
                 chalk.gray('  Why Our Imperfections Are Our Greatest Feature\n') +
                 chalk.magenta('  🔗 https://zuhaibrashid.com/blogs/the-human-element-in-an-agi-world\n\n') +
                 chalk.bold.white('  From Lighthouse to Agentic Scores\n') +
                 chalk.gray('  The Architectural Evolution of Web Development for AI Agents\n') +
                 chalk.magenta('  🔗 https://zuhaibrashid.com/blogs/from-lighthouse-to-agentic-scores-building-for-ai-agents\n\n') +
                 chalk.bold.white('  Escaping Tutorial Hell as a Developer\n') +
                 chalk.gray('  Stop watching, start building.\n') +
                 chalk.magenta('  🔗 https://zuhaibrashid.com/blogs/escaping-tutorial-hell-as-a-developer');

  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan', title: 'Featured Technical Blogs', titleAlignment: 'center' }));
};

const showSkills = () => {
  const output = chalk.bold.white('  Frontend\n') +
                 chalk.cyan('  React • Next.js • TypeScript • Tailwind CSS • Framer Motion\n\n') +
                 chalk.bold.white('  Backend\n') +
                 chalk.cyan('  Node.js • Express • MongoDB • Appwrite • PostgreSQL\n\n') +
                 chalk.bold.white('  Tools & AI\n') +
                 chalk.cyan('  Git • GitHub • Vercel • Figma • OpenAI • LangChain');

  console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'green', title: 'Tech Stack & Skills', titleAlignment: 'center' }));
};

const fetchGithubStats = () => {
  console.log(chalk.cyan('\nFetching real-time GitHub statistics...\n'));
  https.get('https://www.zuhaibrashid.com/api/v1/github', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      try {
        const stats = JSON.parse(data);
        const output = chalk.white('  ⭐ Stars:        ') + chalk.yellow(stats.stars) + '\n' +
                       chalk.white('  🍴 Forks:        ') + chalk.green(stats.forks) + '\n' +
                       chalk.white('  📦 Repositories: ') + chalk.blueBright(stats.reposCount);

        console.log(boxen(output, { padding: 1, margin: 1, borderStyle: 'double', borderColor: 'yellow', title: 'GitHub Live Stats', titleAlignment: 'center' }));
      } catch (e) {
        console.error(chalk.red('Failed to parse API response'));
      }
    });
  }).on('error', (err) => {
    console.error(chalk.red('Error fetching data: ' + err.message));
  });
};

const promptMenu = async () => {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to explore?',
      choices: [
        'About me',
        'Projects',
        'Skills',
        'Blogs',
        'GitHub Stats',
        'Contact & Links',
        'Exit'
      ]
    }
  ]);

  switch (choice) {
    case 'About me':
      printHeader();
      console.log(chalk.bold.white('\n  Hey there! 👋 I am Zuhaib Rashid.'));
      console.log(chalk.gray('  I am a passionate Full-Stack Developer focused on building accessible, premium web experiences.'));
      console.log(chalk.gray('  I enjoy bridging the gap between design and engineering, combining React and Node.js with modern AI Agent architectures.\n'));
      await promptMenu();
      break;
    case 'Projects':
      printHeader();
      showProjects();
      await promptMenu();
      break;
    case 'Skills':
      printHeader();
      showSkills();
      await promptMenu();
      break;
    case 'Blogs':
      printHeader();
      showBlogs();
      await promptMenu();
      break;
    case 'Contact & Links':
      printHeader();
      showCard();
      await promptMenu();
      break;
    case 'GitHub Stats':
      printHeader();
      fetchGithubStats();
      break;
    case 'Exit':
      console.log(chalk.dim('\n  Thanks for dropping by! Have a great day. 🚀\n'));
      process.exit(0);
  }
};

// Interactive Mode (Default)
program.action(async () => {
  printHeader();
  console.log(chalk.bold.green('  Welcome, developer 👋\n'));
  await promptMenu();
});

// Sub-commands
program.command('about').description('About Zuhaib').action(() => {
  console.log(chalk.bold.white('\n  Zuhaib Rashid'));
  console.log(chalk.gray('  Full-Stack Developer & AI Engineer\n'));
});

program.command('projects').description('View featured projects').action(() => {
  showProjects();
});

program.command('skills').description('View tech stack').action(() => {
  showSkills();
});

program.command('blogs').description('Read featured technical blogs').action(() => {
  showBlogs();
});

program.command('contact').description('Contact information').action(() => {
  showCard();
});

program.command('links').description('Social & developer links').action(() => {
  showCard();
});

program.command('github').description('Fetch live GitHub statistics').action(() => {
  fetchGithubStats();
});

program.parse();
