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

  //NOTE: 이아윤 쇼호스트 (미완)
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
  //NOTE: 김동현 쇼호스트 (미완)
  {
    id: 3,
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
    career: [],
  },
  //NOTE: 박현선 쇼호스트
  {
    id: 6,
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
    id: 11,
    thumbnail: `${process.env.NEXT_PUBLIC_S3_SRC}/image/model/mimi/mimi_0.png`,
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
];
