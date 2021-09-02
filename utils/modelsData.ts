export const seraImages = [
  {
    id: 1,
    src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/live/sera_1.png`,
  },
  {
    id: 2,
    src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/live/sera_2.png`,
  },
  {
    id: 3,
    src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/live/sera_3.png`,
  },
];
export const laelImages = [
  {
    id: 1,
    src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/live/lael_1.png`,
  },
  {
    id: 2,
    src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/live/lael_2.png`,
  },
  {
    id: 3,
    src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/live/lael_3.png`,
  },
];

export const moreModelList = [
  {
    id: 1,
    src: 'https://lh3.googleusercontent.com/9cdXCw0uHVADpAgLcJ_vyNMKjLwh40ZkTmlPQOhO0t9TK2ByM3kLA4bzgw5aR7PId2jhJDIMhuP8V3VoC0wyMKXFCqHz-KZCyQePlhzEz5ek3tNjW_qaEzDQhYQQbrz4CIYaivef=w2400',
    name: '강수진 / Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
  },
  {
    id: 2,
    src: 'https://lh3.googleusercontent.com/2jd1NLONDDfcONOnTe18GJ33GljcYgK_Sf-yyaBGO_dxy0msYgTI-RAzBAwbV68RgdhJ5n5tUxt3ElaulT_p4CNRzKvWH-J4OjrV8-MgVVkGke2pm3zmZdencrU6uS7zma2VgwgM=w2400',
    name: '강수진 / Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
  },
  {
    id: 3,
    src: 'https://lh3.googleusercontent.com/y5nWkgL88InP2izmBsumXb8i5vQ5CYA1NLAv3J5OXrgXALAu1VGRu0h5jl1Drh0spbG48KucC00ZnFxsL1db4Gs5YKFnO6ZkSpqVEIqDwYZCwvNVUs7qLLPTG55HetQEOVuDCGCx=w2400',
    name: '강수진 / Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
  },
  {
    id: 4,
    src: 'https://lh3.googleusercontent.com/xKg9pJH-5S3Xvgj56ZHiSQ73NeG90tpROmzch9P-yvmsaFklup3VU0Pe8u4aDKG4uXRk82d9ywsjpIpHcKkoIO3RWYH9YQ_oemO0gSMTAJpylrghgIIjH3Ye4UUpb-I7vpTeK_Ym=w2400',
    name: '강수진 / Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
  },
  {
    id: 5,
    src: 'https://lh3.googleusercontent.com/WMEOESqOUlGF1nt-Vv8sz87tfMiLAShqpOWlLhXPVR1Cs6zn5a1I-4XARgvazFzZkKDYxJNK4cyIgpppJ4zmWNOGdFFwRP2OM_LzfToykVWGpZuo9-BQC7oDAokbNVZCFL4-c_2R=w2400',
    name: '강수진 / Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
  },
  {
    id: 6,
    src: 'https://lh3.googleusercontent.com/3hagIrYdyU7idXMWnedpD5NF9srWPFexszPujSyqmdPz7Ytc1g3qZ4hwZwhJqgMpCvoCojg3SQv9O3697biUc1xfvK3A1x5q_JI8d9qMYTPAd2k9BW9f6v9uwqG7vkB19jYbWWQh=w2400',
    name: '강수진 / Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
  },
];
type ModelData2 = {
  id: number;
  image1_src: string;
  name: string;
  cate: string;
  desc: string;
  detail: {
    name: string;
    category: string;
    summary: string;
    social: {
      name: 'Instagram' | 'Facebook' | 'Blog';
      src: string;
    }[];
    career: {
      name: string;
      link: string;
    }[];
    liveClips: {
      type: 'naver';
      link: string;
    }[];
    imageClips: {
      id: number;
      link: string;
    }[];
  };
}[];

