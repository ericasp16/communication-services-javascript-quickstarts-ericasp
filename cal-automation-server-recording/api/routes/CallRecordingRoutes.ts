"use strict";
module.exports = function (app: any) {
  var controller = require("../controllers/callRecordingController");
  app.route("/").get(controller.startUp);

  app.route("/outboundCall").get(controller.outboundCall);
  
  app.route("/startRecording").get(controller.startRecording);

  app.route("/pauseRecording").get(controller.pauseRecording);

  app.route("/resumeRecording").get(controller.resumeRecording);

  app.route("/stopRecording").get(controller.stopRecording);

  app.route("/getRecordingState").get(controller.getRecordingState);

  app.route("/recordingFileStatus").post(controller.recordingFileStatus);

  app.route("/downloadRecording").get(controller.downloadRecording);

  app.route("/deleteRecording").delete(controller.deleteRecording);
};
