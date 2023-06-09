/* eslint-disable */
handler = (req, res) => {
  const { query: { type } } = url.parse(req.url, true);
  let data = [];
  if(type === 'video') {
    data = [
      {
        title: 'User Uploaded',
        type: 'video',
        items: [
          // {
          //   name: 'video_1',
          //   format: 'mp4',
          //   cover: '/image/video/video_1.png',
          //   source: '/video/video_1.mp4',
          //   width: 1232,
          //   height: 720,
          //   fps: 30,
          //   frameCount: 712
          // },
          // {
          //   name: 'video_2',
          //   format: 'mp4',
          //   cover: '/image/video/video_2.png',
          //   source: '/video/video_2.mp4',
          //   width: 1242,
          //   height: 652,
          //   fps: 30,
          //   frameCount: 150
          // },
          {
            name: 'online',
            format: 'mp4',
            cover: '/image/video/online.png',
            source: 'https://d3vmn69xbio3op.cloudfront.net/01H13G26H70FA5F49Y3JCD1W3T/01H13G26H7WY9122FR6X5RMQ3Q/2/01H236GZPNVN2NFT82CMC27Y2S.mp4',
            width: 1242,
            height: 652,
            fps: 25,
            frameCount: 342
          },
        ]
      },
      {
        title: 'Defaults',
        type: 'video',
        items: [
          {
            name: 'video_3',
            format: 'mp4',
            cover: '/image/video/video_3.png',
            source: '/video/video_3.mp4',
            width: 1242,
            height: 652,
            fps: 30,
            frameCount: 150
          }
        ]
      }
      // {
      //   title: '搞笑片段',
      //   type: 'video',
      //   items: [
      //     {
      //       name: 'video_4',
      //       format: 'mp4',
      //       cover: '/image/video/video_4.png',
      //       width: 650,
      //       height: 652,
      //       frameCount: 150,
      //       fps: 30,
      //       source: '/video/video_4.mp4'
      //     }
      //   ]
      // }
    ]
  }else if(type === 'audio') {
    data = [
      {
        title: 'uploaded',
        type: 'audio',
        items: [
          {
            cover: '/image/audio/audio_0.png',
            time: 25000,
            format: 'mp3',
            name: 'test1',
            source: '/audio/audio_0.mp3'
          },
          {
            cover: '/image/audio/audio_1.png',
            time: 16000,
            format: 'mp3',
            name: 'test2',
            source: '/audio/audio_1.mp3'
          },
          {
            cover: '/image/audio/audio_2.png',
            time: 41000,
            format: 'mp3',
            name: 'tests',
            source: '/audio/audio_2.mp3'
          }
        ]
      },
      {
        title: 'Defaults',
        type: 'audio',
        items: [
          {
            cover: '/image/audio/audio_3.png',
            time: 14000,
            format: 'mp3',
            name: 'test4',
            source: '/audio/audio_3.mp3'
          },
          {
            cover: '/image/audio/audio_4.png',
            time: 25000,
            format: 'mp3',
            name: 'test5',
            source: '/audio/audio_4.mp3'
          }
        ]
      }
    ]
  }else if(type === 'text') {
    data = [
      {
        title: 'Defaults',
        type: 'text',
        items: [
          {
            name: 'Always Good',
            templateId: 0,
            cover: '/image/text/text_0.png'
          },
          {
            name: 'big-price',
            templateId: 0,
            cover: '/image/text/text_0.png'
          },
          {
            name: 'chunkfive',
            templateId: 0,
            cover: '/image/text/text_0.png'
          },
          {
            name: 'lato',
            templateId: 0,
            cover: '/image/text/text_0.png'
          },
          {
            name: 'Lobster',
            templateId: 0,
            cover: '/image/text/text_0.png'
          },
          {
            name: 'oakland',
            templateId: 1,
            cover: '/image/text/text_1.png'
          },
          {
            name: 'pacifico',
            templateId: 1,
            cover: '/image/text/text_1.png'
          },
          {
            name: 'roboto',
            templateId: 1,
            cover: '/image/text/text_1.png'
          },
          {
            name: 'Sunlit Memories',
            templateId: 1,
            cover: '/image/text/text_1.png'
          }
        ]
      }
    ]
  }else if(type === 'image') {
    data = [
      {
        title: 'face uoloaded',
        type: 'image',
        items: [
          {
            name: '贴图1',
            cover: '/image/image/image_0.png',
            source: '/image/image/image_0.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 8,
          },
          {
            name: '贴图2',
            cover: '/image/image/image_0.png',
            source: '/image/image/image_0.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 8,
          },
          {
            name: '贴图3',
            cover: '/image/image/image_0.png',
            source: '/image/image/image_0.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 8,
          },
          {
            name: '贴图4',
            cover: '/image/image/image_0.png',
            source: '/image/image/image_0.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 8,
          },
          {
            name: '贴图5',
            cover: '/image/image/image_0.png',
            source: '/image/image/image_0.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 8,
          }
        ]
      },
      {
        title: 'face defaults',
        type: 'image',
        items: [
          {
            name: '贴图6',
            cover: '/image/image/image_1.png',
            source: '/image/image/image_1.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 6,
          },
          {
            name: '贴图7',
            cover: '/image/image/image_1.png',
            source: '/image/image/image_1.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 6,
          },
          {
            name: '贴图8',
            cover: '/image/image/image_1.png',
            source: '/image/image/image_1.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 6,
          },
          {
            name: '贴图9',
            cover: '/image/image/image_1.png',
            source: '/image/image/image_1.gif',
            format: 'gif',
            width: 199,
            height: 200,
            sourceFrame: 6,
          }
        ]
      }
    ]
  }else if(type === 'effect') {
    data = [
      {
        title: '热门',
        type: 'effect',
        items: [
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          },
          {
            cover: '/image/effect/effect_0.gif',
            name: '特效',
            templateId: 0
          }
        ]
      },
      {
        title: '基础',
        type: 'effect',
        items: [
          {
            cover: '/image/effect/effect_1.gif',
            name: '特效',
            templateId: 1
          },
          {
            cover: '/image/effect/effect_1.gif',
            name: '特效',
            templateId: 1
          },
          {
            cover: '/image/effect/effect_1.gif',
            name: '特效',
            templateId: 1
          },
          {
            cover: '/image/effect/effect_1.gif',
            name: '特效',
            templateId: 1
          },
          {
            cover: '/image/effect/effect_1.gif',
            name: '特效',
            templateId: 1
          }
        ]
      }
    ]
  }else if(type === 'transition') {
    data = [
      {
        title: '热门',
        type: 'transition',
        items: [
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          }
        ]
      },
      {
        title: '叠化',
        type: 'transition',
        items: [
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          }
        ]
      },
      {
        title: '运镜',
        type: 'transition',
        items: [
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          },
          {
            cover: '/image/transition/transition_0.gif',
            name: '转场',
            templateId: 0
          }
        ]
      }
    ]
  }else if(type === 'filter') {
    data = [
      {
        title: '精选',
        type: 'filter',
        items: [
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 1
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 2
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 3
          },
          {
            cover: '/image/filter/empty.png',
            name: '亮肤',
            templateId: 4
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 5
          },
          {
            cover: '/image/filter/empty.png',
            name: '酷白',
            templateId: 6
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 7
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 8
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 9
          },
          {
            cover: '/image/filter/empty.png',
            name: '滤镜',
            templateId: 10
          }
        ]
      }
    ]
  }
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.write(JSON.stringify({
    status: 200,
    data: data
  }));
  res.end();
};