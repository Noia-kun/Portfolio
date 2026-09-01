import React from 'react';

interface LoaderProps {
  isFadingOut: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isFadingOut }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-400 ease-out pointer-events-none select-none ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: 'var(--color-void)' }}
    >
      {/* 3x3 Box Shuffle Grid */}
      <div className="box-shuffle-container">
        <div className="box-shuffle-box box-shuffle-box-1" />
        <div className="box-shuffle-box box-shuffle-box-2" />
        <div className="box-shuffle-box box-shuffle-box-3" />
        <div className="box-shuffle-box box-shuffle-box-4" />
        <div className="box-shuffle-box box-shuffle-box-5" />
        <div className="box-shuffle-box box-shuffle-box-6" />
        <div className="box-shuffle-box box-shuffle-box-7" />
        <div className="box-shuffle-box box-shuffle-box-8" />
        <div className="box-shuffle-box box-shuffle-box-9" />
      </div>

      {/* Indeterminate Loading Line */}
      <div
        className="mt-32 w-36 h-[3px] rounded-full overflow-hidden relative"
        style={{ backgroundColor: 'var(--color-carbon)' }}
      >
        <div
          className="absolute inset-y-0 w-full rounded-full animate-indeterminate"
          style={{ backgroundColor: 'var(--color-cyan-ink)' }}
        />
      </div>
    </div>
  );
};

export default Loader;