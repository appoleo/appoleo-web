<template>
  <div>
    <div>Rules</div>
    <div>
      <video
        id="example_video_1"
        class="video-js vjs-default-skin"
        controls
        preload="auto"
        width="800"
        height="400"
        poster="http://vjs.zencdn.net/v/oceans.png"
        data-setup="{}"
      >
        <!-- <source
          src="rtsp://admin:admin123@10.255.96.87:554/cam/realmonitor?channel=1&subtype=0"
          type="rtsp/flv"
        /> -->
        <source
          src="rtsp://192.168.0.26:8554/vlc"
          type="rtsp/flv"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
//   name: 'video',
  data() {
    return {}
  },
  mounted() {
    this.playervideo('example_video_1')
  },
  methods: {
    playervideo(id) {
      var player = this.$video(id, {}, function onPlayerReady() {
        this.play()
        this.on('ended', function() {
          console.log('Awww...over so soon?!')
        })
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
