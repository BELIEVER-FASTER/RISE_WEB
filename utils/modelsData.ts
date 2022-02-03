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
    desc: '다양한 라이브방송의 경험으로 브랜드 가치를/ 높이며 재미있는 방송으로 선보입니다.',
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
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/donghyun/donghyun_0.png`,
    name: '김동현 쇼호스트',
    desc: '다양한 라이브방송의 경험으로 브랜드 가치를/ 높이며 재미있는 방송으로 선보입니다.',
    detail: {
      name: 'Kim DongHyun',
      category: 'Cosmetics & Fashion Showhost',
      summary:
        '다양한 라이브방송의 경험으로 브랜드 가치를  높이며 재미있는 방송으로 선보이는 쇼호스트',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/the.0229/' }],
      career: [
        {
          name: 'CJ온스타일 라코스테',
          link: 'https://view.shoppinglive.naver.com/replays/225405',
        },
        {
          name: '비에스래빗 모자',
          link: 'https://view.shoppinglive.naver.com/replays/231429',
        },
        {
          name: '모던에이블 의류',
          link: 'https://view.shoppinglive.naver.com/replays/231441',
        },
        {
          name: '몽크로스 티셔츠',
          link: 'https://view.shoppinglive.naver.com/replays/209922',
        },
        {
          name: '유세븐 운동화',
          link: 'https://view.shoppinglive.naver.com/replays/183124',
        },
        {
          name: '명품시계 태그호이어',
          link: 'https://player.sauceflex.com/broadcast/vcallets-75893888d48a453282d568f03e02ab16?npc=live',
        },
        {
          name: 'MLB 패션 마스크',
          link: 'https://view.shoppinglive.naver.com/replays/178944',
        },
        {
          name: 'Jeep 맨투맨',
          link: 'https://view.shoppinglive.naver.com/replays/261709',
        },
        {
          name: '닥터아제라 화장품',
          link: 'https://view.shoppinglive.naver.com/replays/225914',
        },
        {
          name: '엘리샤코이 콤부차 라인',
          link: 'https://view.shoppinglive.naver.com/replays/204251',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/246722' },
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/225405' },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/donghyun/donghyun_2.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/donghyun/donghyun_1.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/donghyun/donghyun_3.png`,
        },
      ],
    },
  },
  {
    id: 5,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seungin/seungin_0.png`,
    name: '최승인 쇼호스트',
    desc: '새로운 뷰티패션의 쇼호스트를 찾는다면/ 제 피부와 패션 센스로 증명하겠습니다./ 저와 함께 가보시죠!',
    detail: {
      name: 'Choi Seung In',
      category: 'Cosmetics & Fashion Showhost',
      summary:
        '새로운 뷰티패션의 쇼호스트를 찾는다면 제 피부와 패션센스로 증명하겠습니다. 저와 함께 가보시죠!',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/jj_jj_c/?hl=ko' }],
      career: [
        {
          name: '연세닥터톡스프리미엄',
          link: 'https://naver.me/F9QpERbm',
        },
        {
          name: '산양유 단백질',
          link: 'https://naver.me/F5bT0gXz',
        },
        {
          name: '국내산 수제 돼지양념갈비',
          link: 'https://naver.me/xdIUl5Zz',
        },
        {
          name: '고체향수',
          link: 'https://naver.me/xcKJ8cvG',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://naver.me/xcKJ8cvG' },
        { type: 'naver', link: 'https://naver.me/xdIUl5Zz' },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seungin/seungin_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seungin/seungin_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seungin/seungin_3.png`,
        },
      ],
    },
  },
  {
    id: 6,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seongmin/seongmin_0.png`,
    name: '노성민 쇼호스트',
    desc: '뻔하지 않은 FUN한 즐거운 진행!/ 늘 변함없는 마음과 진정성 있는 마음으로/ 다가가겠습니다. ',
    detail: {
      name: 'Noh SeongMin',
      category: 'Cosmetics & Fashion Showhost',
      summary:
        '뻔하지 않은 FUN한 즐거운 진행! 늘 변함없는 마음과 진정성 있는 마음으로 다가가겠습니다. ',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/mc.seongmin/' }],
      career: [
        {
          name: '인천삼대게장',
          link: 'https://view.shoppinglive.naver.com/replays/151961?from=share',
        },
        {
          name: '인천삼대게장2',
          link: 'https://view.shoppinglive.naver.com/replays/196508?from=share',
        },
        {
          name: '인천삼대게장3',
          link: 'https://view.shoppinglive.naver.com/replays/172065?from=share',
        },
        {
          name: '별미담 마약빠삭이',
          link: 'https://view.shoppinglive.naver.com/replays/141036',
        },
        {
          name: '어나더미트 T본스테이크',
          link: 'https://view.shoppinglive.naver.com/replays/141363',
        },
        {
          name: '비타민하우스',
          link: 'https://view.shoppinglive.naver.com/replays/54570',
        },
        {
          name: '엘지 프라엘 메디헤어',
          link: 'https://view.shoppinglive.naver.com/replays/224859?from=share',
        },
        {
          name: '밸런스온 방석',
          link: 'https://view.shoppinglive.naver.com/replays/200567?from=share',
        },
        {
          name: '독일럼멜코리아',
          link: 'https://view.shoppinglive.naver.com/replays/172065?from=share',
        },
        {
          name: '골드리아',
          link: 'https://view.shoppinglive.naver.com/replays/77601',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/141036' },
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/224859?from=share',
        },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seongmin/seongmin_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seongmin/seongmin_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seongmin/seongmin_3.png`,
        },
      ],
    },
  },
  {
    id: 7,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon/gowoon_0.png`,
    name: '정고운 쇼호스트',
    desc: '저는 밝은 에너지를 가진 저만의 상큼한/ 에너지로 특별한 방송 보여드리겠습니다',
    detail: {
      name: 'Jeong Gowoon',
      category: 'cosmetics & fashion Showhost',
      summary:
        '저는 밝은 에너지를 가진 저만의 상큼한 에너지로 특별한 방송 보여드리겠습니다',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/ggo_0_131/' }],
      career: [
        {
          name: '명품 메종마르지엘라',
          link: 'https://www.youtube.com/watch?v=sJOejCbqSRo',
        },
        {
          name: '타미힐피거 반팔',
          link: 'https://www.youtube.com/watch?v=OcdP6mVMlRE',
        },
        {
          name: '나이키 에어맥스 270 리엑트',
          link: 'https://www.youtube.com/watch?v=IeR4FO1Ygcg',
        },
        {
          name: '입생로랑 쿠션, 에스티로더 더블웨어 파운데이션',
          link: 'https://youtu.be/jpv_8T1kuO8',
        },
        {
          name: '에뛰드 플레이 컬러 아이즈',
          link: 'https://youtu.be/WyeSFrG0B5Y',
        },
        {
          name: '쁘리엘르 펫 노즈워크&동결건조간식',
          link: 'http://naver.me/IIqoUvIr',
        },
        {
          name: '모립 공부 집중력 타이머',
          link: 'http://naver.me/GbEaTWg6',
        },
        {
          name: '제주 위호텔 방송',
          link: 'https://youtu.be/eci3BW4ThUc',
        },
        {
          name: '제주도 청귤',
          link: 'https://youtu.be/hhoUAWkaJiA',
        },
        {
          name: '제주 스누피가든 투어',
          link: 'https://youtu.be/JSYXZMuiLXA',
        },
      ],
      liveClips: [
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/275026?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/282646?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon/gowoon_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon/gowoon_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon/gowoon_3.png`,
        },
      ],
    },
  },
  {
    id: 8,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/siyeon/siyeon_0.png`,
    name: '김시연 쇼호스트',
    desc: '다양한 경험과 활동으로 고객의 니즈에 맞는 방송을 진행합니다.',
    detail: {
      name: 'Kim Siyeon',
      category: 'cosmetics & fashion Showhost',
      summary: '다양한 경험과 활동으로 고객의 니즈에 맞는 방송을 진행합니다.',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/siyeon0622' }],
      career: [
        {
          name: '앤디스클라인',
          link: 'https://view.shoppinglive.naver.com/replays/137076?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '로저던 프리미엄 골프',
          link: 'https://view.shoppinglive.naver.com/replays/191052?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '제시뉴욕',
          link: 'https://view.shoppinglive.naver.com/replays/169309?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '샤비 화장품',
          link: 'https://view.shoppinglive.naver.com/replays/310905?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '데쌍브르 30일의 기적',
          link: 'https://view.shoppinglive.naver.com/replays/172864?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '셀더마 마스크팩',
          link: 'https://view.shoppinglive.naver.com/replays/225992?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '동일하이씨푸드',
          link: 'https://view.shoppinglive.naver.com/replays/243681?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '닭발굽는 바리스타',
          link: 'https://view.shoppinglive.naver.com/replays/214949?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '투비펫 오스테크 습식 파우치',
          link: 'https://view.shoppinglive.naver.com/replays/255693?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '캠핑캠퍼 카라반',
          link: 'https://view.shoppinglive.naver.com/replays/285579?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
      ],
      liveClips: [
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/310905?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/169309?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/siyeon/siyeon_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/siyeon/siyeon_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/siyeon/siyeon_3.png`,
        },
      ],
    },
  },
  {
    id: 9,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeri/hyeri_0.png`,
    name: '빈혜리 쇼호스트',
    desc: '다채로운 필드의 경험과 방송실력까지 겸비한 쇼호스트이자 함께하는 브랜드만의 팔레트입니다.',
    detail: {
      name: 'Bin Hyeri',
      category: 'cosmetics & fashion Showhost',
      summary:
        '다채로운 필드의 경험과 방송실력까지 겸비한 쇼호스트이자 함께하는 브랜드만의 팔레트입니다.',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/palette.bin/' }],
      career: [
        {
          name: 'ZOOC주크 블라우스',
          link: 'https://view.shoppinglive.naver.com/replays/148951?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '잇미샤 겨울 아이템',
          link: 'https://view.shoppinglive.naver.com/replays/228501',
        },
        {
          name: '아디다스 키즈',
          link: 'https://view.shoppinglive.naver.com/replays/129197?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '무슈제이 화장품',
          link: 'https://view.shoppinglive.naver.com/replays/225718?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '프라다 향수',
          link: 'https://view.shoppinglive.naver.com/replays/276089?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '대상웰라이프 마이밀',
          link: 'https://view.shoppinglive.naver.com/replays/174413?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '인천광역시 사회적경제센터 수작떡공방',
          link: 'https://view.shoppinglive.naver.com/replays/303765?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '함양산삼항노화엑스포 도라지청',
          link: 'https://view.shoppinglive.naver.com/replays/245051?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '함양산삼항노화엑스포 스케치방송',
          link: 'https://view.shoppinglive.naver.com/replays/259111?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: 'HP 노트북',
          link: 'https://view.shoppinglive.naver.com/replays/122974?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
      ],
      liveClips: [
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/228501',
        },
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/129197?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeri/hyeri_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeri/hyeri_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeri/hyeri_3.png`,
        },
      ],
    },
  },
  {
    id: 10,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeyoung/hyeyoung_0.png`,
    name: '변혜영 쇼호스트',
    desc: '시청자들도 웃고 판매자들도 함께 웃을 수/ 있게 하는 전문 쇼호스트로 활약하겠습니다.',
    detail: {
      name: 'Byun Hyeyoung',
      category: 'cosmetics & fashion Showhost',
      summary:
        '시청자들도 웃고 판매자들도 함께 웃을 수 있게 하는 전문 쇼호스트로 활약하겠습니다.',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/youny2323/' }],
      career: [
        {
          name: 'jade 성수동 수제부츠',
          link: 'https://view.shoppinglive.naver.com/replays/314470?fm',
        },
        {
          name: '라퓨리 샴푸바, 딥클렌져',
          link: 'https://view.shoppinglive.naver.com/replays/271365',
        },
        {
          name: 'jade 성수동 수제 신발',
          link: 'https://view.shoppinglive.naver.com/replays/285662',
        },
        {
          name: 'FROMCO 롱가디건 2종(1)',
          link: 'https://view.shoppinglive.naver.com/replays/282221',
        },
        {
          name: 'FROMCO 롱가디건 2종(2)',
          link: 'https://view.shoppinglive.naver.com/replays/290340',
        },
        {
          name: 'OTTERS 설거지비누',
          link: 'https://view.shoppinglive.naver.com/replays/278286',
        },
        {
          name: '보니스 가방',
          link: 'https://view.shoppinglive.naver.com/replays/274802',
        },
      ],
      liveClips: [
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/314470?fm' },
        { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/271365' },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeyoung/hyeyoung_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeyoung/hyeyoung_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeyoung/hyeyoung_3.png`,
        },
      ],
    },
  },
  {
    id: 11,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi/mimi_0.png`,
    name: '김미미 쇼호스트',
    desc: '만능 엔터테이너 김미미입니다. 본업 뮤지컬 배우부터 해서 모델 mc 그리고 쇼호스트로 활약하고 있습니다.',
    detail: {
      name: 'Kim MiMi',
      category: 'cosmetics & fashion Showhost',
      summary:
        '만능 엔터테이너 김미미입니다. 본업 뮤지컬 배우부터 해서 모델 mc 그리고 쇼호스트로 활약하고 있습니다.',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/beautiful_mime93/' }],
      career: [
        {
          name: '11번가 코카콜라 라벨 프리',
          link: 'https://live11.11st.co.kr/output/20211104_20hlive_full/Default/MP4/20211104_20hlive_full.mp4',
        },
        {
          name: '설공 얌희 스프레드',
          link: 'https://www.instagram.com/tv/CVvLxWGj9qo/?utm_medium=copy_link',
        },
        {
          name: '김천 샤인 머스캣',
          link: 'https://www.instagram.com/tv/CUZVouoj86_/?utm_medium=copy_link',
        },
        {
          name: '영암 무화과',
          link: 'https://www.instagram.com/tv/CTkIdt3pKMf/?utm_medium=copy_link',
        },
        {
          name: '은영이 떡볶이',
          link: 'https://view.shoppinglive.naver.com/replays/274562?from=share',
        },
        {
          name: '퍼핑 스크래치 매트전',
          link: 'https://view.shoppinglive.naver.com/replays/260391?from=share',
        },
        {
          name: '11번가 커블 체어 와이더 & 그랜드',
          link: 'https://live11.11st.co.kr/output/20211028_20hlive_full/Default/MP4/20211028_20hlive_full.mp4',
        },
        {
          name: '샤오미 8세대 로봇 청소기',
          link: 'https://shoppinglive.naver.com/replays/282441',
        },
        {
          name: '나른 트렁크 & 원피스',
          link: 'http://naver.me/535rFO8u',
        },
        {
          name: '포밤 문라이트 부스터 라이브 커머스',
          link: 'https://shoppinglive.naver.com/replays/190610?from=share',
        },
      ],
      liveClips: [
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/274562?from=share',
        },
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/190610?from=share',
        },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi/mimi_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi/mimi_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi/mimi_3.png`,
        },
      ],
    },
  },
  {
    id: 12,
    image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_0.png`,
    name: '박현선 쇼호스트',
    desc: '뮤지컬을 전공하고 현재 다양한 플랫폼에서/ 라이브커머스 쇼호스트로 활동하고 있습니다.',
    detail: {
      name: 'Park HyunSun ',
      category: 'cosmetics & fashion Showhost',
      summary:
        '뮤지컬을 전공하고 현재 다양한 플랫폼에서 라이브 커머스 쇼호스트로 활동하고 있습니다.',
      social: [{ name: 'Instagram', src: 'https://www.instagram.com/ddo__ny/' }],
      career: [
        {
          name: '데일리브이(이너뷰티)',
          link: 'https://view.shoppinglive.naver.com/replays/275947?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          name: '이스터(샴푸)',
          link: 'https://naver.me/5dxx6vvD',
        },
        {
          name: '은성헬스빌(자전거)',
          link: 'https://naver.me/GOurGHrG',
        },
        {
          name: '바이탈타임(홍삼)',
          link: 'https://naver.me/xorV6HYu',
        },
        {
          name: '필레오(유산균, 프로틴, 타트체리, 석류 콜라겐, ABC주스, 아보카도 오일)',
          link: 'https://naver.me/FMAwk1O2',
        },
        {
          name: '누리웰(계란)',
          link: 'https://naver.me/xScGdAd3',
        },
        {
          name: '하늘청(식혜)',
          link: 'https://naver.me/5dxyjo8R',
        },
        {
          name: '포러스트(애견)',
          link: 'https://naver.me/GEASYSXv',
        },
        {
          name: '리리펫(애견)',
          link: 'https://naver.me/xuIdSdVU',
        },
        {
          name: '젤네일',
          link: 'https://youtu.be/7F4j5T96e1A',
        },
      ],
      liveClips: [
        {
          type: 'naver',
          link: 'https://view.shoppinglive.naver.com/replays/275947?dtm_medium=share&dtm_source=liveviewer&from=share',
        },
        {
          type: 'naver',
          link: 'https://naver.me/xorV6HYu',
        },
      ],
      imageClips: [
        {
          id: 1,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_1.png`,
        },
        {
          id: 2,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_2.png`,
        },
        {
          id: 3,
          link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_3.png`,
        },
      ],
    },
  },
  // {
  //   id: 12,
  //   image1_src: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_0.png`,
  //   name: '박현선 Showhost',
  //   desc: '뮤지컬을 전공하고 현재 다양한 플랫폼에서 라이브 커머스 쇼호스트로 활동하고 있습니다.',
  //   detail: {
  //     name: 'Park HyunSun ',
  //     category: 'cosmetics & fashion Showhost',
  //     summary:
  //       '뮤지컬을 전공하고 현재 다양한 플랫폼에서 라이브 커머스 쇼호스트로 활동하고 있습니다.',
  //     social: [{ name: 'Instagram', src: 'https://www.instagram.com/ddo__ny/' }],
  //     career: [
  //       {
  //         name: '11번가 코카콜라 라벨 프리',
  //         link: 'https://live11.11st.co.kr/output/20211104_20hlive_full/Default/MP4/20211104_20hlive_full.mp4',
  //       },
  //       {
  //         name: '설공 얌희 스프레드',
  //         link: 'https://www.instagram.com/tv/CVvLxWGj9qo/?utm_medium=copy_link',
  //       },
  //       {
  //         name: '김천 샤인 머스캣',
  //         link: 'https://www.instagram.com/tv/CUZVouoj86_/?utm_medium=copy_link',
  //       },
  //       {
  //         name: '영암 무화과',
  //         link: 'https://www.instagram.com/tv/CTkIdt3pKMf/?utm_medium=copy_link',
  //       },
  //       {
  //         name: '은영이 떡볶이',
  //         link: 'https://view.shoppinglive.naver.com/replays/274562?from=share',
  //       },
  //       {
  //         name: '퍼핑 스크래치 매트전',
  //         link: 'https://view.shoppinglive.naver.com/replays/260391?from=share',
  //       },
  //       {
  //         name: '11번가 커블 체어 와이더 & 그랜드',
  //         link: 'https://live11.11st.co.kr/output/20211028_20hlive_full/Default/MP4/20211028_20hlive_full.mp4',
  //       },
  //       {
  //         name: '샤오미 8세대 로봇 청소기',
  //         link: 'https://shoppinglive.naver.com/replays/282441',
  //       },
  //       {
  //         name: '나른 트렁크 & 원피스',
  //         link: 'http://naver.me/535rFO8u',
  //       },
  //       {
  //         name: '포밤 문라이트 부스터 라이브 커머스',
  //         link: 'https://shoppinglive.naver.com/replays/190610?from=share',
  //       },
  //     ],
  //     liveClips: [
  //       {
  //         type: 'naver',
  //         link: 'https://view.shoppinglive.naver.com/replays/274562?from=share',
  //       },
  //       {
  //         type: 'naver',
  //         link: 'https://view.shoppinglive.naver.com/replays/190610?from=share',
  //       },
  //     ],
  //     imageClips: [
  //       {
  //         id: 1,
  //         link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_1.png`,
  //       },
  //       {
  //         id: 2,
  //         link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_2.png`,
  //       },
  //       {
  //         id: 3,
  //         link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_3.png`,
  //       },
  //     ],
  //   },
  // },
];

