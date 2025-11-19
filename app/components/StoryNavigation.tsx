import Link from 'next/link';

interface StoryNavigationProps {
  currentStep: number;
  totalSteps: number;
  nextUrl?: string;
  nextLabel?: string;
  prevUrl?: string;
  prevLabel?: string;
  showProgress?: boolean;
}

export default function StoryNavigation({
  currentStep,
  totalSteps,
  nextUrl,
  nextLabel = "Continue",
  prevUrl,
  prevLabel = "Back",
  showProgress = true,
}: StoryNavigationProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        {/* Previous Button */}
        <div className="flex-1">
          {prevUrl ? (
            <Link
              href={prevUrl}
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span className="hidden sm:inline">{prevLabel}</span>
            </Link>
          ) : (
            <div /> // Empty spacer
          )}
        </div>

        {/* Next Button */}
        <div className="flex-1 flex justify-end">
          {nextUrl ? (
            <Link
              href={nextUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>{nextLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ) : (
            // Final page - show "Back to Home" or similar
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Back to Home</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
