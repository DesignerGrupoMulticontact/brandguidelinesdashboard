'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, Download, Copy, Check } from 'lucide-react';
import { ColorDefinition, LogoPlaceholderProps, ValueCardProps, ToneCardProps } from '../types';

// --- Animation Hook ---
const useAppearOnScroll = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small timeout to ensure smooth staggering execution
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return { ref, isVisible };
};

// --- Helper for common animation classes ---
// IMPROVED: Premium feel with refined cubic-bezier, subtle scale up (95% -> 100%) and fade in.
const getAnimationClasses = (isVisible: boolean) => 
  `transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] transform will-change-transform ${
    isVisible 
      ? 'opacity-100 translate-y-0 scale-100 blur-0' 
      : 'opacity-0 translate-y-8 scale-95 blur-[1px]'
  }`;

// --- Generic Animated Block Wrapper ---
export const AnimatedBlock: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
  const { ref, isVisible } = useAppearOnScroll(delay);
  return (
    <div ref={ref} className={`${getAnimationClasses(isVisible)} ${className}`}>
      {children}
    </div>
  );
};

// --- Value Card (Mission/Values) ---
export const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  const { ref, isVisible } = useAppearOnScroll(delay);
  
  return (
    <div 
      ref={ref}
      className={`bg-white p-6 lg:p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-brand-green/40 hover:shadow-[0_8px_30px_rgba(107,174,46,0.1)] h-full group flex flex-col items-start ${getAnimationClasses(isVisible)}`}
    >
      {Icon && (
        <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="font-primary font-semibold text-lg text-brand-dark mb-3">{title}</h3>
      <p className="font-secondary text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

// --- Color Card ---
export const ColorCard: React.FC<{ color: ColorDefinition; delay?: number }> = ({ color, delay = 0 }) => {
  const { ref, isVisible } = useAppearOnScroll(delay);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      ref={ref}
      className={`group flex flex-col h-full ${getAnimationClasses(isVisible)}`}
    >
      <div 
        className="h-32 w-full rounded-2xl shadow-sm mb-4 flex items-end justify-start p-4 transition-transform duration-500 group-hover:-translate-y-1 relative overflow-hidden"
        style={{ backgroundColor: color.hex }}
      >
        {/* Permanent gradient to ensure white text is readable on light backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        <button 
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 z-20"
          aria-label="Copy Hex Code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        {/* Enforce white text with drop shadow for extra legibility */}
        <span className="font-secondary font-bold text-lg relative z-10 text-white drop-shadow-sm tracking-wide">
          {color.hex}
        </span>
      </div>
      <h4 className="font-primary font-semibold text-brand-dark text-lg flex items-center gap-2">
        {color.name}
        {copied && <span className="text-xs text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full font-medium animate-fade-in">Copiado!</span>}
      </h4>
      <p className="font-secondary text-xs text-gray-400 mt-1 leading-normal">{color.description}</p>
    </div>
  );
};

// --- Logo Placeholder ---
export const LogoCard: React.FC<LogoPlaceholderProps> = ({ title, description, variant, imageUrl, pngUrl, delay = 0 }) => {
  const { ref, isVisible } = useAppearOnScroll(delay);
  const [isDownloading, setIsDownloading] = useState(false);
  
  let bgClass = 'bg-gray-50';
  let textClass = 'text-brand-dark';
  let borderClass = 'border-gray-100';
  let imgFilterClass = '';

  if (variant === 'negative') {
    bgClass = 'bg-brand-dark';
    textClass = 'text-white';
    borderClass = 'border-brand-dark';
    imgFilterClass = 'brightness-0 invert grayscale'; // Force white
  } else if (variant === 'mono') {
    imgFilterClass = 'brightness-0 grayscale'; // Force black
  }

  // Handle Download Logic
  const handleDownload = async (format: 'png' | 'svg') => {
    const urlToDownload = format === 'png' ? pngUrl : imageUrl;
    
    if (!urlToDownload) {
      alert("Ficheiro não disponível.");
      return;
    }

    setIsDownloading(true);

    try {
      const fileName = `myformula-${variant}.${format}`;

      const response = await fetch(urlToDownload);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error("Download failed, fallback to direct link", error);
      // Fallback: Open in new tab if direct blob download fails (e.g. strict CORS)
      window.open(urlToDownload, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      ref={ref}
      className={`flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ${getAnimationClasses(isVisible)}`}
    >
      <div className={`aspect-video w-full rounded-xl border ${borderClass} ${bgClass} flex items-center justify-center mb-5 relative overflow-hidden group`}>
        {/* Logo Image or Placeholder */}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            loading="lazy"
            decoding="async"
            crossOrigin="anonymous"
            className={`w-auto h-20 object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-105 ${imgFilterClass}`} 
          />
        ) : (
          <div className={`font-primary font-bold text-2xl tracking-tight opacity-50 ${textClass} group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-300`}>
            {variant === 'icon' ? (
              <div className="w-14 h-14 rounded-full border-4 border-current opacity-60"></div>
            ) : (
              'MyFormula'
            )}
          </div>
        )}
      </div>
      
      <div className="flex-1 mb-6">
        <h4 className="font-primary font-medium text-brand-dark text-base mb-1.5">{title}</h4>
        <p className="font-secondary text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>

      {/* Download Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <button 
          onClick={() => handleDownload('png')}
          disabled={isDownloading || !pngUrl}
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 group active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? '...' : 'PNG'}
          <Download size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
        <button 
          onClick={() => handleDownload('svg')}
          disabled={isDownloading || !imageUrl}
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-semibold text-gray-600 hover:border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 group active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isDownloading ? '...' : 'SVG'}
          <Download size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
};

// --- Tone Card ---
export const ToneCard: React.FC<ToneCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  const { ref, isVisible } = useAppearOnScroll(delay);

  return (
    <div 
      ref={ref}
      className={`group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-brand-green/30 h-full ${getAnimationClasses(isVisible)}`}
    >
      {Icon && (
        <div className="mb-5 text-brand-green p-3 bg-brand-green/10 rounded-xl group-hover:bg-brand-green group-hover:text-white transition-colors duration-300 group">
          <Icon size={28} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="font-primary font-semibold text-lg text-brand-dark mb-3">{title}</h3>
      <p className="font-secondary text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

// --- Do's and Don'ts Text Item ---
export const GuidelineItem: React.FC<{ type: 'do' | 'dont'; text: string }> = ({ type, text }) => {
  const Icon = type === 'do' ? CheckCircle : XCircle;
  const colorClass = type === 'do' ? 'text-brand-green' : 'text-red-500';
  const bgClass = type === 'do' ? 'bg-brand-green/5 border-brand-green/10' : 'bg-red-50 border-red-100';

  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${bgClass} transition-colors duration-200 hover:bg-opacity-80`}>
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${colorClass}`} />
      <span className="font-secondary text-sm text-gray-600 font-medium">{text}</span>
    </div>
  );
};