import React from 'react'

const LanguageTable = () => {
    return (
        <table className="table w-100 text-center border border-rounded">
            <thead>
                <th scope='col'>언어</th>
                <th scope='col'>회화</th>
                <th scope='col'>독해</th>
                <th scope='col'>시험점수</th>
            </thead>

            <tbody>
                <tr>
                    <th scope='row'>🇺🇸 영어</th>
                    <td>상</td>
                    <td>상</td>
                    <td>TOEIC 970</td>
                </tr>
                <tr>
                    <th scope='row'>🇯🇵 일본어</th>
                    <td>상</td>
                    <td>상</td>
                    <td>JLPT N1</td>
                </tr>
                <tr>
                    <th scope='row'>🇨🇳 중국어</th>
                    <td>하</td>
                    <td>하</td>
                    <td>HSK 3급</td>
                </tr>
            </tbody>
        </table>
    )
}

export default LanguageTable