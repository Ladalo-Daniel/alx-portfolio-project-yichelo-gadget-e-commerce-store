import SideMenu from '../../components/admin/SideMenu';
import AdminHeader from '../../components/admin/AdminHeader';
import Loading from './loading'
import { Suspense } from 'react';
import { getUserSession } from '../../services/session';
import { getProfile } from '../../services/apiUsers';
import { redirect } from 'next/navigation';
import { getUserProfile } from '../../utils/shared/Profile';



export const metadata = {
  title: "Welcome Admin",
  description:
    "Fees and Payments at your doorstep",

};
export default async function Layout({ children }) {
  const profile = await getUserProfile()

  // console.log("Heloo", profile)

  if (profile === undefined) redirect("/sign-up")
  if(profile?.data?.role === null) redirect("/")

  return (
     <Suspense fallback={<Loading />}>
        <main className='flex blueGreen flex-col md:flex-row min-h-screen overflow-hidden max-w-7xl mx-auto'>
          <SideMenu profile={profile?.data} />
          <main className="relative h-screen flex flex-col flex-1 w-full custom-scrollbar overflow-y-auto bg-[#F1F1F1] ">
            <AdminHeader profile={profile?.data} />
             {children}
          </main>
        </main>
     </Suspense>
  )
}
