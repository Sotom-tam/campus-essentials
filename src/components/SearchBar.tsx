import '../style.css'
function SearchBar() {
  return <div className='search-holder'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4c4c4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="search" ><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
    <input className='search-input' type="search" placeholder='Search for what you need...'/>;
</div>
}
export default SearchBar;