const a = [
  '01066879091',
  '01040338826',
  '01077548304',
  '01025290525',
  '01030991514',
  '01093378119',
  '01067579699',
  '01099029595',
  '01090581091',
  '01065881470',
  '01076886370',
  '01098720081',
  '01022009813',
  '01095850713',
  '01077942908',
  '01093365931',
  '01029318017',
  '01043463512',
  '01053869347',
  '01086331792',
  '01092132042',
  '01050578864',
  '01056325099',
  '01047300214',
  '01095976130',
  '01029679682',
  '01026987049',
  '01095461233',
  '01083813156',
  '01028158018',
  '01056764931',
  '01091894608',
  '01054397601',
  '01072637230',
  '01043901367',
  '01022282951',
  '01040414252',
  '01020138974',
  '01064654422',
  '01053979168',
  '01075288685',
  '01095162349',
  '01080988685',
  '01032892584',
  '01043349978',
  '01025361034',
  '01091727244',
  '01093795277',
  '01026546352',
  '01055282992',
  '01023516717',
  '01024832520',
  '01035793285',
  '01053348737',
  '01027450785',
  '01099824919',
  '01028404263',
  '01096722236',
  '01026755234',
  '01098252529',
  '01046631054',
  '01048740453',
  '01084407276',
  '01027064697',
  '01055418601',
  '01032073033',
  '01064653242',
  '01039559830',
];
