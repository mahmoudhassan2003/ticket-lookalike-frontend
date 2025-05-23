import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Heart, Ticket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LanguageContext } from "../contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart, CartItem } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

// IMPORTANT: Make sure all event IDs are unique and match across the entire application
const allEvents = [
  // Family Events (Adding all family events to ensure they're findable)
  {
    id: "f2",
    title: "Disney on Ice",
    description: "Experience the magic of Disney on Ice with all your favorite characters. This enchanting show combines world-class ice skating with beloved Disney stories and music. Watch as Mickey, Minnie, and friends take you through magical Disney moments from classics like Frozen, The Lion King, and more. Perfect for audiences of all ages, this spectacular event features stunning choreography, elaborate costumes, and special effects that bring Disney magic to life on ice.",
    date: "Dec 10-15, 2025",
    time: "7:30 PM",
    location: "Barclays Center, New York",
    image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 40,
    maxPrice: 150,
    ticketLevels: [
      { name: "Premium Seats", price: 150, available: 100 },
      { name: "Standard Admission", price: 85, available: 500 },
      { name: "Family Package", price: 40, available: 250 }
    ]
  },
  {
    id: "peppa-pig",
    title: "Peppa Pig Live Show",
    description: "Join Peppa Pig and her friends for a fun-filled day of adventure in this interactive live show perfect for young children. This charming production brings the beloved characters from the hit TV show to life through puppetry, music, and audience participation. Children will be delighted as they sing along to familiar songs and watch Peppa's world unfold before their eyes. The show is specially designed for preschool audiences with just the right length and engagement level to keep little ones entertained throughout.",
    date: "Nov 5, 2025",
    time: "2:00 PM",
    location: "The SSE Arena, London",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 30,
    maxPrice: 80,
    ticketLevels: [
      { name: "VIP Meet & Greet", price: 80, available: 50 },
      { name: "Standard Admission", price: 45, available: 300 },
      { name: "Group Discount", price: 30, available: 100 }
    ]
  },
  {
    id: "science-festival",
    title: "Family Science Festival",
    description: "Explore the wonders of science with hands-on exhibits and exciting demonstrations at this educational and entertaining festival for the whole family. This interactive event features experiments, robotics displays, physics demonstrations, and opportunities to meet real scientists working in various fields. Children and adults alike will be fascinated by exhibits that make complex scientific concepts accessible and engaging. The festival is designed to spark curiosity about the natural world and inspire the next generation of scientists and engineers.",
    date: "Oct 22, 2025",
    time: "10:00 AM",
    location: "National Science Museum, Washington DC",
    image: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 25,
    maxPrice: 60,
    ticketLevels: [
      { name: "All-Access Pass", price: 60, available: 200 },
      { name: "Standard Admission", price: 35, available: 500 },
      { name: "Child Ticket (5-12)", price: 25, available: 400 }
    ]
  },
  {
    id: "lego-exhibition",
    title: "LEGO Exhibition",
    description: "Marvel at incredible LEGO creations built by master builders, featuring millions of bricks transformed into spectacular art installations and interactive displays. This exhibition showcases intricate LEGO models of famous landmarks, fantasy worlds, and engineering marvels constructed with astonishing detail and creativity. Visitors can also participate in building challenges, contribute to community LEGO projects, and learn building techniques from experts. The exhibition celebrates the endless possibilities of these beloved plastic bricks and demonstrates how they continue to inspire creativity across generations.",
    date: "Sep 18-25, 2025",
    time: "9:00 AM",
    location: "Convention Center, Chicago",
    image: "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 20,
    maxPrice: 50,
    ticketLevels: [
      { name: "Premium Package", price: 50, available: 100 },
      { name: "Standard Admission", price: 30, available: 500 },
      { name: "Child Ticket (3-12)", price: 20, available: 300 }
    ]
  },
  {
    id: "zoo-adventure",
    title: "Zoo Adventure Day",
    description: "Explore the wonders of the animal kingdom in this family-friendly zoo adventure. Meet exotic animals from around the world, enjoy interactive exhibits, and learn about wildlife conservation efforts. Perfect for families and animal enthusiasts of all ages, this event includes guided tours, feeding demonstrations, and educational presentations throughout the day.",
    date: "Jun 22, 2025",
    time: "10:00 AM",
    location: "City Zoo, Central Park",
    image: "https://images.unsplash.com/photo-1503919005314-c3e766db4b73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 25,
    maxPrice: 65,
    ticketLevels: [
      { name: "VIP Experience", price: 65, available: 75 },
      { name: "Family Pack (4 tickets)", price: 85, available: 120 },
      { name: "Standard Admission", price: 25, available: 500 }
    ]
  },
  {
    id: "marvel-experience",
    title: "Marvel Superhero Experience",
    description: "Immerse yourself in the world of Marvel superheroes with interactive exhibits, movie props, and thrilling live performances. This action-packed event brings your favorite Marvel characters to life through immersive technologies, stunt shows, and hands-on activities that let visitors experience superhero powers firsthand. Fans can take photos with costumed characters, view rare comic book collections, and explore detailed recreations of iconic scenes from the Marvel universe. With attractions designed for all ages, this experience celebrates the enduring appeal of these beloved characters and their stories.",
    date: "Jul 4, 2025",
    time: "11:00 AM",
    location: "Universal Studios, Orlando",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 50,
    maxPrice: 120,
    ticketLevels: [
      { name: "Ultimate Hero Package", price: 120, available: 50 },
      { name: "Standard Admission", price: 70, available: 300 },
      { name: "Child Ticket (3-12)", price: 50, available: 200 }
    ]
  },
  // Concerts
  {
    id: "c1",
    title: "Taylor Swift - The Eras Tour",
    description: "Experience Taylor Swift's record-breaking Eras Tour featuring music from throughout her career, stunning visuals, and unforgettable performances. This highly anticipated show celebrates the different musical eras of Taylor's career with an elaborate production featuring dazzling costumes, state-of-the-art staging, and all her greatest hits. Don't miss this once-in-a-lifetime opportunity to see one of the most influential artists of our generation live in concert.",
    date: "Jul 15, 2025",
    time: "7:00 PM",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 95,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Package", price: 350, available: 123 },
      { name: "Premium Seats", price: 195, available: 568 },
      { name: "Standard Admission", price: 95, available: 1243 }
    ]
  },
  // Add Concert events
  {
    id: "concert-bruno",
    title: "Bruno Mars World Tour",
    description: "Don't miss Bruno Mars as he brings his electrifying stage presence and chart-topping hits to this unforgettable world tour. Known for his incredible vocal range and dynamic performances, Bruno Mars delivers a high-energy show featuring his signature blend of R&B, funk, pop, soul, and reggae influences. With spectacular choreography and a world-class band, this performance promises an evening of non-stop entertainment showcasing why he remains one of music's most respected performers.",
    date: "Aug 5, 2025",
    time: "8:00 PM",
    location: "Madison Square Garden, New York",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 85,
    maxPrice: 300,
    ticketLevels: [
      { name: "VIP Experience", price: 300, available: 100 },
      { name: "Premium Seats", price: 180, available: 500 },
      { name: "Standard Admission", price: 85, available: 1500 }
    ]
  },
  {
    id: "concert-adele",
    title: "Adele Live in Concert",
    description: "Experience the emotional power and vocal mastery of Adele in this intimate live performance featuring her greatest hits and new material. With her soul-stirring voice and heartfelt songwriting, Adele creates an unforgettable connection with her audience through raw emotional performances and candid storytelling between songs. This rare live appearance showcases her extraordinary talent in an elegant setting designed to highlight the pure quality of her award-winning vocals.",
    date: "Sep 10, 2025",
    time: "7:30 PM",
    location: "O2 Arena, London",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 90,
    maxPrice: 320,
    ticketLevels: [
      { name: "Diamond Package", price: 320, available: 120 },
      { name: "Premium Seats", price: 185, available: 450 },
      { name: "Standard Admission", price: 90, available: 1200 }
    ]
  },
  {
    id: "concert-beyonce",
    title: "Beyoncé Renaissance World Tour",
    description: "Witness the queen of pop in her groundbreaking Renaissance World Tour, featuring stunning choreography, incredible vocals, and an unforgettable visual spectacle. This landmark production pushes the boundaries of live performance with revolutionary stage design, cutting-edge technology, and Beyoncé's unmatched artistic vision. Showcasing her evolution as a performer and cultural icon, the Renaissance Tour celebrates Black music history while creating a transformative, immersive experience that has redefined what audiences can expect from stadium performances.",
    date: "Oct 3, 2025",
    time: "8:00 PM",
    location: "Stade de France, Paris",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 95,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Experience", price: 350, available: 150 },
      { name: "Premium Seats", price: 200, available: 500 },
      { name: "Standard Admission", price: 95, available: 2000 }
    ]
  },
  {
    id: "concert-weeknd",
    title: "The Weeknd After Hours Tour",
    description: "Step into the cinematic world of The Weeknd's After Hours in this visually stunning live performance featuring his signature blend of R&B, pop, and electronic music. This conceptual tour immerses audiences in the dark, neon-lit aesthetic that defined his critically acclaimed album, with The Weeknd delivering powerful vocal performances against a backdrop of innovative staging and lighting design. The show's seamless production takes fans on a journey through the artist's evolving musical landscape while showcasing his growth as one of music's most compelling performers.",
    date: "Nov 12, 2025",
    time: "8:30 PM",
    location: "Scotiabank Arena, Toronto",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 85,
    maxPrice: 280,
    ticketLevels: [
      { name: "VIP Package", price: 280, available: 130 },
      { name: "Premium Seats", price: 175, available: 480 },
      { name: "Standard Admission", price: 85, available: 1800 }
    ]
  },
  {
    id: "concert-bts",
    title: "BTS World Tour",
    description: "Join the global phenomenon BTS for an explosive concert experience featuring their chart-topping hits, spectacular choreography, and unmatched connection with their dedicated ARMY fanbase. This production showcases the group's incredible versatility with segments highlighting their hip-hop roots, emotional ballads, and high-energy dance performances, all enhanced by state-of-the-art visual effects and staging. The members' individual charisma and collective harmony create an atmosphere of joy and inspiration that transcends language barriers and exemplifies why BTS has become a cultural force worldwide.",
    date: "Dec 7, 2025",
    time: "7:00 PM",
    location: "Tokyo Dome, Japan",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Concerts",
    minPrice: 100,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Experience", price: 350, available: 200 },
      { name: "Premium Seats", price: 200, available: 600 },
      { name: "Standard Admission", price: 100, available: 2500 }
    ]
  },
  // Sports
  {
    id: "s1",
    title: "Premier League: Arsenal vs. Manchester United",
    description: "Watch two Premier League giants face off in this highly anticipated match that's sure to deliver excitement and world-class football. This historic rivalry will feature some of the sport's biggest stars competing at the highest level. The electric atmosphere at Emirates Stadium for this matchup is legendary, with fans creating an unforgettable environment. Be part of one of football's greatest rivalries and witness the skill, passion and drama of Premier League football at its absolute best.",
    date: "Aug 12, 2025",
    time: "3:00 PM",
    location: "Emirates Stadium, London",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 75,
    maxPrice: 250,
    ticketLevels: [
      { name: "Premium Box", price: 250, available: 95 },
      { name: "Club Level", price: 150, available: 320 },
      { name: "General Admission", price: 75, available: 876 }
    ]
  },
  // Add Sports Events
  {
    id: "sports-nba",
    title: "NBA Finals Game 1",
    description: "Witness basketball history as the two best teams in the NBA face off in Game 1 of the championship finals. Experience the electricity of playoff basketball at its highest level as superstars compete for the ultimate prize. The atmosphere will be electric as fans pack the arena for this pivotal opening game of the series. Don't miss this opportunity to see elite athletes performing at their peak in one of sport's most prestigious events.",
    date: "Jun 4, 2025",
    time: "8:00 PM",
    location: "Madison Square Garden, New York",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 120,
    maxPrice: 950,
    ticketLevels: [
      { name: "Courtside", price: 950, available: 40 },
      { name: "Lower Level", price: 350, available: 500 },
      { name: "Upper Level", price: 120, available: 1500 }
    ]
  },
  {
    id: "sports-wimbledon",
    title: "2025 Wimbledon Men's Final",
    description: "Experience the elegance and tradition of tennis's most prestigious event as the world's best players compete on the hallowed grass courts of Wimbledon for the championship. This iconic sporting event combines athletic excellence with British tradition in a setting renowned for its beauty and history. Watch as elite athletes display extraordinary skill, mental fortitude, and sportsmanship in their pursuit of one of tennis's most coveted trophies. The atmosphere on Centre Court for the final is unmatched in the world of tennis.",
    date: "Jul 16, 2025",
    time: "2:00 PM",
    location: "All England Club, London",
    image: "https://images.unsplash.com/photo-1623068481021-099cc81cc8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 250,
    maxPrice: 4500,
    ticketLevels: [
      { name: "Centre Court - Premium", price: 4500, available: 100 },
      { name: "Centre Court - Standard", price: 1200, available: 400 },
      { name: "Ground Pass", price: 250, available: 1000 }
    ]
  },
  {
    id: "sports-ucl",
    title: "UEFA Champions League Final",
    description: "Be part of football history at the UEFA Champions League Final, the most prestigious club competition in world football. The pinnacle of European club football brings together the continent's two best teams in a spectacular showcase of skill, tactics, and passion. The electric atmosphere created by tens of thousands of passionate supporters makes this one of sport's most incredible live experiences. This is more than just a match—it's a global sporting occasion that attracts viewers from around the world.",
    date: "May 31, 2025",
    time: "8:00 PM",
    location: "Wembley Stadium, London",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 150,
    maxPrice: 900,
    ticketLevels: [
      { name: "Category 1", price: 900, available: 500 },
      { name: "Category 2", price: 450, available: 1000 },
      { name: "Category 3", price: 150, available: 2000 }
    ]
  },
  {
    id: "sports-f1",
    title: "Formula 1 Monaco Grand Prix",
    description: "Experience the glamour and excitement of motorsport's most iconic race through the streets of Monte Carlo. The prestigious Monaco Grand Prix combines technical racing challenges with the glamorous backdrop of the French Riviera. Watch as drivers navigate the tight corners and narrow streets of this legendary circuit at incredible speeds, showcasing extraordinary skill and precision. Beyond the race itself, the event offers a festival atmosphere with exclusive parties, luxury yachts in the harbor, and the chance to spot celebrities and racing legends.",
    date: "May 25, 2025",
    time: "3:00 PM",
    location: "Circuit de Monaco, Monte Carlo",
    image: "https://images.unsplash.com/photo-1541439460834-4ab9a3dd8e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 280,
    maxPrice: 1200,
    ticketLevels: [
      { name: "Grandstand K - Top", price: 1200, available: 250 },
      { name: "Grandstand T", price: 650, available: 500 },
      { name: "General Admission", price: 280, available: 1000 }
    ]
  },
  {
    id: "sports-nfl",
    title: "NFL International Series",
    description: "Experience the full spectacle of American football as the NFL brings its hard-hitting action to London in this special international series game. This transatlantic sporting event brings all the excitement, entertainment, and athleticism of American football to European fans. From the pre-game tailgate atmosphere to the cheerleaders, mascots, and half-time shows, this is an authentic NFL experience on international soil. Whether you're a dedicated NFL fan or new to the sport, this showcase game offers a unique opportunity to see elite athletes competing at the highest level.",
    date: "Oct 19, 2025",
    time: "2:30 PM",
    location: "Tottenham Hotspur Stadium, London",
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sports",
    minPrice: 80,
    maxPrice: 240,
    ticketLevels: [
      { name: "Premium Sideline", price: 240, available: 400 },
      { name: "Lower Sideline", price: 150, available: 1200 },
      { name: "Upper Level", price: 80, available: 2000 }
    ]
  },
  // Theater
  {
    id: "t1",
    title: "Hamilton",
    description: "The revolutionary musical that has taken the world by storm, telling the story of American founding father Alexander Hamilton with a blend of hip-hop, jazz, R&B, and Broadway style. Lin-Manuel Miranda's groundbreaking musical has transformed theater as we know it, earning record-setting Tony Awards, a Pulitzer Prize, and global acclaim. With its innovative blend of musical styles and diverse casting, this production brings American history to vivid life through its unforgettable score and powerful storytelling. Experience the phenomenon that continues to captivate audiences worldwide.",
    date: "Jun 15-30, 2025",
    time: "7:30 PM",
    location: "Victoria Palace Theatre, London",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 55,
    maxPrice: 195,
    ticketLevels: [
      { name: "Premium Orchestra", price: 195, available: 110 },
      { name: "Orchestra", price: 125, available: 320 },
      { name: "Mezzanine", price: 55, available: 520 }
    ]
  },
  // Add Theater Events
  {
    id: "theater-phantom",
    title: "The Phantom of the Opera",
    description: "Experience the timeless romance and breathtaking spectacle of Andrew Lloyd Webber's iconic musical, The Phantom of the Opera. Set in the Paris Opera House, this legendary production tells the story of a masked figure who lurks beneath the catacombs, exercising a reign of terror over all who inhabit it. With its stunning sets, magnificent costumes, and unforgettable score including 'The Music of the Night' and 'All I Ask of You,' this show continues to mesmerize audiences with its powerful storytelling and technical brilliance. Don't miss the chance to see the longest-running show in Broadway history.",
    date: "Jul 5-20, 2025",
    time: "7:30 PM",
    location: "Her Majesty's Theatre, London",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 50,
    maxPrice: 185,
    ticketLevels: [
      { name: "Premium Stalls", price: 185, available: 100 },
      { name: "Dress Circle", price: 120, available: 300 },
      { name: "Upper Circle", price: 50, available: 500 }
    ]
  },
  {
    id: "theater-les-mis",
    title: "Les Misérables",
    description: "Witness the epic tale of broken dreams, passionate love, sacrifice and redemption in this beloved musical phenomenon. Set against the backdrop of 19th-century revolutionary France, Les Misérables follows the story of ex-convict Jean Valjean and his pursuit of redemption. With its magnificent score featuring songs like 'I Dreamed a Dream,' 'On My Own,' and 'One Day More,' this production continues to move audiences with its powerful storytelling and emotional intensity. The show's themes of justice, courage, and love resonate as strongly today as when Victor Hugo first published his masterpiece in 1862.",
    date: "Aug 10-25, 2025",
    time: "7:30 PM",
    location: "Sondheim Theatre, London",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 45,
    maxPrice: 175,
    ticketLevels: [
      { name: "Premium Stalls", price: 175, available: 120 },
      { name: "Dress Circle", price: 110, available: 350 },
      { name: "Grand Circle", price: 45, available: 550 }
    ]
  },
  {
    id: "theater-lion-king",
    title: "The Lion King",
    description: "Experience the awe-inspiring visual artistry, unforgettable music, and unique theatrical storytelling of Disney's multi-award-winning musical, The Lion King. Julie Taymor's innovative direction and design transforms the African savannah into a wonderland of color and movement through the use of masks, puppets, and stunning costumes. Elton John and Tim Rice's Academy Award-winning score is expanded with evocative African rhythms and choruses to create a powerful musical experience. From the opening sequence of animals gathering at Pride Rock to the final triumphant scene, this spectacular production will captivate audiences of all ages.",
    date: "Sep 5-20, 2025",
    time: "7:30 PM",
    location: "Lyceum Theatre, London",
    image: "https://images.unsplash.com/photo-1583004231508-e462638c634a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 55,
    maxPrice: 190,
    ticketLevels: [
      { name: "Premium Stalls", price: 190, available: 110 },
      { name: "Royal Circle", price: 125, available: 320 },
      { name: "Grand Circle", price: 55, available: 520 }
    ]
  },
  {
    id: "theater-wicked",
    title: "Wicked",
    description: "Discover the untold story of the witches of Oz in this spellbinding musical that reveals the events that shaped the destinies of two unlikely friends. Long before Dorothy arrives in Oz, there is another young woman, born with emerald-green skin, who is smart, fiery, and misunderstood. When she meets a bubbly blonde who is exceptionally popular, their initial rivalry turns into the most unexpected friendship—until the world decides to call one 'good' and the other 'wicked.' With thrilling technical spectacle and powerhouse musical numbers like 'Defying Gravity,' Wicked provides a fresh perspective on a story you only thought you knew.",
    date: "Oct 10-25, 2025",
    time: "7:30 PM",
    location: "Apollo Victoria Theatre, London",
    image: "https://images.unsplash.com/photo-1568085874298-f67cb4fbd92f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 45,
    maxPrice: 175,
    ticketLevels: [
      { name: "Premium Stalls", price: 175, available: 130 },
      { name: "Dress Circle", price: 115, available: 350 },
      { name: "Upper Circle", price: 45, available: 600 }
    ]
  },
  {
    id: "theater-matilda",
    title: "Matilda The Musical",
    description: "Based on Roald Dahl's beloved novel, this award-winning musical celebrates the power of imagination and the inspiring story of a girl who dreams of a better life. Packed with high-energy dance numbers and catchy songs by comedian Tim Minchin, Matilda The Musical tells the story of an extraordinary little girl who, armed with a vivid imagination and a sharp mind, dares to take a stand and change her own destiny. With its combination of enchanting storytelling, captivating performances, and technical innovation, this Royal Shakespeare Company production continues to delight audiences of all ages and proves that sometimes you have to be a little bit naughty to make things right.",
    date: "Nov 5-20, 2025",
    time: "7:30 PM",
    location: "Cambridge Theatre, London",
    image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Theater",
    minPrice: 40,
    maxPrice: 160,
    ticketLevels: [
      { name: "Premium Stalls", price: 160, available: 100 },
      { name: "Stalls", price: 110, available: 300 },
      { name: "Circle", price: 40, available: 500 }
    ]
  },
  // Comedy
  {
    id: "c2",
    title: "Kevin Hart - Comedy Tour",
    description: "Join Kevin Hart for a night of laughter as he brings his signature comedy style to the stage with all-new material and hilarious insights. One of the world's most successful comedians returns with his newest tour, delivering his trademark high-energy performance and relatable observational humor. Hart's infectious energy and masterful storytelling create an evening of non-stop entertainment that will have you laughing from start to finish. Experience firsthand why Kevin Hart has become a global comedy phenomenon in this exclusive live show.",
    date: "Sep 3, 2025",
    time: "8:00 PM",
    location: "Madison Square Garden, New York",
    image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
    category: "Comedy",
    minPrice: 85,
    maxPrice: 200,
    ticketLevels: [
      { name: "VIP Meet & Greet", price: 200, available: 75 },
      { name: "Premium Seats", price: 150, available: 245 },
      { name: "Standard Admission", price: 85, available: 890 }
    ]
  },
  // Add Dave Chappelle event
  {
    id: "comedy-dave",
    title: "Dave Chappelle Live",
    description: "Legendary comedian Dave Chappelle returns to the stage with his unfiltered and thought-provoking comedy. Known for his sharp wit and societal observations, Chappelle continues to push boundaries and challenge audiences with his unique perspective. His masterful storytelling and incisive commentary have earned him critical acclaim and a devoted following worldwide. This exclusive performance showcases why Dave Chappelle remains one of the most important and influential voices in comedy today.",
    date: "Oct 15, 2025",
    time: "8:00 PM",
    location: "The O2, London",
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 95,
    maxPrice: 250,
    ticketLevels: [
      { name: "VIP Experience", price: 250, available: 85 },
      { name: "Premium Seating", price: 175, available: 245 },
      { name: "Standard Admission", price: 95, available: 780 }
    ]
  },
  // Add remaining comedy events
  {
    id: "comedy-trevor",
    title: "Trevor Noah World Tour",
    description: "Former Daily Show host Trevor Noah brings his globally successful tour to audiences with fresh, hilarious material that showcases his unique worldview and storytelling abilities. Combining his signature charm, intelligence, and cross-cultural observations, Noah offers insightful commentary on current events and personal experiences that resonates with diverse audiences. His ability to find humor in complex social issues while maintaining thoughtful perspective has established him as one of comedy's most respected voices.",
    date: "Nov 8, 2025",
    time: "7:30 PM",
    location: "Sydney Opera House, Australia",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 75,
    maxPrice: 180,
    ticketLevels: [
      { name: "VIP Package", price: 180, available: 100 },
      { name: "Premium Seats", price: 130, available: 250 },
      { name: "Standard Admission", price: 75, available: 650 }
    ]
  },
  {
    id: "comedy-mulaney",
    title: "John Mulaney - From Scratch",
    description: "Emmy Award-winning writer and comedian John Mulaney delivers his newest stand-up show with the precision and polish that have made him one of comedy's most celebrated performers. Combining impeccable timing, brilliant storytelling, and his distinctively stylized delivery, Mulaney presents an all-new collection of observations and personal stories. His meticulously crafted material and charming stage presence create an evening of sophisticated comedy that showcases his evolution as both a writer and performer.",
    date: "Dec 1, 2025",
    time: "8:00 PM",
    location: "Radio City Music Hall, New York",
    image: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 80,
    maxPrice: 195,
    ticketLevels: [
      { name: "VIP Experience", price: 195, available: 120 },
      { name: "Premium Orchestra", price: 125, available: 340 },
      { name: "Standard Admission", price: 80, available: 780 }
    ]
  },
  {
    id: "comedy-gervais",
    title: "Ricky Gervais: SuperNature",
    description: "Ricky Gervais returns with his characteristically provocative and uncompromising stand-up show that tackles taboo subjects with his trademark irreverent humor. Never one to shy away from controversial topics, Gervais delivers razor-sharp observations on modern society with his distinctively acerbic wit. This unapologetically honest performance tackles everything from human nature to celebrity culture and political correctness, showcasing Gervais's skill at crafting comedy that pushes boundaries while revealing deeper truths about contemporary life.",
    date: "Jan 20, 2026",
    time: "7:30 PM",
    location: "Royal Albert Hall, London",
    image: "https://images.unsplash.com/photo-1523251343397-9225e4cb6319?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 90,
    maxPrice: 220,
    ticketLevels: [
      { name: "VIP Meet & Greet", price: 220, available: 85 },
      { name: "Premium Circle", price: 155, available: 270 },
      { name: "Standard Admission", price: 90, available: 730 }
    ]
  },
  {
    id: "comedy-schumer",
    title: "Amy Schumer Live",
    description: "Award-winning comedian, actress, and writer Amy Schumer brings her bold and unapologetic comedy to this exclusive live show. Known for her fearless approach to controversial topics and personal stories, Schumer delivers a night of laugh-out-loud entertainment that combines sharp social commentary with disarming honesty. Her unique perspective on relationships, body image, and modern culture has made her one of today's most influential comic voices. Don't miss this opportunity to see one of comedy's most authentic and hilarious performers live on stage.",
    date: "Feb 14, 2026",
    location: "Hollywood Bowl, Los Angeles",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1508252592163-5d3c3c559269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 70,
    maxPrice: 190,
    ticketLevels: [
      { name: "VIP Experience", price: 190, available: 90 },
      { name: "Premium Seats", price: 120, available: 250 },
      { name: "Standard Admission", price: 70, available: 700 }
    ]
  },
  // Festival events
  {
    id: "f1",
    title: "Glastonbury Festival 2025",
    description: "Experience the world's most famous music and performing arts festival. Held at Worthy Farm in Somerset, this iconic event features hundreds of musical performances across multiple stages, as well as theater, circus, cabaret, and other arts. With its rich history dating back to 1970, Glastonbury has become a cultural institution that showcases both established superstars and emerging talent in a unique festival atmosphere.",
    date: "Jun 25-29, 2025",
    time: "All Day",
    location: "Worthy Farm, Somerset, UK",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 299.99,
    maxPrice: 450.00,
    ticketLevels: [
      { name: "General Admission", price: 299.99, available: 10000 },
      { name: "VIP Experience", price: 450.00, available: 2000 },
      { name: "Camping Add-on", price: 75.00, available: 8000 }
    ]
  },
  {
    id: "f3",
    title: "Tomorrowland 2025",
    description: "Join the magical world of Tomorrowland, one of the biggest electronic dance music festivals in the world. This spectacular event transforms the grounds of Boom, Belgium into an elaborate fantasy world with incredible stage designs, world-class production, and performances from the best DJs and producers in electronic music. The festival is known for its community atmosphere where people from all over the globe unite to celebrate music, friendship, and life.",
    date: "Jul 17-26, 2025",
    time: "12:00 PM",
    location: "Boom, Belgium",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 375.50,
    maxPrice: 695.00,
    ticketLevels: [
      { name: "Full Madness Pass", price: 375.50, available: 15000 },
      { name: "Comfort Pass", price: 525.00, available: 5000 },
      { name: "VIP Full Madness", price: 695.00, available: 2000 }
    ]
  },
  {
    id: "f4",
    title: "Reading & Leeds Festival",
    description: "Experience the twin festivals that take place simultaneously in Reading and Leeds, featuring some of the biggest names in rock, indie, punk, and electronic music. With a history spanning over 50 years, these festivals have become a rite of passage for music fans in the UK. Multiple stages showcase diverse acts ranging from established headliners to exciting newcomers, creating an unforgettable weekend of live music and festival culture.",
    date: "Aug 22-24, 2025",
    time: "11:00 AM",
    location: "Reading & Leeds, UK",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 249.99,
    maxPrice: 375.00,
    ticketLevels: [
      { name: "Weekend Ticket", price: 249.99, available: 20000 },
      { name: "Weekend Ticket + Camping", price: 299.99, available: 15000 },
      { name: "VIP Experience", price: 375.00, available: 3000 }
    ]
  },
  {
    id: "f5",
    title: "Ultra Music Festival",
    description: "Ultra Music Festival is the world's premier electronic music festival, bringing together the biggest DJs and producers for an unforgettable weekend in Miami. Featuring state-of-the-art production, multiple stages, and stunning visual effects, this festival showcases every genre of electronic music from house to techno, trance, drum and bass, and beyond. The electric atmosphere and Miami setting make Ultra a bucket-list event for dance music fans from around the globe.",
    date: "Mar 28-30, 2025",
    time: "4:00 PM",
    location: "Miami, Florida",
    image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 399.00,
    maxPrice: 750.00,
    ticketLevels: [
      { name: "General Admission", price: 399.00, available: 30000 },
      { name: "Premium General Admission", price: 525.00, available: 10000 },
      { name: "VIP Experience", price: 750.00, available: 5000 }
    ]
  },
  {
    id: "f6",
    title: "Burning Man",
    description: "Burning Man is not just a festival but a temporary city and community that emerges in Nevada's Black Rock Desert. This unique event is dedicated to art, self-expression, and self-reliance, culminating in the burning of a large wooden effigy. Participants create elaborate art installations, mutant vehicles, and themed camps in the midst of the harsh desert environment. With no official entertainment or vendors, Burning Man operates on principles of gifting, decommodification, and radical self-reliance, creating an experience unlike any other event in the world.",
    date: "Aug 24 - Sep 1, 2025",
    time: "All Day",
    location: "Black Rock Desert, Nevada",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 475.00,
    maxPrice: 1250.00,
    ticketLevels: [
      { name: "Main Sale Ticket", price: 475.00, available: 20000 },
      { name: "FOMO Sale Ticket", price: 650.00, available: 5000 },
      { name: "Vehicle Pass", price: 140.00, available: 15000 }
    ]
  }
];

