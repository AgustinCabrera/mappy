import './sidebar.css';
function Sidebar(props){
return <aside className='sidebar'>
  <input type='text' onChange={props.onLocationChange}> 
  </input>
</aside>
}
export default Sidebar;
