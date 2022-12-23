import { ftpSetting } from "../settings/path.js";
import gutil from "gulp-util";
import ftp from "vinyl-ftp";

export function ftp() {
   configFTP.log = gutil.log;
   const connection = ftp.create(ftpSetting);
   return app.gulp.src(`${app.path.buildFolder}/`)      
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            "title": "FTP",
            "message": "Error: <%= error.message %>",
         })
      ))
}