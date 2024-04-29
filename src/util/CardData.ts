import img1 from '../assets/Avatar.png'
import img2 from '../assets/Avatar2.png'
import img3 from '../assets/Avatar3.png'
import img4 from '../assets/Avatar4.png'
import img5 from '../assets/Avatar5.png'
import img6 from '../assets/Avatar6.png'

import meme1 from '../assets/img1.png'

export const CardData = [
  {
    id: '1',
    title: 'Review scope',
    contributor: [
      {
        avatar: img2,
      },
      {
        avatar: img1,
      },
      {
        avatar: img3,
      },
    ],
    description: 'Review #390.',
    task: [
      {
        desc: 'Set Up Figma Board',
        status: true,
      },
      {
        desc: 'Schedule Time',
        status: false,
      },
      {
        desc: 'Review Exercises with the team',
        status: false,
      },
    ],
    status: 'Not started',
    meme: '',
    tag: [
      {
        name: 'Research',
      },
      {
        name: 'Due Date',
      },
    ],
  },
  {
    id: '2',
    title: 'usability',
    contributor: [],
    description: 'Research questions with Carina.',
    task: [],
    status: 'In Progress',
    tag: [
      {
        name: 'Research',
      },
    ],
    meme: '',
  },
  {
    id: '3',
    title: 'Team retro',
    contributor: [
      {
        avatar: img2,
      },
      {
        avatar: img5,
      },
    ],
    description: '',
    task: [
      {
        desc: 'Accountant contract',
        status: false,
      },
    ],
    status: 'Not started',
    meme: '',
    tag: [],
  },
  {
    id: '4',
    title: 'Move',
    contributor: [
      {
        avatar: img4,
      },
    ],
    description: 'Survive moving places in the pandemic',
    task: [
      {
        desc: ' Cancel VAT ID',
        status: false,
      },
      {
        desc: 'The Hendry is real',
        status: true,
      },
    ],
    status: 'Blocked',
    meme: '',
    tag: [
      {
        name: 'Research',
      },
    ],
  },
  {
    id: '5',
    title: 'Nothing to be done 🙃',
    contributor: [
      {
        avatar: img6,
      },
    ],
    description: '',
    task: [],
    status: 'Blocked',
    meme: '',
    tag: [
      {
        name: 'Due Date',
      },
    ],
  },
  {
    id: '6',
    title: 'Nothing to be done 🙃',
    contributor: [],
    description: '',
    task: [],
    status: 'Done',
    meme: meme1,
    tag: [],
  },
]

export default CardData
