import ShoppingList from "./shopping-list";

//To set the page title I added an extra layer, Please check out shopping-list

export const metadata = {
    title: 'Week 10 - FireStore',
  }

export default function Page() {
  return (
    <>
      <ShoppingList />
    </>
  );
}
