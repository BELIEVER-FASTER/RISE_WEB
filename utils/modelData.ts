export const categoryData = [
  { id: 1, name: '식품' },
  { id: 2, name: '뷰티/화장품' },
  { id: 3, name: '헬스케어' },
  { id: 4, name: '여성패션' },
  { id: 5, name: '남성패션' },
  { id: 6, name: '생활/주방' },
  { id: 7, name: '디지털/가전' },
  { id: 8, name: '유아용품' },
  { id: 9, name: '가구/소품' },
  { id: 10, name: '여행/레저' },
  { id: 11, name: '금융/보험' },
  { id: 12, name: '반려동물' },
  { id: 13, name: '쥬얼리' },
  { id: 14, name: '스포츠' },
  { id: 15, name: '명품' },
];

// 신현아 쇼호스트 링크 1
// 김태훈 쇼호스트 링크 1

export type Model = typeof modelDetails[0];
export const modelDetails = [
  //NOTE: 박설아 쇼호스트
  {
    id: 1,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seola/sera_0.png`,
    name: '박설아 쇼호스트',
    desc: '유쾌한 진행, 재섭외로 증명하는 쇼호스트',
    category: [1, 2, 3, 4, 6, 7, 8, 9, 12, 14],
    detail: {
      name: 'Park Seola',
      part: 'Live commerce Show host',
      desc: '하이텐션 입담과 반전매력을 소유한 샵테이너',
    },
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
    career: [
      {
        category: '식품',
        lives: [
          {
            name: '동원 참치회 추석 선물세트',
            link: 'https://www.instagram.com/p/CT02E2LBdCJ/?utm_medium=copy_link',
            platform: '현대H몰',
          },
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
          {
            name: '아이코코 마스크',
            link: 'https://view.shoppinglive.naver.com/replays/364666',
            platform: '네이버',
          },
          {
            name: '아이코코 마스크2',
            link: 'https://view.shoppinglive.naver.com/replays/352172?fm=shoppinglive&sn=home',
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
  //NOTE: 윤라엘 쇼호스트
  {
    id: 2,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/lael/lael_0.png`,
    name: '윤라엘 쇼호스트',
    desc: '품격있는 하이텐션 쇼호스트',
    category: [3, 4, 5, 14],
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
        category: '헬스케어',
        lives: [
          {
            name: '홈트 끝판왕 레이몬 멀티핏과 여름준비',
            link: 'https://view.shoppinglive.naver.com/replays/178826?from=share&fm=shoppinglive&sn=share',
            platform: '네이버',
          },
        ],
      },
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
  //NOTE: 이아윤 쇼호스트
  {
    id: 3,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/ahyoon/ahyoon_0.png`,
    name: '이아윤 쇼호스트',
    desc: '다양한 라이브방송의 경험으로 브랜드 가치를/ 높이며 재미있는 방송으로 선보입니다.',
    category: [3, 4, 5, 14],
    detail: {
      name: 'Lee Ahyoon',
      part: 'Live commerce Show host',
      desc: '다양한 라이브방송의 경험으로 브랜드 가치를 높이며 재미있는 방송으로 선보이는 쇼호스트',
    },
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
  //NOTE: 김동현 쇼호스트 (미완)
  {
    id: 4,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/donghyun/donghyun_0.png`,
    name: '김동현 쇼호스트',
    desc: '다양한 라이브방송의 경험으로 브랜드 가치를/ 높이며 재미있는 방송으로 선보입니다.',
    category: [3, 4, 5, 14],
    detail: {
      name: 'Kim DongHyun',
      part: 'Live commerce Show host',
      desc: '다양한 라이브방송의 경험으로 브랜드 가치를  높이며 재미있는 방송으로 선보이는 쇼호스트',
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
        category: '푸드',
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
            name: '닥터 아제라 특가',
            link: 'https://view.shoppinglive.naver.com/replays/225914?fm=shoppinglive&sn=home', //이상
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
            platform: '네이버',
          },
          {
            name: '타미힐피거 FW 남성의류',
            link: 'https://www.coupang.com/?src=1191000&spec=10999999&addtag=812&ctag=130726&lptag=CFM96148955&itime=20220127003334&pageType=LIVE%20COMMERCE&pageValue=130726&wPcid=12764157189898510098890&wRef=&wTime=20220127003334&redirect=landing&backType=&settlement=N',
            platform: '네이버',
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
  //NOTE: 최승인 쇼호스트
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
        category: '푸드',
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
          {
            name: '파스키에 프랑스 디저트 모음',
            link: 'https://view.shoppinglive.naver.com/replays/381060?fm=shoppinglive&sn=home',
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
            platform: '네이버',
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
  //NOTE: 노성민 쇼호스트(미완)
  {
    id: 6,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/seongmin/seongmin_0.png`,
    name: '노성민 쇼호스트',
    desc: '뻔하지 않은 FUN한 즐거운 진행!/ 늘 변함없는 마음과 진정성 있는 마음으로/ 다가가겠습니다. ',
    category: [1, 2, 5, 6, 7],
    detail: {
      name: 'Noh SeongMin',
      part: 'Live commerce Show host',
      desc: '뻔하지 않은 FUN한 즐거운 진행! 늘 변함없는 마음과 진정성 있는 마음으로 다가가겠습니다. ',
    },
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
            platform: '유튜브',
          },
          {
            name: '어나더미트 T본스테이크',
            link: 'https://shoppinglive.naver.com/replays/141363',
            platform: '그립',
          },
        ],
      },
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
            platform: '유튜브',
          },
          {
            name: '어나더미트 T본스테이크',
            link: 'https://shoppinglive.naver.com/replays/141363',
            platform: '그립',
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
    ],
  },
  //NOTE: 박현선 쇼호스트
  {
    id: 7,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/hyunsun/hyunsun_0.png`,
    name: '박현선 쇼호스트',
    desc: '뮤지컬을 전공하고 현재 다양한 플랫폼에서/ 라이브커머스 쇼호스트로 활동하고 있습니다.',
    category: [2, 14, 3, 1, 12, 8, 4, 7, 6],
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
          {
            name: '프로스펙스 NBR요가매트',
            link: 'https://view.shoppinglive.naver.com/lives/354344?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&tr=lim',
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
            name: '에어토리2 공기청정',
            link: 'https://view.shoppinglive.naver.com/lives/354344?dtm_medium=share&dtm_source=liveviewer&fm=shoppinglive&from=share&sn=share&tr=lim',
            platform: '현대H몰',
          },
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
  //NOTE: 김미미 쇼호스트
  {
    id: 8,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi2/mimi_0.png`,
    name: '김미미 쇼호스트',
    desc: '만능 엔터테이너 김미미입니다. 본업 뮤지컬 배우부터 해서 모델 mc 그리고 쇼호스트로 활약하고 있습니다.',
    category: [1, 2, 4, 7, 6, 9, 12],
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
            platform: '배민',
          },
          {
            name: '샤인머스캣',
            link: 'https://www.instagram.com/tv/CUZVouoj86_/?utm_medium=copy_link',
            platform: '배민',
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
            platform: '배민',
          },
        ],
      },
    ],
  },
  //NOTE: 최명진 쇼호스트
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
  //NOTE: 고은혜 쇼호스트
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
  //NOTE: 이정미 쇼호스트
  {
    id: 11,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/jungme/jungme_0.png`,
    name: '이정미 쇼호스트',
    desc: '초등학교 아이를 키우고 있는 엄마로서 모든 분들께 친근하게 다가갈 수 있는 쇼호스트 이정미 입니다.',
    category: [1, 2, 7, 6, 12, 8, 3, 9],
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
  //NOTE: 신현아 쇼호스트
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
  //NOTE: 정고운 쇼호스트
  {
    id: 13,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/gowoon2/gowoon_0.png`,
    name: '정고운 쇼호스트',
    desc: '저는 밝은 에너지를 가진 저만의 상큼한/ 에너지로 특별한 방송 보여드리겠습니다',
    category: [1, 7, 2, 6, 3, 4, 8, 9],
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
            platform: '쿠팡라이브',
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
  //NOTE: 정상환 쇼호스트
  {
    id: 14,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghwan/sanghwan_0.png`,
    name: '정상환 쇼호스트',
    desc: '월요일 출근길 만원 지하철에서 하나 남은 빈자리 같은 남자',
    category: [1, 5, 2, 7, 6, 9, 10],
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
            platform: '쿠팡라이브',
          },
          {
            name: '쿤달',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=103822&lptag=CFM76223207&pType=live&source=sharedLink&roomId=103822',
            platform: '쿠팡라이브',
          },
          {
            name: '유리아쥬',
            link: 'https://link.coupang.com/re/NONPROFITLIVE?pageKey=103824&lptag=CFM76223207&pType=live&source=sharedLink&roomId=103824',
            platform: '쿠팡라이브',
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
  //NOTE: 이상학 쇼호스트
  {
    id: 15,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/sanghak/sanghak_0.png`,
    name: '이상학 쇼호스트',
    desc: '쇼핑라이브에 유튜브 감성을 더한 진행을 하는 쇼호스트 이상학입니다',
    category: [1, 2, 7, 5],
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
  //NOTE: 김은규 쇼호스트
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
  //NOTE: 김태훈 쇼호스트
  {
    id: 17,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/taehoon/taehoon_0.png`,
    name: '김태훈 쇼호스트',
    desc: '제대로 학습하여 정확한 정보와 재미있는 방송을 약속드리겠습니다.',
    category: [1, 2, 5, 7, 6, 9],
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
  //NOTE: 민준호 쇼호스트
  {
    id: 18,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/junho/junho_0.png`,
    name: '민준호 쇼호스트',
    desc: '밝은 에너지와 텐션으로 유쾌한 진행을 순수한 마음으로 진정성있는 전달이 동시에',
    category: [1, 7, 5, 6, 2, 3],
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
];
