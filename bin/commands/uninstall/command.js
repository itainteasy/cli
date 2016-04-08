"use strict";
const spawn = require('child_process').spawn;

exports.Command = class {
  execute(args) {
    const npm = spawn('npm', ['uninstall'].concat(args));

    npm.stdout.on('data', data => {
      console.log(data.toString());
    });

    npm.stderr.on('data', data => {
      console.log(data.toString());
    });

    npm.on('exit', code => {
      if (code === 0) {
        console.log(`Uninstalled ${args[0]}`);
      } else {
        console.log(`Error, exited with code ${code}`);
      }
    });
  }
}
