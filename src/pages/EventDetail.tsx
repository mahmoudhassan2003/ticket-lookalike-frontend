
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
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const allEvents = [
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
    description: "Award-winning comedian, actress, and writer Amy Schumer brings her bold and unapologetic comedic style to the stage in this highly anticipated live show. Known for her candid approach to topics ranging from sex and relationships to body image and motherhood, Schumer delivers brutally honest and hilariously relatable material drawn from her own life experiences. Her fearless comedy and feminist perspective have established her as one of the most influential voices in contemporary comedy, earning her a devoted following across multiple entertainment platforms.",
    date: "Feb 14, 2026",
    time: "8:00 PM",
    location: "Hollywood Bowl, Los Angeles",
    image: "https://images.unsplash.com/photo-1508252592163-5d3c3c559269?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Comedy",
    minPrice: 70,
    maxPrice: 175,
    ticketLevels: [
      { name: "VIP Package", price: 175, available: 110 },
      { name: "Premium Seats", price: 125, available: 320 },
      { name: "Standard Admission", price: 70, available: 900 }
    ]
  },
  // Festivals
  {
    id: "f1",
    title: "Glastonbury Festival 2025",
    description: "The legendary music and performing arts festival returns with a stellar lineup of artists across multiple stages, offering an unforgettable experience for music lovers. For five days, Worthy Farm transforms into a magical city of music, art, and culture featuring hundreds of performances across dozens of stages. From headline acts on the Pyramid Stage to emerging artists and immersive experiences throughout the vast festival grounds, Glastonbury offers something for everyone. Join over 200,000 festival-goers for this iconic British institution that continues to define festival culture worldwide.",
    date: "Jun 25-29, 2025",
    time: "All Day",
    location: "Worthy Farm, Somerset, UK",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 120,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Weekend Pass", price: 350, available: 250 },
      { name: "Weekend Pass + Camping", price: 220, available: 5000 },
      { name: "Weekend Pass", price: 120, available: 8000 }
    ]
  },
  // Add Festival Events
  {
    id: "festival-coachella",
    title: "Coachella Valley Music & Arts Festival",
    description: "Experience the world-renowned music and arts festival that combines top musical acts with stunning art installations in the beautiful Southern California desert. Spanning two weekends, Coachella features performances across multiple stages from mainstream headliners to emerging artists across various genres including rock, indie, hip hop, and electronic dance music. Beyond the music, the festival offers an immersive experience with large-scale art installations, gourmet food vendors, and a fashion scene that has become as notable as the performances themselves. The festival's unique desert setting creates a magical atmosphere as the sun sets behind the mountains and lights transform the venue into an otherworldly landscape.",
    date: "Apr 10-19, 2025",
    time: "All Day",
    location: "Indio, California",
    image: "https://images.unsplash.com/photo-1535086181678-5a5c4d23aa7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 150,
    maxPrice: 999,
    ticketLevels: [
      { name: "VIP Weekend Pass", price: 999, available: 1000 },
      { name: "Weekend 1 Pass", price: 499, available: 5000 },
      { name: "Weekend 2 Pass", price: 150, available: 5000 }
    ]
  },
  {
    id: "festival-tomorrowland",
    title: "Tomorrowland 2025",
    description: "Step into a fantastical world of electronic dance music at Tomorrowland, one of the largest and most notable music festivals globally. What sets Tomorrowland apart is its extraordinary attention to detail in creating an immersive fairytale environment with elaborate stage designs, decorations, and special effects that transport attendees to another world. The festival features performances from the world's top DJs and producers across multiple uniquely designed stages. With attendees from over 200 countries, Tomorrowland creates a global community united by their love of music, dancing, and the festival's message of unity and love.",
    date: "Jul 17-26, 2025",
    time: "12:00 PM - 1:00 AM",
    location: "Boom, Belgium",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 180,
    maxPrice: 895,
    ticketLevels: [
      { name: "Full Madness VIP Pass", price: 895, available: 2000 },
      { name: "Full Madness Pass", price: 450, available: 10000 },
      { name: "Weekend Pass", price: 180, available: 15000 }
    ]
  },
  {
    id: "festival-reading",
    title: "Reading & Leeds Festival",
    date: "Aug 22-24, 2025",
    description: "Experience one of the UK's most iconic and long-running music festivals featuring multiple stages with diverse lineups spanning rock, indie, punk, hip-hop, dance, and alternative music. Taking place simultaneously across two locations, Reading and Leeds Festivals share the same lineup with artists rotating between the two sites throughout the weekend. The festivals have a rich history of hosting legendary performances and offering a platform for both established headliners and emerging artists. Beyond the main stages, attendees can enjoy comedy tents, silent discos, fairground rides, and a festival atmosphere that embodies British music culture at its most vibrant and diverse.",
    time: "11:00 AM - 11:00 PM",
    location: "Reading & Leeds, UK",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 110,
    maxPrice: 350,
    ticketLevels: [
      { name: "VIP Weekend + Camping", price: 350, available: 3000 },
      { name: "Weekend + Camping", price: 240, available: 10000 },
      { name: "Day Ticket", price: 110, available: 5000 }
    ]
  },
  {
    id: "festival-ultra",
    title: "Ultra Music Festival",
    description: "Ultra Music Festival transforms downtown Miami into an electronic music paradise with world-class production, cutting-edge technology, and performances from the biggest names in EDM. The flagship event of Miami Music Week features multiple stages showcasing various sub-genres of electronic music, from mainstream EDM to underground techno and house. Known for its spectacular production values, Ultra features massive LED displays, advanced lighting systems, pyrotechnics, and special effects that create an unparalleled sensory experience. The festival's downtown setting against the backdrop of the Miami skyline creates a unique urban festival environment that attracts dance music fans from around the globe.",
    date: "Mar 28-30, 2025",
    time: "4:00 PM - 12:00 AM",
    location: "Miami, Florida",
    image: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 150,
    maxPrice: 750,
    ticketLevels: [
      { name: "VIP 3-Day Pass", price: 750, available: 1500 },
      { name: "Premium 3-Day Pass", price: 400, available: 5000 },
      { name: "General Admission", price: 150, available: 15000 }
    ]
  },
  {
    id: "festival-burning",
    title: "Burning Man",
    description: "More than just a festival, Burning Man is a temporary city and community dedicated to radical self-expression, self-reliance, and art in Nevada's Black Rock Desert. Unlike traditional festivals, Burning Man operates on principles including decommodification (no commercial sponsorships or transactions), gifting, and leaving no trace. Participants collaboratively build Black Rock City, featuring extraordinary art installations, theme camps, and mutant vehicles across the desert landscape. The event culminates in the ceremonial burning of a large wooden effigy ('the Man'). This transformative experience emphasizes participation over spectating, with attendees expected to contribute to the community through art, performances, workshops, or services.",
    date: "Aug 24 - Sep 1, 2025",
    time: "All Day",
    location: "Black Rock Desert, Nevada",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Festivals",
    minPrice: 475,
    maxPrice: 1200,
    ticketLevels: [
      { name: "Vehicle Pass + Ticket", price: 1200, available: 5000 },
      { name: "Main Sale Ticket", price: 750, available: 20000 },
      { name: "Low Income Ticket", price: 475, available: 5000 }
    ]
  },
  // Family
{
  id: "f2",
  title: "Disney on Ice",
  description: "A magical experience featuring your favorite Disney characters skating live.",
  date: "Dec 10-15, 2025",
  location: "Barclays Center, New York",
  image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Family",
  price: 39.99
},
{
  id: "f3",
  title: "Peppa Pig Live Show",
  description: "Bring the kids to this interactive, fun-filled performance with Peppa and friends!",
  date: "Nov 5, 2025",
  location: "The SSE Arena, London",
  image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Family",
  price: 29.99
},
{
  id: "f4",
  title: "Science Museum Family Day",
  description: "An educational and fun day at the museum with interactive exhibits for all ages.",
  date: "Oct 20, 2025",
  location: "Science Museum, Chicago",
  image: "https://images.unsplash.com/photo-1581091215367-59f0b3c58aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  category: "Family",
  price: 19.99
},

  // Near Me
  {
    id: "n1",
    title: "Local Food Festival",
    description: "Experience the best local cuisine and beverages, with food trucks, chef demonstrations, tastings, and live music in a festive atmosphere. This celebration of culinary culture brings together the region's top restaurants, food artisans, breweries, and wineries for an immersive gastronomic experience. Enjoy cooking demonstrations from renowned chefs, participate in interactive workshops, and savor unlimited samples from over 50 different vendors. With live music performances throughout the day and activities for all ages, this food festival offers a delicious day out for foodies and families alike.",
    date: "Jun 5, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Central Park, New York",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 15,
    maxPrice: 45,
    ticketLevels: [
      { name: "VIP Experience", price: 45, available: 100 },
      { name: "Early Access Pass", price: 25, available: 300 },
      { name: "General Admission", price: 15, available: 1000 }
    ]
  },
  // Add Near Me Events
  {
    id: "nearme-art",
    title: "Neighborhood Art Exhibition",
    description: "Discover works by talented local artists at this community exhibition showcasing diverse styles and mediums in an accessible gallery setting. This curated show brings together emerging and established artists from across the borough, featuring paintings, photography, sculpture, and mixed media pieces that reflect the neighborhood's rich cultural diversity. Visitors can engage directly with many of the artists who will be present throughout the exhibition to discuss their work and creative processes. The opening night reception includes complimentary refreshments and live acoustic performances by local musicians, creating a welcoming environment to appreciate art and connect with the creative community.",
    date: "Jun 12, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Community Gallery, Brooklyn",
    image: "https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 10,
    maxPrice: 25,
    ticketLevels: [
      { name: "Opening Night Reception", price: 25, available: 200 },
      { name: "Weekend Pass", price: 15, available: 500 },
      { name: "Standard Admission", price: 10, available: 1000 }
    ]
  },
  {
    id: "nearme-jazz",
    title: "Local Jazz Night",
    description: "Enjoy an intimate evening of world-class jazz performances featuring acclaimed local musicians in the legendary Blue Note Jazz Club. This special neighborhood showcase presents a rotating lineup of the city's finest jazz talents performing both original compositions and innovative interpretations of classic standards. The venue's exceptional acoustics and intimate setting create the perfect environment to appreciate the nuanced performances and improvisational brilliance of these accomplished musicians. The club's sophisticated yet relaxed atmosphere, combined with its reputation for musical excellence, makes this event a must-attend for both dedicated jazz aficionados and casual listeners looking for an authentic New York cultural experience.",
    date: "Jun 18, 2025",
    time: "8:00 PM & 10:30 PM",
    location: "Blue Note Jazz Club, Manhattan",
    image: "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 25,
    maxPrice: 65,
    ticketLevels: [
      { name: "VIP Table Seating", price: 65, available: 50 },
      { name: "Premium Bar Seating", price: 45, available: 100 },
      { name: "General Admission", price: 25, available: 200 }
    ]
  },
  {
    id: "nearme-theater",
    title: "Community Theater Show",
    description: "Support local talent at this engaging community theater production that combines professional direction with the passion of neighborhood performers. This season's production brings a fresh interpretation to a beloved classic, featuring a diverse cast of talented community members working alongside theater professionals. The intimate venue creates an immersive experience where audiences feel connected to the performance and can appreciate the detailed set design and thoughtful lighting that elevate this community production. After selected performances, attendees can participate in talk-back sessions with the cast and crew to learn about the creative process and the challenges and rewards of community theater.",
    date: "Jun 25, 2025",
    time: "7:30 PM",
    location: "Village Playhouse, Queens",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 20,
    maxPrice: 45,
    ticketLevels: [
      { name: "Front Row Seats", price: 45, available: 30 },
      { name: "Premium Seating", price: 35, available: 100 },
      { name: "General Admission", price: 20, available: 200 }
    ]
  },
  {
    id: "nearme-sports",
    title: "Local Sports Tournament",
    description: "Cheer on neighborhood athletes competing in this exciting multi-sport tournament featuring basketball, soccer, and volleyball matches for all ages. This community sporting event brings together teams from across the borough in a celebration of athletic achievement and friendly competition. Spectators can enjoy watching matches across multiple courts and fields simultaneously, with food vendors and family activities available throughout the day. The tournament emphasizes good sportsmanship and community building, with proceeds supporting youth sports programs in under-resourced neighborhoods. Whether you're coming to support specific athletes or simply enjoy a day of quality local sports, this event offers entertainment for sports enthusiasts of all kinds.",
    date: "Jul 8, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "City Sports Center, Bronx",
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 5,
    maxPrice: 30,
    ticketLevels: [
      { name: "Tournament Pass", price: 30, available: 200 },
      { name: "Day Pass", price: 15, available: 500 },
      { name: "Single Game Ticket", price: 5, available: 1000 }
    ]
  },
  {
    id: "nearme-market",
    title: "Weekend Farmer's Market",
    description: "Browse fresh produce, artisanal foods, handcrafted goods, and unique finds at this vibrant local market that's become a neighborhood institution. Every Saturday, this market transforms Union Square into a bustling hub where over 140 regional farmers, bakers, and craftspeople offer their finest products. Visitors can sample seasonal fruits and vegetables, specialty breads, cheeses, wines, and prepared foods while chatting directly with the producers. Beyond shopping, the market features cooking demonstrations using in-season ingredients, live acoustic music, and children's activities. The market operates year-round, adapting its offerings to showcase the best of each season while maintaining its commitment to supporting sustainable local agriculture and small businesses.",
    date: "Every Saturday",
    time: "8:00 AM - 2:00 PM",
    location: "Union Square, Manhattan",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Local",
    minPrice: 0,
    maxPrice: 0,
    ticketLevels: [
      { name: "Free Entry", price: 0, available: 9999 }
    ]
  },
  // Family
  {
    id: "f2",
    title: "Disney on Ice",
    description: "A magical experience for the whole family featuring beloved Disney characters performing amazing ice skating routines to your favorite Disney songs. Watch in wonder as your favorite Disney stories come to life through world-class ice skating, elaborate costumes, and stunning special effects. Characters from Frozen, Moana, The Lion King, and more will dazzle audiences with spectacular choreography and heartwarming performances. This enchanting production creates lasting memories for Disney fans of all ages, combining the athleticism of professional skating with the magic of classic Disney storytelling.",
    date: "Dec 10-15, 2025",
    time: "Various Times",
    location: "Barclays Center, New York",
    image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Family",
    minPrice: 45,
    maxPrice: 125,
    ticketLevels: [
      { name: "VIP Rinkside", price: 125, available: 150 },
      { name: "Lower Bowl", price: 85, available: 620 },
      { name: "Upper Bowl", price: 45, available: 1300 }
    ]
  }
];

