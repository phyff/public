const navItems = [
  [
    {
      name: 'Winners',
      to: '/winners',
    },
    {
      name: 'About',
      to: '/about',
    },
    {
      name: 'Virtual Screening Room',
      to: null,
      dropdownContent: [
        {
          name: 'All Categories',
          to: '/virtual-screening-room',
        },
        {
          name: 'Reels',
          to: '/virtual-screening-room/reels',
        },
        {
          name: 'Award Winners',
          to: '/virtual-screening-room/award-winners',
        },
        {
          name: 'Films',
          to: '/virtual-screening-room/films',
        },
        {
          name: 'Screenplays',
          to: '/virtual-screening-room/screenplays',
        },
      ],
    },
  ],
  [
    {
      name: 'Submit',
      to: '/submit',
    },
    {
      name: 'Attend',
      to: '/attend',
    },
  ],
];

export default navItems;
