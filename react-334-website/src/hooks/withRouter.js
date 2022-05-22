import { useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigation = useNavigate();
    
    return (
      <Component
        navigation={navigation}
        {...props}
      />
    );
  };
  
  return Wrapper;
};