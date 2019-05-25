// API
type User = {
  userId: number;
  name: string;
};
function fetchUsers(): Promise<User[]>;

// Redux
type FetchUserAction = {
  type: "FETCH/USER";
  payload: User;
};
function fetchUsersAction(): FetchUserAction;

type StoreShape = {
  users: {
    [userId: number]: User;
  };
};
function getNameForUser(
  state: StoreShape,
  userId: number
): string;

// View Layer
type UserProps = {
  name: string;
};
const User: React.FunctionComponent<UserProps> = props => {
  const {name} = props;
  return <div>Hi My name is {name}</div>;
};
