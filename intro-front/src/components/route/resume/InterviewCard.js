import React from 'react'

const InterviewCard = () => {
    const questionData = [
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
            question: '좌우명이 있다면?',
            answer: `저는 오랫동안 딱히 좌우명이라고 부를 게 없었다가, 비교적 최근 "Better done than perfect"라는 말이 너무 마음에 들어서
            카톡 상태 메세지에도 띄어 놨습니다. 제가 여태까지의 인생에서 이룬 것을 보면 항상 부족하더라도 부딪치며 경험하고, 그 과정에서 많은 것을 이뤘던거 같습니다.
            개발자로써도 사실 많이 부족하겠지만, 그걸 인정하고 성장하고 싶습니다.`
        },
        {
            question: '기초가 탄탄하다고 하셨는데, 어떤 점에서 그렇죠?',
            answer: `일단 저는 수학을 전공했기 때문에 추상적인 사고활동과 문제풀이, 이론적인 것에 매우 익숙합니다.
                     거기에 이론 컴퓨터 과학에 관심이 많기 때문에 유튜브에서 미국 대학 강의를 몇 개 수강하기도 했고,
                     관련 도서도 많이 읽었습니다.
                    `
        }
    ]
    
    return (
        <div className="card">
            <div className="card-header text-center h4">기초가 탄탄한 백엔드 개발자, 박진겸입니다.</div>

            <div className="card-body">
                {
                    questionData.map((data) => {
                        return(
                            <div>
                                <div className="card-title h5 mt-2">{data.question}</div>
                                <p className="card-text mt-2" style={{lineHeight: '1.7rem'}}>{data.answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InterviewCard