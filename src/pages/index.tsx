// // import CreatorHomePage from "./pages/Home"
// import { useRouter } from "next/router";
// import LoginPage from "./pages/login"


// const Home = () => {

// const router =useRouter();
//   return (
//     <>
//     {/* <CreatorHomePage/> */}
//     {/* <LoginPage/> */}

//     router.push('pages/login')

//       </>
//   )
// }

// export default Home

//above code is used


import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/pages/login');
  }, []);

  return null;
};

export default Home;