const EventDetail = () => {
  const { eventId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isRTL = language === 'ar';
  const [quantity, setQuantity] = useState(1);
  const [selectedTicketType, setSelectedTicketType] = useState(0);

  // Find the event by ID
  const event = allEvents.find(e => e.id === eventId);
  
  // If event doesn't exist, redirect to 404
  useEffect(() => {
    if (!event && eventId) {
      navigate('/not-found');
    }
  }, [event, eventId, navigate]);
  
  // Return early if no event found
  if (!event) {
    return null;
  }
  
  const eventInWishlist = isInWishlist(event.id);
  
  const translations = {
    en: {
      bookTickets: "Book Tickets",
      ticketsAvailable: "Tickets Available",
      date: "Date",
      time: "Time",
      venue: "Venue",
      backToEvents: "Back to Events",
      shareEvent: "Share Event",
      addToWishlist: "Add to Wishlist",
      removeFromWishlist: "Remove from Wishlist",
      selectTickets: "Select Tickets",
      quantity: "Quantity",
      totalPrice: "Total Price",
      proceedToCheckout: "Add to Cart",
      categoryLabel: "Event Type",
      ticketsAdded: "Tickets added to cart!",
      ticketsAddedDesc: "You can proceed to checkout now.",
    },
    ar: {
      bookTickets: "حجز التذاكر",
      ticketsAvailable: "التذاكر المتاحة",
      date: "التاريخ",
      time: "الوقت",
      venue: "المكان",
      backToEvents: "العودة إلى الفعاليات",
      shareEvent: "مشاركة الحدث",
      addToWishlist: "أضف إلى المفضلة",
      removeFromWishlist: "إزالة من المفضلة",
      selectTickets: "اختر التذاكر",
      quantity: "الكمية",
      totalPrice: "السعر الإجمالي",
      proceedToCheckout: "أضف إلى العربة",
      categoryLabel: "نوع الحدث",
      ticketsAdded: "تمت إضافة التذاكر إلى سلة التسوق!",
      ticketsAddedDesc: "يمكنك المتابعة إلى الدفع الآن.",
    }
  };
  
  const t = translations[language];
  
  const handleBooking = () => {
    addToCart({
      id: event.id,
      title: event.title,
      quantity: quantity,
      price: event.ticketLevels[selectedTicketType].price,
      ticketType: event.ticketLevels[selectedTicketType].name,
      image: event.image,
      date: event.date
    });
    
    toast({
      title: t.ticketsAdded,
      description: t.ticketsAddedDesc,
    });
  };
  
  const calculateTotal = () => {
    return (event.ticketLevels[selectedTicketType].price * quantity).toFixed(2);
  };

  const toggleWishlist = () => {
    if (eventInWishlist) {
      removeFromWishlist(event.id);
    } else {
      addToWishlist({
        id: event.id,
        title: event.title,
        image: event.image,
        date: event.date,
        location: event.location,
        category: event.category,
        price: event.minPrice
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Badge className="mb-2 bg-ticket-blue text-white">{event.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{event.title}</h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Calendar size={18} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Event Details */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-2 mb-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/" className="flex items-center">
                    <ArrowLeft size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                    {t.backToEvents}
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 size={16} className={`${isRTL ? 'ml-1' : 'mr-1'}`} />
                  {t.shareEvent}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={toggleWishlist}
                  className={eventInWishlist ? "bg-rose-50 text-rose-500 border-rose-200" : ""}
                >
                  <Heart 
                    size={16} 
                    className={`${isRTL ? 'ml-1' : 'mr-1'} ${eventInWishlist ? "fill-rose-500" : ""}`} 
                  />
                  {eventInWishlist ? t.removeFromWishlist : t.addToWishlist}
                </Button>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{language === 'ar' ? 'وصف الحدث' : 'Event Description'}</h2>
              <p className="text-gray-700 mb-6">{event.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{t.date}</h3>
                  <p className="font-medium">{event.date}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{t.time}</h3>
                  <p className="font-medium">{event.time}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">{t.venue}</h3>
                  <p className="font-medium">{event.location}</p>
                </div>
              </div>
            </div>
            
            {/* Booking Section */}
            <div className="w-full md:w-1/3">
              <div className="border rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">{t.bookTickets}</h2>
                
                <div className="mb-4">
                  <Label htmlFor="ticketType">{t.selectTickets}</Label>
                  <div className="mt-2 space-y-2">
                    {event.ticketLevels.map((ticket, index) => (
                      <div 
                        key={index} 
                        className={`border rounded-md p-3 cursor-pointer transition-colors ${selectedTicketType === index ? 'border-ticket-blue bg-blue-50' : ''}`}
                        onClick={() => setSelectedTicketType(index)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{ticket.name}</span>
                          <span className="text-ticket-blue font-bold">${ticket.price}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {ticket.available} {t.ticketsAvailable}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="quantity">{t.quantity}</Label>
                  <div className="flex items-center mt-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 mx-2 text-center"
                    />
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= 10}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>{t.totalPrice}:</span>
                    <span className="font-bold">${calculateTotal()}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-ticket-blue hover:bg-blue-700" 
                  size="lg"
                  onClick={handleBooking}
                >
                  <Ticket size={18} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t.proceedToCheckout}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
