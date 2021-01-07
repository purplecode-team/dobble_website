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
    link: '/myPage/wishlist',
    mobile: true,
    img: Heart,
    alt: 'heart_icon',
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
    link: '/product/Cloth',
  },
  {
    key: 2,
    content: '가방',
    link: '/product/Bag',
  },
  {
    key: 3,
    content: '악세서리',
    link: '/product/Accessories',
  },
  {
    key: 4,
    content: '잡화',
    link: '/product/Stuff',
  },
];

export const brandsData = [
  {
    key: 1,
    content: '마리몬드',
    link: '/brand/Marimond',
  },
  {
    key: 2,
    content: '마르코로호',
    link: '/brand/Marcoro',
  },
  {
    key: 3,
    content: '애니휴먼',
    link: '/brand/Any-human',
  },
  {
    key: 4,
    content: '위드아이스',
    link: '/brand/With-eyes',
  },
  {
    key: 5,
    content: '메리디아니',
    link: '/brand/Meridiani',
  },
  {
    key: 6,
    content: '뉴킷',
    link: '/brand/New-kit',
  },
];

export const magazineData = [
  {
    key: 1,
    content: '브랜드 소개',
    link: '/magazine',
  },
  {
    key: 2,
    content: '아티클',
    link: '/magazine/Article',
  },
];
