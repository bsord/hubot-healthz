// Description:
//   A simple http reponse for checking on hubot.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Notes:
//   None
//
// Author:
//   Brandon Sorgdrager
module.exports = function(robot) {
    robot.router.get("/hubot/version", function(req,res) {
      res.send (robot.version)
    });
  };