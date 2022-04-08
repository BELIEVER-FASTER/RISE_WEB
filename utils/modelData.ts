export const categoryData = [
  { id: 1, name: '식품' },
  { id: 2, name: '뷰티/화장품' },
  { id: 3, name: '헬스케어' },
  { id: 4, name: '패션' },
  { id: 6, name: '생활/주방' },
  { id: 7, name: '디지털/가전' },
  { id: 8, name: '유아용품' },
  { id: 9, name: '가구/소품' },
  { id: 10, name: '여행/레저' },
  { id: 12, name: '반려동물' },
  { id: 13, name: '쥬얼리' },
];

export type Model = typeof modelDetails[0];
export const modelDetails = [
  //NOTE: 박설아 쇼호스트 1
  {
    id: 1,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seola/sera_0.png`,
    name: '박설아 쇼호스트',
    desc: '유쾌한 진행, 재섭외로 증명하는 쇼호스트',
    category: [1, 2, 7, 6, 9, 12, 3],
    detail: {
      name: 'Park Seola',
      part: 'Live commerce Show host',
      desc: '하이텐션 입담과 반전매력을 소유한 샵테이너',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/384074?tr=lim5',
      },
      { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/190954' },
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '곱창거래소 곱창, 대창, 막창 세트',
            link: 'https://www.instagram.com/p/CVxeWzrBVIu/?utm_medium=copy_link',
            platform: '현대H몰',
          },
          {
            name: '금천한돈 삼겹살, 목살',
            link: 'https://www.instagram.com/p/CSyjLpAhQDQ/?utm_medium=copy_link',
            platform: '현대H몰',
          },
          {
            name: '그라나롤로 부라타치즈 & 삼립 냉동빵',
            link: 'https://view.shoppinglive.naver.com/replays/381060?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '그라나롤로 부라타치즈 & 삼립 냉동빵',
            link: 'https://view.shoppinglive.naver.com/replays/381060?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '라운드랩 기초케어 BEST 7',
            link: 'https://view.shoppinglive.naver.com/replays/179879',
            platform: '네이버',
          },
          {
            name: '라운드랩 약콩라인 기초제품',
            link: 'https://view.shoppinglive.naver.com/replays/242359?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '라본느 클레이에스테 샴푸&헤어마스크',
            link: 'https://view.shoppinglive.naver.com/replays/331598?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '나인리스 헤어에센스&스크럽샴푸',
            link: 'https://view.shoppinglive.naver.com/replays/179868?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '스킨덤 기초제품',
            link: 'https://www.coupang.com/?wPcid=16324729083775257261955&wRef=&wTime=&redirect=landing',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: '유한양행 엘레나 유산균 & 센스밸런스 멀티비타민',
            link: 'https://view.shoppinglive.naver.com/replays/234345',
            platform: '네이버',
          },
          {
            name: '유한양행 엘레나 유산균 & 센스밸런스 멀티비타민2',
            link: 'https://view.shoppinglive.naver.com/replays/269712?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '유한양행 엘레나 유산균 & 센스밸런스 멀티비타민3',
            link: 'https://view.shoppinglive.naver.com/replays/276422?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '흰여울팜 우리아이유산균&비타민D',
            link: 'https://view.shoppinglive.naver.com/replays/260546?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '아약 이뮨 멀티팩',
            link: 'https://view.shoppinglive.naver.com/replays/378764?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '콜롬비아 여성 플리츠자켓',
            link: 'https://m.simsale.co.kr/tv/replay/10079',
            platform: '심쿵할인',
          },
          {
            name: '패션몬스터 동대문 블랙라벨1',
            link: 'https://view.shoppinglive.naver.com/replays/141137',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨2',
            link: 'https://view.shoppinglive.naver.com/replays/307251',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨3',
            link: 'https://view.shoppinglive.naver.com/replays/237540',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨4',
            link: 'https://view.shoppinglive.naver.com/replays/192726',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '코코도르 방향제 크리스마스 에디션',
            link: 'https://view.shoppinglive.naver.com/replays/315699?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '로탄틱 프랑스 명품 디퓨저',
            link: 'https://view.shoppinglive.naver.com/replays/179866',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: 'SK매직 식기세척기, 비데',
            link: 'https://live11.11st.co.kr/output/20210416_14hlive_full/Default/MP4/20210416_14hlive_full.mp4',
            platform: '11번가',
          },
          {
            name: '큐나플러스 물걸레 무선청소기',
            link: 'https://www.youtube.com/watch?v=JXPUe5VvrUk&feature=youtu.be',
            platform: '네이버',
          },
          {
            name: '광주kbc방송국 광주중소기업 소형가전',
            link: 'https://view.shoppinglive.naver.com/replays/206707',
            platform: '네이버',
          },
          {
            name: '대우 루컴즈전자 안드로이드TV 특전',
            link: 'https://view.shoppinglive.naver.com/replays/210160',
            platform: '네이버',
          },
          {
            name: '워터픽 구강세정기',
            link: 'https://view.shoppinglive.naver.com/replays/387849?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '미라지가구 침대,소파,식탁',
            link: 'https://view.shoppinglive.naver.com/replays/387544',
            platform: '11번가',
          },
          {
            name: '체어팩토리 테이블, 캐비넷',
            link: 'https://view.shoppinglive.naver.com/replays/380634?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '인홈퍼니쳐 침대',
            link: 'https://view.shoppinglive.naver.com/replays/231559',
            platform: '네이버',
          },
          {
            name: '글루바인 전기매트',
            link: 'https://view.shoppinglive.naver.com/replays/214004',
            platform: '네이버',
          },
        ],
      },
      {
        category: '스포츠',
        lives: [
          {
            name: '숀리 엑스바이크',
            link: 'https://view.shoppinglive.naver.com/replays/384074?tr=lim5',
            platform: '11번가',
          },
        ],
      },
      {
        category: '유아용품',
        lives: [
          {
            name: '베이비브레짜 이유식 마스터기 X 최희의 최애쇼핑',
            link: 'https://live11.11st.co.kr/output/20210416_14hlive_full/Default/MP4/20210416_14hlive_full.mp4',
            platform: '11번가',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '페페로니 강아지 간식',
            link: 'https://view.shoppinglive.naver.com/replays/387544',
            platform: '11번가',
          },
          {
            name: '페페로니 고양이 간식',
            link: 'https://view.shoppinglive.naver.com/replays/380634?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '냥품멍품 고양이 장난감&간식',
            link: 'https://view.shoppinglive.naver.com/replays/231559',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 윤라엘 쇼호스트 2
  {
    id: 2,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/lael/lael_0.png`,
    name: '윤라엘 쇼호스트',
    desc: '품격있는 하이텐션 쇼호스트',
    category: [3, 4, 14],
    detail: {
      name: 'Yoon lael',
      part: 'Live commerce Show host',
      desc: '품격있는 하이텐션 쇼호스트',
    },
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
    career: [
      {
        category: '여성패션',
        lives: [
          {
            name: '로보ROBO 이태리 롱 구스다운',
            link: 'https://view.shoppinglive.naver.com/replays/179879',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨1',
            link: 'https://view.shoppinglive.naver.com/replays/141137',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨2',
            link: 'https://view.shoppinglive.naver.com/replays/307251',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨3',
            link: 'https://view.shoppinglive.naver.com/replays/237540',
            platform: '네이버',
          },
          {
            name: '패션몬스터 동대문 블랙라벨4',
            link: 'https://view.shoppinglive.naver.com/replays/192726',
            platform: '네이버',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: '에디션앤드지 슈퍼원데이 릴레이라이브',
            link: 'https://view.shoppinglive.naver.com/replays/84078?from=share&from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '스포츠',
        lives: [
          {
            name: '아이더 2021 봄맞이 스페셜',
            link: 'https://view.shoppinglive.naver.com/replays/69333?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 이아윤 쇼호스트 3
  {
    id: 3,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/ahyoon/ahyoon_0.png`,
    name: '이아윤 쇼호스트',
    desc: '다양한 라이브방송의 경험으로 브랜드 가치를/ 높이며 재미있는 방송으로 선보입니다.',
    category: [3, 4, 14],
    detail: {
      name: 'Lee Ahyoon',
      part: 'Live commerce Show host',
      desc: '다양한 라이브방송의 경험으로 브랜드 가치를 높이며 재미있는 방송으로 선보이는 쇼호스트',
    },
    liveClips: [
      { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/283926' },
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '기승전골 대창전골, 짜글이 밀키트',
            link: 'https://view.shoppinglive.naver.com/replays/288936',
            platform: '네이버',
          },
          {
            name: '동물복지 오리지널 에그타르트',
            link: 'https://view.shoppinglive.naver.com/replays/296888',
            platform: '네이버',
          },
          {
            name: '소문난 국내산 민물장어',
            link: 'https://view.shoppinglive.naver.com/replays/238982',
            platform: '네이버',
          },
          {
            name: '부산맛집★사미헌 갈비탕',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=211209S0009',
            platform: 'CJ온스타일',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '셀더마 3분 메이크업 부스팅 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/225992',
            platform: '네이버',
          },
          {
            name: '스팀베이스 아이마스크',
            link: 'https://view.shoppinglive.naver.com/replays/90915',
            platform: '네이버',
          },
          {
            name: '아보리덤 기초화장품',
            link: 'https://view.shoppinglive.naver.com/replays/240317',
            platform: '네이버',
          },
          {
            name: '에브리톡톡 탈모 헤어토닉',
            link: 'https://view.shoppinglive.naver.com/replays/179487?dtm_medium=sh',
            platform: '네이버',
          },
          {
            name: '비플레인 녹두 클렌징폼',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=211224S0015',
            platform: 'CJ온스타일',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: '종근당건강 락토핏 골드',
            link: 'https://view.shoppinglive.naver.com/replays/349020?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '미궁365 유산균사랑',
            link: 'https://view.shoppinglive.naver.com/replays/172445',
            platform: '네이버',
          },
          {
            name: '롯데헬스원 초유 프로틴',
            link: 'https://view.shoppinglive.naver.com/replays/252876',
            platform: '네이버',
          },
          {
            name: '프리미엄 유산균 드시모네',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=211216S0018',
            platform: 'CJ온스타일',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '내셔널지오그래픽 프라임 백팩',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=211230S0046',
            platform: 'CJ온스타일',
          },
          {
            name: '비비안 커플 파자마',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=220120S0004',
            platform: 'CJ온스타일',
          },
          {
            name: '지니킴 시어링 드레이로퍼',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=220119S0016',
            platform: 'CJ온스타일',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '로멘띠끄 니치퍼퓸 디퓨저',
            link: 'https://view.shoppinglive.naver.com/replays/283926',
            platform: '네이버',
          },
          {
            name: '생활도감 혀클리너',
            link: 'https://view.shoppinglive.naver.com/replays/251188',
            platform: '네이버',
          },
          {
            name: '리얼 코튼유기농 생리대',
            link: 'https://view.shoppinglive.naver.com/replays/283779',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '마이크로소프트 서피스 프로8',
            link: 'https://view.shoppinglive.naver.com/replays/367452?tr=lim&from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: 'LG GP9 게이밍스피커&모니터',
            link: 'https://view.shoppinglive.naver.com/replays/322801?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '삼성전자 QHD 모니터 S6',
            link: 'https://view.shoppinglive.naver.com/replays/113313',
            platform: '네이버',
          },
          {
            name: 'HP 파빌리온 노트북',
            link: 'https://view.shoppinglive.naver.com/replays/205021',
            platform: '네이버',
          },
          {
            name: 'LG 시네빔',
            link: 'https://www.youtube.com/watch?v=mwAi9oXOKVg',
            platform: '11번가',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '아이르 가을 준비 가을침구',
            link: 'https://view.shoppinglive.naver.com/replays/234062',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아',
        lives: [
          {
            name: '크리스마스 선물 타요',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=211216S0038',
            platform: 'CJ온스타일',
          },
          {
            name: '베베숲 워드블루20팩 + 손세정',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=220120S0002',
            platform: 'CJ온스타일',
          },
          {
            name: '레고 부스트 모델 코딩',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=220113S0015',
            platform: 'CJ온스타일',
          },
          {
            name: '쁘띠엘린 론칭',
            link: 'https://display.cjonstyle.com/m/newlive/remain?itvPgmCd=211216S0026',
            platform: 'CJ온스타일',
          },
        ],
      },
    ],
  },
  //NOTE: 김동현 쇼호스트 4
  {
    id: 4,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/donghyun/donghyun_0.png`,
    name: '김동현 쇼호스트',
    desc: '높은텐션과 소통능력, 웃는상과 더불어/ 신뢰 가는 목소리가 장점입니다.',
    category: [1, 2, 7, 4, 6],
    detail: {
      name: 'Kim DongHyun',
      part: 'Live commerce Show host',
      desc: '높은텐션과 소통능력, 웃는상과 더불어 신뢰 가는 목소리가 장점입니다.',
    },
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '남도 농바름고구마',
            link: 'https://view.shoppinglive.naver.com/replays/289110?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '나주 한우 특집',
            link: 'https://view.shoppinglive.naver.com/replays/301583?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '손쉽게 즐기는 마라탕',
            link: 'https://view.shoppinglive.naver.com/replays/325049?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '진주 컬러방앗간 찹쌀떡',
            link: 'https://view.shoppinglive.naver.com/replays/379825?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '소한마리 + 뒷고기 모듬',
            link: 'https://view.shoppinglive.naver.com/replays/358737?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '라운드랩 기초케어 BEST 7 제품',
            link: 'https://shoppinglive.naver.com/replays/179879', //이상
            platform: '네이버',
          },
          {
            name: '라운드랩 약콩라인 기초제품',
            link: 'https://shoppinglive.naver.com/replays/242359?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '라본느 클레이에스테 샴푸&헤어마스크',
            link: 'https://shoppinglive.naver.com/replays/331598?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '레비레스코',
            link: 'https://shoppinglive.naver.com/replays/179868?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '알엔더블유',
            link: 'https://link.coupang.com/nt/LIVECO?pageKey=117224&pType=live',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: '닥터 아제라 특가',
            link: 'https://view.shoppinglive.naver.com/replays/225914?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '이태리 명품 화장품 올로스',
            link: 'https://view.shoppinglive.naver.com/replays/278687?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '팜스이숍 공식스토어',
            link: 'https://view.shoppinglive.naver.com/replays/262717?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '티아이포맨 슈퍼 원데이',
            link: 'https://www.coupang.com/?src=1191000&spec=10999999&addtag=812&ctag=133900&lptag=CFM96148955&itime=20220127003316&pageType=LIVE%20COMMERCE&pageValue=133900&wPcid=12764157189898510098890&wRef=&wTime=20220127003316&redirect=landing&backType=&settlement=N',
            platform: '쿠팡',
          },
          {
            name: '타미힐피거 FW 남성의류',
            link: 'https://www.coupang.com/?src=1191000&spec=10999999&addtag=812&ctag=130726&lptag=CFM96148955&itime=20220127003334&pageType=LIVE%20COMMERCE&pageValue=130726&wPcid=12764157189898510098890&wRef=&wTime=20220127003334&redirect=landing&backType=&settlement=N',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '힘펠 바디드라이 4in1',
            link: 'https://www.instagram.com/p/CXiRr1cvF20/?utm_medium=copy_link',
            platform: '현대H몰',
          },
          {
            name: '데카트론 캠핑 필수템',
            link: 'https://view.shoppinglive.naver.com/replays/308812?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '3in1 모기퇴치기',
            link: 'https://view.shoppinglive.naver.com/replays/203857?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '스마트 다기능 화분',
            link: 'https://view.shoppinglive.naver.com/replays/358806?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '마스크,핸드살균제',
            link: 'https://view.shoppinglive.naver.com/replays/320705?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 최승인 쇼호스트 5
  {
    id: 5,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seungin/seungin_0.png`,
    name: '최승인 쇼호스트',
    desc: '새로운 뷰티패션의 쇼호스트를 찾는다면/ 제 피부와 패션 센스로 증명하겠습니다./ 저와 함께 가보시죠!',
    category: [1, 2, 3],
    detail: {
      name: 'Choi Seung In',
      part: 'Live commerce Show host',
      desc: '새로운 뷰티패션의 쇼호스트를 찾는다면 제 피부와 패션센스로 증명하겠습니다. 저와 함께 가보시죠!',
    },
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '수제밀스틱',
            link: 'https://view.shoppinglive.naver.com/replays/280884?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '홈밋 국내산 수제 양념돼지갈비',
            link: 'https://view.shoppinglive.naver.com/replays/285133?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '홈밋 국내산 수제 양념돼지갈비2',
            link: 'https://view.shoppinglive.naver.com/replays/285143?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '컴인사이드미 고체향수',
            link: 'https://view.shoppinglive.naver.com/replays/93341?dtm_medium=share&dtm_source=liveviewer&from=share', //이상
            platform: '네이버',
          },
          {
            name: '아리얼마스크팩',
            link: 'https://www.coupang.com/?wPcid=16324729083775257261955&wRef=&wTime=&redirect=landing',
            platform: '쿠팡',
          },
          {
            name: '베리웰샴푸',
            link: 'https://www.coupang.com/?wPcid=12764157189898510098890&wRef=&wTime=&redirect=landing',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: '워터포미 산양유 단백질',
            link: 'https://view.shoppinglive.naver.com/replays/270106?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '현대H몰',
          },
          {
            name: '연세 닥터톡스 프로미엄',
            link: 'https://view.shoppinglive.naver.com/replays/91373?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 노성민 쇼호스트 6
  {
    id: 6,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seongmin/seongmin_0.png`,
    name: '노성민 쇼호스트',
    desc: '뻔하지 않은 FUN한 즐거운 진행!/ 늘 변함없는 마음과 진정성 있는 마음으로/ 다가가겠습니다. ',
    category: [1, 2, 4, 6, 7],
    detail: {
      name: 'Noh SeongMin',
      part: 'Live commerce Show host',
      desc: '뻔하지 않은 FUN한 즐거운 진행! 늘 변함없는 마음과 진정성 있는 마음으로 다가가겠습니다. ',
    },
    liveClips: [
      { type: 'naver', link: 'https://view.shoppinglive.naver.com/replays/118900' },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/141363',
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '인천삼대게장1',
            link: 'https://shoppinglive.naver.com/replays/283876',
            platform: '네이버',
          },
          {
            name: '인천삼대게장2',
            link: 'https://shoppinglive.naver.com/replays/320580?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '푸드어셈블',
            link: 'https://shoppinglive.naver.com/replays/2881',
            platform: '네이버',
          },
          {
            name: '자연공유 곤약쫀드기',
            link: 'https://shoppinglive.naver.com/replays/64826',
            platform: '네이버',
          },
          {
            name: '어나더미트 T본스테이크',
            link: 'https://shoppinglive.naver.com/replays/141363',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '동원 뉴트리플랜',
            link: 'https://shoppinglive.naver.com/replays/118900',
            platform: '네이버',
          },
          {
            name: '엘지 프라엘 메디헤어',
            link: 'https://view.shoppinglive.naver.com/replays/224859?from=share',
            platform: '네이버',
          },
          {
            name: '밸런스온 방석',
            link: 'https://view.shoppinglive.naver.com/replays/200567?from=share',
            platform: '네이버',
          },
          {
            name: '독일럼멜코리아',
            link: 'https://view.shoppinglive.naver.com/replays/164997?from=share',
            platform: '네이버',
          },
          {
            name: '동원 뉴트리플랜2',
            link: 'https://view.shoppinglive.naver.com/replays/218808?from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: '보드라이더스',
            link: 'https://naver.me/x6ZzNih9 ',
            platform: '네이버',
          },
          {
            name: '보드라이더스2',
            link: 'https://naver.me/Gkp0jEoJ',
            platform: '네이버',
          },
          {
            name: '컬럼비아',
            link: 'https://naver.me/5x0OUdFu',
            platform: '네이버',
          },
          {
            name: '잔카',
            link: 'https://naver.me/5x0OUdFu',
            platform: '네이버',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '동원 캣 뉴트리플랜',
            link: 'https://view.shoppinglive.naver.com/replays/118900 ',
            platform: '네이버',
          },
          {
            name: '동원 캣 뉴트리플랜2',
            link: 'https://view.shoppinglive.naver.com/replays/218808?from=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 박현선 쇼호스트 7
  {
    id: 7,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_0.png`,
    name: '박현선 쇼호스트',
    desc: '뮤지컬을 전공하고 현재 다양한 플랫폼에서/ 라이브커머스 쇼호스트로 활동하고 있습니다.',
    category: [1, 3, 12, 8, 7],
    detail: {
      name: 'Park HyunSun ',
      part: 'Live commerce Show host',
      desc: '뮤지컬을 전공하고 현재 다양한 플랫폼에서 라이브 커머스 쇼호스트로 활동하고 있습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/275947?dtm_medium=share&dtm_source=liveviewer&from=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/331457?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '누리웰 반숙계란 특별전',
            link: 'https://view.shoppinglive.naver.com/replays/156167?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '하늘청 명인이 만든 건강한 식혜',
            link: 'https://view.shoppinglive.naver.com/replays/89151?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '착한한끼 신제품왕갈비탕&선지해장국',
            link: 'https://view.shoppinglive.naver.com/replays/96920?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '까사니 철판 아이스크림',
            link: 'https://www.youtube.com/watch?v=94WnmZUkq7s',
            platform: '유튜브',
          },
          {
            name: '이현우 우삼겹살',
            link: 'https://www.youtube.com/watch?v=gycbvh8gZd0',
            platform: '그립',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '바디홀릭 스테이누디 바디미스트',
            link: 'https://www.youtube.com/watch?v=tgpR89P6n1g',
            platform: '쿠팡',
          },
          {
            name: '투쿨포스쿨 베스트 상품',
            link: 'https://www.youtube.com/watch?v=-TEu3WGStGA',
            platform: '쿠팡',
          },
          {
            name: '이스터스칼프 샴푸',
            link: 'https://view.shoppinglive.naver.com/replays/76877?from=share',
            platform: '네이버',
          },
          {
            name: '플라 이지랩 봉고데기',
            link: 'https://view.shoppinglive.naver.com/replays/60986?from=share',
            platform: '네이버',
          },
          {
            name: 'BBP 기초, 헤어제품',
            link: 'https://www.youtube.com/watch?v=eCU_QKgVShs',
            platform: '현대H몰',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: '데일리브이 비타민, 히알루론산 키트',
            link: 'https://view.shoppinglive.naver.com/replays/275947?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '바이탈타임 홍삼 6년근',
            link: 'https://view.shoppinglive.naver.com/replays/251276?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '팔레오 건강 선물세트',
            link: 'https://view.shoppinglive.naver.com/replays/65777?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '베라라이프 콜라겐, 히알루론산, 프로바이오틱스',
            link: 'https://view.shoppinglive.naver.com/replays/126056?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '테네비스, 지르니크, 시크누아 겨울패션',
            link: 'https://view.shoppinglive.naver.com/replays/370673?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '인샤인 퀄팅 후드 패딩',
            link: 'https://view.shoppinglive.naver.com/replays/377244?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '스포츠',
        lives: [
          {
            name: '은성헬스빌 어플+스피디 홈 트레이닝',
            link: 'https://view.shoppinglive.naver.com/replays/220567?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '은성헬스빌 어플+스피디 홈 트레이닝2',
            link: 'https://view.shoppinglive.naver.com/replays/187363?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '랜드웨이 인라인 특가',
            link: 'https://view.shoppinglive.naver.com/replays/242975?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: 'BBP설거지 워싱바',
            link: 'https://www.youtube.com/watch?v=tXLuo7xwdGU&feature=youtu.be',
            platform: '현대H몰',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '차량용 5G V2X모듈',
            link: 'https://www.youtube.com/shorts/ukVX-P-_fsU',
            platform: 'LG이노텍',
          },
          {
            name: '삼성, 듀플렉스, 캐치웰 무선 핸드 청소기',
            link: 'https://www.youtube.com/watch?v=sfJBmhBPfgM',
            platform: '유튜브',
          },
        ],
      },
      {
        category: '유아용품',
        lives: [
          {
            name: '핑거스푼 입욕제',
            link: 'https://view.shoppinglive.naver.com/replays/164150?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '키즈스콜레 마마파파 세계명작',
            link: 'https://www.youtube.com/watch?v=dMlWMUqUoVc',
            platform: '소스라이브',
          },
          {
            name: '키즈스콜레 유아교육전',
            link: 'https://www.youtube.com/watch?v=9oyzlEK_W9o',
            platform: '소스라이브',
          },
          {
            name: '바비 컬러리빌 첼시 인형',
            link: 'https://www.youtube.com/watch?v=bsvW9PMk80U',
            platform: '유튜브',
          },
          {
            name: '온페어 베이비페어 아동복, 매트, 이불, 화장품',
            link: 'https://www.youtube.com/watch?v=P1cAOx8cV-A',
            platform: '유튜브',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '포러스트 대형견 맞춤 라지바이트',
            link: 'https://view.shoppinglive.naver.com/replays/280702?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '리리펫 고양이, 강아지 간식',
            link: 'https://view.shoppinglive.naver.com/replays/331457?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버 ',
          },
        ],
      },
    ],
  },
  //NOTE: 김미미 쇼호스트 8
  {
    id: 8,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi2/mimi_0.png`,
    name: '김미미 쇼호스트',
    desc: '만능 엔터테이너 김미미입니다. 본업 뮤지컬 배우부터 해서 모델 mc 그리고 쇼호스트로 활약하고 있습니다.',
    category: [1, 2, 12, 6, 7],
    detail: {
      name: 'Kim MiMi',
      part: 'Live commerce Show host',
      desc: '만능 엔터테이너 김미미입니다. 본업 뮤지컬 배우부터 해서 모델 mc 그리고 쇼호스트로 활약하고 있습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/282441',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/321229?tr=lim5',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi2/mimi_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi2/mimi_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi2/mimi_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: 'K-MAS 오징어, 볶음밥, 떡볶이',
            link: 'https://live11.11st.co.kr/output/20211221_18hlive_full/Default/MP4/20211221_18hlive_full.mp4',
            platform: '11번가',
          },
          {
            name: '코카 콜라 라벨 프리',
            link: 'https://live11.11st.co.kr/output/20211104_20hlive_full/Default/MP4/20211104_20hlive_full.mp4',
            platform: '11번가',
          },
          {
            name: '은영이 떡볶이',
            link: 'https://view.shoppinglive.naver.com/replays/321229?tr=lim5',
            platform: '네이버',
          },
          {
            name: '롯데제과 x 무직타이거',
            link: 'https://www.instagram.com/tv/CY8HJZKr7Re/?utm_medium=copy_lin',
            platform: '배달의 민족',
          },
          {
            name: '샤인머스캣',
            link: 'https://www.instagram.com/tv/CUZVouoj86_/?utm_medium=copy_link',
            platform: '배달의 민족',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '포밤 문라이트 부스터 라이브 커머스',
            link: 'https://view.shoppinglive.naver.com/replays/190610?from=share',
            platform: '네이버',
          },
          {
            name: '포밤 문라이트 크림 라이브 커머스',
            link: 'https://view.shoppinglive.naver.com/replays/94591?dtm_medium=share&dtm_source=liveviewer&from=share&title=%ED%8F%AC%EB%B0%A4%EC%9D%98%20%EC%87%BC%ED%95%91%EB%9D%BC%EC%9D%B4%EB%B8%8C',
            platform: '네이버',
          },
          {
            name: '포밤 클렌징 오일 라이브 커머스',
            link: 'https://view.shoppinglive.naver.com/replays/71008',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '나른 트렁크 & 원피스',
            link: 'https://view.shoppinglive.naver.com/replays/232880?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '아미덴 칫솔&제이 베럴즈&키렌샴푸 바디',
            link: 'https://live11.11st.co.kr/output/20220119_18hlive_full/Default/MP4/20220119_18hlive_full.mp4',
            platform: '11번가',
          },
          {
            name: '닥터스 칫솔&메디케이&플라본 가루 치약',
            link: 'https://live11.11st.co.kr/output/20211201_19hlive_full/Default/MP4/20211201_19hlive_full.mp4',
            platform: '11번가',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '트라텍 액티브건 마사지',
            link: 'https://www.youtube.com/watch?v=d5b8VG9wgS0&feature=youtu.be',
            platform: '올리브영',
          },
          {
            name: '커블 체어 와이더 & 그랜드',
            link: 'https://live11.11st.co.kr/output/20211028_20hlive_full/Default/MP4/20211028_20hlive_full.mp4',
            platform: '11번가',
          },
          {
            name: '샤오미 8세대 로봇 청소기',
            link: 'https://view.shoppinglive.naver.com/replays/282441',
            platform: '네이버',
          },
          {
            name: '커블 체어 와이더 & 그랜드',
            link: 'https://view.shoppinglive.naver.com/replays/255119?from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '지누스 매트리스',
            link: 'https://live11.11st.co.kr/output/20210416_14hlive_full/Default/MP4/20210416_14hlive_full.mp4',
            platform: '배달의 민족',
          },
        ],
      },
    ],
  },
  //NOTE: 최명진 쇼호스트 9
  {
    id: 9,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/myungjin/myungjin_0.png`,
    name: '최명진 쇼호스트',
    desc: '제품을 사용하는 상황과 타겟에 맞는 공감과 설정으로 사야하는 이유를 전달드립니다.',
    category: [1, 2, 4, 7, 6],
    detail: {
      name: 'Choi Myungjin',
      part: 'Live commerce Show host',
      desc: '제품을 사용하는 상황과 타겟에 맞는 공감과 설정으로 사야하는 이유를 전달드립니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/382457?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/287709?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/myungjin/myungjin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/myungjin/myungjin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/myungjin/myungjin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '오산시 오색시장',
            link: 'https://view.shoppinglive.naver.com/replays/170046?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '대한민국 햅쌀',
            link: 'https://view.shoppinglive.naver.com/replays/239430?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '농협생생몰',
          },
          {
            name: '서울 전통시장 연합라이브',
            link: 'https://view.shoppinglive.naver.com/replays/330439?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '한우자조금 명절한우장터',
            link: 'https://www.youtube.com/watch?v=Q4GY2bIA3Uk',
            platform: '유튜브',
          },
          {
            name: '한삼근 황제 차가버섯',
            link: 'https://www.simsale.kr/land.php?replay_yn=Y&live_idx=10174&gubun=1',
            platform: '심쿵할인',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '앙쥬 멀티밤',
            link: 'https://www.instagram.com/tv/CY5Nn6Kooff/?utm_medium=copy_link',
            platform: '심쿵할인',
          },
          {
            name: ' 오르템 앰플',
            link: 'https://www.simsale.kr/land.php?replay_yn=Y&live_idx=10133&gubun=1',
            platform: '심쿵할인',
          },
          {
            name: '오르템 옴므',
            link: 'https://www.simsale.kr/land.php?replay_yn=Y&live_idx=10095&gubun=1',
            platform: '심쿵할인',
          },
          {
            name: '비클 티아크 마스크팩',
            link: 'https://view.shoppinglive.naver.com/replays/204970?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '비클 퓨어데일리 선크림',
            link: 'https://view.shoppinglive.naver.com/replays/171144?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '키플링',
            link: 'https://www.youtube.com/watch?v=R96cS0Ahz_s',
            platform: '현대Hmall',
          },
          {
            name: '아티시안',
            link: 'https://www.instagram.com/p/CSVZACThdvW/?utm_medium=copy_link',
            platform: '네이버',
          },
          {
            name: '나른 트렁크 & 원피스',
            link: 'https://www.instagram.com/p/CSVW3mah5bJ/?utm_medium=copy_link',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '신세계쇼핑 리브맘 무중력방석',
            link: 'https://view.shoppinglive.naver.com/replays/287709?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '리제타 비타샤워기',
            link: 'https://m.simsale.co.kr/tv/replay/10124',
            platform: '심쿵할인',
          },
          {
            name: '베스트웨스턴 프리미엄 호텔 경주 런칭',
            link: 'https://view.shoppinglive.naver.com/replays/361992?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '포트메리온, 휘슬러 등',
            link: 'https://view.shoppinglive.naver.com/replays/246419?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '참새방앗간 루돌프 케이크 만들기 키트',
            link: 'https://view.shoppinglive.naver.com/replays/362640?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '앤커코리아 무선핸디형 청소기',
            link: 'https://pcms.kakao.com/pcms/documents/3de8259d-d569-42d3-a222-c3607ef35e98?area=slsp&_=1639369264491',
            platform: '카카오쇼핑',
          },
          {
            name: '로테체 멀티쿠커',
            link: 'https://m.simsale.co.kr/tv/replay/10118',
            platform: '심쿵할인',
          },
          {
            name: '앤커코리아 마그네틱 맥고',
            link: 'https://view.shoppinglive.naver.com/replays/382457?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '클레어 공기청정기',
            link: 'https://view.shoppinglive.naver.com/replays/361567?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 고은혜 쇼호스트 10
  {
    id: 10,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunhye/eunhye_0.png`,
    name: '고은혜 쇼호스트',
    desc: '한번 빠지면 헤어나올 수 없는 꼬네의 라이브 방송! 지금 만나보세요 :)',
    category: [1, 2],
    detail: {
      name: 'Ko Eunhye',
      part: 'Live commerce Show host',
      desc: '한번 빠지면 헤어나올 수 없는 꼬네의 라이브 방송! 지금 만나보세요 :)',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/46561',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/227203',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunhye/eunhye_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunhye/eunhye_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunhye/eunhye_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '영덕한상대첩 신선한 게살큐브, 세웅수산',
            link: 'https://view.shoppinglive.naver.com/replays/274903',
            platform: '네이버',
          },
          {
            name: '제철 과일 햇사레 플러스 복숭아',
            link: 'https://view.shoppinglive.naver.com/replays/212925',
            platform: '네이버',
          },
          {
            name: '4계절 명품 수제 마카롱',
            link: 'https://view.shoppinglive.naver.com/replays/227255',
            platform: '네이버',
          },
          {
            name: '우수딸소에서 짠 무가당 수제요거트',
            link: 'https://view.shoppinglive.naver.com/replays/227203',
            platform: '네이버',
          },
          {
            name: '제주직송 왕큰 천혜향',
            link: 'https://grip.show/content/3kdwwe1o',
            platform: '그립',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '디오비오 수분크림 아쿠아셀러 앰플',
            link: 'https://view.shoppinglive.naver.com/replays/193164',
            platform: '네이버',
          },
          {
            name: '라필로소피 향수&뷰티 대전',
            link: 'https://view.shoppinglive.naver.com/replays/46561',
            platform: '네이버',
          },
          {
            name: '반디네일 손톱을 위한 홈케어 제품',
            link: 'https://view.shoppinglive.naver.com/replays/29848?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '꼬네뷰티 딱 하루 런칭특가',
            link: 'https://grip.show/content/3g5exlw9',
            platform: '그립',
          },
          {
            name: '꼬네뷰티 땡기고 푸석한 피부 쵹쵹 끝판',
            link: 'https://grip.show/content/3x547gwo',
            platform: '그립',
          },
        ],
      },
    ],
  },
  //NOTE: 이정미 쇼호스트 11
  {
    id: 11,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jungme/jungme_0.png`,
    name: '이정미 쇼호스트',
    desc: '초등학교 아이를 키우고 있는 엄마로서 모든 분들께 친근하게 다가갈 수 있는 쇼호스트 이정미 입니다.',
    category: [1, 6, 12, 8, 3],
    detail: {
      name: 'Lee Jungme',
      part: 'Live commerce Show host',
      desc: '초등학교 아이를 키우고 있는 엄마로서 모든 분들께 친근하게 다가갈 수 있는 쇼호스트 이정미 입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/330657?from=share&fm=shoppinglive&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/280973?from=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jungme/jungme_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jungme/jungme_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jungme/jungme_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '전통에 맛깔요리 다시팩',
            link: 'https://view.shoppinglive.naver.com/replays/392897?from=share&fm=shoppinglive&sn=share.',
            platform: '네이버',
          },
          {
            name: '목우촌 설 선물세트',
            link: 'https://view.shoppinglive.naver.com/replays/389139?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '제주 고소리술 오메기맑은술',
            link: 'https://view.shoppinglive.naver.com/replays/247587?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '이승환이 간다 미남장어',
            link: 'https://view.shoppinglive.naver.com/replays/110644?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '한성마라탕',
            link: 'https://view.shoppinglive.naver.com/replays/337740?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '에브리톡톡 헤어토닉',
            link: 'https://view.shoppinglive.naver.com/replays/280973?from=share',
            platform: '네이버',
          },
          {
            name: '비올란베이비',
            link: 'https://www.coupang.com/?wPcid=16400766451878467463064&wRef=&wTime=&redirect=landing',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: '하이웰 마누카 꿀 & 프로폴리스',
            link: 'https://view.shoppinglive.naver.com/replays/392952?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '비타샵 그린스무디',
            link: 'https://view.shoppinglive.naver.com/replays/379523?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '케이뉴트라 더 시크릿 효소',
            link: 'https://view.shoppinglive.naver.com/replays/262418?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '뷰셀리온 다이어트&콜라겐 젤리',
            link: 'https://view.shoppinglive.naver.com/replays/249951?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '큐라에스 여주환',
            link: 'https://view.shoppinglive.naver.com/replays/280973?from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '에블린 포근파자마',
            link: 'https://view.shoppinglive.naver.com/replays/319495?from=share',
            platform: '네이버',
          },
          {
            name: '데일리 트위드덕다운',
            link: 'https://www.vogoplay.com/broadcast/index?seq=266',
            platform: 'VOGO',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '르올 마약 구스 이불',
            link: 'https://view.shoppinglive.naver.com/replays/330657?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '워터프로 구강세정기',
            link: 'https://view.shoppinglive.naver.com/replays/375703?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '이지팜 물걸레청소포 & 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/265156?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '한양 황토 세라믹 온열 찜질기',
            link: 'https://view.shoppinglive.naver.com/replays/271138?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '한양 온수찜질기',
            link: 'https://view.shoppinglive.naver.com/replays/296996?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '옵토마 4K 빔프로젝터',
            link: 'https://view.shoppinglive.naver.com/replays/384814?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '스마일빔 미니빔프로젝터',
            link: 'https://view.shoppinglive.naver.com/replays/337804?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '닥터스 은사메트',
            link: 'https://view.shoppinglive.naver.com/replays/392895?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아용품',
        lives: [
          {
            name: '뿌띠슈 우리아이 화장품',
            link: 'https://view.shoppinglive.naver.com/replays/235996?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '38.5 반려동물 필수 영양제',
            link: 'https://view.shoppinglive.naver.com/replays/265300?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '38.5 반려동물 필수 영양제2',
            link: 'https://view.shoppinglive.naver.com/replays/295592?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '우리가제약 반려동물 영양제',
            link: 'https://view.shoppinglive.naver.com/replays/269388?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '예펫 우주선가방',
            link: 'https://view.shoppinglive.naver.com/replays/373348?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '퍼센트퍼센트 리얼보스웰리아 10',
            link: 'https://view.shoppinglive.naver.com/replays/347270?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 신현아 쇼호스트 12
  {
    id: 12,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeona/hyeona_0.png`,
    name: '신현아 쇼호스트',
    desc: '연기자와 쇼호스트, 리포터 엠씨를 넘나들며 쌓은 내공으로 유쾌하며 즐거운 진행을 만들어 드립니다.',
    category: [1, 7, 6, 8],
    detail: {
      name: 'Shin Hyeon a',
      part: 'Live commerce Show host',
      desc: '연기자와 쇼호스트, 리포터 엠씨를 넘나들며 쌓은 내공으로 유쾌하며 즐거운 진행을 만들어 드립니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/262399?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/241608?from=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeona/hyeona_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeona/hyeona_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeona/hyeona_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '허닭, 오징어게임 페러디',
            link: 'https://www.youtube.com/watch?v=rI0IIlC45kk',
            platform: '11번가',
          },
          {
            name: '제철 과일 햇사레 플러스 복숭아',
            link: '샤인 머스켓, 주이 페러',
            platform: '카카오쇼핑',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '미래생활 잘풀리는집 슬기로운 집콕',
            link: 'https://view.shoppinglive.naver.com/replays/241608?from=share',
            platform: '네이버',
          },
          {
            name: '미래생활 잘풀리는집 고품격 티슈',
            link: 'https://view.shoppinglive.naver.com/replays/90449',
            platform: '네이버',
          },
          {
            name: '테라브레스 국내출시 라이브특가',
            link: 'https://view.shoppinglive.naver.com/lives/60039',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '리쏘 4D안마의자 로키',
            link: 'https://view.shoppinglive.naver.com/replays/262399?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '리쏘 프리미엄 안마의자 5세대',
            link: 'https://view.shoppinglive.naver.com/replays/80102?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아',
        lives: [
          {
            name: '신비아파트 퍼즐놀이 책상',
            link: 'https://view.shoppinglive.naver.com/replays/180596?from=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 정고운 쇼호스트 13
  {
    id: 13,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon2/gowoon_0.png`,
    name: '정고운 쇼호스트',
    desc: '저는 밝은 에너지를 가진 저만의 상큼한/ 에너지로 특별한 방송 보여드리겠습니다',
    category: [1, 2, 4, 8, 10],
    detail: {
      name: 'Jeong Gowoon',
      part: 'Live commerce Show host',
      desc: '저는 밝은 에너지를 가진 저만의 상큼한 에너지로 특별한 방송 보여드리겠습니다',
    },
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
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon2/gowoon_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon2/gowoon_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon2/gowoon_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '비건 그래놀라',
            link: 'https://view.shoppinglive.naver.com/replays/311654?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '숙성 초벌삼겹살',
            link: 'https://view.shoppinglive.naver.com/replays/239300?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '제주도 과수원 청귤',
            link: 'https://www.youtube.com/watch?v=hhoUAWkaJiA',
            platform: '배달의 민족',
          },
          {
            name: '시온 감귤랜드 황금향',
            link: 'https://www.youtube.com/watch?v=72iYe4KZ24Y',
            platform: '엘라이브',
          },
          {
            name: '주말미식회 비비고 만두',
            link: 'https://www.youtube.com/watch?v=XL-WEu2c7sk',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '딥프루브 세라마이드',
            link: 'https://view.shoppinglive.naver.com/replays/400017?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '머스테브 마스카라',
            link: 'https://view.shoppinglive.naver.com/replays/151679',
            platform: '네이버',
          },
          {
            name: '에뛰드 플레이 컬러 아이즈',
            link: 'https://www.youtube.com/watch?v=WyeSFrG0B5Y',
            platform: '인터파크TV',
          },
          {
            name: '정샘물 에센셜 스킨',
            link: 'https://www.youtube.com/watch?v=l_5pxfpArBQ',
            platform: '인터파크TV',
          },
          {
            name: '입생로랑, 에스티로더 ',
            link: 'https://www.youtube.com/watch?v=jpv_8T1kuO8',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '알코트 무중력 슬리퍼',
            link: 'https://www.youtube.com/watch?v=urvxorloduM',
            platform: '인터파크TV',
          },
          {
            name: '테슬라 스키복, 보드복, 경량패딩',
            link: 'https://www.youtube.com/watch?v=7U7B5ObARS0',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '베베풋 발각질기',
            link: 'https://view.shoppinglive.naver.com/lives/341017?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&tr=lim',
            platform: '네이버',
          },
          {
            name: '쉬움 인덕션 멀티쿠커',
            link: 'https://www.youtube.com/watch?v=lZGoBMXMLs0',
            platform: '인터파크TV',
          },
          {
            name: '일월 온수매트, 카페트매트',
            link: 'https://www.youtube.com/watch?v=c-qIZcKDbqQ',
            platform: '인터파크TV',
          },
          {
            name: '에어슬림 매트리스',
            link: 'https://www.youtube.com/watch?v=Wlh5OOTMSAo',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '갤럭시 버즈라이브',
            link: 'https://www.youtube.com/watch?v=FWqbonp1LzI',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '여행/레저',
        lives: [
          {
            name: '사이판 여행투어',
            link: 'https://www.youtube.com/watch?v=_dZc5RNRIM0',
            platform: '인터파크TV',
          },
          {
            name: '제주 위호텔',
            link: 'https://www.youtube.com/watch?v=eci3BW4ThUc',
            platform: '인터파크TV',
          },
          {
            name: '제주 스누피 가든',
            link: 'https://www.youtube.com/watch?v=JSYXZMuiLXA',
            platform: '인터파크TV',
          },
          {
            name: '부산 요트투어',
            link: 'https://www.youtube.com/watch?v=19qwvQXAKZE',
            platform: '인터파크TV',
          },
          {
            name: '제주 신화테마파크',
            link: 'https://www.youtube.com/watch?v=bA4-tUFkPEg',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '유아',
        lives: [
          {
            name: '플레이도우',
            link: 'https://www.youtube.com/watch?v=81SzJoZrBGU',
            platform: '인터파크TV',
          },
          {
            name: '해즈브로 플레이도우',
            link: 'https://www.youtube.com/watch?v=ZUrtIrRGUAo',
            platform: '쿠팡',
          },
          {
            name: '토이쿠키',
            link: 'https://www.youtube.com/watch?v=xENuUfV4UGI',
            platform: '인터파크TV',
          },
          {
            name: '미니멜리사',
            link: 'https://www.youtube.com/watch?v=IRvdvJe2HQc',
            platform: '인터파크TV',
          },
          {
            name: '키즈페스티벌 베베숲',
            link: 'https://www.youtube.com/watch?v=_Bx275KyQmM',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '명품',
        lives: [
          {
            name: '페라가모, 로즈몽 시계',
            link: 'https://www.youtube.com/watch?v=7HalXQkYGks&feature=youtu.be',
            platform: '인터파크TV',
          },
          {
            name: '명품인생',
            link: 'https://www.youtube.com/watch?v=sJOejCbqSRo',
            platform: '인터파크TV',
          },
          {
            name: '판도라 구찌 반지, 귀걸이',
            link: 'https://www.youtube.com/watch?v=AnqhZZ3vsa8',
            platform: '인터파크TV',
          },
        ],
      },
    ],
  },
  //NOTE: 정상환 쇼호스트 14
  {
    id: 14,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghwan/sanghwan_0.png`,
    name: '정상환 쇼호스트',
    desc: '월요일 출근길 만원 지하철에서 하나 남은 빈자리 같은 남자',
    category: [1, 2, 7, 9, 10],
    detail: {
      name: 'Jung Sanghwan',
      part: 'Live commerce Show host',
      desc: '월요일 출근길 만원 지하철에서 하나 남은 빈자리 같은 남자',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/127567?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&title=누적판매 4만여개%2C 꿀잠을 위한 필수품!',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/232894?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghwan/sanghwan_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghwan/sanghwan_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghwan/sanghwan_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '프레시지 밀키트',
            link: 'https://s.baemin.com/3130jsj',
            platform: '배달의 민족',
          },
          {
            name: '갈치',
            link: 'https://sflex.us/dSRmQ3',
            platform: '엘라이브',
          },
          {
            name: '돈까스/무화과/쌀',
            link: 'https://youtu.be/xmkcrMoHRGg',
            platform: '위메프',
          },
          {
            name: '인삼음료',
            link: 'https://naver.me/xFVLVXeI',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '투쿨포스쿨',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=108011&lptag=CFM76223207&pType=live&source=sharedLink&roomId=108011',
            platform: '쿠팡',
          },
          {
            name: '쿤달',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=103822&lptag=CFM76223207&pType=live&source=sharedLink&roomId=103822',
            platform: '쿠팡',
          },
          {
            name: '유리아쥬',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=103824&lptag=CFM76223207&pType=live&source=sharedLink&roomId=103824',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: '네파',
            link: 'https://sflex.us/x1RaUG',
            platform: 'G마켓',
          },
          {
            name: '플랙진',
            link: 'https://www.styleshare.kr/livetv/7400a097-6f27-43d2-88a9-2c035e1aead0',
            platform: 'AK',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '윈도우핏 에어컨 ',
            link: 'https://www.samsung.com/sec/broadcasts/lksamsung-329deb1b32a944359dacf51a85f8f39f',
            platform: '삼성닷컴',
          },
          {
            name: 'V11청소기',
            link: 'https://sauce.page.link/G22A',
            platform: '다이슨몰',
          },
          {
            name: '로지텍',
            link: 'https://sflex.us/8p1YRT',
            platform: '롯데ON',
          },
          {
            name: '루컴즈전자',
            link: 'https://naver.me/G3K8Khfo',
            platform: '네이버',
          },
          {
            name: 'LG그램/맥북프로',
            link: 'https://naver.me/IGmJmKyY',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '갤럭시 버즈라이브',
            link: 'https://www.youtube.com/watch?v=FWqbonp1LzI',
            platform: '인터파크TV',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '금성침대 ',
            link: 'https://live11.11st.co.kr/output/20210609_18hlive_full/Default/MP4/20210609_18hlive_full.mp4',
            platform: '11번가',
          },
          {
            name: '리브맘 쿨매트',
            link: 'https://naver.me/Gz2E2tZp',
            platform: '네이버',
          },
          {
            name: '리브맘 경추베개',
            link: 'https://naver.me/51Q3QClA',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '아임리얼 마스크',
            link: 'https://naver.me/xYU4UBkK',
            platform: '네이버',
          },
          {
            name: '잭웨스트 슬리퍼',
            link: 'https://naver.me/GFnBnT0R',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여행/레저',
        lives: [
          {
            name: '포포인츠호텔 바이 쉐라톤 서울역 ',
            link: 'https://naver.me/GUL502Iq',
            platform: '네이버',
          },
          {
            name: '나는자연인이다 침낭 베개',
            link: 'https://naver.me/G7yVxrtg',
            platform: '네이버',
          },
          {
            name: '메이저골프',
            link: 'https://naver.me/xyJPTE0N',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 이상학 쇼호스트 15
  {
    id: 15,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghak/sanghak_0.png`,
    name: '이상학 쇼호스트',
    desc: '쇼핑라이브에 유튜브 감성을 더한 진행을 하는 쇼호스트 이상학입니다',
    category: [1, 2, 7, 4],
    detail: {
      name: 'Lee sanghak',
      part: 'Live commerce Show host',
      desc: '쇼핑라이브에 유튜브 감성을 더한 진행을 하는 쇼호스트 이상학입니다',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/353766?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/335976?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghak/sanghak_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghak/sanghak_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghak/sanghak_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '푸미 찹쌀떡, 인절미',
            link: 'https://view.shoppinglive.naver.com/replays/308425?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '요리더쿡 돈마호크',
            link: 'https://view.shoppinglive.naver.com/replays/353766?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '달산상회 신안왕새우',
            link: 'https://view.shoppinglive.naver.com/replays/273280?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '도로시마켓 로시당면',
            link: 'https://view.shoppinglive.naver.com/replays/375107?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '1879 논 알콜 화이트와인',
            link: 'https://view.shoppinglive.naver.com/replays/242387?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '네프 모제림샴푸',
            link: 'https://view.shoppinglive.naver.com/replays/354519?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '애니가드 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/330611?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: 'BFL 경량 패딩 조끼',
            link: 'https://m.simsale.co.kr/tv/replay/10076',
            platform: '심쿵할인',
          },
          {
            name: 'U&LC 아우터',
            link: 'https://www.coupang.com/?src=8139402&spec=10999999&addtag=812&ctag=147057&lptag=user_logout&itime=20220125153328&pageType=LIVE%20COMMERCE&pageValue=147057&wPcid=12764157189898510098890&wRef=&wTime=20220125153328&redirect=landing&backType=&isshortened=',
            platform: '쿠팡',
          },
          {
            name: '브랜드두 트레이닝복',
            link: 'https://www.coupang.com/?src=8139402&spec=10999999&addtag=812&ctag=147062&lptag=user_logout&itime=20220125153333&pageType=LIVE%20COMMERCE&pageValue=147062&wPcid=12764157189898510098890&wRef=&wTime=20220125153333&redirect=landing&backType=&isshortened=',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '제스파 안마의자',
            link: 'https://view.shoppinglive.naver.com/replays/374191?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '에어메이드 휴대용 선풍기',
            link: 'https://view.shoppinglive.naver.com/replays/200127?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '삼성올인포케이 겔럭시 워치',
            link: 'https://view.shoppinglive.naver.com/replays/335976?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '롯데백화점 안마의자',
            link: 'https://player.sauceflex.com/broadcast/lkellotte-25e5c354f75143cd88241aeb6cffcb94?',
            platform: '롯데백화점',
          },
          {
            name: '제스파 안마의자2',
            link: 'https://view.shoppinglive.naver.com/replays/342870?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김은규 쇼호스트 16
  {
    id: 16,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunkyu/eunkyu_0.png`,
    name: '김은규 쇼호스트',
    desc: '멋, 위트와 센스 이유 있는 재섭외 깔끔한 진행 보여드리겠습니다.',
    category: [5],
    detail: {
      name: 'Kim Eunkyu',
      part: 'Live commerce Show host',
      desc: '멋, 위트와 센스 이유 있는 재섭외 깔끔한 진행 보여드리겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/379834?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/342950?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunkyu/eunkyu_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunkyu/eunkyu_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/eunkyu/eunkyu_3.png`,
      },
    ],
    career: [
      {
        category: '남성패션',
        lives: [
          {
            name: '본BON 슈퍼원데이',
            link: 'https://view.shoppinglive.naver.com/replays/379834?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '바쏘옴므 할인',
            link: 'https://view.shoppinglive.naver.com/replays/342950?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김태훈 쇼호스트 17
  {
    id: 17,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/taehoon/taehoon_0.png`,
    name: '김태훈 쇼호스트',
    desc: '제대로 학습하여 정확한 정보와 재미있는 방송을 약속드리겠습니다.',
    category: [1, 2, 4, 7, 6, 9],
    detail: {
      name: 'Kim Taehoon',
      part: 'Live commerce Show host',
      desc: '제대로 학습하여 정확한 정보와 재미있는 방송을 약속드리겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/53694',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/10318?from=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/taehoon/taehoon_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/taehoon/taehoon_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/taehoon/taehoon_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '풀무원 자연은 맛있다 정백홍 라면',
            link: 'https://www.youtube.com/watch?v=nP8wsL0ZoCY',
            platform: '유튜브',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '워샤 쑥테라피 헤어&바디 캐어',
            link: 'https://view.shoppinglive.naver.com/replays/53694',
            platform: '네이버',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: 'ADHOC 남성 데일리룩',
            link: 'https://view.shoppinglive.naver.com/replays/88814',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '네이즌 신상 발난로',
            link: 'https://view.shoppinglive.naver.com/replays/338832?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '지웰 에스프레소 머시긴',
            link: 'https://www.youtube.com/watch?v=U6wcNnnkzPA',
            platform: '현대H몰',
          },
          {
            name: '체칼 셋트',
            link: 'https://www.youtube.com/watch?v=26L9fBGPBCo',
            platform: '현대H몰',
          },
          {
            name: '파세코 심지난로',
            link: 'https://www.youtube.com/watch?v=KD_phPQO8JE',
            platform: '티몬',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '지웰 무선 아쿠아 올인원 청소기',
            link: 'https://view.shoppinglive.naver.com/replays/169522?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '지웰 프리미엄 청소가전',
            link: 'https://view.shoppinglive.naver.com/replays/338832?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '벤투스 헤어 드라이기',
            link: 'https://www.youtube.com/watch?v=pGKMJEStplo',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '지누스 그린티 플러스 메모리폼',
            link: 'https://view.shoppinglive.naver.com/replays/10318?from=share',
            platform: '네이버',
          },
          {
            name: '리바트 리클라이너 소파',
            link: 'https://view.shoppinglive.naver.com/replays/46422?tr=lim5',
            platform: '네이버',
          },
          {
            name: '40T 라텍폼스 매트리스',
            link: 'https://www.youtube.com/watch?v=6m8cpYiUZao',
            platform: '현대H몰',
          },
        ],
      },
    ],
  },
  //NOTE: 민준호 쇼호스트 18
  {
    id: 18,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/junho/junho_0.png`,
    name: '민준호 쇼호스트',
    desc: '밝은 에너지와 텐션으로 유쾌한 진행을 순수한 마음으로 진정성있는 전달이 동시에',
    category: [1, 7, 4, 6, 2, 3],
    detail: {
      name: 'Min Junho',
      part: 'Live commerce Show host',
      desc: '밝은 에너지와 텐션으로 유쾌한 진행을 순수한 마음으로 진정성있는 전달이 동시에',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/118174',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/290596',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/junho/junho_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/junho/junho_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/junho/junho_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '농가의아침 밀키트',
            link: 'https://view.shoppinglive.naver.com/replays/221082',
            platform: '네이버',
          },
          {
            name: '레드불 화이트에디션',
            link: 'https://view.shoppinglive.naver.com/replays/259013',
            platform: '네이버',
          },
          {
            name: '샤인머스켓',
            link: 'https://view.shoppinglive.naver.com/replays/306547',
            platform: '네이버',
          },
          {
            name: '은영이 떡볶이',
            link: 'https://view.shoppinglive.naver.com/replays/301604',
            platform: '네이버',
          },
          {
            name: '밀팜 단백질',
            link: 'https://view.shoppinglive.naver.com/replays/327405?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '컴인사이드미 고체향수',
            link: 'https://view.shoppinglive.naver.com/replays/118174',
            platform: '네이버',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: 'KF94 새부리형 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/290596',
            platform: '네이버',
          },
          {
            name: '아이나나 컬러마스크',
            link: 'https://view.shoppinglive.naver.com/replays/396566?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: '백신티셔츠',
            link: 'https://view.shoppinglive.naver.com/replays/258508?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '리앤쿡 2in1 쿠커',
            link: 'https://view.shoppinglive.naver.com/replays/391253?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '샐리의살림법칙 향균 행주 물티슈',
            link: 'https://view.shoppinglive.naver.com/replays/369807?fm=shoppinglive&sn=home',
            platform: '현대H몰',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '스위스몽크로스 공기청정기',
            link: 'https://view.shoppinglive.naver.com/replays/391352?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김상린 쇼호스트 19 2차 시작(카테고리 분류 시작점)
  {
    id: 19,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sangrin/sangrin_0.png`,
    name: '김상린 쇼호스트',
    desc: '쿠팡 크리에이터로 활동하고 있는 김상린 입니다. 동반 성장한다는 마음으로 최선을 다하겠습니다.',
    category: [1, 4, 6, 3, 2],
    detail: {
      name: 'Kim Sangrin',
      part: 'Live commerce Show host',
      desc: '쿠팡 크리에이터로 활동하고 있는 김상린 입니다. 동반 성장한다는 마음으로 최선을 다하겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/331369',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/354049?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&tr=lim',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sangrin/sangrin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sangrin/sangrin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sangrin/sangrin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '한채원 곤약밥',
            link: 'https://view.shoppinglive.naver.com/lives/327898',
            platform: '네이버',
          },
          {
            name: '이로우니 마그마 돈까스',
            link: 'https://view.shoppinglive.naver.com/lives/355822',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '제일리 핑크크림 틴트',
            link: 'https://view.shoppinglive.naver.com/lives/331369',
            platform: '네이버',
          },
          {
            name: '보늬테라피 순한 폼클렌징',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=141583&lptag=CFM66275232&pType=live&source=sharedLink&roomId=141583&backType=1',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '헬스케어',
        lives: [
          {
            name: '닥터헤디슨 더 탱글 콜라겐',
            link: 'https://link.coupang.com/nt/LIVECO?pageKey=145748&pType=live',
            platform: '쿠팡',
          },
          {
            name: '닥터헤디슨 이로운 효소균',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=149275&lptag=CFM66275232&pType=live&source=sharedLink&roomId=149275',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '남성패션',
        lives: [
          {
            name: '파주 롯데프리미엄아울렛 락포트 기획전',
            link: 'https://shoppinglive.naver.com/replays/171726?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '파주 롯데프리미엄아울렛 아디다스 기획전',
            link: 'https://shoppinglive.naver.com/livebridge/190660',
            platform: '네이버',
          },
          {
            name: '디지털패션문화패스티벌 디자이너 브랜드',
            link: 'https://www.youtube.com/watch?v=wTT39D5jAos&feature=youtu.be',
            platform: '유튜브',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '라뷰옵티컬 블루라이트 차단 안경',
            link: 'https://naver.me/xBYbx8vU',
            platform: '네이버',
          },
          {
            name: '바디버든프로젝트 샴푸, 트리트먼트',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=128159&lptag=CFM66275232&pType=live&source=sharedLink&roomId=128159',
            platform: '쿠팡',
          },
          {
            name: '체인랜서 아이들 장난',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=137967&lptag=CFM66275232&pType=live&source=sharedLink&roomId=137967&backType=1',
            platform: '쿠팡',
          },
        ],
      },
    ],
  },
  //NOTE: 심예빈 쇼호스트 20
  {
    id: 20,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin/yebin_0.png`,
    name: '심예빈 쇼호스트',
    desc: '매순간 밝은에너지와 시청자에게 허물없이 다가가는 쇼호스트 입니다.',
    category: [1],
    detail: {
      name: 'Sim Yebin',
      part: 'Live commerce Show host',
      desc: '매순간 밝은에너지와 시청자에게 허물없이 다가가는 쇼호스트 입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/327151?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/359094?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin/yebin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin/yebin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin/yebin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '아뜨 푸드몰 호두과자',
            link: 'https://view.shoppinglive.naver.com/replays/327151?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '아뜨 푸드몰 호두과자',
            link: 'https://view.shoppinglive.naver.com/replays/317597?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '바삭한 핫도그, 치즈 핫도그',
            link: 'https://view.shoppinglive.naver.com/replays/359094?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '바삭한 핫도그, 치즈 핫도그2',
            link: 'https://view.shoppinglive.naver.com/replays/350242?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '햇 수미감자',
            link: 'https://view.shoppinglive.naver.com/replays/300985?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 최슬기 쇼호스트 21
  {
    id: 21,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seulkee/seulkee_0.png`,
    name: '최슬기 쇼호스트',
    desc: '매순간 밝은에너지와 시청자에게 허물없이 다가가는 쇼호스트 입니다.',
    category: [1, 9, 6, 2],
    detail: {
      name: 'Choi Seulkee',
      part: 'Live commerce Show host',
      desc: '매순간 밝은에너지와 시청자에게 허물없이 다가가는 쇼호스트 입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://naver.me/FWv3jjVZ',
      },
      {
        type: 'naver',
        link: 'https://naver.me/GA1ZNlfD',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seulkee/seulkee_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seulkee/seulkee_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seulkee/seulkee_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '속초3대젓갈',
            link: 'https://naver.me/xyJkCQbe',
            platform: '네이버',
          },
          {
            name: '삼형제고기 한돈돼지등뼈',
            link: 'https://naver.me/F6JoLQl5',
            platform: '네이버',
          },
          {
            name: '그릭요거트',
            link: 'https://naver.me/GK5tLXJ7',
            platform: '네이버',
          },
          {
            name: '한돈돼지불백',
            link: 'https://naver.me/xnPS2Rs7',
            platform: '네이버',
          },
          {
            name: '국내산 참기름&들기름',
            link: 'https://naver.me/FjxDRn98',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '아리더마 스킨케어',
            link: 'https://naver.me/51QpD0rX',
            platform: '네이버',
          },
          {
            name: '베이비스킨케어',
            link: 'https://naver.me/GA1ZNlfD',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '회전다리미판',
            link: 'https://naver.me/xMbcuakc',
            platform: '네이버',
          },
          {
            name: '규조토발매트',
            link: 'https://naver.me/FWv3jjVZ',
            platform: '네이버',
          },
          {
            name: '라스노니스치약',
            link: 'https://naver.me/5jCxbfEV',
            platform: '네이버',
          },
          {
            name: '아이스쿨러',
            link: 'https://naver.me/FABJb8c0',
            platform: '네이버',
          },
          {
            name: '제나스위스 채칼&젓가락',
            link: 'https://naver.me/5snP7b3b',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 한지희 쇼호스트 22
  {
    id: 22,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jihee/jihee_0.png`,
    name: '한지희 쇼호스트',
    desc: '연기자출신의 상황극의 달인, 못 받아치는 드립이 없는 높은텐션의 쇼호스트 입니다.',
    category: [1, 10, 12, 7, 2],
    detail: {
      name: 'Han Jihee',
      part: 'Live commerce Show host',
      desc: '연기자출신의 상황극의 달인, 못 받아치는 드립이 없는 높은텐션의 쇼호스트 입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://naver.me/52lJ1sVG',
      },
      {
        type: 'naver',
        link: 'https://naver.me/FZJYizfK',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jihee/jihee_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jihee/jihee_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jihee/jihee_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '한만두 선물세트',
            link: 'https://naver.me/57X9ev5n',
            platform: '네이버',
          },
          {
            name: '마켓경기',
            link: 'https://naver.me/Fgw4aYW2',
            platform: '네이버',
          },
          {
            name: '토마호크&우대갈비',
            link: 'https://naver.me/F4NKd8s0',
            platform: '네이버',
          },
          {
            name: '교촌치킨',
            link: 'https://youtu.be/DTr5iB7c0Eo',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '디오비오',
            link: 'https://naver.me/5NdXx012',
            platform: '네이버',
          },
          {
            name: '네이처스플러스',
            link: 'https://naver.me/xPIcjPvi',
            platform: '네이버',
          },
          {
            name: '와프랩샴푸',
            link: 'https://naver.me/FuQj6WYO',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가전/생활용품',
        lives: [
          {
            name: '아이클레보 로봇청소기',
            link: 'https://naver.me/5f4y6NNi',
            platform: '네이버',
          },
          {
            name: '솔리티 웰콤',
            link: 'https://naver.me/FQazIcwa',
            platform: '네이버',
          },
          {
            name: '캐논 인스픽',
            link: 'https://view.shoppinglive.naver.com/replays/156743?tr=lim',
            platform: '네이버',
          },
          {
            name: '웰니스 마스크',
            link: 'https://naver.me/FHYag0b5',
            platform: '네이버',
          },
          {
            name: '맨디사 샤워타올',
            link: 'https://naver.me/52lJ1sVG',
            platform: '네이버',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '스텔라앤츄이스',
            link: 'https://naver.me/5SWAR4gD',
            platform: '네이버',
          },
          {
            name: '더스트몬',
            link: 'https://naver.me/5TvFnTdh',
            platform: '네이버',
          },
          {
            name: '어바웃펫 지위픽',
            link: 'https://naver.me/FZJYizfK',
            platform: '네이버',
          },
          {
            name: '어바웃펫 두잇',
            link: 'https://naver.me/GXEZAID8',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여행/티켓',
        lives: [
          {
            name: '디오션리조트',
            link: 'https://naver.me/FuV14oeG',
            platform: '네이버',
          },
          {
            name: '켄싱턴 충주',
            link: 'https://naver.me/FqS0Ir58',
            platform: '네이버',
          },
          {
            name: '홍천 비발디',
            link: 'https://naver.me/GlVbG7jV',
            platform: '네이버',
          },
          {
            name: '인터파크 <드래곤하이공연> 야외',
            link: 'https://m.shop.interpark.com/event/interparkTV.html',
            platform: '인터파크',
          },
          {
            name: '인터파크 <매직드로잉 두들팝>',
            link: 'https://m.shop.interpark.com/event/interparkTV.html',
            platform: '인터파크',
          },
        ],
      },
    ],
  },
  //NOTE: 이가원 쇼호스트 23
  {
    id: 23,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gawon/gawon_0.png`,
    name: '이가원 쇼호스트',
    desc: '안녕하세요 신뢰감 넘치는 목소리 차고 넘치는 텐션의 소유자 이가원입니다.',
    category: [2, 6, 3, 4],
    detail: {
      name: 'Lee Gawon',
      part: 'Live commerce Show host',
      desc: '안녕하세요 신뢰감 넘치는 목소리 차고 넘치는 텐션의 소유자 이가원입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/246722?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://shoppinglive.naver.com/replays/318802?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gawon/gawon_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gawon/gawon_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gawon/gawon_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '본정 초콜릿',
            link: 'https://shoppinglive.naver.com/replays/318802?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '너츠고 요거트베리',
            link: 'https://naver.me/xv03jAui',
            platform: '네이버',
          },
          {
            name: '아이두비 현미누룽지',
            link: 'https://naver.me/xWNT1RTw',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '블루셀 클렌징세트',
            link: 'https://shoppinglive.naver.com/replays/325823?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '베리쟈프 비비랩 스타스킨 콜라겐',
            link: 'https://grip.show/content/13207jz9',
            platform: '그립',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '플랙진 데님 특집',
            link: 'https://view.shoppinglive.naver.com/replays/246722?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '하이서울쇼룸 베르가',
            link: 'https://shoppinglive.naver.com/replays/246690?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '하이서울쇼룸 아티시안',
            link: 'https://shoppinglive.naver.com/replays/247604?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '하이서울쇼룸 티나블러썸',
            link: 'https://shoppinglive.naver.com/replays/247579?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '포그스타 김서림방지 안경닦이',
            link: 'https://view.shoppinglive.naver.com/lives/285523',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 홍세리 쇼호스트 24
  {
    id: 24,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seri/seri_0.png`,
    name: '홍세리 쇼호스트',
    desc: '성실함이 가장 큰 무기라고 생각하는 홍세리 입니다. 어디에서든 나타나겠습니다.',
    category: [4, 3, 1, 2],
    detail: {
      name: 'Hong Seri',
      part: 'Live commerce Show host',
      desc: '성실함이 가장 큰 무기라고 생각하는 홍세리 입니다. 어디에서든 나타나겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/132593?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/253334?dtm_medium=share&dtm_source=liveviewer&from=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seri/seri_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seri/seri_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seri/seri_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: ' 뭉치 쭈꾸미',
            link: 'https://view.shoppinglive.naver.com/replays/132593?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '가산현대아울렛 시에로',
            link: 'https://view.shoppinglive.naver.com/lives/253334?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '아리마 겨울',
            link: 'https://view.shoppinglive.naver.com/lives/351550',
            platform: '네이버',
          },
        ],
      },
      {
        category: '미용/뷰티',
        lives: [
          {
            name: '제니하우스 트리플 기초3종라인',
            link: 'https://view.shoppinglive.naver.com/replays/295720?tr=lim',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '저분자 피쉬콜라겐',
            link: 'https://view.shoppinglive.naver.com/replays/127126?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김시은 쇼호스트 25
  {
    id: 25,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sieun/sieun_0.png`,
    name: '김시은 쇼호스트',
    desc: '"화끈하게 시연 하는" 쇼호스트 "화시은" 김시은입니다. ',
    category: [1, 4, 7, 8, 12],
    detail: {
      name: 'Kim Sieun',
      part: 'Live commerce Show host',
      desc: '"화끈하게 시연 하는" 쇼호스트 "화시은" 김시은입니다. ',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/298286',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/343158?tr=dlim&fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sieun/sieun_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sieun/sieun_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sieun/sieun_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '주문바다요',
            link: 'https://view.shoppinglive.naver.com/lives/195005',
            platform: '네이버',
          },
          {
            name: '입맛도둑 탱글하고 쫄깃한 송어장',
            link: 'https://view.shoppinglive.naver.com/lives/384031',
            platform: '네이버',
          },
          {
            name: '백송 손만두',
            link: 'https://view.shoppinglive.naver.com/lives/386622',
            platform: '네이버',
          },
          {
            name: '통영제철 홍가리비',
            link: 'https://view.shoppinglive.naver.com/lives/362253',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/화장품',
        lives: [
          {
            name: '염색약',
            link: 'https://view.shoppinglive.naver.com/lives/343158?tr=dlim&fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '낯가림톤업크림, 안탄데선크림',
            link: 'https://view.shoppinglive.naver.com/lives/395801',
            platform: '네이버',
          },
          {
            name: '더마 콜라겐마스크팩 하이드로겔 VT 수분 마스크팩',
            link: 'https://view.shoppinglive.naver.com/replays/239184',
            platform: '네이버',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '배우 이용녀 유기견보호소 x 내개와세트',
            link: 'https://view.shoppinglive.naver.com/lives/384031',
            platform: '네이버',
          },
          {
            name: '엘리샤펫',
            link: 'https://view.shoppinglive.naver.com/replays/187505?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '견사돌',
            link: 'https://view.shoppinglive.naver.com/lives/193295?tr=lim',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '삼성올인원컴퓨터',
            link: 'https://view.shoppinglive.naver.com/lives/222798?tr=li',
            platform: '네이버',
          },
          {
            name: '롯데필링스 미생물음식물처리기',
            link: 'https://view.shoppinglive.naver.com/lives/334381?tr=lim&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '다데고 무선 진공포장기',
            link: 'https://view.shoppinglive.naver.com/lives/272132',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아용품',
        lives: [
          {
            name: '맘스미',
            link: 'https://view.shoppinglive.naver.com/lives/230641',
            platform: '네이버',
          },
          {
            name: '카라즈 유아메트',
            link: 'https://view.shoppinglive.naver.com/lives/230876?tr=lim',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성의류',
        lives: [
          {
            name: 'KL 현대 동대문 아울렛 라이브',
            link: 'https://view.shoppinglive.naver.com/replays/298286',
            platform: '네이버',
          },
          {
            name: '세상편한 인생슈즈',
            link: 'https://view.shoppinglive.naver.com/replays/345282?tr=lim',
            platform: '네이버',
          },
          {
            name: 'AO 화끈하게 시연하는 김시은 LIVE라이브',
            link: 'https://link.coupang.com/nt/LIVECO?pageKey=149858&pType=live&source=sharedLink',
            platform: '쿠팡',
          },
          {
            name: 'AO 화끈하게 시연하는 시은LIVE 아우터라이브',
            link: 'https://link.coupang.com/nt/LIVECO?pageKey=148651&pType=live&source=sharedLink',
            platform: '쿠팡',
          },
        ],
      },
    ],
  },
  //NOTE: 최예진 쇼호스트 26
  {
    id: 26,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yejin/yejin_0.png`,
    name: '최예진 쇼호스트',
    desc: '"화끈하게 시연 하는" 쇼호스트 "화시은" 김시은입니다. ',
    category: [1, 8, 6, 9, 10],
    detail: {
      name: 'Choi Yejin',
      part: 'Live commerce Show host',
      desc: '"화끈하게 시연 하는" 쇼호스트 "화시은" 김시은입니다. ',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/224632?tr=lim5',
      },
      {
        type: 'naver',
        link: 'https://naver.me/xjXFICYT',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yejin/yejin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yejin/yejin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yejin/yejin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: 'CJ제일제당 비비고 김치(꽁트형)',
            link: 'https://view.shoppinglive.naver.com/replays/224632?tr=lim5',
            platform: '네이버',
          },
          {
            name: '서울우유 강릉커피, 듀오안',
            link: 'https://view.shoppinglive.naver.com/replays/227914?tr=lim5',
            platform: '네이버',
          },
          {
            name: 'CJ제일제당 고메',
            link: 'https://shoppinglive.naver.com/replays/301016',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아',
        lives: [
          {
            name: '라스칼프렌즈 기저귀 깐부특집',
            link: 'https://naver.me/IMVS7ins',
            platform: '네이버',
          },
          {
            name: '미미월드 뽀로로 코딩컴퓨터',
            link: 'https://naver.me/xjXFICYT',
            platform: '네이버',
          },
          {
            name: '팬콧키즈 아동복',
            link: 'https://naver.me/xevzOHEE',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여행/레져',
        lives: [
          {
            name: '디자인 하우스 매거진 정기구독권',
            link: 'https://naver.me/IIq77OLk',
            platform: '네이버',
          },
          {
            name: '길벗어린이 <지원이와 병관이 책 세트>',
            link: 'https://shoppinglive.naver.com/replays/355922',
            platform: '네이버',
          },
          {
            name: '리틀홈런',
            link: 'https://view.shoppinglive.naver.com/replays/361419',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: 'LG지인 안심매트',
            link: 'https://shoppinglive.naver.com/livebridge/175332',
            platform: '네이버',
          },
          {
            name: '데일리라이크 주방세트',
            link: 'https://shoppinglive.naver.com/replays/375922',
            platform: '네이버',
          },
          {
            name: '럭셔리 아트라이브 유희송, 이정원작가 도자기',
            link: 'https://naver.me/5vIC3oSR',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '신한SOL라이브 LX지인 인테리어',
            link: 'https://youtu.be/UVEH4s9Aoqo',
            platform: '유튜브',
          },
          {
            name: '수입가구 atempo- 자노타, 아르테미데',
            link: 'https://view.shoppinglive.naver.com/lives/81395',
            platform: '네이버',
          },
          {
            name: '현대리바트 포터리반 키즈',
            link: 'https://shoppinglive.naver.com/replays/122183',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 정유진 쇼호스트 27
  {
    id: 27,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yoojin/yoojin_0.png`,
    name: '정유진 쇼호스트',
    desc: '필라테스 강사 출신으로 건강한 아름다움으로 라이프스타일을 만들어 나가고 있습니다.',
    category: [1, 2, 12, 4, 6],
    detail: {
      name: 'Chong YooJin',
      part: 'Live commerce Show host',
      desc: '필라테스 강사 출신으로 건강한 아름다움으로 라이프스타일을 만들어 나가고 있습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://shoppinglive.naver.com/replays/356096?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://shoppinglive.naver.com/replays/329934?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yoojin/yoojin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yoojin/yoojin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yoojin/yoojin_3.png`,
      },
    ],
    career: [
      {
        category: '부티크',
        lives: [
          {
            name: '토리버치 가방',
            link: 'https://shoppinglive.naver.com/replays/145451?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '보테가베네타 선글라스',
            link: 'https://shoppinglive.naver.com/replays/163731?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '페라가모, 토리버치 시계',
            link: 'https://shoppinglive.naver.com/replays/329934?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '노비스 다운파카',
            link: 'https://shoppinglive.naver.com/replays/170520?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '노비스 다운파카2',
            link: 'https://shoppinglive.naver.com/replays/190256?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '엠포리오 아르마니 코트',
            link: 'https://shoppinglive.naver.com/replays/327970?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: 'DLX 골프웨어',
            link: 'https://shoppinglive.naver.com/replays/332855?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '모피',
            link: 'https://shoppinglive.naver.com/replays/334604?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '국개대표 오즈펫',
            link: 'https://shoppinglive.naver.com/replays/306678?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '국개대표 오트밀 간식 5종세트',
            link: 'https://shoppinglive.naver.com/replays/320610?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '국개대표 영양밤, 강아지 목도리',
            link: 'https://shoppinglive.naver.com/replays/346514?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '국개대표 건강특식',
            link: 'https://shoppinglive.naver.com/replays/384514?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '리리펫',
            link: 'https://shoppinglive.naver.com/replays/331457?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '미용,뷰티',
        lives: [
          {
            name: '룩픽스_색조메이크업',
            link: 'https://shoppinglive.naver.com/replays/291039?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '스트라이벡틴 기초케어',
            link: 'https://shoppinglive.naver.com/replays/317089?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '콤마나인 마스크팩',
            link: 'https://shoppinglive.naver.com/replays/388550?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '오이보스 & 노레바 크림',
            link: 'https://shoppinglive.naver.com/replays/380800?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '스킨알엑스 x 차홍',
            link: 'https://shoppinglive.naver.com/replays/356096?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '식품',
        lives: [
          {
            name: '보리로푸드',
            link: 'https://shoppinglive.naver.com/replays/166184?fm=shoppinglive&sn=home',
            platform: '유튜브',
          },
          {
            name: '새콤부차',
            link: 'https://shoppinglive.naver.com/replays/367240?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '프롬셰프',
            link: 'https://shoppinglive.naver.com/replays/373899?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '가의원(쌍화차)',
            link: 'https://shoppinglive.naver.com/replays/341729?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활주방',
        lives: [
          {
            name: '라이프필 배게',
            link: 'https://shoppinglive.naver.com/replays/347260?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '니어리스트 벗 로스트  향기배딩스프레이',
            link: 'https://shoppinglive.naver.com/replays/298509?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '메이크힐 (마스크)',
            link: 'https://shoppinglive.naver.com/replays/347292?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김다솜 쇼호스트 28
  {
    id: 28,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/dasom/dasom_0.png`,
    name: '김다솜 쇼호스트',
    desc: '모델연기 전공자 하이텐션 끝판왕 쇼호스트 김다솜입니다.',
    category: [4, 7, 1, 8, 6],
    detail: {
      name: 'Kim Dasom',
      part: 'Live commerce Show host',
      desc: '모델연기 전공자 하이텐션 끝판왕 쇼호스트 김다솜입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://shoppinglive.naver.com/replays/373381?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://shoppinglive.naver.com/replays/313953?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/dasom/dasom_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/dasom/dasom_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/dasom/dasom_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '온웨이 춘천닭갈비',
            link: 'https://view.shoppinglive.naver.com/replays/318936?from=share',
            platform: '네이버',
          },
          {
            name: '엄마가 오란다 수제강정',
            link: 'https://shoppinglive.naver.com/replays/332927?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '슬로우래빗 저칼로리 곤약 리조또',
            link: 'https://shoppinglive.naver.com/replays/344443?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '쫄깃칼칼 착한낙지',
            link: 'https://shoppinglive.naver.com/replays/312347?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '선물! 국내산100% 맛밤',
            link: 'https://shoppinglive.naver.com/replays/356891?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '쉬즈미스 현대가산 LIVE',
            link: 'https://shoppinglive.naver.com/replays/313953?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '쉬즈미스 연말특집',
            link: 'https://shoppinglive.naver.com/replays/357695?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '섹바이리군 디자이너 원피스',
            link: 'https://shoppinglive.naver.com/replays/232559?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '룬케이브 가을신상',
            link: 'https://view.shoppinglive.naver.com/replays/232586?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '더틸버리 현대가산 LIVE',
            link: 'https://shoppinglive.naver.com/replays/336673?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티',
        lives: [
          {
            name: '천애연 천년초화장품',
            link: 'https://shoppinglive.naver.com/replays/373381?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '닥터각 NoWash남성청결제',
            link: 'https://shoppinglive.naver.com/replays/310966?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '승무원들의 원픽 고체향수',
            link: 'https://shoppinglive.naver.com/replays/175849?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활가전',
        lives: [
          {
            name: '방송 마이크 삼손',
            link: 'https://shoppinglive.naver.com/replays/349778?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '보만 진공포장기',
            link: 'https://shoppinglive.naver.com/replays/325625?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '보만 스팀다리미',
            link: 'https://shoppinglive.naver.com/replays/386268?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '미니가습기',
            link: 'https://shoppinglive.naver.com/replays/293577?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털가전',
        lives: [
          {
            name: '이스트라 QLED TV',
            link: 'https://shoppinglive.naver.com/replays/338689?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '매직쉐프 식기살균건조기',
            link: 'https://shoppinglive.naver.com/replays/386136?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활주방',
        lives: [
          {
            name: '폭스밸리 연말기획 홈트레이닝',
            link: 'https://shoppinglive.naver.com/replays/357420?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '나플나플 탄소매트',
            link: 'https://shoppinglive.naver.com/replays/380813?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '온가족 힐링 풋! 테라피',
            link: 'https://shoppinglive.naver.com/replays/373243?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '다소다 스텐 도시락통',
            link: 'https://shoppinglive.naver.com/replays/391433?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아',
        lives: [
          {
            name: '우리아이 첫 독립공간 햇님토이',
            link: 'https://shoppinglive.naver.com/replays/317395?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '오늘도 아기과자',
            link: 'https://shoppinglive.naver.com/replays/251338?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 최예원 쇼호스트 29
  {
    id: 29,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yewon/yewon_0.png`,
    name: '최예원 쇼호스트',
    desc: '공연,리포터,방송활동을 바탕으로 재미와 정보 둘 다 드릴 수 있는 양질의 방송 자신 있습니다.',
    category: [1, 2, 4],
    detail: {
      name: 'Choi Yewon',
      part: 'Live commerce Show host',
      desc: '공연,리포터,방송활동을 바탕으로 재미와 정보 둘 다 드릴 수 있는 양질의 방송 자신 있습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/199538',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/356561',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yewon/yewon_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yewon/yewon_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yewon/yewon_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '신내린쭈꾸미',
            link: 'https://view.shoppinglive.naver.com/replays/344504',
            platform: '네이버',
          },
          {
            name: '설빙 인절미찹쌀떡',
            link: 'https://view.shoppinglive.naver.com/replays/199538',
            platform: '네이버',
          },
          {
            name: '착한낙지',
            link: 'https://shoppinglive.naver.com/replays/378312',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티',
        lives: [
          {
            name: '네이처허브',
            link: 'https://view.shoppinglive.naver.com/replays/133498',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '루지오스트레일리아 UGG어그부츠',
            link: 'https://view.shoppinglive.naver.com/replays/356561',
            platform: '네이버',
          },
          {
            name: 'PALLA 여성가방',
            link: 'https://view.shoppinglive.naver.com/replays/213432',
            platform: '네이버',
          },
          {
            name: '피앤씨 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/231338',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김혜원 쇼호스트 30
  {
    id: 30,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyewon/hyewon_0.png`,
    name: '김혜원 쇼호스트',
    desc: '맡은 상품의 특징과 분위기, 연령층까지 파악하여 알맞 다양한 컨셉의 진행을 보여드리겠습니다',
    category: [1, 2, 4, 6],
    detail: {
      name: 'Kim Hyewon',
      part: 'Live commerce Show host',
      desc: '맡은 상품의 특징과 분위기, 연령층까지 파악하여 알맞 다양한 컨셉의 진행을 보여드리겠습니다',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/128085?from=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/174924?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyewon/hyewon_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyewon/hyewon_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyewon/hyewon_3.png`,
      },
    ],
    career: [
      {
        category: '패션',
        lives: [
          {
            name: '나이키 패션화',
            link: 'https://player.sauceflex.com/broadcast/lkabcmart-b55e684e8d5540d5b826c05f88a37e92?',
            platform: '소스라이브',
          },
          {
            name: '도미넌스 스트라반 맨투맨, 후디 셋업, 패딩',
            link: 'https://www.coupang.com/?wPcid=16400766451878467463064&wRef=&wTime=&redirect=landing',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '식품',
        lives: [
          {
            name: '수비드 스테이크',
            link: 'https://view.shoppinglive.naver.com/replays/400926?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티',
        lives: [
          {
            name: '배지힐스 오소리 오일',
            link: 'https://view.shoppinglive.naver.com/replays/128085?from=share',
            platform: '네이버',
          },
          {
            name: '패션캣 메이크업 제품',
            link: 'https://view.shoppinglive.naver.com/replays/397778?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활가전',
        lives: [
          {
            name: '리하스 에어프라이어',
            link: 'https://view.shoppinglive.naver.com/replays/174924?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 최예빈 쇼호스트 31
  {
    id: 31,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin2/yebin_0.png`,
    name: '최예빈 쇼호스트',
    desc: '1월 기준 라이브커머스 방송 300회 이상 승무원, 리포터, MC 출신 쇼호스트!',
    category: [1, 2, 4, 6],
    detail: {
      name: 'Choi Yebin',
      part: 'Live commerce Show host',
      desc: '1월 기준 라이브커머스 방송 300회 이상 승무원, 리포터, MC 출신 쇼호스트!',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/208348',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/399916',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin2/yebin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin2/yebin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yebin2/yebin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '횡성한우 불고기,국거리',
            link: 'https://view.shoppinglive.naver.com/replays/399917',
            platform: '네이버',
          },
          {
            name: '추석선물은 역시 굴비 아닙니까? 반건조 보리굴비!',
            link: 'https://view.shoppinglive.naver.com/replays/248558',
            platform: '네이버',
          },
          {
            name: '제주에서 왔어요~ 다올 한라봉,레드향,천혜향',
            link: 'https://view.shoppinglive.naver.com/replays/389680',
            platform: '네이버',
          },
          {
            name: '생활의 달인 출연 가게, 37년 전통 자인 방앗간!',
            link: 'https://view.shoppinglive.naver.com/replays/381894',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: 'EMCEE 훈녀되는 필수템 예쁜가방',
            link: 'https://view.shoppinglive.naver.com/replays/208348',
            platform: '네이버',
          },
          {
            name: '설특집 소가죽백 루이백',
            link: 'https://view.shoppinglive.naver.com/replays/389685',
            platform: '네이버',
          },
          {
            name: '연말트집 마지막날! emcee 소가죽백 초특가',
            link: 'https://view.shoppinglive.naver.com/replays/373737',
            platform: '네이버',
          },
          {
            name: '드라마켓 최고급 신상가방',
            link: 'https://view.shoppinglive.naver.com/replays/302577',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '설특집 뷰티 유효성분 폭탄 알더마 크림, 패드',
            link: 'https://view.shoppinglive.naver.com/replays/399916',
            platform: '네이버',
          },
          {
            name: '아이와 엄마가 함께 쓰는 샴푸, 화장품 러뷰올!',
            link: 'https://view.shoppinglive.naver.com/replays/398910',
            platform: '네이버',
          },
          {
            name: '제주 특허받은 탈모샴푸! 용암수로 만든 가글',
            link: 'https://view.shoppinglive.naver.com/replays/322323',
            platform: '네이버',
          },
          {
            name: 'LED 마스크 뭐가 좋은지 궁금하시다고요?',
            link: 'https://view.shoppinglive.naver.com/replays/239210',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활',
        lives: [
          {
            name: '명절 필수품 프라이팬! 웍 겸용 바이킹듀얼팬',
            link: 'https://view.shoppinglive.naver.com/replays/401464',
            platform: '네이버',
          },
          {
            name: '필터 재사용 가능한 연수기!',
            link: 'https://view.shoppinglive.naver.com/replays/386139',
            platform: '네이버',
          },
          {
            name: '하루 한 장으로 청결한 주방~! 대나무행주',
            link: 'https://view.shoppinglive.naver.com/replays/385067',
            platform: '네이버',
          },
          {
            name: '수면시간보다 수면의 질이 중요! 꿀잠 주무세요',
            link: 'https://view.shoppinglive.naver.com/replays/381174',
            platform: '네이버',
          },
          {
            name: '자취템! 살림템! 대나무행주, 울드라이어볼, 세탁망세트',
            link: 'https://view.shoppinglive.naver.com/replays/336049',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 빈혜리 쇼호스트 32
  {
    id: 32,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeri/hyeri_0.png`,
    name: '빈혜리 쇼호스트',
    desc: '다채로운 필드의 경험과 방송실력까지 겸비한 쇼호스트이자 함께하는 브랜드만의 팔레트입니다.',
    category: [1, 7, 3, 10, 2],
    detail: {
      name: 'Choi Yebin',
      part: 'Live commerce Show host',
      desc: '다채로운 필드의 경험과 방송실력까지 겸비한 쇼호스트이자 함께하는 브랜드만의 팔레트입니다.',
    },
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '인천광역시 사회적경제센터 수작떡공방',
            link: 'https://naver.me/5cwfGLrP',
            platform: '네이버',
          },
          {
            name: '안성바우덕이 축제 안성마춤 배',
            link: 'https://naver.me/FDQsDVfY',
            platform: '네이버',
          },
          {
            name: '산양삼삼떡',
            link: 'https://naver.me/x9Lhblhr',
            platform: '네이버',
          },
          {
            name: '함양산삼항노화엑스포 도라지청 ',
            link: 'https://naver.me/5B1NYG94',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '하이서울쇼룸 라이',
            link: 'https://naver.me/GDbjyOxz',
            platform: '네이버',
          },
          {
            name: '하이서울쇼룸 샐러드볼즈',
            link: 'https://naver.me/FgOslyYz',
            platform: '네이버',
          },
          {
            name: '하이서울쇼룸 디어니스',
            link: 'https://naver.me/FABTEtC6',
            platform: '네이버',
          },
          {
            name: '잇미샤',
            link: 'https://naver.me/IFKrxWHe',
            platform: '네이버',
          },
          {
            name: '아디다스 키즈',
            link: 'https://naver.me/501mjqeQ',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '라엘',
            link: 'https://naver.me/5thSiyjs',
            platform: '네이버',
          },
          {
            name: '지엘리 쿠션',
            link: 'https://naver.me/Gg2oUcvQ',
            platform: '네이버',
          },
          {
            name: '아이유로 향수',
            link: 'https://naver.me/IMRahA0g',
            platform: '네이버',
          },
          {
            name: '무슈제이',
            link: 'https://naver.me/5thSiyjs',
            platform: '네이버',
          },
          {
            name: '코리아나 앰플엔 ',
            link: 'https://naver.me/x0MtNtTN',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강식품',
        lives: [
          {
            name: '링티',
            link: 'https://naver.me/x0Gk3F5L',
            platform: '네이버',
          },
          {
            name: '미궁365',
            link: 'https://naver.me/xHigr40j',
            platform: '네이버',
          },
          {
            name: '지리산엄천골',
            link: 'https://naver.me/xhAXjS2Q',
            platform: '네이버',
          },
          {
            name: '대상웰라이프 마이밀 ',
            link: 'https://naver.me/F7CVI0ON',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/가전',
        lives: [
          {
            name: '이주여성희망나눔터 원목시계',
            link: 'https://naver.me/GTWwe30k',
            platform: '네이버',
          },
          {
            name: '에코어스 면생리대',
            link: 'https://naver.me/xoLOPZQp',
            platform: '네이버',
          },
          {
            name: '싸주아리 찜질팩',
            link: 'https://naver.me/xvExos0p',
            platform: '네이버',
          },
          {
            name: 'HP노트북',
            link: 'https://naver.me/xcKoj5C0',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여행/레저',
        lives: [
          {
            name: '여행공방',
            link: 'https://naver.me/xbLx2Wot',
            platform: '네이버',
          },
          {
            name: '고차박',
            link: 'https://naver.me/IgYiOtFV',
            platform: '네이버',
          },
          {
            name: '드림스카이',
            link: 'https://naver.me/xJtSTQrV',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 소연서 쇼호스트 33
  {
    id: 33,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeonseo/yeonseo_0.png`,
    name: '소연서 쇼호스트',
    desc: 'MC에 이어 1세대 라이브커머스 쇼호스트 티몬, 쿠팡, 보고, 현대H몰, 네이버쇼핑라이브등 경력만렙',
    category: [1, 2, 8],
    detail: {
      name: 'So Yeonseo',
      part: 'Live commerce Show host',
      desc: 'MC에 이어 1세대 라이브커머스 쇼호스트 티몬, 쿠팡, 보고, 현대H몰, 네이버쇼핑라이브등 경력만렙',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/344475?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/323903?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeonseo/yeonseo_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeonseo/yeonseo_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeonseo/yeonseo_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '집에서 즐기는 중식세트',
            link: 'https://view.shoppinglive.naver.com/replays/211641?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '서가앤쿡 오리지널 폭립',
            link: 'https://view.shoppinglive.naver.com/replays/225692?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '삼청동뚝배기 사골 도가니탕',
            link: 'https://view.shoppinglive.naver.com/replays/252975?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '하마이시톨 이노시돌1',
            link: 'https://view.shoppinglive.naver.com/replays/367713?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '마이시톨 이노시돌2',
            link: 'https://view.shoppinglive.naver.com/replays/316984?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '대상웰라이프 뉴케어 마이키즈',
            link: 'https://view.shoppinglive.naver.com/replays/330335?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '사바산 발삼키트',
            link: 'https://view.shoppinglive.naver.com/replays/344475?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: 'GENETTA 다이아피아 콜라겐 마스크',
            link: 'https://view.shoppinglive.naver.com/lives/346231?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '닥터오라클 화장품',
            link: 'https://view.shoppinglive.naver.com/replays/260290?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아동',
        lives: [
          {
            name: '폴햄키즈 신상 아우터',
            link: 'https://view.shoppinglive.naver.com/replays/265565?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '폴햄키즈 겨울 패딩',
            link: 'https://view.shoppinglive.naver.com/replays/265565?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김정아 쇼호스트 34
  {
    id: 34,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jeongah/jeongah_0.png`,
    name: '김정아 쇼호스트',
    desc: '시청자들과의 원활한 소통과 부드러운 진행력의 소유자 쇼호스트 김정아',
    category: [1, 6, 7],
    detail: {
      name: 'Kim Jeongah',
      part: 'Live commerce Show host',
      desc: '시청자들과의 원활한 소통과 부드러운 진행력의 소유자 쇼호스트 김정아',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/213463',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/311531?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jeongah/jeongah_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jeongah/jeongah_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jeongah/jeongah_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '미국정통 바베큐',
            link: 'https://view.shoppinglive.naver.com/replays/230330',
            platform: '네이버',
          },
          {
            name: '홈카페 브런치',
            link: 'https://view.shoppinglive.naver.com/replays/280427',
            platform: '네이버',
          },
          {
            name: '추석 천연벌꿀',
            link: 'https://view.shoppinglive.naver.com/replays/248763?tr=lim',
            platform: '네이버',
          },
          {
            name: '국내산 100% 들기름',
            link: 'https://view.shoppinglive.naver.com/replays/250384',
            platform: '네이버',
          },
          {
            name: '바바리안단백질 쉐이크',
            link: 'https://view.shoppinglive.naver.com/lives/213463',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활주방',
        lives: [
          {
            name: '카우보이 덤프맨 베게',
            link: 'https://view.shoppinglive.naver.com/lives/213463',
            platform: '네이버',
          },
          {
            name: '비첩촉 체온계',
            link: 'https://view.shoppinglive.naver.com/replays/222416',
            platform: '네이버',
          },
          {
            name: '디퓨져',
            link: 'https://view.shoppinglive.naver.com/replays/244647',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털가전',
        lives: [
          {
            name: '애플워치 스트랩',
            link: 'https://view.shoppinglive.naver.com/replays/311531?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 주민지 쇼호스트 35
  {
    id: 35,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minji/minji_0.png`,
    name: '주민지 쇼호스트',
    desc: '전직 승무원의 마음으로 고객을 섬기며 신뢰감 가고 전달력 있는 목소리로 고객의 마음을 사로잡습니다.',
    category: [1, 2, 4],
    detail: {
      name: 'Ju Minji',
      part: 'Live commerce Show host',
      desc: '전직 승무원의 마음으로 고객을 섬기며 신뢰감 가고 전달력 있는 목소리로 고객의 마음을 사로잡습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/382032?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/307793',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minji/minji_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minji/minji_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minji/minji_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '안동 사과, 제주 레드향',
            link: 'https://view.shoppinglive.naver.com/replays/392107?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '지고트 트렌트코트',
            link: 'https://www.youtube.com/watch?v=Q9sogL1_nKQ',
            platform: '현대H몰',
          },
          {
            name: '라코스테 가디건',
            link: 'https://www.youtube.com/watch?v=52tIzHq_PHM',
            platform: '현대H몰',
          },
          {
            name: '베오라 잠옷',
            link: 'https://view.shoppinglive.naver.com/replays/382032?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티',
        lives: [
          {
            name: '컴인사이드미 고체향수',
            link: 'https://view.shoppinglive.naver.com/replays/307793',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 이성희 쇼호스트 36
  {
    id: 36,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sunghee/sunghee_0.png`,
    name: '이성희 쇼호스트',
    desc: '폭 넓은 카테고리 방송으로 고객의 니즈를 파악하는 장점 상품을 고급스럽고 품격있게 방송하겠습니다.',
    category: [2, 1, 4],
    detail: {
      name: 'Lee Sunghee',
      part: 'Live commerce Show host',
      desc: '폭 넓은 카테고리 방송으로 고객의 니즈를 파악하는 장점 상품을 고급스럽고 품격있게 방송하겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/176010',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/346986',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sunghee/sunghee_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sunghee/sunghee_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sunghee/sunghee_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '제주 황금향',
            link: 'https://view.shoppinglive.naver.com/lives/245426',
            platform: '네이버',
          },
          {
            name: '미홍 견과류 팥쑥절미',
            link: 'https://view.shoppinglive.naver.com/lives/166788',
            platform: '네이버',
          },
          {
            name: '워터포미스 콜라겐',
            link: 'https://view.shoppinglive.naver.com/lives/191652',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티',
        lives: [
          {
            name: 'EGF 올로지',
            link: 'https://view.shoppinglive.naver.com/lives/346986',
            platform: '네이버',
          },
          {
            name: '센텔라 마스크팩',
            link: 'https://view.shoppinglive.naver.com/replays/232090',
            platform: '네이버',
          },
          {
            name: '라운드랩',
            link: 'https://www.coupang.com/?src=1191000&spec=10999999&addtag=812&ctag=101606&lptag=CFM22996341&itime=20220218010218&pageType=LIVE%20COMMERCE&pageValue=101606&wPcid=12764157189898510098890&wRef=www.google.com&wTime=20220218010218&redirect=landing&backType=',
            platform: '쿠팡',
          },
          {
            name: '세타필',
            link: 'https://www.coupang.com/?src=1191000&spec=10999999&addtag=812&ctag=104018&lptag=CFM22996341&itime=20220218010247&pageType=LIVE%20COMMERCE&pageValue=104018&wPcid=12764157189898510098890&wRef=www.google.com&wTime=20220218010247&redirect=landing&backType=',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '디아더컬러(패션)',
            link: 'https://view.shoppinglive.naver.com/lives/176010',
          },
          {
            name: '안지크&꼼빠니아',
            link: 'https://view.shoppinglive.naver.com/lives/105820',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활',
        lives: [
          {
            name: '배냇짓 아기 물티슈',
            link: 'https://view.shoppinglive.naver.com/replays/234965',
          },
        ],
      },
    ],
  },
  //NOTE: 한경진 쇼호스트 38
  {
    id: 38,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/kyungjin/kyungjin_0.png`,
    name: '한경진 쇼호스트',
    desc: '미스코리아, SBS, YTN 출신으로 생방송에서 유연한 전달력이 있고 순발력과 표현력이 좋습니다.',
    category: [9, 4, 6],
    detail: {
      name: 'Han kyungjin',
      part: 'Live commerce Show host',
      desc: '미스코리아, SBS, YTN 출신으로 생방송에서 유연한 전달력이 있고 순발력과 표현력이 좋습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/191085?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/34401?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/kyungjin/kyungjin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/kyungjin/kyungjin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/kyungjin/kyungjin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '식품페어 오프닝, 현장스케치, 인터뷰',
            link: 'https://view.shoppinglive.naver.com/replays/191558?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '서귀포인정농협 감귤&슁켄하우스 학센',
            link: 'https://view.shoppinglive.naver.com/replays/186054',
            platform: '네이버',
          },
          {
            name: '식물성프로틴 그래놀라',
            link: 'https://view.shoppinglive.naver.com/replays/144558?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '제주돼지고기 밀키트',
            link: 'https://view.shoppinglive.naver.com/replays/191085?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티',
        lives: [
          {
            name: '리쥬란 힐러 화장품',
            link: 'https://view.shoppinglive.naver.com/replays/34401?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 최영임 쇼호스트 40
  {
    id: 40,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/youngim/youngim_0.png`,
    name: '최영임 쇼호스트',
    desc: '현재 10만명의 틱톡커들에게 행복을 전해주고 유쾌 통쾌 상쾌한 하이텐션 보여드리겠습니다.',
    category: [9, 4, 6],
    detail: {
      name: 'Choi Youngim',
      part: 'Live commerce Show host',
      desc: '현재 10만명의 틱톡커들에게 행복을 전해주고 유쾌 통쾌 상쾌한 하이텐션 보여드리겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/353701?tr=lim',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/313331',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/youngim/youngim_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/youngim/youngim_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyeri/hyeri_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '제주 진공포장 은갈치',
            link: 'https://player.sauceflex.com/broadcast/lklotteimall-0674808f8c32494ab749be180062e3ea?',
            platform: '소스플렉스',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '안파 커플 파자마',
            link: 'https://view.shoppinglive.naver.com/replays/353701?tr=lim',
            platform: '네이버',
          },
          {
            name: '투명 발열조끼 여성용',
            link: 'https://view.shoppinglive.naver.com/replays/63034',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '자가발열 웜매트',
            link: 'https://view.shoppinglive.naver.com/replays/313305?tr=lim',
            platform: '네이버',
          },
          {
            name: '하루랩스 청소용품 세트',
            link: 'https://view.shoppinglive.naver.com/lives/313331',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가구/소품',
        lives: [
          {
            name: '리바트x포터리반 키즈',
            link: 'https://sauce.page.link/93Uj',
            platform: '현대리바트',
          },
        ],
      },
    ],
  },
  //NOTE: 이혜정 쇼호스트 41
  {
    id: 41,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyejung/hyejung_0.png`,
    name: '이혜정 쇼호스트',
    desc: '오래된 홈쇼핑 경력으로 방송의 질을 추구하는 쇼호스트 이혜정입니다.',
    category: [6, 7, 12, 13, 3],
    detail: {
      name: 'Lee Hyejung',
      part: 'Live commerce Show host',
      desc: '오래된 홈쇼핑 경력으로 방송의 질을 추구하는 쇼호스트 이혜정입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/213673',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/168084',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyejung/hyejung_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyejung/hyejung_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyejung/hyejung_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '오늘도민트초코해',
            link: 'https://view.shoppinglive.naver.com/replays/157083',
            platform: '네이버',
          },
          {
            name: '오리온 닥터유 홈트간식',
            link: 'https://view.shoppinglive.naver.com/replays/223074',
            platform: '네이버',
          },
          {
            name: '닥터키토방탄',
            link: 'https://view.shoppinglive.naver.com/replays/320472?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '닥터린 안고파 오리지널',
            link: 'https://view.shoppinglive.naver.com/replays/36590?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '바이오더마 클렌징워터',
            link: 'https://view.shoppinglive.naver.com/replays/213673',
            platform: '네이버',
          },
          {
            name: '유어브랜드 메이크업 기획전',
            link: 'https://view.shoppinglive.naver.com/replays/195395',
            platform: '네이버',
          },
          {
            name: '동국제약 피부 콜라겐 화장품',
            link: 'https://view.shoppinglive.naver.com/replays/176837',
            platform: '네이버',
          },
          {
            name: '이영애의 리파캐럿',
            link: 'https://view.shoppinglive.naver.com/replays/259281',
            platform: '네이버',
          },
          {
            name: '조말론 프리지아 코롱 향수',
            link: 'https://m.shinsegaetvshopping.com/vod/vodPickDetail/2315/2017120446/10686429',
            platform: '신세계',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '랑카스터가방',
            link: 'https://m.shinsegaetvshopping.com/vod/vodPickDetail/2288/2017120446/20017848',
            platform: '신세계',
          },
          {
            name: 'ENC 베스트 아이템',
            link: 'https://view.shoppinglive.naver.com/replays/168084',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '차즈기 루테인영양제',
            link: 'https://view.shoppinglive.naver.com/replays/340924?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '마시는 콜라겐',
            link: 'https://view.shoppinglive.naver.com/replays/103352?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '템포 순면패드 중형',
            link: 'https://view.shoppinglive.naver.com/replays/239192',
            platform: '네이버',
          },
          {
            name: '템포 순면패드 중형2',
            link: 'https://view.shoppinglive.naver.com/replays/390740?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '닥터스마일 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/390740?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '휴플러스마사지기',
            link: 'https://view.shoppinglive.naver.com/replays/260664',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가전',
        lives: [
          {
            name: '딜팩토리 에어컨',
            link: 'https://view.shoppinglive.naver.com/replays/153889',
            platform: '네이버',
          },
          {
            name: '현대모비스 차량용품',
            link: 'https://view.shoppinglive.naver.com/replays/361267?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '쥬얼리',
        lives: [
          {
            name: '로이드 쥬얼리',
            link: 'https://view.shoppinglive.naver.com/replays/82675?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '신세계',
          },
          {
            name: '안나수이 쥬얼리',
            link: 'https://m.shinsegaetvshopping.com/vod/vodPickDetail/2364/2017120446/20020017',
            platform: '신세계',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: '하림펫 푸드',
            link: 'https://view.shoppinglive.naver.com/replays/382740?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '하림펫 푸드2',
            link: 'https://view.shoppinglive.naver.com/replays/347640?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '펫츠비 배변용품&푸드',
            link: 'https://view.shoppinglive.naver.com/replays/24973?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '펫엔용 프리미엄 강아지간식',
            link: 'https://view.shoppinglive.naver.com/replays/400581?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김보영 쇼호스트 43
  {
    id: 43,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/boyoung/boyoung_0.png`,
    name: '김보영 쇼호스트',
    desc: '고객님들이 구매 뿐만 아니라 즐기는 방송으로 행복을 드리는 쇼호스트입니다.',
    category: [4, 6, 3, 2],
    detail: {
      name: 'Kim Boyoung',
      part: 'Live commerce Show host',
      desc: '고객님들이 구매 뿐만 아니라 즐기는 방송으로 행복을 드리는 쇼호스트입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/65561?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/275481?dtm_medium=share&dtm_source=liveviewer&from=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/boyoung/boyoung_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/boyoung/boyoung_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/boyoung/boyoung_3.png`,
      },
    ],
    career: [
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '헬로우아이즈 아이클리너',
            link: 'https://view.shoppinglive.naver.com/replays/205952',
            platform: '네이버',
          },
          {
            name: '아토보스 제품',
            link: 'https://view.shoppinglive.naver.com/replays/198757?tr=lim',
            platform: '네이버',
          },
          {
            name: '얼라이브랩 각질패드',
            link: 'https://view.shoppinglive.naver.com/replays/65561?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '플라스틱아일랜드 원피스',
            link: 'https://view.shoppinglive.naver.com/lives/275423',
            platform: '신세계',
          },
          {
            name: '쿠론 크로스백 모음',
            link: 'https://view.shoppinglive.naver.com/lives/275481?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
          {
            name: '그레고리 배낭',
            link: 'https://view.shoppinglive.naver.com/lives/264265',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '마이시톨 이노시돌',
            link: 'https://view.shoppinglive.naver.com/replays/316984?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&tr=dlim',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '이동식 전신 사우나',
            link: 'https://view.shoppinglive.naver.com/replays/158080?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 권나연 쇼호스트 44
  {
    id: 44,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/nayeon/nayeon_0.png`,
    name: '권나연 쇼호스트',
    desc: '과자 구매시 질소를 구매한것과 같은 느낌이 아니라 봉지안에 가득 담은 마음으로 방송에 임하겠습니다.',
    category: [2, 1, 6, 13, 12, 7],
    detail: {
      name: 'Kwon Nayeun',
      part: 'Live commerce Show host',
      desc: '과자 구매시 질소를 구매한것과 같은 느낌이 아니라 봉지안에 가득 담은 마음으로 방송에 임하겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/213673',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/168084',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/nayeon/nayeon_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/nayeon/nayeon_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/nayeon/nayeon_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '1++ 백억하누',
            link: 'https://view.shoppinglive.naver.com/replays/384859?tr=lim',
            platform: '네이버',
          },
          {
            name: '어린 암소 한우',
            link: 'https://view.shoppinglive.naver.com/replays/394690?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '매콤 코다리조림',
            link: 'https://view.shoppinglive.naver.com/replays/343984?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '통통 홍가리비',
            link: 'https://view.shoppinglive.naver.com/replays/312251?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '풀무원 잇츠콜라겐',
            link: 'https://view.shoppinglive.naver.com/lives/303390?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '바이오더마 클렌징워터',
            link: 'https://view.shoppinglive.naver.com/replays/213673',
            platform: '네이버',
          },
          {
            name: '유어브랜드 메이크업 기획전',
            link: 'https://view.shoppinglive.naver.com/replays/195395',
            platform: '네이버',
          },
          {
            name: '동국제약 피부 콜라겐 화장품',
            link: 'https://view.shoppinglive.naver.com/replays/176837',
            platform: '네이버',
          },
          {
            name: '이영애의 리파캐럿',
            link: 'https://view.shoppinglive.naver.com/replays/259281',
            platform: '네이버',
          },
          {
            name: '조말론 프리지아 코롱 향수',
            link: 'https://m.shinsegaetvshopping.com/vod/vodPickDetail/2315/2017120446/10686429',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '랑카스터가방',
            link: 'https://m.shinsegaetvshopping.com/vod/vodPickDetail/2288/2017120446/20017848',
            platform: '신세계',
          },
          {
            name: 'ENC 베스트 아이템',
            link: 'https://view.shoppinglive.naver.com/replays/168084',
            platform: '네이버',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '차즈기 루테인영양제',
            link: 'https://view.shoppinglive.naver.com/replays/340924?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
          {
            name: '마시는 콜라겐',
            link: 'https://view.shoppinglive.naver.com/replays/103352?dtm_medium=share&dtm_source=liveviewer&from=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '올스텐 가열식 가습기',
            link: 'https://view.shoppinglive.naver.com/replays/386247?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '부유먼지 청소기',
            link: 'https://view.shoppinglive.naver.com/replays/379819?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '핫팩 보온 물주머니',
            link: 'https://view.shoppinglive.naver.com/lives/364445?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&tr=lim',
            platform: '네이버',
          },
          {
            name: '초극세사 탄소매트',
            link: 'https://view.shoppinglive.naver.com/replays/332696?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '가전',
        lives: [
          {
            name: '딜팩토리 에어컨',
            link: 'https://view.shoppinglive.naver.com/replays/153889',
            platform: '네이버',
          },
          {
            name: '현대모비스 차량용품',
            link: 'https://view.shoppinglive.naver.com/replays/361267?fm=shoppinglive&amp;sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '유아용품',
        lives: [
          {
            name: '숨그림 유아 캐릭터마스크',
            link: 'https://view.shoppinglive.naver.com/replays/348322?tr=lim',
            platform: '신세계',
          },
          {
            name: '안나수이 쥬얼리',
            link: 'https://m.shinsegaetvshopping.com/vod/vodPickDetail/2364/2017120446/20020017',
            platform: '신세계',
          },
        ],
      },
    ],
  },
  //NOTE: 라세진 쇼호스트 42
  {
    id: 42,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sejin/sejin_0.png`,
    name: '라세진 쇼호스트',
    desc: '상품이 돋보일 수 있도록, 상품에 진심을 담는 쇼호스트 라세진입니다.',
    category: [1, 4, 3, 2, 6],
    detail: {
      name: 'La Sejin',
      part: 'Live commerce Show host',
      desc: '상품이 돋보일 수 있도록, 상품에 진심을 담는 쇼호스트 라세진입니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/295261?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/218878?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sejin/sejin_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sejin/sejin_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sejin/sejin_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '끼니엔 내가끓인 어묵탕',
            link: 'https://view.shoppinglive.naver.com/replays/322545?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '미엘드 천연 벌꿀파우치',
            link: 'https://view.shoppinglive.naver.com/replays/331707?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '화춘옥 LA갈비',
            link: 'https://view.shoppinglive.naver.com/replays/317279?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '심심포차 무뼈/국물 닭발',
            link: 'https://view.shoppinglive.naver.com/replays/355470?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '집에서 갓구워먹는 빵',
            link: 'https://view.shoppinglive.naver.com/replays/298963?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '디즈니 정품 라이센스 티셔츠',
            link: 'https://view.shoppinglive.naver.com/replays/218878?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '오호스 디자이너 브랜드',
            link: 'https://view.shoppinglive.naver.com/replays/198910?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '프로폴리스 멀티밤',
            link: 'https://view.shoppinglive.naver.com/replays/295261?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '비타민씨 모닝케어 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/293401?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '에끌라두 리밸런싱코너',
            link: 'https://view.shoppinglive.naver.com/replays/387132?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '에끌라두셀매직세트',
            link: 'https://view.shoppinglive.naver.com/replays/387100?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '바론샴푸',
            link: 'https://www.coupang.com/?src=1191000&spec=10999999&addtag=812&ctag=121049&lptag=CFM17324532&itime=20220222103902&pageType=LIVE%20COMMERCE&pageValue=121049&wPcid=16400766451878467463064&wRef=&wTime=20220222103902&redirect=landing&backType=&settlement=N',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '배도라지청(개그맨김수영)',
            link: 'https://naver.me/x8gMBKx1',
            platform: '네이버',
          },
          {
            name: '타트 체리정',
            link: 'https://naver.me/GA1EmodM',
            platform: '네이버',
          },
          {
            name: '프로폴리스 스프레이',
            link: 'https://view.shoppinglive.naver.com/replays/175617?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '데일리쿨 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/291433',
            platform: '네이버',
          },
          {
            name: '카라즈롤 매트',
            link: 'https://view.shoppinglive.naver.com/replays/209130?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '국대마스크',
            link: 'https://view.shoppinglive.naver.com/replays/309256?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '국대마스크2',
            link: 'https://view.shoppinglive.naver.com/replays/323359?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
        ],
      },
    ],
  },

  //NOTE: 김연동 쇼호스트 45
  {
    id: 45,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_0.png`,
    name: '김연동 쇼호스트',
    desc: '재섭외율이 높은 쇼호스트 김연동입니다 그 이유를 방송으로 보여드리겠습니다.',
    category: [1, 2, 4, 3, 6],
    detail: {
      name: 'Kim YeonDong',
      part: 'Live commerce Show host',
      desc: '재섭외율이 높은 쇼호스트 김연동입니다 그 이유를 방송으로 보여드리겠습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/358921?fm=shoppinglive&sn=home',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/331698?fm=shoppinglive&sn=home',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '흑돼지',
            link: 'https://shoppinglive.naver.com/replays/351716?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '샤인머스켓',
            link: 'https://shoppinglive.naver.com/replays/288983?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '오레오',
            link: 'https://shoppinglive.naver.com/replays/301256?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '지리솥 비빔장',
            link: 'https://shoppinglive.naver.com/replays/117984?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '무봉리 순대국',
            link: 'https://shoppinglive.naver.com/replays/126665?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '여성패션',
        lives: [
          {
            name: '센츄리21 알파카코트',
            link: 'https://view.shoppinglive.naver.com/replays/314038',
            platform: '네이버',
          },
          {
            name: '리베리베 아우터',
            link: 'https://view.shoppinglive.naver.com/replays/268109',
            platform: '네이버',
          },
          {
            name: '니트 투피스',
            link: 'https://shoppinglive.naver.com/replays/243421?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '청바지',
            link: 'https://shoppinglive.naver.com/replays/234911?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '칼하트',
            link: 'https://shoppinglive.naver.com/replays/415615?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '뷰티/미용',
        lives: [
          {
            name: '에이비팜',
            link: 'https://shoppinglive.naver.com/replays/331698?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '인투메디, 블랑루시',
            link: 'https://shoppinglive.naver.com/replays/300161?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '스와니코코 비타민라인',
            link: 'https://view.shoppinglive.naver.com/replays/250898?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '스와니코코 모공라인',
            link: 'https://view.shoppinglive.naver.com/replays/243535?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '아페리레 모공팩',
            link: 'https://link.coupang.com/nt/LIVECO?pageKey=157290&pType=live&source=sharedLink',
            platform: '쿠팡',
          },
        ],
      },
      {
        category: '건강기능식품',
        lives: [
          {
            name: '아모레퍼시픽 효소',
            link: 'https://view.shoppinglive.naver.com/lives/325434?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '아모레퍼시픽 콜라겐',
            link: 'https://shoppinglive.naver.com/replays/358921?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '한미양행 다이어트',
            link: 'https://shoppinglive.naver.com/replays/133621?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '홍건강 홍삼스틱',
            link: 'https://shoppinglive.naver.com/replays/136855?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '큐옴바이오 유산균',
            link: 'https://view.shoppinglive.naver.com/lives/274953',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '양키캔들',
            link: 'https://shoppinglive.naver.com/replays/346630?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '바이아우어 샴푸',
            link: 'https://link.coupang.com/nt/LIVECO?pageKey=153680&pType=live&source=sharedLink',
            platform: '쿠팡',
          },
          {
            name: '크루즈 향수',
            link: 'https://shoppinglive.naver.com/replays/295831?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
          {
            name: '아이키마스크',
            link: 'https://shoppinglive.naver.com/replays/380103?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 김선우 쇼호스트 46
  {
    id: 46,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seonwoo/seonwoo_0.png`,
    name: '김선우 쇼호스트',
    desc: '"압도적으로 높은 평균 시청시간." 김선우와 함께라면 방송과 매출을 함께 잡을 수 있습니다.',
    category: [1, 6, 7, 12],
    detail: {
      name: 'Kim Seonwoo',
      part: 'Live commerce Show host',
      desc: '"압도적으로 높은 평균 시청시간." 김선우와 함께라면 방송과 매출을 함께 잡을 수 있습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/replays/242143',
      },
      {
        type: 'naver',
        link: 'https://shoppinglive.naver.com/replays/246126',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seonwoo/seonwoo_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seonwoo/seonwoo_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seonwoo/seonwoo_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '100억쭈꾸미송쭈집 [고정진행]',
            link: 'https://shoppinglive.naver.com/replays/240591',
            platform: '네이버',
          },
          {
            name: '건화한우다토마호크& 우대갈비',
            link: 'https://shoppinglive.naver.com/replays/192831',
            platform: '네이버',
          },
          {
            name: '송도 맛집 80 상 참치 런칭',
            link: 'https://shoppinglive.naver.com/replays/220401',
            platform: '네이버',
          },
          {
            name: '금강수림 전통육개장 DSLR 3 Cam',
            link: 'https://view.shoppinglive.naver.com/replays/247354',
            platform: '네이버',
          },
        ],
      },
      {
        category: '생활/주방',
        lives: [
          {
            name: '광진굿샵 자세교정 , 거북목 의료기기',
            link: 'https://view.shoppinglive.naver.com/replays/252688',
            platform: '네이버',
          },
          {
            name: 'OREX 5 파장 사각방등 , 전구 모음',
            link: 'https://shoppinglive.naver.com/replays/260543',
            platform: '네이버',
          },
          {
            name: '금성침대 X 베드리움 매트리스',
            link: 'https://player.sauceflex.com/broadcast/vclotteimalllotteimall--283232a0679c4499a45ddec630392df5?',
            platform: '소스플렉스',
          },
          {
            name: '마운틴이퀍먼트 캠핑 체어',
            link: 'https://m.simsale.co.kr/tv/replay/10018',
            platform: '심쿵',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: 'SK 세븐모바일알뜰폰유심[고정진행]',
            link: 'https://shoppinglive.naver.com/replays/246126',
            platform: '네이버',
          },
          {
            name: '대우 루컴즈 안드로이드TV[고정진행]',
            link: 'https://shoppinglive.naver.com/replays/239994',
            platform: '네이버',
          },
          {
            name: '라인 프렌즈 모바일 악세사리 모음전',
            link: 'https://shoppinglive.naver.com/replays/77987',
            platform: '네이버',
          },
        ],
      },
      {
        category: '반려동물',
        lives: [
          {
            name: "Hill's 힐스 사료 [고정진행]",
            link: 'https://view.shoppinglive.naver.com/replays/196054',
            platform: '네이버',
          },
          {
            name: '퍼핑 펫매트 고정진행 [고정진행]',
            link: 'https://view.shoppinglive.naver.com/replays/242143',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  //NOTE: 박민혁 쇼호스트 47
  {
    id: 47,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minhyuk/minhyuk_0.png`,
    name: '박민혁 쇼호스트',
    desc: '다양했던 배역만큼 여러가지 경험으로 고객님들에게 소개해드리고 공감하면서 많이 팔고싶습니다.',
    category: [1, 4, 7],
    detail: {
      name: 'Park Minhyuk',
      part: 'Live commerce Show host',
      desc: '다양했던 배역만큼 여러가지 경험으로 고객님들에게 소개해드리고 공감하면서 많이 팔고싶습니다.',
    },
    liveClips: [
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/375297?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
      },
      {
        type: 'naver',
        link: 'https://view.shoppinglive.naver.com/lives/293729',
      },
    ],
    imageClips: [
      {
        id: 1,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minhyuk/minhyuk_1.png`,
      },
      {
        id: 2,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minhyuk/minhyuk_2.png`,
      },
      {
        id: 3,
        link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/minhyuk/minhyuk_3.png`,
      },
    ],
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '한우1++ 설선물세트 1',
            link: 'https://shoppinglive.naver.com/livebridge/386426?fm=shoppinglive&sn=share',
            platform: '네이버',
          },
          {
            name: '한우1++ 설선물세트 2',
            link: 'https://view.shoppinglive.naver.com/lives/398504?tr=lim&fm=shoppinglive&sn=bridge',
            platform: '네이버',
          },
          {
            name: '진안마이산김치, 군산 짬뽕라면 ,군산 십리향미',
            link: 'https://view.shoppinglive.naver.com/lives/348912',
            platform: '네이버',
          },
          {
            name: '떡볶이 대잔치',
            link: 'https://view.shoppinglive.naver.com/lives/375297?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share',
            platform: '네이버',
          },
          {
            name: '마누카꿀세트 ,새싹인삼 선물세트',
            link: 'https://shoppinglive.naver.com/livebridge/378780?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '패션',
        lives: [
          {
            name: '광진굿샵 자세교정 , 거북목 의료기기',
            link: 'https://view.shoppinglive.naver.com/replays/252688',
            platform: '네이버',
          },
          {
            name: '지오 송지오',
            link: 'https://view.shoppinglive.naver.com/lives/286360',
            platform: '네이버',
          },
          {
            name: '파렌하이트',
            link: 'https://view.shoppinglive.naver.com/lives/293729',
            platform: '네이버',
          },
          {
            name: '파렌하이트 2',
            link: 'https://view.shoppinglive.naver.com/replays/382855?tr=lim5',
            platform: '네이버',
          },
          {
            name: '남성 명품 자켓 경매',
            link: 'https://shoppinglive.naver.com/livebridge/325541?fm=shoppinglive&sn=home',
            platform: '네이버',
          },
        ],
      },
      {
        category: '디지털/가전',
        lives: [
          {
            name: '센스필 햅틱마우스 햅틱콘솔[고정진행]',
            link: 'https://shoppinglive.naver.com/replays/246126',
            platform: '네이버',
          },
        ],
      },
    ],
  },
  // //NOTE: 우희준 쇼호스트 46
  // {
  //   id: 46,
  //   thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_0.png`,
  //   name: '우희준 쇼호스트',
  //   desc: '재섭외율이 높은 쇼호스트 김연동입니다 그 이유를 방송으로 보여드리겠습니다.',
  //   category: [1, 3, 10, 4],
  //   detail: {
  //     name: 'Kim YeonDong',
  //     part: 'Live commerce Show host',
  //     desc: '재섭외율이 높은 쇼호스트 김연동입니다 그 이유를 방송으로 보여드리겠습니다.',
  //   },
  //   liveClips: [
  //     {
  //       type: 'naver',
  //       link: 'https://view.shoppinglive.naver.com/replays/358921?fm=shoppinglive&sn=home',
  //     },
  //     {
  //       type: 'naver',
  //       link: 'https://view.shoppinglive.naver.com/replays/331698?fm=shoppinglive&sn=home',
  //     },
  //   ],
  //   imageClips: [
  //     {
  //       id: 1,
  //       link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_1.png`,
  //     },
  //     {
  //       id: 2,
  //       link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_2.png`,
  //     },
  //     {
  //       id: 3,
  //       link: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/yeondong/yeondong_3.png`,
  //     },
  //   ],
  //   career: [
  //     {
  //       category: '식품',
  //       lives: [
  //         {
  //           name: '나드리김밥',
  //           link: 'https://www.youtube.com/watch?v=CgLqvKbkN_c',
  //           platform: 'CJ온스타일',
  //         },
  //         {
  //           name: '군산오징어 현장 방송',
  //           link: 'https://www.youtube.com/watch?v=BiepVwAYCCQ',
  //           platform: 'CJ온스타일',
  //         },
  //         {
  //           name: '오뚜기 X O 만두',
  //           link: 'https://www.youtube.com/watch?v=3AQyAobDDTM',
  //           platform: 'CJ온스타일',
  //         },
  //       ],
  //     },
  //     {
  //       category: '패션',
  //       lives: [
  //         {
  //           name: '복클래식 패딩',
  //           link: 'https://www.youtube.com/watch?v=gicUjli-xD0',
  //           platform: 'CJ온스타일',
  //         },
  //         {
  //           name: '내셔널 지오그래픽',
  //           link: 'https://www.youtube.com/watch?v=saKP51X3UH0',
  //           platform: 'CJ온스타일',
  //         },
  //       ],
  //     },
  //     {
  //       category: '스포츠',
  //       lives: [
  //         {
  //           name: '인싸쇼핑 나바 힙마스터',
  //           link: 'https://www.youtube.com/watch?v=Z3grbqEu8uw',
  //           platform: 'CJ온스타일',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