export default function EventDetail() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  
  // Super detailed debugging to diagnose the issue
  console.log("EventDetail component rendering");
  console.log("URL parameter eventId:", eventId);
  console.log("eventId type:", typeof eventId);
  console.log("All available event IDs:", allEvents.map(e => e.id));
  
  useEffect(() => {
    console.log("EventDetail useEffect running");
    console.log("Looking for event with ID:", eventId);
    
    // Check exact string matching
    const exactMatches = allEvents.filter(e => e.id === eventId);
    console.log("Exact ID matches found:", exactMatches.length);
    
    // Try other comparisons for debugging
    const looseMatches = allEvents.filter(e => String(e.id).toLowerCase() === String(eventId).toLowerCase());
    console.log("Case-insensitive matches found:", looseMatches.length);
    
    if (exactMatches.length === 0 && looseMatches.length > 0) {
      console.log("Found case-insensitive match but not exact match. Check your event IDs!");
    }
    
    console.log("All event IDs for reference:");
    allEvents.forEach((e, index) => {
      console.log(`${index}: "${e.id}" (${typeof e.id}, length: ${e.id.length})`);
    });
  }, [eventId]);
  
  // Default to first ticket if available
  const handleAddToCart = () => {
    const event = allEvents.find(event => event.id === eventId);
    if (event) {
      // Select the first ticket level by default
      const defaultTicket = event.ticketLevels[0];
      const cartItem: CartItem = {
        id: event.id,
        title: event.title,
        quantity: 1,
        price: defaultTicket.price,
        ticketType: defaultTicket.name,
        image: event.image,
        date: event.date
      };
      addToCart(cartItem);
      toast({
        title: "Added to cart",
        description: `${event.title} has been added to your cart.`,
      });
    }
  };
  
  const handleAddToWishlist = () => {
    const event = allEvents.find(event => event.id === eventId);
    if (event) {
      const wishlistItem = {
        id: event.id,
        title: event.title,
        image: event.image,
        date: event.date,
        location: event.location,
        category: event.category,
        price: event.minPrice // Using minimum price for wishlist
      };
      addToWishlist(wishlistItem);
      toast({
        title: "Added to wishlist",
        description: `${event.title} has been added to your wishlist.`,
      });
    }
  };

  // Explicitly cast both to strings and trim to ensure proper comparison
  const currentEvent = allEvents.find(event => 
    String(event.id).trim() === String(eventId).trim()
  );
  
  // Detailed debugging
  console.log("Current event found:", currentEvent ? "Yes" : "No");
  if (currentEvent) {
    console.log("Event details:", {
      id: currentEvent.id,
      title: currentEvent.title,
      category: currentEvent.category
    });
  } else {
    console.log("NO EVENT FOUND WITH ID:", eventId);
    console.log("Available IDs:", allEvents.map(e => e.id));
    
    // Log ID comparison details for the first few events
    console.log("ID comparison details:");
    for (let i = 0; i < Math.min(5, allEvents.length); i++) {
      const event = allEvents[i];
      console.log(`Comparing "${event.id}" (${typeof event.id}) with "${eventId}" (${typeof eventId}): ${event.id === eventId}`);
      console.log(`String comparison: "${String(event.id)}" === "${String(eventId)}": ${String(event.id) === String(eventId)}`);
    }
  }
  
  if (!currentEvent) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Event not found</h1>
          <p className="text-gray-600 mb-4">We couldn't find an event with ID: {eventId}</p>
          <Button 
            className="bg-ticket-blue hover:bg-ticket-lightBlue"
            onClick={() => navigate("/")}
          >
            Return to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <img src={currentEvent.image} alt={currentEvent.title} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <Badge variant="outline" className="mb-2">{currentEvent.category}</Badge>
            <h1 className="text-3xl font-bold mb-4">{currentEvent.title}</h1>
            <p className="text-gray-600 mb-6">{currentEvent.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 text-ticket-blue" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{currentEvent.date}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="mr-2 text-ticket-blue" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{currentEvent.time}</p>
                </div>
              </div>
              
              <div className="flex items-center col-span-1 md:col-span-2">
                <MapPin className="mr-2 text-ticket-blue" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{currentEvent.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Tickets Available</h2>
              <div className="border rounded-lg divide-y">
                {currentEvent.ticketLevels.map((ticket, index) => (
                  <div key={index} className="p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{ticket.name}</p>
                      <p className="text-sm text-gray-500">{ticket.available} remaining</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-ticket-blue">${ticket.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                className="w-full sm:w-auto bg-ticket-blue hover:bg-ticket-lightBlue flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <Ticket className="mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-ticket-blue text-ticket-blue hover:bg-ticket-blue/10 flex items-center justify-center"
                onClick={handleAddToWishlist}
              >
                <Heart className="mr-2" />
                Add to Wishlist
              </Button>
              
              <Button 
                variant="outline"
                className="w-full sm:w-auto flex items-center justify-center"
              >
                <Share2 className="mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
