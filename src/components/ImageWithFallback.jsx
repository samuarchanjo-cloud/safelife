import { ImageOff } from 'lucide-react';
import { useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '', children }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex min-h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-pool/80 text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <ImageOff className="h-10 w-10 text-pool-light" aria-hidden="true" />
          <span className="max-w-48 text-sm font-semibold">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" onError={() => setFailed(true)} />
      {children}
    </div>
  );
}
