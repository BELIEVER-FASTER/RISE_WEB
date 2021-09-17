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

type ModelData2 = {
  id: number;
  image1_src: string;
  name: string;
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
export type ModelDataItem = {
  id: number;
  image1_src: string;
  name: string;
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
};

export const modelData2: ModelData2 = [
  {
    id: 1,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/lael/lael_0.png`,
    name: '윤라엘 쇼호스트',
    desc: '품격있는 하이텐션 쇼호스트',
    detail: {
      name: 'Yoon Lael',
      category: 'Cosmetics & Fashion Showhost',
      summary: '품격있는 하이텐션 쇼호스트',
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
          name: '패션몬스터 감각적인 가을맞이 특가전',
          link: 'https://view.shoppinglive.naver.com/replays/239215',
        },
        {
          name: '패션몬스터 가을 코디 고민하지 마세요',
          link: 'https://view.shoppinglive.naver.com/replays/243738',
        },
        {
          name: '패션몬스터 동대문 블랙라벨 여성 의류',
          link: 'https://shoppinglive.naver.com/replays/169260',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/69333' },
        { type: 'naver', link: 'https://shoppinglive.naver.com/replays/84078' },
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
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seola/sera_0.png`,
    name: '박설아 쇼호스트',
    desc: '유쾌한 진행, 재섭외로 증명하는 쇼호스트',
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
  {
    id: 3,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/ahyoon/ahyoon_0.png`,
    name: '이아윤 쇼호스트',
    desc: '다양한 라이브방송의 경험으로 브랜드 가치를 높이며/ 재미있는 방송으로 선보입니다.',
    detail: {
      name: 'Lee Ahyoon',
      category: 'Cosmetics & Fashion Showhost',
      summary:
        '다양한 라이브방송의 경험으로 브랜드 가치를 높이며 재미있는 방송으로 선보이는 쇼호스트',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '삼성전자 qHD 모니터 S6 런칭',
          link: 'http://naver.me/FArcKJSb',
        },
        {
          name: '역대급 혜택의 오사비망고 모니터',
          link: 'https://view.shoppinglive.naver.com/replays/83923?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: 'MS서피스 Laptop GO 오늘만 드리는 특별한 혜택',
          link: 'http://naver.me/IDBOhw4d',
        },
        {
          name: '에이트 입기만해도 설레는 봄스타일링',
          link: 'https://shoppinglive.naver.com/replays/104493',
        },
        {
          name: '슈플마켓 조보아 스니커즈 창고에서 행사특가',
          link: 'https://shoppinglive.naver.com/replays/105595',
        },
        {
          name: '프리미엄 여성 슈즈 브랜드 지니킴',
          link: 'https://www.instagram.com/p/CM6QfanHfB8/?igshid=83skg66vjnta',
        },
        {
          name: 'APM X2 제곱한 핫 여름 신상할인',
          link: 'https://view.shoppinglive.naver.com/replays/162328',
        },
        {
          name: '국산 kf94마스크 새부리형 쇼핑라이브',
          link: 'https://shoppinglive.naver.com/replays/38016',
        },
        {
          name: '스팀베이스 가정의달 기념 토너패드, 온열안대 역대급 구성',
          link: 'https://shoppinglive.naver.com/replays/90915',
        },
        {
          name: '스팀베이스 마누카팩 + 선크림 + 패드 구성',
          link: 'https://view.shoppinglive.naver.com/replays/142773',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://naver.me/GY2cYzzf' },
        { type: 'naver', link: 'https://naver.me/IDBOhw4d' },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/ahyoon/ahyoon_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/ahyoon/ahyoon_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/ahyoon/ahyoon_3.png`,
        },
      ],
    },
  },
  {
    id: 4,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/coming_soon.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
  {
    id: 5,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/09.30.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
  {
    id: 6,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/1.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
  {
    id: 7,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/2.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
  {
    id: 8,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/3.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
  {
    id: 9,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/4.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
  {
    id: 10,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/coming/5.png`,
    name: 'Showhost',
    desc: '라이즈 홈페이지에서 새로운 쇼호스트/ 모델분을 만나보세요',
    detail: {
      name: '',
      category: '',
      summary: '',
      social: [{ name: 'Instagram', src: '' }],
      career: [
        {
          name: '',
          link: '',
        },
      ],
      liveClips: [{ type: 'naver', link: '' }],
      imageClips: [
        {
          id: 1,
          link: ``,
        },
      ],
    },
  },
];
