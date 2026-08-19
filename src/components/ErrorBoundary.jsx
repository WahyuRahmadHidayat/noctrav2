import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white px-4">
          <h1 className="font-bebas text-6xl md:text-8xl text-red-500 mb-4 leading-none">SYSTEM FAILURE</h1>
          <p className="text-xl text-gray-400 mb-8 font-bold tracking-widest uppercase text-center">AN UNEXPECTED ERROR OCCURRED.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-white transition-colors"
          >
            REBOOT SYSTEM
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;