const profile = [{
  "code": "catenoid1000k",
  "name": "1000K",
  "companyCode": "catenoid",
  "videoCodec": "h264",
  "videoFormat": "mp4",
  "videoBitrate": "1000k",
  "frameRate": "29.97",
  "resolution": "1920x1080",
  "profileLevel": "4.1",
  "audioCodec": "aac",
  "audioBitrate": "320k",
  "audioSampleRate": "48000",
  "previewUse": 1,
  "firstTranscode": false,
  "data": {
    "horizontal": {
      "profile_name": "catenoid-1000k-horizontal",
      "output_dir": "/mlink-dev/mlink/kakaoent/transcoding",
      "output_filename": "output.mp4",
      "container_format": "mp4",
      "encrypt_level": 0,
      "encrypt_key": null,
      "pass_through": false,
      "encoding_pass": 1,
      "video_profile": {
        "skip_video": false,
        "copy_video": false,
        "video_codec": "h264",
        "h264_settings": {
          "profile": "high",
          "level": "4.1",
          "video_rate_control_mode": "CBR",
          "video_bitrate": 2000,
          "video_minrate": 2000,
          "video_maxrate": 2000,
          "video_bufsize": 700,
          "reference_frames": 4,
          "cabac": true,
          "gop_size": 29,
          "keyint_min": 3,
          "video_bframes": 2,
          "keyframe_interval": 250,
          "high_tier": false,
          "tune": "zerolatency"
        },
        "mpeg2_settings": null,
        "wmv2_settings": null,
        "video_width": 1920,
        "video_height": 1080,
        "aspect_mode": "pad",
        "video_framerate": 29.97,
        "deblock": true,
        "video_overlay_position": "lb",
        "video_overlay_position_x": 13,
        "video_overlay_position_y": 23,
        "video_overlay_path": {
          "input_filename": "https://vcast-dev-catenoid-s3-storage.s3.ap-northeast-2.amazonaws.com/logo/company/catenoid_20210803174349.png",
          "source": "s3conf"
        }
      },
      "audio_profile": {
        "skip_audio": false,
        "copy_audio": false,
        "audio_codec": "aac",
        "aac_settings": {
          "aac_profile": "aac_low",
          "audio_rate_control_mode": "CBR",
          "audio_quality": 4,
          "audio_bitrate": 320,
          "audio_samplerate": 48000,
          "audio_channel": 2,
          "audio_volume_control": 100
        },
        "ac3_settings": null,
        "audio_constant_bitrate": true,
        "audio_gain": 0,
        "audio_normalize_target": null
      },
      "service_name": "1080p"
    },
    "vertical": {
      "profile_name": "catenoid-1000k-vertical",
      "output_dir": "/mlink-dev/mlink/kakaoent/transcoding",
      "output_filename": "output.mp4",
      "container_format": "mp4",
      "encrypt_level": 0,
      "encrypt_key": null,
      "pass_through": false,
      "encoding_pass": 1,
      "video_profile": {
        "skip_video": false,
        "copy_video": false,
        "video_codec": "h264",
        "h264_settings": {
          "profile": "high",
          "level": "4.1",
          "video_rate_control_mode": "CBR",
          "video_bitrate": 2000,
          "video_minrate": 2000,
          "video_maxrate": 2000,
          "video_bufsize": 700,
          "reference_frames": 4,
          "cabac": true,
          "gop_size": 29,
          "keyint_min": 3,
          "video_bframes": 2,
          "keyframe_interval": 250,
          "high_tier": false,
          "tune": "zerolatency"
        },
        "mpeg2_settings": null,
        "wmv2_settings": null,
        "video_width": 1080,
        "video_height": 1920,
        "aspect_mode": "pad",
        "video_framerate": 29.97,
        "deblock": true,
        "video_overlay_position": "rb",
        "video_overlay_position_x": 35,
        "video_overlay_position_y": 45,
        "video_overlay_path": {
          "input_filename": "https://vcast-dev-catenoid-s3-storage.s3.ap-northeast-2.amazonaws.com/logo/company/catenoid_20210803174352.png",
          "source": "s3conf"
        }
      },
      "audio_profile": {
        "skip_audio": false,
        "copy_audio": false,
        "audio_codec": "aac",
        "aac_settings": {
          "aac_profile": "aac_low",
          "audio_rate_control_mode": "CBR",
          "audio_quality": 4,
          "audio_bitrate": 320,
          "audio_samplerate": 48000,
          "audio_channel": 2,
          "audio_volume_control": 100
        },
        "ac3_settings": null,
        "audio_constant_bitrate": true,
        "audio_gain": 0,
        "audio_normalize_target": null
      },
      "service_name": "1080p"
    },
    "cinema": {
      "profile_name": "catenoid-1000k-cinema",
      "output_dir": "/mlink-dev/mlink/kakaoent/transcoding",
      "output_filename": "output.mp4",
      "container_format": "mp4",
      "encrypt_level": 0,
      "encrypt_key": null,
      "pass_through": false,
      "encoding_pass": 1,
      "video_profile": {
        "skip_video": false,
        "copy_video": false,
        "video_codec": "h264",
        "h264_settings": {
          "profile": "high",
          "level": "4.1",
          "video_rate_control_mode": "CBR",
          "video_bitrate": 2000,
          "video_minrate": 2000,
          "video_maxrate": 2000,
          "video_bufsize": 700,
          "reference_frames": 4,
          "cabac": true,
          "gop_size": 29,
          "keyint_min": 3,
          "video_bframes": 2,
          "keyframe_interval": 250,
          "high_tier": false,
          "tune": "zerolatency"
        },
        "mpeg2_settings": null,
        "wmv2_settings": null,
        "video_width": 2560,
        "video_height": 1080,
        "aspect_mode": "pad",
        "video_framerate": 29.97,
        "deblock": true,
        "video_overlay_position": "rt",
        "video_overlay_position_x": 51,
        "video_overlay_position_y": 61,
        "video_overlay_path": {
          "input_filename": "https://vcast-dev-catenoid-s3-storage.s3.ap-northeast-2.amazonaws.com/logo/company/catenoid_20210803174354.png",
          "source": "s3conf"
        }
      },
      "audio_profile": {
        "skip_audio": false,
        "copy_audio": false,
        "audio_codec": "aac",
        "aac_settings": {
          "aac_profile": "aac_low",
          "audio_rate_control_mode": "CBR",
          "audio_quality": 4,
          "audio_bitrate": 320,
          "audio_samplerate": 48000,
          "audio_channel": 2,
          "audio_volume_control": 100
        },
        "ac3_settings": null,
        "audio_constant_bitrate": true,
        "audio_gain": 0,
        "audio_normalize_target": null
      },
      "service_name": "1080p"
    },
    "square": {
      "profile_name": "catenoid-1000k-square",
      "output_dir": "/mlink-dev/mlink/kakaoent/transcoding",
      "output_filename": "output.mp4",
      "container_format": "mp4",
      "encrypt_level": 0,
      "encrypt_key": null,
      "pass_through": false,
      "encoding_pass": 1,
      "video_profile": {
        "skip_video": false,
        "copy_video": false,
        "video_codec": "h264",
        "h264_settings": {
          "profile": "high",
          "level": "4.1",
          "video_rate_control_mode": "CBR",
          "video_bitrate": 2000,
          "video_minrate": 2000,
          "video_maxrate": 2000,
          "video_bufsize": 700,
          "reference_frames": 4,
          "cabac": true,
          "gop_size": 29,
          "keyint_min": 3,
          "video_bframes": 2,
          "keyframe_interval": 250,
          "high_tier": false,
          "tune": "zerolatency"
        },
        "mpeg2_settings": null,
        "wmv2_settings": null,
        "video_width": 1080,
        "video_height": 1080,
        "aspect_mode": "pad",
        "video_framerate": 29.97,
        "deblock": true,
        "video_overlay_position": "lt",
        "video_overlay_position_x": 12,
        "video_overlay_position_y": 22,
        "video_overlay_path": {
          "input_filename": "https://vcast-dev-catenoid-s3-storage.s3.ap-northeast-2.amazonaws.com/logo/company/catenoid_20210803174357.png",
          "source": "s3conf"
        }
      },
      "audio_profile": {
        "skip_audio": false,
        "copy_audio": false,
        "audio_codec": "aac",
        "aac_settings": {
          "aac_profile": "aac_low",
          "audio_rate_control_mode": "CBR",
          "audio_quality": 4,
          "audio_bitrate": 320,
          "audio_samplerate": 48000,
          "audio_channel": 2,
          "audio_volume_control": 100
        },
        "ac3_settings": null,
        "audio_constant_bitrate": true,
        "audio_gain": 0,
        "audio_normalize_target": null
      },
      "service_name": "1080p"
    }
  },
  "created": {
    "user": {
      "id": "stpark",
      "name": "박상태"
    },
    "time": {
      "utc": "2021-05-23 02:05:06",
      "kr": "2021-05-23 11:05:06"
    }
  },
  "updated": {
    "user": {
      "id": "297test@catenoid.net",
      "name": "카테노이드"
    },
    "time": {
      "utc": "2021-08-04T01:20:21.633Z",
      "kr": "2021-08-04 01:20:21"
    }
  }
}]

module.exports = {profile};