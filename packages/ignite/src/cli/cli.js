const { build, printCommands } = require('gluegun')
const header = require('../brand/header')
const { isNil } = require('ramda')

/**
 * Kick off a run.
 *
 * @param  {array}      argv An array of command line arguments.
 * @return {RunContext}      The gluegun RunContext
 */
module.exports = async function run (argv) {
  // create a runtime
  const runtime = build()
    .brand('ignite')
    .loadAll(`${__dirname}/../plugins`)
    .token('commandName', 'cliCommand')
    .token('commandDescription', 'cliDescription')
    .token('extensionName', 'contextExtension')
    .createRuntime()

  // run the command
  const context = await runtime.run()

  // print the commands (TODO: but not if we just ran i guess)
  if (isNil(context.plugin) || isNil(context.command)) {
    header()
    printCommands(context)
  }

  // send it back to make testing easier
  return context
}
