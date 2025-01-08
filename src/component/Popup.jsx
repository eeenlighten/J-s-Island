import React, { useEffect, useRef } from 'react'
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { ReactComponent as RnLogo } from '../assets/images/rnLogo.svg';
import { ReactComponent as HtmlLogo } from '../assets/images/htmlLogo.svg';
import { ReactComponent as CssLogo } from '../assets/images/cssLogo.svg';
import { ReactComponent as JsLogo } from '../assets/images/jsLogo.svg';
import { ReactComponent as TsLogo } from '../assets/images/tsLogo.svg';
import { ReactComponent as SbLogo } from '../assets/images/sbLogo.svg';
import { ReactComponent as JavaLogo } from '../assets/images/javaLogo.svg';
import { ReactComponent as GithubLogo } from '../assets/images/githubLogo.svg';
import { ReactComponent as GoogleLogo } from '../assets/images/googleLogo.svg';
import { ReactComponent as InternetLogo } from '../assets/images/internetLogo.svg';
import { ReactComponent as CloseX } from '../assets/images/closeX.svg';
import { ReactComponent as MysqlLogo } from '../assets/images/mysqlLogo.svg';
import { ReactComponent as MariaDbLogo } from '../assets/images/mariaDbLogo.svg';


function Popup({ order, isOpen }) {
  const contents = [
    { 
      title: 'About Me'
      , desc: (
        <>
          잘 짜여진 코드는 정돈 된 책장과 같다고 생각합니다.<br />
          질서 정연하게 배치된 책들을 보고 편안함을 느끼듯이 깔끔한 코드도 개발자의 눈을 편안하게 만듭니다. 논리적인 알고리즘을 구축하고 배치된 순서를 통해 기능을 구현하는 매력으로 코딩에 빠지기 시작하였습니다.
          <br /><br />
          섬세하고 꼼꼼한 성격으로 작은 디테일도 생각하며 맡은 일에 최선을 다하는 자세를 가졌습니다. 프로젝트의 보완할 부분과 발전성을 주기적으로 고민하며 제 자신의 부족함을 인지하여 공부를 게을리 하지 않고 꾸준한 자기 주도적 학습을 가집니다.
          <br /><br />
          끝으로, 저는 스스로를 최고의 인재라고 생각은 하지 않습니다. 다만 부족함을 채우기 위해 일찍이 세상에 몸을 던져보며 수많은 경험과 값진 교훈을 얻었습니다. 제가 갖고 있는 능력과 역량을 통해 도움이 될 인재라는 것은 자신있게 말씀드릴 수 있습니다.
          <br /><br />
          감사합니다.
          <br /><br />

          {/* <a href='https://github.com/eeenlighten' target='_blank'>
            <GithubLogo fill='#161614' />
          </a> */}
        </>
      )
      , order: 1
    },
    { 
      title: 'Career'
      , desc: (
        <>
          <span className='fr11'>2024.10 ~ </span>
          <span className='fw600 fr11'>우주몬스터 </span>
          <span className='fr8'>앱개발/운영자</span>
          <br />
          <span className='fw600'>찰나(불교 어플)</span>
          <br />
          <br />
          <span>디자인</span>
          <br />
          <br />
          <span className='fr9'>- 어플리케이션 화면 설계 및 전체 UI/UX 디자인 제작하였습니다.</span>
          <br />
          <br />
          <span>프론트엔드</span>
          <br />
          <br />
          <span className='fr9'>- 리액트 네이티브로 화면 퍼블리싱 작업을 수행하였습니다.</span>
          <br />
          <span className='fr9'>- 자체 개발한 API와 OpenAI의 API 연동 작업하였습니다.</span>
          <br />
          <span className='fr9'>- Firebase와 연동하여 소셜 로그인 기능 개발하였습니다.</span>
          <br />
          <br />
          <span>백엔드</span>
          <br />
          <br />
          <span className='fr9'>- MySQL을 기반으로 데이터베이스 테이블 설계 및 구축하였습니다.</span>
          <br />
          <span className='fr9'>- Node.js를 활용하여 RESTful API 개발 및 데이터 처리 로직 구현하였습니다.</span>
          <br />
          <span className='fr9'>- JWT(JSON Web Token) 기반 인증 시스템 설계 및 구현하였습니다.</span>
          <br />
          <br />
          <span>서버</span>
          <br />
          <br />
          <span className='fr9'>- 네이버 클라우드 플랫폼을 이용해 서버 구축 및 배포하였습니다.</span>
          <br />
          <br />
          <p>링크 :&nbsp;
            <a href='https://play.google.com/store/apps/details?id=com.chalna.cn&hl=ko' target='_blank'>
              <GoogleLogo />
            </a>
          </p>

          <br /><br /><br />

          <span className='fr11'>2024.09 ~ 2024.12 </span>
          <span className='fw600 fr11'>앱스쿼드 </span>
          <span className='fr8'>앱개발/프리랜서</span>
          <br />
          <span className='fw600'>리프(데이팅 어플)</span>
          <br /><br />
          <span className='fr9'>- 리액트 네이티브로 리뉴얼된 디자인 퍼블리싱 작업 및 API 통신을 통해 데이터 연동을 구현했습니다.</span>
          
          <br /><br /><br />

          <span className='fr11'>2022.11 ~ 2024.03 </span>
          <span className='fw600 fr11'>앱스쿼드 </span>
          <span className='fr8'>앱개발/주임</span>
          <br />
          <span className='fw600'>리미티드(데이팅 어플)</span>
          <br />
          <br />
          <span>프론트엔드</span>
          <br />
          <br />
          <span className='fr9'>- 리액트 네이티브를 활용하여 퍼블리싱 및 API 설계, 연동을 하였습니다.</span>
          <br />
          <span className='fr9'>- Redux를 활용하여 회원 정보의 일관성을 유지하고 다양한 컴포넌트에서 일관된 데이터 접근 및 수정을 가능하게 하여 개발 효율성을 높였습니다.</span>
          <br />
          <span className='fr9'>- 양방향 통신을 지원하는 WebSocket API를 이용하여 서버와의 연결을 설정하고, 메세지 이벤트를 처리하는 클라이언트 측 코드를 구현하였습니다.</span>
          <br />
          <span className='fr9'>- 데이팅 어플 리미티드를 소개하는 웹사이트 제작을 하였습니다.</span>
          <br />
          <br />
          <span>백엔드</span>
          <br />
          <br />
          <span className='fr9'>- 자바와 스프링 부트를 사용하여 MVC 패턴에 따라 관리자 페이지 설계, 개발 및 유지 보수하였고 이를 바탕으로 RESTful API를 설계하고 구현하였습니다.</span>
          <br />
          <span className='fr9'>- MariaDB를 사용하여 데이터베이스 테이블 구조 설계 및 구축하였고 트랜잭션 관리 기능을 이용해 데이터 일관성을 보장하였습니다.</span>
          <br />
          <span className='fr9'>- MySQL을 이용하여 복잡한 쿼리를 최적화하고, 인덱스를 설계하여 검색 성능을 최적화하였습니다.</span>
          <br />
          <span className='fr9'>- MyBatis의 XML 매퍼를 활용하여 동적 쿼리를 작성하고 데이터베이스 접근 코드를 단순화하였습니다.</span>
          <br /><br />
          <p>링크 :&nbsp;
            <a href='https://play.google.com/store/apps/details?id=com.appsquad.limeeted&hl=ko_KR' target='_blank'>
              <GoogleLogo />
            </a>
            <a href='https://www.limeeted.com' className='ml5' target='_blank'>
              <InternetLogo />
            </a>
          </p>
          {/* <span className='fr9 fw600'>기술스택</span>
          <br />
          <span className='logoArea mt10'>
            <span><JavaLogo /></span>
            <span><SbLogo /></span>
            <span><RnLogo /></span>
            <span><HtmlLogo /></span>
            <span><CssLogo /></span>
            <span className='mt10'><JsLogo /></span>
            <span className='mt10'><TsLogo /></span>
            <span className='mt10'><MysqlLogo /></span>
            <span className='mt10'><MariaDbLogo /></span>
          </span> */}
          
          <br /><br /><br />

          <span className='fr11'>2022. 07 ~ 2022. 08 </span>
          <span className='fw600 fr11'>과외 스터디 </span>
          <br /><br />
          <span className='fr9'>- 리액트, 뷰, php, 자바스크립트 기술 습득</span>
          <br />
          <span className='fr9'>- 포트폴리오 제작 </span>
          <a href='https://eeenlighten.github.io/portfolio/' className='ml5' target='_blank'>
            <InternetLogo />
          </a>
          
          <br /><br /><br />

          <span className='fr11'>2021. 04 ~ 2021. 07 </span>
          <span className='fw600 fr11'>웹디자인/웹퍼블리셔 [과정평가형] </span><span className='fr7'>이젠아카데미</span>
          <br /><br />
          <span className='fr9'>- 웹디자인 트렌드에 맞춘 교육과정(웹 표준, 반응형 웹 등)</span>
          <br />
          <span className='fr9'>- 웹디자인 분야의 핵심 프로그램(HTML, CSS, Javascript, JQuery) 기술 습득</span>
          <br />
          <span className='fr9'>- 과정평가형 국가기술자격 웹디자인기능사 출제기준을 적용한 교과편성</span>
          <br />
          <span className='fr9'>- 웹디자인 기능사 자격증 취득</span>
          <br /><br />
        </>
      )
      , order: 2
    },
    { title: 'Portfolio'
      , desc: (
        <>
          본 포트폴리오는 React와 Three.js 라이브러리를 사용하여
          제작하였습니다.
          <br />
          사람, 배, 암초, 화산 모델은 GLTFLoader로 파일을 불러왔고 나머지 모델은 전부 코딩을 통해 생성이 되었습니다.
          <br />
          기본적으로 Scene에 사용한 카메라는 Perspective, 라이트는 directionalLight, spotLight, ambientLight, sunLight 총 4종류를 사용하였습니다.
          <br /><br />
          문 입구에 나오는 빛의 경우 후처리 솔루션인 EffectComposer를 통해 작업 환경을 구축하였고 Bloom 효과를 통해 빛을 생성하고 밝기를 조절하였습니다.
          <br /><br />
          물리 엔진으로 rapier 라이브러리를 사용하였고 모든 물체에 물리 세계를 추가하였습니다.
          가상의 벽을 생성해 플레이어가 섬 밖으로 못 나가도록 제어시켰습니다.
          <br /><br />
          알맞은 캐릭터 모델과 mixamo에서 액션을 찾고 blender에서 적용하였습니다.
          사용자의 입력에 따라 캐릭터를 앞으로 이동시키고, 회전시키며,  자연스러운 움직임을 만들었습니다.
          그리고 RigidBody와 CapsuleCollider 컴포넌트를 그룹으로 묶어 캐릭터에 물리적 특성을 적용하였습니다.
          <br /><br />
          Ground의 경우 PlaneGeometry를 생성하고 useLoader로 물의 texture를 불러와 질감을 적용시켰습니다. 그 후 물이 흘러가는 애니메이션을 만든 후 바다의 색깔, 파도의 속도 등을 세부적으로 조절하였습니다.
          <br /><br />
        </>
      )
      , order: 3
    },
  ];

  // open/close
  const modalClose = () => {
    document.querySelector('.popup').style.display = 'none';
    // gsap.to(modal.current, {
    //   scaleX: 0,
    //   scaleY: 0,
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power4.out'
    // });
  };

  const modal = useRef();
  const text = useRef();
  const closeBtn = useRef();
  const closeX = useRef();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (modal.current) {
          const tlFir = gsap.timeline();
          const tlSec = gsap.timeline();

          let popupDiv = document.querySelector('.popup');

          if(order == 2) {
            popupDiv.style.transform = "translate(-77.5%, -19%)";
          }else if(order == 3) {
            popupDiv.style.transform = "translate(-25.5%, -24%)";
          };

          tlFir.from(modal.current, {
            scaleX: 0,
            scaleY: 0,
            opacity: 0,
            duration: .7,
            ease: 'power4.out'
          });
    
          tlSec.from(text.current, {
            x: '-100%',
            opacity: 0,
            duration: 2,
            ease: 'power4.out'
          }).from(closeBtn.current, {
            x: '100%',
            opacity: 0,
            duration: 2,
            ease: 'power4.out'
          }, '<').from(closeX.current, {
            x: '100%',
            opacity: 0,
            duration: 2,
            ease: 'power4.out'
          }, '<');
        }
      })

      return () => clearTimeout(timer);
    }
  }, [isOpen]);


  return (
    <>
      <Html>
        <div ref={modal} className='popup scrollBar'>
          <div className='popup__inner'>
            <div ref={text} className="popup__cont">
              {contents.map((e, i) => (
                e.order === order &&
                <div key={i}>
                  <div className='title'>
                    <p>{e.title}</p>
                  </div>
                  <div className='desc'>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
        
            <div ref={closeBtn} className='popup__footer mt50'>
              <button onClick={modalClose} className='closeBtn'>닫기</button>
            </div>
          </div>

          <div ref={closeX} className='closeX'>
            <CloseX onClick={modalClose} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </Html>
    </>
  )
}

export default Popup;