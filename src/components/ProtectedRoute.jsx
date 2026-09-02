import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import PageLoader from '@/components/PageLoader';

export default function ProtectedRoute({ children }) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <PageLoader />;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}