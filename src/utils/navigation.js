export const handleNavClick = (e, path, pathname, navigate, setIsMenuOpen) => {
  e.preventDefault();
  
  if (setIsMenuOpen) {
    setIsMenuOpen(false);
  }

  if (path.startsWith('/#')) {
    const targetId = path.substring(2);
    
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  } else {
    navigate(path);
  }
};