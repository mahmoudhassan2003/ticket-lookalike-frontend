
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: any[];
  performSearch: (query: string) => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Sample events data for search
  const allEvents = [
    {
      id: "c1",
      title: "Taylor Swift - The Eras Tour",
      date: "Jul 15, 2025",
      location: "Wembley Stadium, London",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Concerts",
      minPrice: 95
    },
    {
      id: "s1",
      title: "Premier League: Arsenal vs. Manchester United",
      date: "Aug 12, 2025",
      location: "Emirates Stadium, London",
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sports",
      minPrice: 75
    },
    {
      id: "t1",
      title: "Hamilton",
      date: "Jun 15-30, 2025",
      location: "Victoria Palace Theatre, London",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Theater",
      minPrice: 55
    },
    {
      id: "c2",
      title: "Kevin Hart - Comedy Tour",
      date: "Sep 3, 2025",
      location: "Madison Square Garden, New York",
      image: "/lovable-uploads/ce21b6df-d3ae-4cba-9271-fc0c96450673.png",
      category: "Comedy",
      minPrice: 85
    },
    {
      id: "f1",
      title: "Glastonbury Festival 2025",
      date: "Jun 25-29, 2025",
      location: "Worthy Farm, Somerset, UK",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Festivals",
      minPrice: 120
    },
    {
      id: "f2",
      title: "Disney on Ice",
      date: "Dec 10-15, 2025",
      location: "Barclays Center, New York",
      image: "https://images.unsplash.com/photo-1580974852861-c381510bc98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Family",
      minPrice: 45
    }
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const lowerCaseQuery = query.toLowerCase();
    
    // Simulate API call delay
    setTimeout(() => {
      const results = allEvents.filter(event => 
        event.title.toLowerCase().includes(lowerCaseQuery) ||
        event.location.toLowerCase().includes(lowerCaseQuery) ||
        event.category.toLowerCase().includes(lowerCaseQuery)
      );
      
      setSearchResults(results);
      setIsSearching(false);
      
      if (results.length > 0) {
        navigate('/search-results', { state: { results, query } });
      }
    }, 300);
  };

  return (
    <SearchContext.Provider value={{ 
      searchQuery, 
      setSearchQuery, 
      searchResults, 
      performSearch,
      isSearching
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
