// Components/PageSkeleton.jsx
export default function PageSkeleton() {
  return (
    <div className="w-full min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Image Placeholder */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl bg-slate-200" />
        </div>

        {/* Right Column: Text & Content Placeholders */}
        <div className="lg:col-span-7 space-y-6 text-left w-full">
          
          {/* Fake Badge */}
          <div className="h-6 w-32 bg-slate-200 rounded-full" />

          {/* Fake Main Heading Lines */}
          <div className="space-y-3">
            <div className="h-10 w-5/6 bg-slate-200 rounded-lg" />
            <div className="h-10 w-2/3 bg-slate-200 rounded-lg" />
          </div>

          {/* Fake Paragraph block */}
          <div className="space-y-2 pt-2">
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-4/5 bg-slate-200 rounded" />
          </div>

          {/* Fake Bullet Points list */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-200 rounded-full flex-shrink-0" />
              <div className="h-4 w-1/2 bg-slate-200 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-200 rounded-full flex-shrink-0" />
              <div className="h-4 w-2/3 bg-slate-200 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-200 rounded-full flex-shrink-0" />
              <div className="h-4 w-7/12 bg-slate-200 rounded" />
            </div>
          </div>

          {/* Fake CTA Button */}
          <div className="pt-4">
            <div className="h-12 w-40 bg-slate-200 rounded-full" />
          </div>

        </div>

      </div>
    </div>
  );
}