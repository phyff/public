import mail from '../assets/img/icons/theme/communication/mail.svg';
import instagram from '../assets/img/icons/theme/social/instagram.svg';
import facebook from '../assets/img/icons/theme/social/facebook.svg';
import youtube from '../assets/img/icons/theme/social/youtube.svg';
import marker from '../assets/img/icons/theme/map/marker-1.svg';

export default (address) => [
  {
    icon: marker,
    text: address ?? '',
    href: `https://www.google.com/maps/search/?api=1&query=${address}`,
  },
  {
    icon: mail,
    text: 'phillyyouthfilmfest@gmail.com',
    href: 'mailto:phillyyouthfilmfest@gmail.com',
  },
  {
    icon: instagram,
    text: '@phyff21',
    href: 'https://www.instagram.com/phyff21/',
  },
  {
    icon: facebook,
    text: '@phyff19',
    href: 'https://www.facebook.com/phyff19/',
  },
  {
    icon: youtube,
    text: 'Philly Youth Film Fest',
    href: 'https://www.youtube.com/channel/UCNNgWQxyh9mVcPV0ZSk0w1Q',
  },
];
