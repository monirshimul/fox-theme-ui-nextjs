import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Regional Office Address',
      description:
        'House: 140, Road: 4, Avenue: 4, Mirpur-DOHS, Dhaka-1216',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Overseas Office Address',
      description:
      '90 State st. Suite 700 Office 40 , Albany, NY 12207 ',
    },
    
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
};
