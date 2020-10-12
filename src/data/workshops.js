import seq from '../assets/img/team/sequoyahsudler.png';
import robert from '../assets/img/team/robertmay.png';

export default [
  {
    title: 'Style & Substance - documentary',
    time: new Date(2021, 2, 27, 12, 30).getTime(),
    speaker: {
      name: 'Gage Johnston',
      image: seq,
    },
  },
  {
    title: 'Scene Analysis 101',
    time: new Date(2021, 2, 27, 15, 15).getTime(),
    speaker: {
      name: 'Jacob Mazer',
      image: robert,
      contact: '@jacobmazer',
    },
  },
];
