import { IUser } from 'src/type';

import style from './UserCard.module.scss';

const UserCard = ({ user }: { user: IUser }) => {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{user.name}</h2>
      <h4 className={style.email}>E-mail: {user.email}</h4>
    </div>
  );
};

export default UserCard;
