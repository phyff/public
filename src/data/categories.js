import narrative from '../assets/img/icons/theme/communication/chat-1.svg';
import screenplay from '../assets/img/icons/theme/files/selected-file.svg';
import bulb from '../assets/img/icons/theme/home/bulb-1.svg';
import videoCamera from '../assets/img/icons/theme/devices/video-camera.svg';

const categories = [
  {
    title: 'Narrative',
    description: 'Films that tell fictional or fictionalized stories, events or narratives.',
    icon: narrative,
  },
  {
    title: 'Experimental',
    description: 'Films that experiment with some aspect of the filmmaking process, such as editing of visuals and/or audio, filming techniques, and even the mode of presentation.',
    icon: bulb,
  },
  {
    title: 'Documentary',
    description: 'Films that provide factual records reports on a specific subject or subjects.',
    icon: videoCamera,
  },
  {
    title: 'Screenplay',
    description: 'The script of a movie, including acting instructions and scene directions.',
    icon: screenplay,
  },
];

export default categories;
