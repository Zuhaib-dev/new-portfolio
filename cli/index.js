#!/usr/bin/env node

const { program } = require('commander');
const https = require('https');

program
  .name('zuhaibrashid')
  .description('CLI to interact with Zuhaib Rashid portfolio APIs')
  .version('1.0.0');

program.command('github')
  .description('Fetch live GitHub statistics')
  .action(() => {
    https.get('https://www.zuhaibrashid.com/api/v1/github', (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const stats = JSON.parse(data);
          console.log('\n🌟 GitHub Stats:');
          console.log(`Stars: ${stats.stars}`);
          console.log(`Forks: ${stats.forks}`);
          console.log(`Repositories: ${stats.reposCount}\n`);
        } catch (e) {
          console.error('Failed to parse API response');
        }
      });
    }).on('error', (err) => {
      console.error('Error fetching data: ' + err.message);
    });
  });

program.command('info')
  .description('Print developer profile information')
  .action(() => {
    console.log('\n🧑‍💻 Zuhaib Rashid');
    console.log('Role: Full Stack Developer');
    console.log('Location: Srinagar, Kashmir');
    console.log('Stack: React 19, Next.js 15, Node.js, AI Agents');
    console.log('Portfolio: https://www.zuhaibrashid.com\n');
  });

program.parse();
