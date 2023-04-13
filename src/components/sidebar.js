export default function Sidebar(){
    const links = [
        {id:1, name:"Dashboard", url:"./views//dashboard"}, 
        {id:2, name:"Widget", url:"./views/widgets"}, 
        {id:3, name:"Reviews", url:"./views/reviews"}, 
        {id:4, name: "Customers", url:"./views/customers"}, 
        {id:5, name:"Online Analysis", url:"./views/analysis"}, 
        {id:6, name:"Settings", url:"./views/settings"}];
    
    const linksJSX = links.map(link =>{
        return (<p key={link.id} ><a href={link.url}>{link.name}</a></p>)
    });
    return (
        <div className="sidebar">
            {linksJSX}
        </div>
    )
  }