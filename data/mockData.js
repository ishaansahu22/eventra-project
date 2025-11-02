// data/mockData.js

export const vendors = [
  {
    id: "1",
    name: "Royal Weddings Photography",
    category: "Photography",
    rating: 4.8,
    reviews: 125,
    priceRange: "₹50,000",
    location: "Patna, Bihar",
    imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92",
    description: "With over a decade of experience in capturing the magic of weddings, Royal Weddings is a team of passionate photographers and videographers based in the heart of Patna. We believe every wedding tells a unique story, and our mission is to narrate yours through timeless, beautiful imagery. Our style is a blend of traditional portraiture and candid photojournalism, ensuring we capture both the grand moments and the fleeting, heartfelt emotions.",
    services: [
      { name: "Traditional Photography (1 Day)", price: "₹50,000" },
      { name: "Candid Photography (1 Day)", price: "₹75,000" },
      { name: "Full Package (Photo + Video)", price: "₹1,20,000" },
    ]
  },
  {
    id: "2",
    name: "Maharaja Wedding Hall",
    category: "Venue",
    rating: 4.9,
    reviews: 210,
    priceRange: "₹1,50,000",
    location: "Patna, Bihar",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f29da8c2f0",
    description: "Experience royal treatment at Maharaja Wedding Hall. Our grand ballroom and lush gardens provide a magnificent backdrop for your special day. We offer all-inclusive packages to make your planning seamless and stress-free.",
    services: [
      { name: "Full Day Booking (Hall only)", price: "₹1,50,000" },
      { name: "Hall + Basic Decoration", price: "₹2,00,000" },
      { name: "All-Inclusive Package", price: "₹5,00,000" },
    ]
  },
  {
    id: "3",
    name: "Gourmet Creations",
    category: "Catering",
    rating: 4.7,
    reviews: 95,
    priceRange: "₹1,200 / plate",
    location: "Gaya, Bihar",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    description: "At Gourmet Creations, we believe food is an art form. Our chefs use only the freshest local ingredients to craft exquisite dishes that tantalize the taste buds. We cater to all dietary needs, ensuring every guest has a memorable culinary experience.",
    services: [
      { name: "Plated Dinner (per person)", price: "₹1,800" },
      { name: "Buffet Style (per person)", price: "₹1,200" },
      { name: "Cocktail Hour Appetizers", price: "₹5,00,000" },
    ]
  },
];

// Categories for homepage
export const categories = [
  { 
    name: 'Wedding Venues', 
    href: '/search?category=Venue', 
    imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60' 
  },
  { 
    name: 'Photographers', 
    href: '/search?category=Photography', 
    imageUrl: 'https://images.unsplash.com/photo-1519690033348-036140e44798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  { 
    name: 'Decorators', 
    href: '/search?category=Decorators', 
    imageUrl: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  { 
    name: 'Catering', 
    href: '/search?category=Catering', 
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  { 
    name: 'Makeup Artists', 
    href: '/search?category=Makeup', 
    imageUrl: 'https://images.unsplash.com/photo-1633637536994-d470072f2322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  { 
    name: 'Wedding Planners', 
    href: '/search?category=Planners', 
    imageUrl: 'https://images.unsplash.com/photo-1560430632-33871a68340b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
];

// Profile data for profile page
export const userProfile = {
  name: "Anjali Sharma",
  location: "Patna, Bihar",
  profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
};

// Bookings data for profile page
export const bookings = [
    {
      id: 1,
      type: 'Wedding',
      vendor: 'Royal Palace Banquet Hall',
      date: 'December 25, 2024',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2f0',
    },
    {
      id: 2,
      type: 'Mehendi Ceremony',
      vendor: 'Priya Mehendi Artist',
      date: 'December 22, 2024',
      status: 'Confirmed',
      image: 'https://images.unsplash.com/photo-1610088441520-4352457e7095',
    },
  ];