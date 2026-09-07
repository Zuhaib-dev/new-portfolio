#!/usr/bin/env node

const { program } = require('commander');
const https = require('https');
const chalk = require('chalk');
const boxen = require('boxen');

program
  .name('zuhaibrashid')
  .description('CLI to interact with Zuhaib Rashid portfolio APIs')
  .version('1.0.1');

// Default action: Print the cool business card
program.action(() => {
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

  const newline = '\n';
  const heading = `${data.name} ${data.handle}`;
  const working = `${data.labelWork}  ${data.work} (${data.location})`;
  const twittering = `${data.labelTwitter}  ${data.twitter}`;
  const githubing = `${data.labelGitHub}  ${data.github}`;
  const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
  const webing = `${data.labelWeb}  ${data.web}`;
  const emailing = `${data.labelEmail}  ${data.email}`;
  const carding = `${data.labelCard}  ${data.npx}`;

  const techStack = chalk.bold.cyan('\n  TECH STACK:') + '\n  ' + chalk.white('React 19, Next.js 15, TypeScript, Node.js, Express, MongoDB, Tailwind CSS');

  const output = heading +
                 newline + newline +
                 working + newline +
                 twittering + newline +
                 githubing + newline +
                 linkedining + newline +
                 webing + newline +
                 emailing + newline + newline +
                 techStack + newline + newline +
                 carding;

  console.log(chalk.green('\n' + boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'magenta'
  })));

  console.log(chalk.dim('  Run `npx zuhaibrashid --help` to see all available commands!\n'));
});

// GitHub API Fetcher Command
program.command('github')
  .description('Fetch live GitHub statistics from the portfolio API')
  .action(() => {
    console.log(chalk.cyan('\nFetching real-time GitHub statistics...\n'));
    https.get('https://www.zuhaibrashid.com/api/v1/github', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const stats = JSON.parse(data);
          
          const output = chalk.bold.white('  🌟 GitHub Live Stats') + '\n\n' +
                         chalk.white('  ⭐ Stars:        ') + chalk.yellow(stats.stars) + '\n' +
                         chalk.white('  🍴 Forks:        ') + chalk.green(stats.forks) + '\n' +
                         chalk.white('  📦 Repositories: ') + chalk.blueBright(stats.reposCount);

          console.log(boxen(output, {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            borderColor: 'green'
          }));
        } catch (e) {
          console.error(chalk.red('Failed to parse API response'));
        }
      });
    }).on('error', (err) => {
      console.error(chalk.red('Error fetching data: ' + err.message));
    });
  });

program.parse();
