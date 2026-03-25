import { CheckCircle } from 'lucide-react';

const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast toast-end toast-bottom z-100">
      <div className="alert alert-success shadow-lg">
        <div className="flex items-center gap-2">
          <CheckCircle size={20} />
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
