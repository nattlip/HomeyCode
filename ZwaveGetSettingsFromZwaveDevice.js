// set in the driver.js global space this is for a battery powered device

module.exports.on('initNode', token => {
    const node = module.exports.nodes[token];
    if (node) {
        if (node.instance.CommandClass.COMMAND_CLASS_WAKE_UP) {
            node.instance.CommandClass.COMMAND_CLASS_WAKE_UP.on('report', (command, report) => {

                if (command.name === 'WAKE_UP_NOTIFICATION') {
                    util.log('parameter1  ')
                    node.instance.CommandClass['COMMAND_CLASS_BATTERY'].BATTERY_GET({});
                    node.instance.CommandClass['COMMAND_CLASS_WAKE_UP'].WAKE_UP_INTERVAL_GET({});
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([0]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([1]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([2]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([3]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([4]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([5]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([6]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([7]) }, null);
                    node.instance.CommandClass['COMMAND_CLASS_CONFIGURATION'].CONFIGURATION_GET({ 'Parameter Number': new Buffer([8]) }, null);
                }
            });
        }
    }
});
