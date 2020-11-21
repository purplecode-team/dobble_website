import MyPage from '../img/mypage.png';
import Heart from '../img/heart.png';
import Search from '../img/search.png';
import Hamburger from '../img/hamburger.png';

export const headerIconData = [
  {
    link: '/myPage',
    mobile: true,
    img: MyPage,
    alt: 'myPage_icon',
  },
  {
    link: '/basket',
    mobile: true,
    img: Heart,
    alt: 'basket_icon',
  },
  {
    link: '/basket',
    mobile: true,
    img: Search,
    alt: 'search_icon',
  },
  {
    link: false,
    mobile: false,
    img: Hamburger,
    alt: 'hamburger_icon',
    onToggle: true,
  },
];

export const productsData = [
  {
    key: 1,
    content: '의류',
    link: '/',
  },
  {
    key: 2,
    content: '가방',
    link: '/',
  },
  {
    key: 3,
    content: '악세서리',
    link: '/',
  },
  {
    key: 4,
    content: '잡화',
    link: '/',
  },
];

export const brandsData = [
  {
    key: 1,
    content: '마리몬드',
    link: '/',
  },
  {
    key: 2,
    content: '마르코로호',
    link: '/',
  },
  {
    key: 3,
    content: '애니휴먼',
    link: '/',
  },
  {
    key: 4,
    content: '위드아이스',
    link: '/',
  },
  {
    key: 5,
    content: 'BOCE',
    link: '/',
  },
  {
    key: 6,
    content: '메리디아니',
    link: '/',
  },
  {
    key: 7,
    content: '뉴킷',
    link: '/',
  },
  {
    key: 8,
    content: '파이어마커스',
    link: '/',
  },
];

export const magazineData = [
  {
    key: 1,
    content: '브랜드 소개',
    link: '/',
  },
  {
    key: 2,
    content: '기부 소식',
    link: '/',
  },
];
