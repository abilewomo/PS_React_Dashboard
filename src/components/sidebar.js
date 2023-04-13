export default function Sidebar(){
    const links = [
        {name:"Dashboard", url:"./views//dashboard"}, 
        {name:"Widget", url:"./views/widgets"}, 
        {name:"Reviews", url:"./views/reviews"}, 
        {name: "Customers", url:"./views/customers"}, 
        {name:"Online Analysis", url:"./views/analysis"}, 
        {name:"Settings", url:"./views/settings"}];
    
    const linksJSX = links.map(link =>{
        return (<p ><a href={link.url}>{link.name}</a></p>)
    });
    return (
        <div className="sidebar">
            {linksJSX}
        </div>
    )
  }