export const modelData2: ModelData2 = [
  {
    id: 1,
    image1_src:
      'https://lh3.googleusercontent.com/2jd1NLONDDfcONOnTe18GJ33GljcYgK_Sf-yyaBGO_dxy0msYgTI-RAzBAwbV68RgdhJ5n5tUxt3ElaulT_p4CNRzKvWH-J4OjrV8-MgVVkGke2pm3zmZdencrU6uS7zma2VgwgM=w2400',
    name: '강수진 / Cosmetics ',
    cate: 'Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
    detail: {
      name: 'Yoon Lael',
      category: 'Cosmetics & Fashion Showhost',
      summary: '하이텐션 입담과 반전매력을 소유한 샵테이너',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/laelism/' }],
      career: [
        {
          name: '아이더 2021 봄맞이 스페셜한 혜택',
          link: 'https://view.shoppinglive.naver.com/replays/69333',
        },
        {
          name: '에디션 x 지이크 슈퍼원데이 릴레이라이브',
          link: 'https://shoppinglive.naver.com/replays/84078',
        },
        {
          name: '아이더 2021 신년맞이 특별한 혜택 대방출',
          link: 'https://shoppinglive.naver.com/replays/54257',
        },
        {
          name: '홈트 끝판왕 레이몬 멀티핏과 여름준비',
          link: 'https://shoppinglive.naver.com/replays/178826',
        },
        {
          name: '컬럼비아 슈퍼원데이 릴레이 라이브',
          link: 'https://shoppinglive.naver.com/replays/81894',
        },
        {
          name: '스튜디오 톰보이 홀리데이',
          link: 'https://shoppinglive.naver.com/replays/42195',
        },
        {
          name: '패션몬스터 동대문 블랙라벨 여성 의류',
          link: 'https://shoppinglive.naver.com/replays/169260',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/69333' },
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/69333' },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/lael/lael_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/lael/lael_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/lael/lael_3.png`,
        },
      ],
    },
  },
  {
    id: 2,
    image1_src:
      'https://lh3.googleusercontent.com/2jd1NLONDDfcONOnTe18GJ33GljcYgK_Sf-yyaBGO_dxy0msYgTI-RAzBAwbV68RgdhJ5n5tUxt3ElaulT_p4CNRzKvWH-J4OjrV8-MgVVkGke2pm3zmZdencrU6uS7zma2VgwgM=w2400',
    name: '강수진 / Cosmetics ',
    cate: 'Cosmetics',
    desc: '글로벌 콘텐츠를 시청하는 한국인들의 리얼한 반응을 보여주는 리액션 전문 채널입니다.',
    detail: {
      name: 'Park Seola',
      category: 'Cosmetics & Fashion Showhost',
      summary: '하이텐션 입담과 반전매력을 소유한 샵테이너',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '11번가 SK매직 식기세척기, 비데',
          link: 'https://live11.11st.co.kr/output/20210416_14hlive_full/Default/MP4/20210416_14hlive_full.mp4',
        },
        {
          name: '현대Hmall 동원홈푸드 금천한돈',
          link: 'https://www.instagram.com/p/CSyjLpAhQDQ/?utm_medium=copy_link',
        },
        {
          name: '최희의 최애쇼핑 X 베이비브레짜',
          link: 'https://shoppinglive.naver.com/replays/190954',
        },
        {
          name: '광주KBC 방송국 우리동네 좋드만마켓 with',
          link: 'https://shoppinglive.naver.com/replays/206707',
        },
        {
          name: '대우 루컴즈 전자 TV 특전',
          link: 'https://view.shoppinglive.naver.com/replays/210160',
        },
        {
          name: '프랑스 명품 디퓨저, 로탄틱',
          link: 'https://shoppinglive.naver.com/replays/179866',
        },
        {
          name: '라운드랩 독도토너, 독도로션 포함 BEST7 럭키데이',
          link: 'https://shoppinglive.naver.com/replays/179879',
        },
        {
          name: '패션몬스터 동대문 블랙라벨 여성 의류',
          link: 'https://shoppinglive.naver.com/replays/141137',
        },
        {
          name: '페페로니 강아지 간식',
          link: 'https://shoppinglive.naver.com/replays/147239',
        },
        {
          name: '아이코코 kFAD 수영장 마스크',
          link: 'https://shoppinglive.naver.com/replays/218495',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/141137' },
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/218495' },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seola/sera_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seola/sera_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seola/sera_3.png`,
        },
      ],
    },
  },
];
