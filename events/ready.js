module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Open! Door of Dreams! Logged in as ${client.user.tag}`);
  },
};