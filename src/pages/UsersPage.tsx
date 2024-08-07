import { UsersList } from 'src/components/blocks';
import { Container } from 'src/components/ui';

const UsersPage = () => {
  return (
    <Container>
      <h1>Users</h1>
      <UsersList />
    </Container>
  );
};

export default UsersPage;
