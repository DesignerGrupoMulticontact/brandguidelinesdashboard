import React, { useState, useMemo } from 'react';
import { 
  Menu, 
  X, 
  Layout, 
  Image, 
  Palette, 
  Type, 
  MessageSquareQuote, 
  ShieldCheck, 
  Share2,
  Camera,
  Search,
  ChevronRight
} from 'lucide-react';
import { NavItem } from '../types';
import { SEARCHABLE_CONTENT } from '../constants';

interface SidebarProps {
  items: NavItem[];
  activeSection: string;
  isMobileOpen: boolean;
  toggleMobileMenu: () => void;
  onNavigate: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  items, 
  activeSection, 
  isMobileOpen, 
  toggleMobileMenu,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Map IDs to Icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'apresentacao': return Layout;
      case 'logotipos': return Image;
      case 'cores': return Palette;
      case 'guia-visual': return Camera;
      case 'tipografia': return Type;
      case 'tom-de-voz': return MessageSquareQuote;
      case 'dos-donts': return ShieldCheck;
      case 'social': return Share2;
      default: return Layout;
    }
  };

  // Search Logic
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const lowerQuery = searchQuery.toLowerCase();
    return SEARCHABLE_CONTENT.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.keywords.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const handleSearchNavigate = (id: string) => {
    onNavigate(id);
    // Optionally clear search on navigation, currently keeping it for context
    // setSearchQuery(''); 
  };

  // Helper to highlight matching text
  const HighlightedText = ({ text, highlight }: { text: string; highlight: string }) => {
    if (!highlight.trim()) return <>{text}</>;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-brand-green/20 text-brand-dark font-bold px-0.5 rounded-sm">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 right-4 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-gray-100 md:hidden text-brand-dark hover:text-brand-green transition-colors"
        aria-label="Toggle Menu"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-80 bg-white border-r border-gray-100 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 shadow-[4px_0_40px_rgba(0,0,0,0.01)] flex flex-col`}
      >
        <div className="flex flex-col h-full py-12 px-8 overflow-y-auto custom-scrollbar">
          {/* Logo / Brand Name in Sidebar */}
          <div className="mb-8 px-2 shrink-0">
            <img 
              src="https://image2url.com/images/1765301024141-49a99dbf-0aaa-4a87-aa1c-6431f4ef2de3.svg" 
              alt="MyFormula Logo" 
              className="h-12 w-auto mb-5"
            />
            <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-brand-green/30"></div>
                <p className="text-[10px] font-secondary text-gray-400 uppercase tracking-[0.25em] font-medium">
                Brand Guidelines
                </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-2 mb-8 shrink-0">
            <div className="relative group">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-secondary focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/10 transition-all placeholder:text-gray-400 text-brand-dark"
              />
              <Search 
                size={18} 
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors ${searchQuery ? 'text-brand-green' : 'text-gray-400 group-hover:text-brand-green/70'}`} 
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300 transition-colors"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Navigation or Search Results */}
          <nav className="flex-1 space-y-2 mb-8">
            {searchQuery ? (
              // SEARCH RESULTS VIEW
              <div className="space-y-1 animate-fade-in">
                <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Resultados ({searchResults.length})
                </p>
                {searchResults.length > 0 ? (
                  searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchNavigate(result.id)}
                      className="w-full flex flex-col items-start gap-1 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 text-left border border-transparent hover:border-gray-100 group"
                    >
                      <span className="text-sm font-medium text-brand-dark group-hover:text-brand-green transition-colors">
                        <HighlightedText text={result.title} highlight={searchQuery} />
                      </span>
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        {result.category}
                        <ChevronRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 px-4 text-gray-400 text-sm">
                    <p>Sem resultados para "{searchQuery}"</p>
                  </div>
                )}
              </div>
            ) : (
              // STANDARD NAVIGATION VIEW
              items.map((item) => {
                const Icon = getIcon(item.id);
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-secondary transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20 font-medium translate-x-1'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-brand-dark'
                    }`}
                  >
                    <Icon 
                      size={20} 
                      strokeWidth={1.5}
                      className={`transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-brand-green'
                      }`} 
                    />
                    <span className="relative z-10 tracking-wide">{item.label}</span>
                  </button>
                );
              })
            )}
          </nav>

          {/* Footer Info */}
          {!searchQuery && (
            <div className="mt-auto px-2 space-y-4 shrink-0">
               <div className="p-5 rounded-2xl bg-gray-50/50 border border-gray-100/50 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2 opacity-70">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">v2.1 • 2025</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-secondary leading-relaxed">
                    &copy; MyFormula
                  </p>
               </div>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-brand-dark/10 backdrop-blur-sm z-30 md:hidden transition-opacity duration-500"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;