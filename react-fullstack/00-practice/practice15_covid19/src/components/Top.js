import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuLink from './MenuLink';
import dayjs from 'dayjs';

const Top = () => {
    const navigate = useNavigate();

    const [gte, setGte] = useState();
    const [lte, setLte] = useState();
     
    const onDateSubmit = useCallback((e)=>{
        e.preventDefault();
        setGte(dayjs(e.target.gte.value).toISOString());
        setLte(dayjs(e.target.lte.value).add(-1,'day').toISOString());
        navigate(`/confirmed?date_gte=${e.target.gte.value}&date_lte=${e.target.lte.value}`);
    },[navigate])

    // console.log(gte)
    // console.log(lte)

    return (
        <div>
            <h1>Covid19 현황</h1>
            <hr />
            <form onSubmit={onDateSubmit}>
                <input type="date" name='gte' />~
                <input type="date" name='lte' />
                <button>검색</button>
            </form>

            {
                gte===undefined || lte===undefined? '' : (
                    <nav>
                    <MenuLink to={`/confirmed?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>일일확진자</MenuLink>
                    <MenuLink to={`/confirmed_acc?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>누적확진자</MenuLink>
                    <MenuLink to={`/active?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>격리환자</MenuLink>
                    <MenuLink to={`/released?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>격리해제</MenuLink>
                    <MenuLink to={`/released_acc?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>누적격리해제</MenuLink>
                    <MenuLink to={`/death?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>사망자</MenuLink>
                    <MenuLink to={`/death_acc?date_gte=${encodeURIComponent(gte)}&date_lte=${encodeURIComponent(lte)}`}>누적사망자</MenuLink>
                </nav>
                )
            }
        </div>
    );
};

export default Top;

