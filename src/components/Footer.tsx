// const Footer = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-black text-white">
//       {/* Left Image Panel */}
//       <div className="relative hidden md:block">
//         <div className="sticky top-0 h-screen w-full">
//           <img
//             src="/blog.png" // أو رابط الصورة
//             alt="Blog"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 p-8 flex flex-col justify-between">
//             <div>
//               <h2 className="text-lg text-white">Blog</h2>
//               <h1 className="text-4xl md:text-6xl font-bold mt-2">Latest News</h1>
//             </div>
//             <div className="flex gap-2">
//               <button className="bg-white text-black px-4 py-2 rounded-full">Menu</button>
//               <button className="bg-white text-black px-4 py-2 rounded-full">Restaurant</button>
//               <button className="bg-white text-black px-4 py-2 rounded-full">Classes</button>
//               <button className="bg-white text-black px-4 py-2 rounded-full">Book a Table</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Content Panel */}
//       <div className="overflow-y-auto p-6 space-y-10">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <div key={i} className="flex gap-4 items-start">
//             <img
//               src={`https://source.unsplash.com/400x300/?restaurant,food,${i}`}
//               className="w-40 h-28 object-cover rounded-md"
//               alt=""
//             />
//             <div>
//               <p className="text-sm text-gray-400">September 19, 2022</p>
//               <h3 className="text-xl font-semibold">Blog Post Title {i + 1}</h3>
//               <p className="text-gray-300 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogLayout;
