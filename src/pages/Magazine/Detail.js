//브랜드 페이지가 아닌 각 카테고리에 해당하는 메거진을 보여주는 페이지
import React from 'react';
import ItemLayout from './ItemLayout';
import { MagazineCategory, Season } from './categoryData';
import { useScrollTop } from '../../utils/scrollTop';
import useLoadData from '../../hooks/useLoadData';
import Banner from './Banner';
import ArticleIntroduction from './ArticleIntroduction';

const Detail = ({ match }) => {
  useScrollTop(true);

  //firebase database ref key와 category 이름을 hook에 보내줘서 해당 테이블 해당 카테고리에 맞는 데이터를 받아온다.
  const [magazineData, loading, error, empty] = useLoadData(
    'magazine',
    match.params.category,
    'magazine',
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner />
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        {error && <div>Error : {error}</div>}
        {loading && <div>Loading...</div>}
        {empty && <div>매거진이 존재하지 않습니다.</div>}
        {magazineData &&
          magazineData.map((data) => <ArticleIntroduction key={data.title} data={data} />)}
      </ItemLayout>
    </div>
  );
};

export default Detail;
