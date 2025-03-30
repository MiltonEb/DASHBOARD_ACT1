import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};
async function fetchUsers() {
 try {
  const resp = await fetch("https://randomuser.me/api/?results=10")
 const data = await resp.json()
 return data.results
 } catch (error) {
  console.error(error)
 } 
}
export default async function UserPage() {
  const usersInfo = await fetchUsers()
  console.log(usersInfo) 
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      {
        usersInfo.map((user, index)  => (
          <div key={index}>
          <UserMetaCard firstName={user.name.first} lastName={user.name.last} location={`${user.location.city} ${user.location.country}`} picture={user.picture.medium}/>
          <UserInfoCard firstName={user.name.first} lastName={user.name.last} email={user.email} phone={user.phone}/>
          </div>
        ))
      }
    </div>
  );
}
