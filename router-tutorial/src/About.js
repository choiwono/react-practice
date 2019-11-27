import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 하면 맨 앞의 ?을 생략한다
    })
    
    const showDetail = query.detail === 'true';

    return (
        <div>
           <h1>소개</h1>
           <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트</p> 
           {showDetail && <p>detail의 값을 true로 설정하셨습니다!</p>}
        </div>
    );
};

export default About;