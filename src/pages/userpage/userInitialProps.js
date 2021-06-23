import { getUsers } from "../../redux/actions";
export const userInitialProps = (store) => store.dispatch(getUsers());
