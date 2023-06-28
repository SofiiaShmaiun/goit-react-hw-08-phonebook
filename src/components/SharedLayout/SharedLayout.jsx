import { UserMenu } from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Header, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </nav>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <StyledLink to="/register">Sign Up</StyledLink>
          <StyledLink to="/login">Log In</StyledLink>
        </div>
      )}
    </Header>
  );
};
