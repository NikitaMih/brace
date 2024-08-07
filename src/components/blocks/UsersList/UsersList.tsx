import { useQuery } from 'react-query';
import { getUsers } from 'src/api/services';
import { CountryCard, Empty, Loader } from 'src/components/ui';
import { IUser } from 'src/type';

import style from './UsersList.module.scss';

const UsersList = () => {
  const { data, isLoading, isError } = useQuery('users', getUsers);

  return (
    <div className={style.list}>
      {isLoading ? (
        <Loader />
      ) : !data.length || isError ? (
        <Empty />
      ) : (
        data?.map((user: IUser) => <CountryCard key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UsersList;
