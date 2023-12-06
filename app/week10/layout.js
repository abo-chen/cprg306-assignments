import { AuthContextProvider } from "./_utils/auth-context";

export const metadata = {
  title: 'Week 10',
}
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;