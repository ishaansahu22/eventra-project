// data/mockData.js

export const vendors = [
  {
    id: "1",
    name: "Elegant Venues",
    category: "Venue",
    rating: 4.8,
    reviews: 130,
    priceRange: "$$$$",
    location: "Downtown, Metro City",
    imageUrl: "https://images.unsplash.com/photo-1519904904904-e0e6b5b5b5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Our mission is to turn every event into a masterpiece. With a blend of elegance and modern technology, we provide venues that are not just spaces, but experiences. From grand ballrooms to intimate garden settings, we have the perfect backdrop for your story.",
    services: [
      { name: "Grand Ballroom", price: "$5,000" },
      { name: "Garden Pavilion", price: "$3,000" },
      { name: "Rooftop Terrace", price: "$4,000" },
    ]
  },
  {
    id: "2",
    name: "Gourmet Creations",
    category: "Catering",
    rating: 4.9,
    reviews: 210,
    priceRange: "$$$",
    location: "Culinary District, Metro City",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "At Gourmet Creations, we believe food is an art form. Our chefs use only the freshest local ingredients to craft exquisite dishes that tantalize the taste buds. We cater to all dietary needs, ensuring every guest has a memorable culinary experience.",
    services: [
      { name: "Plated Dinner (per person)", price: "$150" },
      { name: "Buffet Style (per person)", price: "$100" },
      { name: "Cocktail Hour Appetizers", price: "$2,500" },
    ]
  },
  {
    id: "3",
    name: "Timeless Photos",
    category: "Photography",
    rating: 4.7,
    reviews: 95,
    priceRange: "$$$",
    location: "Arts Quarter, Metro City",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f31c236c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "We capture moments, not just pictures. Our style is a mix of documentary and fine art, creating a timeless narrative of your special day. Our team is dedicated to capturing the raw emotion and subtle details that make your event uniquely yours.",
    services: [
      { name: "Full-Day Coverage (8 hours)", price: "$3,500" },
      { name: "Half-Day Coverage (4 hours)", price: "$2,000" },
      { name: "Engagement Session", price: "$500" },
    ]
  },
  {
    id: "4",
    name: "Bloom & Bramble",
    category: "Florist",
    rating: 4.8,
    reviews: 78,
    priceRange: "$$",
    location: "Old Town, Metro City",
    imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc36226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Inspired by nature's wild beauty, Bloom & Bramble creates lush, organic floral designs. We specialize in seasonal, locally-sourced flowers to create arrangements that are both stunning and sustainable. Let us bring your floral vision to life.",
    services: [
      { name: "Bridal Bouquet", price: "$250" },
      { name: "Centerpieces (each)", price: "$100" },
      { name: "Full Ceremony Arch", price: "$800" },
    ]
  },
  {
    id: "5",
    name: "Elite Beats",
    category: "Music/DJ",
    rating: 4.9,
    reviews: 150,
    priceRange: "$$$",
    location: "Entertainment Hub, Metro City",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "We set the vibe for your event. Our professional DJs and live bands are masters at reading the crowd and playing the perfect music to keep the energy high. From classic hits to modern chart-toppers, we have your soundtrack covered.",
    services: [
      { name: "DJ Package (5 hours)", price: "$1,800" },
      { name: "Live 4-Piece Band (3 hours)", price: "$4,000" },
      { name: "Ceremony Sound System", price: "$400" },
    ]
  },
  {
    id: "6",
    name: "Sweet Layers",
    category: "Bakery",
    rating: 4.7,
    reviews: 112,
    priceRange: "$$",
    location: "Sugar Hill, Metro City",
    imageUrl: "https://images.unsplash.com/photo-1587116861348-780c8408f236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Crafting edible art is our passion. Sweet Layers is renowned for its stunning wedding cakes and dessert tables that taste as incredible as they look. Using premium ingredients, we design custom creations that are the perfect sweet ending to your celebration.",
    services: [
      { name: "3-Tier Wedding Cake (serves 100)", price: "$750" },
      { name: "Dessert Table (per person)", price: "$20" },
      { name: "Custom Groom's Cake", price: "$300" },
    ]
  },
];

export const categories = [
  { name: 'Venues', icon: 'MapPin' },
  { name: 'Catering', icon: 'Utensils' },
  { name: 'Photography', icon: 'Camera' },
  { name: 'Florists', icon: 'Flower' },
  { name: 'Music', icon: 'Music' },
  { name: 'Bakery', icon: 'Cake' },
  { name: 'Planners', icon: 'ClipboardList' },
  { name: 'Attire', icon: 'Gem' },
];

export const userProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  memberSince: "June 2024",
  profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
};