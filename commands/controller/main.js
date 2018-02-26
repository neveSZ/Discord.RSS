const stats = require('./stats.js')
const setGame = require('./setgame.js')
const setAvatar = require('./setavatar.js')
const setUsername = require('./setusername.js')
const pingMe = require('./pingme.js')
const blacklist = require('./blacklist.js')
const unblacklist = require('./unblacklist.js')
const refresh = require('./refresh.js')
const getSources = require('./getsources.js')
const feedGuild = require('./feedguild.js')
const cleanFailed = require('./cleanfailed.js')
const forceRemove = require('./forceremove.js')
const debug = require('./debug.js')
const undebug = require('./undebug.js')
const setConfig = require('./setconfig.js')
const checkLimits = require('./checklimits.js')
const dbBackup = require('./dbbackup.js')
const dbRestore = require('./dbrestore.js')
const restore = require('./restore.js')
const refreshVIPs = require('./refreshvips.js')

exports.stats = stats
exports.setgame = setGame
exports.setavatar = setAvatar
exports.setusername = setUsername
exports.pingme = pingMe
exports.blacklist = blacklist
exports.unblacklist = unblacklist
exports.refresh = refresh
exports.getsources = getSources
exports.feedguild = feedGuild
exports.cleanfailed = cleanFailed
exports.forceremove = forceRemove
exports.debug = debug
exports.undebug = undebug
exports.setconfig = setConfig
exports.checklimits = checkLimits
exports.dbbackup = dbBackup
exports.dbrestore = dbRestore
exports.restore = restore
exports.refreshvips = refreshVIPs
