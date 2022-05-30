import React ,{memo} from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const Meta = memo((props) => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <meta charSet='utf-8'/>
                    <title>{props.title}</title>
                    <meta name='description' content={props.description} />
                    <meta name='keywords' content={props.keywords} />
                    <meta name='author' content={props.author} />
                    <meta name='og:type' content='website' />
                    <meta name='og:type' content={props.title} />
                    <meta name='og:type' content={props.description} />
                    <meta name='og:type' content={props.image} />
                    <meta name='og:type' content={props.url} />
                    <meta name='shortcut icon' href={props.image} type="image/png" />
                    <meta name='icon' href={props.image} type="image/png" />
                </Helmet>
            </HelmetProvider>
        </div>
    );
});

export default Meta;