import CareerPage from '../pages/Career'
import IntroducePage from '../pages/Introduce'
import TechPage from '../pages/Tech'


export const Sidebar = {
  profile: 'https://avatars3.githubusercontent.com/u/59439454?s=460&v=4',
  name: '이준영',
  description: '웹 프론트엔드 프로그래머',
  contents: [
    {
      title: '소개',
      path: '/',
      component: IntroducePage
    },
    {
      title: '경력',
      path: '/career',
      component: CareerPage
    },
    {
      title: '기술',
      path: '/tech',
      component: TechPage
    }
  ]
}
export const Tech = {
  title: '기술',
  contents: [
   {
    title: "HTML / CSS",
    contents: [
      {
        subTitle: "Semantic Markup을 중요하게 여기며, HTML를 작성할 때 의미를 부여합니다.",
        subContents: ["> HTML이 길어질 수록 Semantic Markup이 중요해집니다. 그러므로, 초기에 작성할 때 부터 고려를 많이하는 편입니다."]
      },
      {
        subTitle: "flex 사용 위주의 반응형 웹을 잘 다룰 수 있습니다.",
        subContents: ["> PC, 태블릿PC, 스마트 폰 등 다양한 화면 크기에 맞춰 크로스 브라우징을 하도록 구현할 수 있습니다."]
      }
    ]
  },
  {
    title: "JavaScript",
    contents: [
      {
        subTitle: "ES2015 이후의 JavaScript 문법",
        subContents: ["> prototype, arrow function, map, filter, reduce, 동기적 통신(async, await)"]
      }
    ]
  },
  {
    title: "SPA",
    contents: [
      {
        subTitle: "SPA 사용 경험",
        subContents: ["> props, state, hooks, route, link 문법 사용 및 이해를 수웧하게 할 수 있습니다."]
      }
    ]
  }
]}

export const Career = {
    title: '경력',
    contents: [
      {
        title: '(주)MSTC',
        contents: [
          {
            subTitle: '현대 Mobis AVN검증 협력회사',
            subContents: ['AVN검증팀에서 내수 정업 / 별도 파트를 담당  > 1년 3개월',
            '전자공학을 전공을 하며 마지막 학년에 교수님 추천으로 Mobis 연구소 AVN팀 협력 회사에서 검증팀 인턴으로 근무하며 회사 생활에 열심히 임하며,',
            '여러 검증 방법을 익히며 인정을 받고 정규직 전환 권유를 받아, 인적성과 면접에서 통과하여 정규직으로 일을 하게 되었습니다.', 
            'D-AUDIO, AVN 사양을 기반으로 주로 양산 차종 AVN (AudioVideoNavigation)에 CANOE Simulator를 통한 전반적인 센서, 제어, 문제점 재현 검증 실시.',
            '내수 정기 업데이트 및 별도 위주로 이슈 발견 및 처리였으며, JIRA(이슈트래커)를 통하여 Mobis와 협력 업무를 하였으며,',
            '추가적으로 문제점 재현 시 기록 및 등록하여 개선시키도록 하였습니다.']
          }
        ]
      },
      {
        contents: [
          {
            subTitle: '검증 실시 내역',
            subContents: ['양산 차종 D-AUDIO 차종 기초 AVN 사양 검증',
            '후방 카메라 및 Early cam 항목 검증',
            '표준형 5세대 내수 1차 정업(나머지 24차종 포함)',
            'TestCase- Android Auto, Carplay, MirrorLink, Bluetooth, Common, Voicememo, System, TMU(Modem), Voice recognition, Interlocking navi,',
            'Eco-friendly, Carlife(중국), Baidu apps(중동)',
            'CANOE Simulator 및 SVM/AVM 장비 사용',
            'Function generator 장비 사용(스피드 측정)',
            '하이브리드(phev,hev), 전기차(ev)',
            '미국, 캐나다, 내수, 유럽, 중국, 중동, 브라질 등 다수 국가 차종 검증']
          }
        ]
      }
    ]
}

export const Interest = {
  title: '관심사',
  contents: [
    {
      title: '웹 프론트엔드 개발',
      contents: [
        {
        subTitle: '소개',
        subContents: ['저는 웹 프론트엔드의 역동적이며 재미있는 편리한 서비스를 제공하고 싶은 개발자가 되고 싶습니다.',
            '전 회사에서는 검증팀과 개발팀이 있었는데, 그 당시에 개발팀으로 가고 싶었으나 TO가 없어서 검증팀으로 배정을 받았으며',
            '소프트웨어 회사였기에 주위에서 C언어와 Java를 배우고 있어서 추천을 받아 회사 생활을 하며 주말에 각각 C언어와 Java 사설학원을',
            '잠깐 다니며 배우던 도중 웹 개발을 알게되고, 점점 웹개발에 흥미를 느끼고 확신이 들어 웹 프론트엔드 프로그래머가 되기 위해 퇴사를 결심하게 되었습니다.',
            '또한 소프트웨어 회사에서 전공 관련 업무 수행이 상당히 많았으며, 이것을 어떻게 적용시키며, 실무 업무 수행을 하면서 저에게 부족한 부분이 무엇인지 고뇌하고',
            '채워나갈 수 있게 필요한 계획을 세울 수 있었습니다.',
            '보다 많은 성장을 경험하게 되어 구체적이고 명확한 진로 선택에 큰 경험이 되었습니다.']
        }
      ]
    },
    {
      contents: [
        {
      subTitle: '웹 개발의 흥미를 느낀 계기',
      subContents: ['1. html과 css를 다뤄서 직접 사용자가 사용 할 수 있는 동적인 웹을 만들수 있습니다',
          '2. 웹 시장의 전망. (미국 2020 유망 직업 1위 - 만족도, 연봉 등)에 대한 확신했습니다',
          '3. frontend 개발자는 꾸준한 공부를 해야 하기 때문에 발전적 삶을 지향하는 나의 가치관과 매우 비슷해 흥미를 느꼈습니다',
          '',
         ]
      }
    ]
  },
  {
    contents: [
      {
    subTitle: 'react와 vue 중 react를 선택한 이유?',
    subContents: ['- stack overFlow 에서 통계를 냈는데, react의 사용자가 뷰에 비해 2배 가량 더 많았으며,',
        '그래서 사용자가 그만큼 많으니 레퍼런스가 많고 일자리의 수요가 더 높습니다'
       ]
    }
  ]
}
  ]
}
