import React from 'react';
import { NavBar } from './components/NavBar';
import { Widget } from "./components/Widget";
import { Table } from "./components/Table";

function App() {
  return (
    <div>
        <nav id="header" className="bg-gray-900 fixed w-full z-10 top-0 shadow">
	    	<div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
	    		<div className="w-1/2 pl-2 md:pl-0">
	    			<a className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"  href="#"> 
	    				<i className="fas fa-moon text-blue-400 pr-3"></i> Admin Dark Mode
	    			</a>
                </div>
	    		<div className="w-1/2 pr-0">
	    			<div className="flex relative inline-block float-right">
	    			  <div className="relative text-sm text-gray-100">
	    				  <button id="userButton" className="flex items-center focus:outline-none mr-3">
	    					<img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of User"/>
                                <span className="hidden md:inline-block text-gray-100">Hi, User</span>
	    				  </button>
	    				  <div id="userMenu" className="bg-gray-900 rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
	    					  <ul className="list-reset">
	    						<li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">My account</a></li>
	    						<li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Notifications</a></li>
	    						<li><hr className="border-t mx-2 border-gray-400"/></li>
	    						<li><a href="#" className="px-4 py-2 block text-gray-100 hover:bg-gray-800 no-underline hover:no-underline">Logout</a></li>
	    					  </ul>
	    				  </div>
	    			  </div>
	    				<div className="block lg:hidden pr-4">
	    				    <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
	    				    	<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
	    				    </button>
	    			    </div>
	    			</div>
	    		</div>
	    		<NavBar/>
	    	</div>
	    </nav>
	    <div className="container w-full mx-auto pt-20">
	    	<div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
	    		<div className="flex flex-wrap">
                    <Widget props={ { bg: `bg-green-500`, fa: `fa-wallet` } }/>
                    <Widget props={ { bg: `bg-orange-600`, fa: `fa-users` } }/>
                    <Widget props={ { bg: `bg-yellow-600`, fa: `fa-user-plus` } }/>
                    <Widget props={ { bg: `bg-blue-600`, fa: `fa-server` } }/>
                    <Widget props={ { bg: `bg-indigo-600`, fa: `fa-tasks` } }/>
                    <Widget props={ { bg: `bg-red-600`, fa: `fa-inbox` } }/>
                </div>
	    		<hr className="border-b-2 border-gray-600 my-8 mx-4"/>
                <div className="flex flex-row flex-wrap flex-grow mt-2">
                    <div className="w-full md:w-1/2 p-3">
                    <div className="w-full p-3">
                        <div className="bg-gray-900 border border-gray-800 rounded shadow">
                            <div className="border-b border-gray-800 p-3">
                                <h5 className="font-bold uppercase text-gray-600">Table</h5>
                            </div>
                            <div className="p-5">
                                <Table/>
                                <p className="py-2"><a href="#" className="text-white">See More issues...</a></p>
                            </div>
                        </div>
                    </div>
                </div>
	    	</div>
	    </div> 
    </div>
    </div>
  );
}

export default App;
