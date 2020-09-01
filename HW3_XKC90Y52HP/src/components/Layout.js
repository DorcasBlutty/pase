import Head from "next/head";
import Navbar from "./navbar";
import Header from "./main-header";
function Layout(props) {
  return (
    <div className="layout">
      <CustomHead />

      {/*NavBar*/}  
      <Navbar />
     <Header/>
      {/* App Content*/}
      
     {props.children}
    </div>
  );
}

export default Layout;
//Setting page head
function CustomHead() {
  return (
    <Head>
      <title>week#3</title>
      <link rel="stylesheet" href="/css/global.css" />
    </Head>
  );
}
