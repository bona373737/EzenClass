import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Meta = () => {
    return (
        <HelmetProvider>
            <Helmet>
            <meta charset="utf-8"/>
            <title>Covid19</title>

            <meta name="description" content="covid19"/>
            <meta name="author" content="covid19" />
            <meta name="subject" content="covid19" />
            <meta name="copyright" content="" />
            <meta name="content-language" content="ko" />
            
            <meta property="og:url" content="사이트주소(URL)" />
            <meta property="og:title" content="사이트제목" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="사이트설명(최대160자 추천)" />
            <meta property="og:image" content="사이트 대표이미지 URL" />

            <link rel="icon" href="데스크탑용 favicon" type="image/png"/>
            <link rel="shortcut icon" href="안드로이드용 favicon" type="image/png"/>
            <link rel="apple-touch-icon" href="아이폰용 favicon" type="image/pgn"/>
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;


