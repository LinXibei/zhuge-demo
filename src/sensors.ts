import sensors from "sa-sdk-javascript";
sensors.init({
  is_track_single_page: true,
  show_log: true,
  server_url: "http://shence.ap-ec.cn:8106/debug",
  heat_map: {
    clickmap: "default",
    scroll_notice_map: "default",
  }
});
sensors.quick("autoTrack");
export default sensors;