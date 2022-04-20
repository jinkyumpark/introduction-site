import React, { useEffect, useState } from 'react'

// Components
import LanguageTable from './LanguageTable'
import ActivityTable from './ActivityTable'
import InterviewTable from './InterviewTable'
import PortfolioTable from './PortfolioTable'
import MoreInfoTable from './MoreInfoTable'
import TechTable from './TechTable'
import ProfileTable from './ProfileTable'

// Bootstrap
import { Modal } from 'react-bootstrap'

const Resume = ({setIsPortfolioOpen, setSelectedPortfolioNum}) => {
    const profileData = {
        profileImg: '../../../images/profileImg.jpg',
        koreanName: '박진겸',
        englishName: 'Jinkyum Park',
        school: '뉴욕주립대 수학과',
        education: '서울시 영등포구',
        address: '국비지원 백엔드 수료',
        email: 'jinpark1025@gmail.com'
    }    

    const languageData = [
        {
            key: 0,
            title: '영어',
            titleImage: '../../../images/flag-icons/usflag-icon.png',
            titleImageAlt: 'en',
            titleDescription: '의사소통 자유로움, 영어 독해 자유로움(1달에 적어도 1권 이상의 영어책 독서 중), 미국 대학에서 3년 수학',
            speaking: '상',
            reading: '상',
            testScore: 'TOEIC 970',
            testScoreDescription: '2021년 7월 응시'
        },
        {
            key: 1,
            title: '일본어',
            titleImage: '../../../images/flag-icons/japanflag-icon.png',
            titleImageAlt: 'jp',
            titleDescription: `고등학교때 일본어 수업을 듣고 흥미가 생겨 공부 시작.
            취미로 공부했으나 의사소통 자유롭고, 
            일본어 책 100권 이상 독서해서 독해도 능숙하게 가능.
`,
            speaking: '상',
            reading: '상',
            testScore: 'JLPT N1',
            testScoreDescription: '2018년 10월 응시'
        },
        {
            key: 2,
            title: '중국어',
            titleImage: '../../../images/flag-icons/chinaflag-icon.png',
            titleImageAlt: 'ch',
            titleDescription: `초등학교 1학년 ~ 초등학교 3학년까지 아버지의 직장으로 중국에서 유학.
            그 후 중국어를 적극적으로 사용하지 않아 많이 서툴러졌으나 기본적인 일상 회화는 가능.
            현재 취미로 공부 중.`,
            speaking: '하',
            reading: '하',
            testScore: 'HSK 3급',
            testScoreDescription: '2022년 내에 재응시 예정'
        },
    ]

    const activityData = [
		{
			key: 0,
			title: '운정 큐이엠 학원',
			date: '21년 5월 - 12월',
			content: '중학생 영어 문법, 독해 강의. 시험기간에는 내신 관리',
			desciption: ''
		},
		{
			key: 1,
			title: '교하 차쌤 영어 학원',
			date: '21년 2월 - 6월',
			content: '초등학교, 중학생 듣기, 독해, 문법 관리. 중학생, 고등학생 내신관리',
			desciption: ''
		},
		{
			key: 2,
			title: '대학 수학 튜터링',
			date: '20년 3월 - 5월',
			content: '미적분학, 선형대수학 수강생 대상으로 학교에서 수학 튜터링 제공(영어로)',
			desciption: '현지 학생 대상으로 튜터링 진행했기 때문에 영어로 의사소통하는 능력에 도움이 됐을뿐만 아니라, 수학이라는 어려운 주제를 가르치는 과정에서 소통하는 능력 그 자체가 많이 좋아졌습니다.'
		}
	]

    const questionData = {
        title: '기초가 탄탄한 백엔드 개발자, 박진겸입니다.',
        qna: [
            {
                question: '왜 개발자가 되고 싶은지부터 얘기해 볼까요?',
                answer: `어렸을때부터 문제를 해결하는 것을 좋아해, 자연스럽게 수학을 좋아하게 됐습니다. 그래서 어쩌면 자연스럽게 수학과에 진학했습니다.
                거기에 자연과학 연구에 뜻이 있으니 한국보다는 미국이 나을거 같다는 부모님의 추천에 미국 대학을 선택하게 됐습니다.
                처음에는 우주의 진리를 연구한다는 거창한 이유로 설래기도 했고, 무엇보다 오랬동안 공부하고 싶었던 수학을 공부했기에 좋았습니다.
                하지만 현실과 동떨어져 있는 과한 추상성에 어딘가 불만을 품고 있던 무렵, 학교에서 듣게 된 컴퓨터 과학 수업에 푹 빠졌습니다.
                컴퓨터 과학은 이론도 정말 흥미롭지만, 무엇보다 세상에 긍정적인 영향을 줄 수 있다는 점이 좋아요.
                거기다 수학과는 달리 세상에 없던 것을 제 힘으로 세상에 불러오고, 제 서비스를 누군가가 유용하게 사용할 것이라 생각하면 예술가가 느낄 것으로 짐작되는
                창작의 즐거움을 느낌니다.`
            },
            {
                question: '어떤 개발자가 되고 싶으세요?',
                answer: `단순히 작동하는거에 만족하지 않고, 더 효율적이고 더 사용하기 편한 기술을 개발하기 위해 계속 노력하는 개발자가 되고 싶습니다.
                저는 프론트 개발자는 아니지만, 똑같은 서비스여도 UX가 좋은 서비스를 더 찾게 됩니다. 뿐만 아니라, 사용하는게 즐거워 팬이 됩니다.
                백엔드에서도 단순히 동작하는게 아니라, 제가 작성할 코드를 유지보수할 누군가가 제 코드를 보고 "와! 정말 잘 짰다!" 라고 감탄할 만한
                코드를 짜는 개발자가 되고 싶어요. 또, 불편한 부분을 원래 그런거라고 당연하게 받아드리지 않고, 틀에서 벗어나 개선점을 찾는 개발자가 되고 싶어요.`
            },
            {
                question: '현업에서 잘 할 수 있게 어떤 준비를 했어요?',
                answer: `처음에는 현업에서 잘 할 수 있을지 너무 걱정이 많았습니다. 하지만 사실 생각해보면, 
                개인 프로젝트를 잘 하는게 결국 현업을 잘 하는게 아닐까 생각했습니다.  
                깊이, 서비스 규모, 그리고 Lagacy 프로젝트를 다뤄야 한다는 차이는 있겠지만, 
                사실 개인 프로젝트에서 중요한 역량이 현업에서도 똑같이 중요합니다. 
                규현하고 싶은 기능을 빠른 시간안에 여러가지 적절한 자료로 배워서, 
                응용해서 구현하는 능력이 있다면 결국 현업에서도 잘 할 수 있는 기초 역량이 있다고 생각합니다. 
                그리고 저는 제 짧은 프로그래머로써의 인생에서 어떤 기능도 불가능하다고 생각하지 않고 공부해서 구현하려고 했고, 항상 더 나은 방법이 있지 않을까 고민했기 때문에
                현업에서 빨리 적응할 수 있지 않을까 생각합니다.`
            },
            {
                question: '성격에 장점이 있다면?',
                answer: `제 성격의 가장 큰 장점은 한 번 정하면 정말 끝까지 파고든다는 것입니다. 
                학창시절 언어에 빠져서 영어, 일본어, 중국어를 그렇게 공부했고, 수학에 빠져서 수학을 집착에 가깝게 공부했고, 지금은 프로그래밍에 빠졌습니다. 
                지금도 저는 백엔드 개발자라는 정체성에 저를 가두는게 아니라, 프론트, 백엔드, DevOps, 모바일, AI 가리지 않고 다양한 분야를 공부하고 있습니다. 
                이건 제가 단순히 취업을 위해 프로그래밍을 공부하는게 아니라, 프로그래밍을 진심으로 좋아하기 때문입니다.`
            },
            {
                question: '그럼 반대로 성격의 단점이 있다면?',
                answer: `재밌게도 아까 장점으로 말한 성격이 단점도 되는거 같습니다. 너무 완벽을 추구하다보니 시작도 하지 못하고 구상만 하는 적이 많습니다. 
                그래서 그런지 저는 오랫동안 딱히 좌우명이라고 부를 게 없었다가, 비교적 최근 "Better done than perfect"라는 말을 우연히 보고 너무 마음에 들어서 카톡 상태 메세지에도 띄어 놨습니다. 
                제가 여태까지의 인생에서 이룬 것을 보면 항상 부족하더라도 부딪치며 경험하고, 그 과정에서 많은 것을 이뤘던거 같습니다. 
                개발자로써도 사실 많이 부족하겠지만, 그걸 인정하고 성장하고 싶습니다.`
            },
            {
                question: '기초가 탄탄하다고 하셨는데, 어떤 점에서 그렇죠?',
                answer: `일단 저는 수학을 전공했기 때문에 추상적인 사고활동과 문제풀이, 이론적인 것에 매우 익숙합니다.
                         거기에 이론 컴퓨터 과학에 관심이 많기 때문에 유튜브에서 미국 대학 강의를 계속 수강하고 있고,
                         관련 도서도 많이 읽었습니다. 요즘은 실무적인거에 훨씬 집중을 하고 있으면서도, 항상 당장 실무적인거 몇 개 더 아는
                         개발자보다도, 어떻게 하면 기초가 탄탄해서 끓임없이 변해가는 실무 환경에 뛰어나게 적응할 수 있는 개발자가 될지 고민합니다.
                        `
            }
        ]
    }

    const introductionData = {
        title: '사용자를 팬으로 만드는 서비스를 만들고 싶은 백엔드 개발자, 박진겸입니다.',
        content: `
        저는 단순히 작동하는 서비스를 임기응변으로 만드는 백엔드 개발자가 아닌, 요구사항에 충실하면서도 유지보수가 쉬운, 기초가 탄탄하지 않으면 쓸 수 없는 아름다운 코드를 쓰게 위해 항상 노력하고 있습니다. 그렇기에 컴퓨터 과학 이론 공부를 개을리 하지 않아 유튜브에서 미국 대학 수업을 꾸준히 수강하고 있고, 국내의 다양한 테크 컨퍼런스(토스, 쿠팡, 그리고 당근 당근까지!)와 개발자 블로그(네이버, 카카오, 배민 등)를 시간 날 때 마다 보고 항상 고민합니다.
        \n

        어렸을 때부터 문제를 해결하는 것을 좋아해, 자연스럽게 수학을 좋아하게 됐습니다. 그래서 어쩌면 자연스럽게 수학과에 진학했습니다. 거기에 자연과학 연구에 뜻이 있으니 한국보다는 미국이 좋을거 같다는 부모님의 추천에 미국 대학을 선택하게 됐습니다. 처음에는 우주의 진리를 연구한다는 거창한 이유로 설램을 안고 시작했고, 무엇보다 학창시절 오랫동안 공부하고 싶었던 수학을 공부했기에 좋았습니다.	

        하지만 현실과 동떨어져 있는 과한 추상성에 어딘가 불만을 품고 있던 무렵, 학교에서 듣게 된 컴퓨터 과학 수업에 푹 빠졌습니다. 컴퓨터 과학은 기초 이론도 정말 흥미롭지만, 무엇보다 세상에 긍정적인 영향을 줄 수 있다는 점이 좋습니다. 거기다 수학과는 달리 세상에 없던 것을 제 힘으로 세상에 불러오고, 제 서비스를 누군가가 유용하게 사용할 것이라 생각하면 예술가가 느낄 것으로 짐작되는 창작의 즐거움을 느낍니다. 처음에는 프론트엔드, 백엔드, 모바일, 심지어는 AI 까지 얇게 공부하면서 모두 흥미가 갔지만, 백엔드 개발자가 추상적으로 설계한 시스템이 다양한 상호작용 속에서 동작하는 모습을 보면서 큰 흥미를 느꼈습니다.
    
        저는 정말 한 번 정하면 정말 끝까지 파고드는 성격입니다. 학창시절에는 언어에 빠져서 영어, 일본어, 중국어를 그렇게 공부해 공인 시험에서 최상급의 성적을 기록했습니다. 대학에서는 수학에 빠져서 수학을 집착에 가깝게 공부해 대학을 입학하고 나서도 2차례 장학금을 받았고, 지금은 프로그래밍에 빠졌습니다. 그렇기에 저는 백엔드 개발자라는 정체성에 저를 가두고 취업에 필요한 최소한만 공부하는게 아니라, 프론트, 백엔드, DevOps, 모바일, AI 가리지 않고 다양한 분야를 공부하고 있습니다. 이건 제가 단순히 취업을 위해 프로그래밍을 공부하는게 아니라, 프로그래밍을 진심으로 좋아하기 때문입니다.
      
        하지만 반대로 이 성격이 단점이 되기도 합니다. 너무 완벽을 추구하다보니 시작도 하지 못하고 구상만 하는 적이 많습니다. 그래서 그런지 저는 오랫동안 딱히 좌우명이라고 부를 게 없었다가, 비교적 최근 "Better done than perfect"라는 말을 우연히 보고 너무 마음에 들어서 카카오톡의 상태 메세지에도 띄어 놨습니다. 제가 여태까지의 인생에서 이룬 것을 보면 항상 부족하더라도 부딪치며 경험하고, 그 과정에서 많은 것을 이뤘던거 같습니다. 개발자로써도 사실 아직 많이 부족하겠지만, 망설이며 정체되기 보다 그걸 인정하고 성장하고 싶습니다.
    
        하지만 단순히 작동하는거에 만족하지 않고, 더 효율적이고 더 사용하기 편한 기술을 개발하기 위해 계속 노력하는 개발자가 되고 싶습니다. 저는 프론트 개발자는 아니지만, 똑같은 서비스여도 U가 좋은 서비스를 더 찾게 됩니다. 뿐만 아니라, 사용하는게 즐거워 팬이 됩니다.  백엔드에서도 단순히 동작하는게 아니라, 제가 작성할 코드를 유지보수 할 누군가가 제 코드를 보고 "와! 정말 잘 짰다!" 라고 감탄할 만한 코드를 짜는 개발자가 되고 싶습니다.  또, 불편한 부분을 원래 그런거라고 당연하게 받아드리지 않고, 틀에서 벗어나 개선점을 찾는 개발자가 되고 싶습니다.
    
        신입 개발자로서 현업에서 잘 할 수 있을지 항상 고민이 많습니다. 하지만 생각해보면, 개인 프로젝트를 잘 하는게 결국 현업을 잘 하는게 아닐까 생각했습니다. 깊이, 서비스 규모, 그리고 Lagacy 프로젝트를 다뤄야 한다는 차이는 있겠지만, 사실 개인 프로젝트에서 중요한 역량이 현업에서도 똑같이 중요합니다. 구현하고 싶은 기능을 빠른 시간 안에 여러가지 적절한 자료로 배워서, 응용해서 구현하는 능력이 있다면 결국 현업에서도 잘 할 수 있는 기초 역량이 있다고 생각합니다.
    
        저는 제 짧은 프로그래머로서의 인생에서 어떤 기능도 불가능하다고 생각하지 않고 공부해서 구현하려고 했고, 프로그래머의 입장에서 구현하기 편하게 설계하는게 아닌, 사용자의 입장에서 직관적이고 당연한 더 나은 방법이 있지 않을까 항상 고민했습니다. 당근마켓에서도 백엔드 개발자로서 그 고민을 이어가고 싶습니다.        `
    }

    const portfolioData = [
        {
            num: 0,
            img: 'http://picsum.photos/400/200',
            title: '자기소개 사이트',
            content: `
                처음 개발자가 되고자 다짐했을때, 가장 먼저 만들고 싶었던 사이트는 뭐니뭐니해도 제 자신을 개성있게 표현해 주는 사이트였습니다!
                저라는 사람을 소개하고, 개발자로서의 제 작품들을 소개하고, 제가 공부하고 있고 흥미 있는 것들이 무엇인지 소개할 수 있는 블로그 기능까지 담았습니다.
            `,
            link: 'http://jinkyumpark.com',
            startDate: '2022년 3월',
            endDate: '2022년 4월',
            status: 1
        },
        {
            num: 1,
            img: 'http://picsum.photos/400/200/',
            title: 'Portfolio 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 0
        },
        {
            num: 2,
            img: 'http://picsum.photos/400/200//',
            title: 'Portfolio 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 0
        },
        {
            num: 3,
            img: 'http://picsum.photos/400/200///',
            title: 'Portfolio 4',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolor reprehenderit id assumenda enim expedita esse ratione veniam porro quisquam debitis, architecto velit alias placeat fugit dignissimos error amet?',
            link: 'http://income.jinkpark.com',
            startDate: '2022년 2월',
            endDate: '2022년 3월',
            status: 3
        }
    ]

    const dummyTechData = [
        {
            name: 'React',
            img: 'reactjs-icon.png',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        },
        {
            name: 'Spring',
            img: 'spring-icon.png',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        },
        {
            name: 'Oracle DB',
            img: 'oracledb-icon.png',
            summary: {
                sum1: 'view들을 component화해서 다양한 hook을 사용해 효율적으로 관리할 수 있음',
                sum2: 'redux 등의 상태 관리 library의 필요성과 특성을 파악하고 있고, 사용할 수 있음',
                sum3: '그 밖에 SPA를 만들때 중요한 router 등의 다양한 기능을 활용할 수 있음'
            }
        }
    ]

    const techSummary = {
        techNum: 25,
        buttonTitle: '기술이 있다의 기준은?',
        buttonDescription: `단순히 가볍게 몇 번 다뤄 봤다고 이 기술을 보유하고 있다고는 생각하지 않습니다.
        무조건 프로젝트에서 사용한 적이 있고, 서툴어도 검색해 가면서 현업에서 바로
        사용할 수 있다고 생각하는 기술만 포함했습니다.`
    }

    const [techHeaderData, setTechHeaderData] = useState(null)
    const [techData, setTechData] = useState(dummyTechData)

    const dummyTechHeaderData = [
        {
            key: 0,
            img: 'http://picsum.photos/400/500',
            title: 'React'
        },
        {
            key: 1,
            img: 'http://picsum.photos/400/500',
            title: 'spring'
        },
        {
            key: 2,
            img: 'http://picsum.photos/400/500',
            title: 'oracle db'
        },
        {
            key: 3,
            img: 'http://picsum.photos/400/500',
            title: 'docker'
        },
        {
            key: 4,
            img: 'http://picsum.photos/400/500',
            title: 'express.js'
        },
        {
            key: 5,
            img: 'http://picsum.photos/400/500',
            title: 'SwiftUI'
        },
        {
            key: 6,
            img: 'http://picsum.photos/400/500',
            title: 'AI'
        },
    ]

    const splitArray = (data) => {
        const result = 
            new Array(Math.ceil(data.length / 4))
                .fill()
                .map(_ => data.splice(0, 4))
        return result
    }

    const [techPage, setTechPage] = useState(0)

    // Initial Fetch
    useEffect(() => {
        setTechHeaderData(splitArray(dummyTechHeaderData))
    }, [])

    // TechTable Page Change
    useEffect(() => {
        // fetch()

    }, [techPage])




    const [isPhoneRequestOpen, setIsPhoneRequestOpen] = useState(false)
    return (
        <div className='container mt-5 mb-5'>
            
            <ProfileTable
                profileData={profileData}
            />

            <div className="row mt-5">

                <div className="col-12 col-md-6">
                    <LanguageTable 
                        languageData={languageData}
                    />
                </div>

                <div className="col-12 col-md-6">
                    <ActivityTable 
                        activityData={activityData}
                    />
                </div>

            </div>

            <div className="mt-5">
                <TechTable
                    techSummary={techSummary}
                    techData={techData}
                    techHeaderData={techHeaderData}
                    techPage={techPage}
                    setTechPage={setTechPage}
                />
            </div>

            <div className="mt-5">
                <InterviewTable 
                    questionData={questionData}
                    introductionData={introductionData}
                />
            </div>

            <div className="mt-5">
                <PortfolioTable
                    portfolioData={portfolioData}
                    setIsPortfolioOpen={setIsPortfolioOpen} 
                    setSelectedPortfolioNum={setSelectedPortfolioNum}
                />  
            </div>

            <div className="mt-5">
                <MoreInfoTable
                    setIsPhoneRequestOpen={setIsPhoneRequestOpen}
                />
            </div>

            <Modal
                show={isPhoneRequestOpen}
                onHide={() => {
                    setIsPhoneRequestOpen(false)
                }}
            >
                <Modal.Header closeButton>
                    <div className="h2">
                        휴대폰 번호 요청하기
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">소속</label>
                            <input type="text" name="" id="" className='form-control'/>
                            <small className="form-text text-muted">소속을 적어주세요(회사, 대학 등)</small>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="">이유</label>
                            <input type="text" name="" id="" className='form-control'/>
                            <small className="form-text text-muted">제 휴대폰 번호가 필요한 이유를 간단히 적어주세요</small>
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="">연락 받으실 휴대폰 번호</label>
                            <div className="row">
                                <div className="col-4">
                                    <select className='form-control text-center'>
                                        <option>010</option>
                                        <option>02</option>
                                        <option>031</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input type="text" name="" id="" className='form-control text-center' maxLength={4}/>
                                </div>
                                <div className="col-4">
                                    <input type="text" name="" id="" className='form-control text-center' maxLength={4}/>
                                </div>
                            </div>
                            <small className="form-text text-muted">연락 받으실 휴대폰 번호를 적어 주세요</small>
                        </div>

                        <div className="row mt-3">
                            <div className="col-6">
                                <button type="submit" className='btn btn-primary w-100'>요청</button>
                            </div>
                            <div className="col-6">
                                <button type='reset' className='btn btn-danger w-100' onClick={() => {
                                    setIsPhoneRequestOpen(false)
                                }}>취소</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        
        </div>
    )
}

export default Resume