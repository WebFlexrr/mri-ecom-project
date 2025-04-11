
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bloom Daily Planner',
    tagline: 'Your daily peace, now on paper.',
    price: 32.00,
    images: [
      '/lovable-uploads/80dd3f20-422a-4246-9bb4-5a6d1aa3e1d1.png',
      'https://images.unsplash.com/photo-1606866440736-28df9be9d8c7',
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57'
    ],
    description: 'The Bloom Daily Planner is designed to help you cultivate mindfulness and productivity in your everyday life. With thoughtfully designed pages for goal setting, daily reflections, and gratitude practice, this planner becomes your companion in creating a more intentional life.',
    features: [
      '6-month undated layout for flexibility',
      'Daily, weekly, and monthly planning pages',
      'Gratitude and reflection prompts',
      'Goal-setting framework',
      'Habit tracker',
      'Premium 100 GSM paper',
      'Lay-flat binding',
      'Ribbon bookmarks'
    ],
    benefits: [
      'Reduce anxiety by organizing your thoughts and days',
      'Build consistency with habit tracking',
      'Find moments of gratitude even on hard days',
      'Connect your daily actions to your bigger dreams',
      'Create space for what truly matters to you'
    ],
    category: 'planners',
    purposes: ['students', 'professionals', 'personal-growth'],
    badges: ['bestseller'],
    stock: 25,
    reviews: [
      {
        id: 'r1',
        userName: 'Sarah M.',
        rating: 5,
        comment: 'This planner has completely changed how I approach my days. The reflection prompts are my favorite part!',
        date: '2024-03-15'
      },
      {
        id: 'r2',
        userName: 'Michael T.',
        rating: 4,
        comment: 'Beautiful quality and thoughtful design. Would love more space for notes, but otherwise perfect.',
        date: '2024-02-28'
      }
    ],
    related: ['2', '5', '7']
  },
  {
    id: '2',
    name: 'Mindful Moments Journal',
    tagline: 'Capture the beauty in everyday moments.',
    price: 24.00,
    images: [
      'https://images.unsplash.com/photo-1598367772323-3ac0781fc914',
      'https://images.unsplash.com/photo-1595341888016-a392ef81b7de',
      'https://images.unsplash.com/photo-1589203835888-4a77c0a25aaf'
    ],
    description: 'Our Mindful Moments Journal helps you slow down and notice the small joys that make life beautiful. With simple prompts and open spaces, this journal becomes your personal sanctuary for processing thoughts, celebrating small wins, and cultivating presence.',
    features: [
      '160 pages of premium paper',
      'Minimalist layout for freedom of expression',
      'Weekly mindfulness prompts',
      'Mood tracking pages',
      'Inspirational quotes throughout',
      'Pocket for mementos',
      'Sustainable materials'
    ],
    benefits: [
      'Process emotions in a healthy, private space',
      'Reduce stress through regular reflection',
      'Notice patterns in your thoughts and feelings',
      'Build a meaningful record of your personal growth',
      'Create moments of stillness in your busy day'
    ],
    category: 'journals',
    purposes: ['personal-growth', 'creators'],
    badges: ['new'],
    stock: 42,
    reviews: [
      {
        id: 'r3',
        userName: 'Jamie L.',
        rating: 5,
        comment: 'This journal feels like a friend inviting me to be honest with myself. The quality is amazing too!',
        date: '2024-03-21'
      }
    ],
    related: ['1', '3', '6']
  },
  {
    id: '3',
    name: 'Creator\'s Idea Journal',
    tagline: 'Where your wildest ideas find a home.',
    price: 28.00,
    images: [
      'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e',
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
    ],
    description: 'Made for dreamers, artists, and innovators, the Creator\'s Idea Journal gives your creativity the space it deserves. With a unique format designed to capture inspiration when it strikes and develop concepts over time, this journal helps you turn your creative sparks into flames.',
    features: [
      'Dotted pages for maximum flexibility',
      'Project planning templates',
      'Idea development frameworks',
      'Space for sketches and diagrams',
      'References section',
      'Expandable pocket for clippings',
      'Sturdy cover for on-the-go use'
    ],
    benefits: [
      'Never lose a brilliant idea again',
      'Develop half-formed thoughts into concrete plans',
      'Track your creative progress over time',
      'Break through creative blocks with prompts',
      'Find connections between seemingly unrelated ideas'
    ],
    category: 'journals',
    purposes: ['creators'],
    badges: ['limited'],
    stock: 15,
    reviews: [
      {
        id: 'r4',
        userName: 'Alex P.',
        rating: 5,
        comment: 'As a designer, I\'ve tried many journals but this one truly understands the creative process. It\'s become an extension of my brain!',
        date: '2024-02-10'
      },
      {
        id: 'r5',
        userName: 'Taylor K.',
        rating: 4,
        comment: 'Beautiful design and the project planning pages are genius. Would love if it came in more colors.',
        date: '2024-01-25'
      }
    ],
    related: ['2', '7', '8']
  },
  {
    id: '4',
    name: 'Gentle Reset Self-Care Kit',
    tagline: 'Your permission slip to pause and breathe.',
    price: 48.00,
    discountPrice: 39.99,
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108',
      'https://images.unsplash.com/photo-1600026453249-24c7333e16af'
    ],
    description: 'The Gentle Reset Kit is your complete package for moments when you need to come back to yourself. Combining tactile tools for grounding with guided practices for mental clarity, this kit helps you create meaningful self-care rituals that actually fit into your busy life.',
    features: [
      'Handcrafted ceramic intention setting bowl',
      'Aromatic lavender eye pillow',
      'Daily self-care ritual cards (30 cards)',
      'Small-batch hand-poured candle',
      'Mini gratitude journal',
      'Breathwork guide',
      'Beautifully packaged in a reusable box'
    ],
    benefits: [
      'Transform stress into calm with simple 5-minute practices',
      'Create boundaries around your time and energy',
      'Develop sustainable self-care habits that stick',
      'Reconnect with yourself during overwhelming moments',
      'Experience the power of small, intentional breaks'
    ],
    category: 'self-care',
    purposes: ['personal-growth'],
    badges: ['bestseller', 'limited'],
    stock: 8,
    reviews: [
      {
        id: 'r6',
        userName: 'Priya S.',
        rating: 5,
        comment: 'This kit has been my lifeline during a really challenging time. Each component is thoughtfully made and the ritual cards are so simple yet effective.',
        date: '2024-03-05'
      },
      {
        id: 'r7',
        userName: 'Jordan B.',
        rating: 5,
        comment: 'Bought this as a gift for my sister and ended up getting one for myself too. The quality is exceptional and it feels like such a treat to use.',
        date: '2024-02-18'
      }
    ],
    related: ['6', '8', '9']
  },
  {
    id: '5',
    name: 'Student Success Planner',
    tagline: 'Turn big goals into daily achievements.',
    price: 29.00,
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      'https://images.unsplash.com/photo-1606761568478-8fca84578148',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173'
    ],
    description: 'Designed specifically for students, this planner helps you manage assignments, exams, and projects while maintaining balance. With specialized sections for academic planning alongside tools for personal wellbeing, the Student Success Planner supports your whole student experience.',
    features: [
      'Academic year layout (August-July)',
      'Assignment tracker',
      'Exam preparation timelines',
      'Project management breakdowns',
      'Study session planner',
      'Balance wheel for managing stress',
      'Term goal-setting pages',
      'Budget tracker'
    ],
    benefits: [
      'Never miss another deadline or assignment',
      'Reduce test anxiety with organized preparation',
      'Break large projects into manageable steps',
      'Balance academics with personal wellbeing',
      'Track your progress and celebrate improvements'
    ],
    category: 'planners',
    purposes: ['students'],
    badges: [],
    stock: 35,
    reviews: [
      {
        id: 'r8',
        userName: 'Zoe C.',
        rating: 5,
        comment: 'As a grad student juggling research and classes, this planner has been a game-changer. The project breakdown pages especially have saved me from so much stress!',
        date: '2024-01-30'
      }
    ],
    related: ['1', '2', '7']
  },
  {
    id: '6',
    name: 'Morning Ritual Journal',
    tagline: 'Your first five minutes set the tone for everything.',
    price: 22.00,
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
      'https://images.unsplash.com/photo-1517021897933-0e0319cfbc28',
      'https://images.unsplash.com/photo-1563299798-9d7e837f9cd5'
    ],
    description: 'The Morning Ritual Journal transforms how you start your day in just five focused minutes. Designed to align your mindset and intentions before the day\'s demands begin, this simple practice creates a foundation of calm productivity that carries you through whatever comes your way.',
    features: [
      '120 days of morning prompts',
      'Evening reflection questions',
      'Weekly review pages',
      'Quotes to inspire mindfulness',
      'Lightweight design for travel',
      'Quick-start guide for building habits',
      'Elegant minimal aesthetic'
    ],
    benefits: [
      'Start your day with purpose instead of reactivity',
      'Train your brain to focus on what matters most',
      'Create a consistent morning practice in just minutes',
      'Set clear intentions that guide daily decisions',
      'Build momentum through small, consistent actions'
    ],
    category: 'journals',
    purposes: ['personal-growth', 'professionals'],
    badges: ['new'],
    stock: 28,
    reviews: [
      {
        id: 'r9',
        userName: 'Marcus T.',
        rating: 5,
        comment: 'I\'ve tried lots of journaling methods but this one actually stuck. Just 5 minutes in the morning has made such a difference to my mindset throughout the day.',
        date: '2024-03-12'
      },
      {
        id: 'r10',
        userName: 'Leila K.',
        rating: 4,
        comment: 'Beautiful quality and I love the simplicity of the prompts. It doesn\'t feel overwhelming like other journals I\'ve tried.',
        date: '2024-02-20'
      }
    ],
    related: ['2', '3', '9']
  },
  {
    id: '7',
    name: 'Focus & Flow Productivity Bundle',
    tagline: 'Everything you need to do your best work.',
    price: 65.00,
    discountPrice: 52.00,
    images: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d',
      'https://images.unsplash.com/photo-1579657841209-a5749340c8c0'
    ],
    description: 'The Focus & Flow Bundle combines our most effective tools for deep work and productivity. Designed for professionals and creators who need to produce their best thinking consistently, this set helps you create the conditions for flow while managing energy, not just time.',
    features: [
      'Quarterly Focus Planner',
      'Deep Work Session Cards',
      'Time Blocking Notepad',
      'Focus Technique Guide',
      'Project Prioritization Framework',
      'Energy Management Tracker',
      'Distraction-Taming Tools'
    ],
    benefits: [
      'Finally finish the projects that matter most to you',
      'Experience more flow states in your work',
      'Make progress on your big goals consistently',
      'Work with your natural energy rhythms instead of against them',
      'Reduce burnout by balancing productivity with recovery'
    ],
    category: 'bundles',
    purposes: ['professionals', 'creators'],
    badges: ['bestseller'],
    stock: 20,
    reviews: [
      {
        id: 'r11',
        userName: 'David N.',
        rating: 5,
        comment: 'This bundle has revolutionized how I work. The time blocking method alone has doubled my productivity without increasing my working hours.',
        date: '2024-03-02'
      },
      {
        id: 'r12',
        userName: 'Sandra L.',
        rating: 5,
        comment: 'Worth every penny! The energy management tracker helped me identify when I do my best creative work and now I protect those hours zealously.',
        date: '2024-02-14'
      }
    ],
    related: ['1', '3', '5']
  },
  {
    id: '8',
    name: 'Gratitude Practice Cards',
    tagline: 'Find the joy in ordinary moments.',
    price: 18.00,
    images: [
      'https://images.unsplash.com/photo-1613369645044-561202056305',
      'https://images.unsplash.com/photo-1508011615769-6d6dbf98d34b',
      'https://images.unsplash.com/photo-1606311698038-c48785f86e13'
    ],
    description: 'Our Gratitude Practice Cards make it simple to cultivate appreciation in daily life. Each beautifully designed card offers a unique prompt to help you notice different forms of abundance all around you. Use them as a personal practice or share the experience with loved ones.',
    features: [
      '52 unique gratitude prompts',
      'Beautiful minimal design',
      'Durable cards for daily use',
      'Compact size for travel or bedside table',
      'Guide for establishing a gratitude practice',
      'Elegant storage box'
    ],
    benefits: [
      'Shift from scarcity to abundance mindset',
      'Notice more positive aspects of your daily life',
      'Build resilience for challenging times',
      'Create meaningful conversations with others',
      'Establish a consistent gratitude habit easily'
    ],
    category: 'self-care',
    purposes: ['personal-growth'],
    badges: [],
    stock: 45,
    reviews: [
      {
        id: 'r13',
        userName: 'Emma R.',
        rating: 4,
        comment: 'I keep these by my bedside and pull one each night. They\'ve helped me end the day on a positive note no matter how challenging it was.',
        date: '2024-01-19'
      }
    ],
    related: ['4', '6', '9']
  },
  {
    id: '9',
    name: 'Calm & Clarity Meditation Set',
    tagline: 'Create your sanctuary, anywhere you go.',
    price: 42.00,
    images: [
      'https://images.unsplash.com/photo-1528303538427-fae318c654d4',
      'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08',
      'https://images.unsplash.com/photo-1510172951991-856a62a9ac1b'
    ],
    description: 'The Calm & Clarity Meditation Set helps you establish a sustainable meditation practice that fits your real life. Combining physical tools for comfort with guidance for beginners and experienced practitioners alike, this set makes meditation accessible and enjoyable.',
    features: [
      'Meditation cushion with washable cover',
      'Beginner\'s guide to meditation',
      '30-day practice calendar',
      'Essential oil roll-on for focus',
      'Meditation technique cards',
      'Small singing bowl',
      'Guided audio meditations (digital download)'
    ],
    benefits: [
      'Reduce stress and anxiety with consistent practice',
      'Improve focus and concentration in daily tasks',
      'Create moments of peace in your busy day',
      'Build resilience to life\'s challenges',
      'Develop greater self-awareness and emotional regulation'
    ],
    category: 'self-care',
    purposes: ['personal-growth'],
    badges: ['new'],
    stock: 12,
    reviews: [
      {
        id: 'r14',
        userName: 'Noah P.',
        rating: 5,
        comment: 'As someone who always struggled to maintain a meditation practice, this set made all the difference. The cushion is incredibly comfortable and the technique cards give me just enough variety.',
        date: '2024-03-18'
      },
      {
        id: 'r15',
        userName: 'Olivia T.',
        rating: 5,
        comment: 'Beautifully made and the guide is so approachable. I\'ve finally established a daily practice after years of trying!',
        date: '2024-02-27'
      }
    ],
    related: ['4', '6', '8']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return product.related
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductsByPurpose = (purpose: string): Product[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return products.filter(product => product.purposes.includes(purpose as any));
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badges?.includes('bestseller')).slice(0, 4);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.badges?.includes('new')).slice(0, 4);
};
