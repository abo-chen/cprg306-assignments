import { AuthContextProvider } from "./_utils/auth-context";

export const metadata = {
  title: 'Week 8',
}
 
const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;