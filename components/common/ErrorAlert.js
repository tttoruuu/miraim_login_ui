import React from 'react';

const ErrorAlert = ({ 
  error, 
  onRetry, 
  showRetry = false, 
  className = "",
  size = "default"
}) => {
  if (!error) return null;

  const sizeClasses = {
    small: "text-sm p-3",
    default: "text-base p-4",
    large: "text-lg p-5"
  };

  const baseClasses = `
    bg-red-50 border border-red-200 rounded-lg
    ${sizeClasses[size]} ${className}
  `;

  return (
    <div className={baseClasses}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg 
            className="h-5 w-5 text-red-400" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-red-800">
            エラーが発生しました
          </h3>
          <div className="mt-2 text-sm text-red-700">
            {error}
          </div>
          {showRetry && onRetry && (
            <div className="mt-4">
              <button
                type="button"
                onClick={onRetry}
                className="bg-red-100 text-red-800 rounded-md px-3 py-2 text-sm font-medium hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
              >
                再試行
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;