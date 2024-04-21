import { BookText, Home, Plus } from 'lucide-react';

const navData = [
  {
    icon: <Home className="h-5 w-5" />,
    display: 'Home',
    link: '/',
  },
  {
    icon: <BookText className="h-5 w-5" />,
    display: 'List',
    link: '/list',
  },
  {
    icon: <Plus className="h-5 w-5" />,
    display: 'Add',
    link: '/add',
  },
];

export default navData;
